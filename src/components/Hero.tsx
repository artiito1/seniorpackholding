'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = Array.from({ length: 32 }, (_, i) => `/images/hero/${i + 1}.jpg`);

type ImageSlot = {
  id: number;
  src: string;
  top: number;
  left: number;
};

const Hero = () => {
  const [imageSlots, setImageSlots] = useState<ImageSlot[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // كشف نوع الجهاز حسب عرض الشاشة
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // توزيع الصور حسب نوع الجهاز
useEffect(() => {
  const slots: ImageSlot[] = [];
  const usedPositions: { top: number; left: number }[] = [];
  const minDistance = 15; // أقل مسافة % بين الصور لتجنب الالتصاق
  const maxAttempts = 100; // أقصى محاولات لتوليد موقع صالح

  const generateRandomPosition = () => ({
    top: Math.random() * 100 * 1.2 - 10,  // من -10% إلى 110%
    left: Math.random() * 100 * 1.2 - 10, // من -10% إلى 110%
  });

  // دالة تحسب المسافة بين نقطتين (top, left)
  const distance = (pos1: typeof usedPositions[0], pos2: typeof usedPositions[0]) => {
    return Math.sqrt((pos1.top - pos2.top) ** 2 + (pos1.left - pos2.left) ** 2);
  };

  const totalImages = isMobile ? 12 : 16;

  for (let i = 0; i < totalImages; i++) {
    let attempts = 0;
    let pos = generateRandomPosition();

    // محاولة توليد موقع غير متقارب مع المواقع السابقة
    while (
      usedPositions.some((p) => distance(p, pos) < minDistance) &&
      attempts < maxAttempts
    ) {
      pos = generateRandomPosition();
      attempts++;
    }

    usedPositions.push(pos);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    slots.push({ id: i, src: randomImage, top: pos.top, left: pos.left });
  }

  setImageSlots(slots);
}, [isMobile]);


  // تتبع الماوس على الكمبيوتر فقط
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // تتبع ميلان الهاتف على الموبايل فقط
  useEffect(() => {
    if (isMobile) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        const x = event.beta || 0;   // -180 إلى 180
        const y = event.gamma || 0;  // -90 إلى 90

        const normX = Math.max(Math.min(x, 50), -50)*6;
        const normY = Math.max(Math.min(y, 50), -50)*6;

        setMousePos({ x: normY + 50, y: normX + 50 });
      };
      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [isMobile]);

  // حساب إزاحة اللوح بناءً على موقع الماوس أو الميلان
  const getBoardOffset = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };

    // تحويل موقع الماوس/ميلان إلى نسبة مئوية
    const mouseXPercent = (mousePos.x / window.innerWidth) * 100;
    const mouseYPercent = (mousePos.y / window.innerHeight) * 100;

    // عكس الاتجاه: حركة عكس حركة المؤشر/ميلان
    const offsetX = -(mouseXPercent - 50) * 0.5;
    const offsetY = -(mouseYPercent - 50) * 0.5;

    return { x: offsetX, y: offsetY };
  };

  const boardOffset = getBoardOffset();

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* العنوان الرئيسي */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-gold-gradient text-7xl font-bold mb-4 drop-shadow-lg">Senior Pack</h1>
        <p className="text-white text-xl font-medium">Experience Excellence</p>
      </div>

      {/* اللوح الذي يحتوي على الصور */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${boardOffset.x}%, ${boardOffset.y}%)` }}
      >
        {imageSlots.map((slot) => (
          <div
            key={slot.id}
            className="absolute transition-all duration-300 cursor-pointer group"
            style={{ top: `${slot.top}%`, left: `${slot.left}%` }}
            onMouseEnter={() => setHoveredImage(slot.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative">
              <Image
                src={slot.src}
                alt={`gallery-image-${slot.id}`}
                width={isMobile ? 80 : 120}
                height={isMobile ? 80 : 120}
                className={`
                  rounded-xl object-cover shadow-lg shadow-[rgba(255,215,0,0.6)] transition-all duration-300
                  ${hoveredImage === slot.id 
                    ? 'scale-110 shadow-2xl ring-4 ring-white ring-opacity-60 brightness-110 saturate-110' 
                    : 'scale-100 hover:scale-105'}
                  ${hoveredImage !== null && hoveredImage !== slot.id 
                    ? 'opacity-70 blur-[1px]' 
                    : 'opacity-100'}
                `}
              />

              {/* {hoveredImage === slot.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 rounded-xl animate-pulse" />
                  <div className="absolute inset-0 border-2 border-gradient-to-r from-blue-400 to-purple-400 rounded-xl animate-pulse" />
                </>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* طبقة شفافة لإعطاء عمق للعنوان */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
    </section>
  );
};

export default Hero;
