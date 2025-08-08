'use client';

import React, { useEffect, useState, useRef } from 'react';

type Star = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number>();

  // كشف نوع الجهاز حسب عرض الشاشة
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // إنشاء النجوم
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const numStars = isMobile ? 50 : 80;
    const newStars: Star[] = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    setStars(newStars);
  }, [isMobile]);

  // تتبع الماوس على الكمبيوتر فقط
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          setMousePos({ 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
          });
        }
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // تتبع ميلان الهاتف على الموبايل فقط
  useEffect(() => {
    if (isMobile) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const x = event.beta || 0;   // -180 إلى 180
        const y = event.gamma || 0;  // -90 إلى 90

        const normX = Math.max(Math.min(y, 30), -30);
        const normY = Math.max(Math.min(x, 30), -30);

        const rect = canvas.getBoundingClientRect();
        setMousePos({ 
          x: (normX + 30) * (rect.width / 60), 
          y: (normY + 30) * (rect.height / 60) 
        });
      };
      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [isMobile]);

  // تحديث حجم الكانفاس
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // حساب المسافة بين نقطتين
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  // رسم النجوم والخطوط
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || stars.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // تحديث مواقع النجوم
      const updatedStars = stars.map(star => {
        let newX = star.x + star.vx;
        let newY = star.y + star.vy;

        // ارتداد من الحواف
        if (newX <= 0 || newX >= canvas.width) star.vx *= -1;
        if (newY <= 0 || newY >= canvas.height) star.vy *= -1;

        newX = Math.max(0, Math.min(canvas.width, newX));
        newY = Math.max(0, Math.min(canvas.height, newY));

        return { ...star, x: newX, y: newY };
      });

      // رسم الخطوط بين النجوم القريبة
      const maxDistance = isMobile ? 100 : 150;
      for (let i = 0; i < updatedStars.length; i++) {
        for (let j = i + 1; j < updatedStars.length; j++) {
          const distance = getDistance(
            updatedStars[i].x, updatedStars[i].y,
            updatedStars[j].x, updatedStars[j].y
          );

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(updatedStars[i].x, updatedStars[i].y);
            ctx.lineTo(updatedStars[j].x, updatedStars[j].y);
            ctx.stroke();
          }
        }
      }

      // رسم الخطوط من الماوس إلى النجوم القريبة
      const mouseDistance = isMobile ? 120 : 180;
      updatedStars.forEach(star => {
        const distance = getDistance(mousePos.x, mousePos.y, star.x, star.y);
        if (distance < mouseDistance) {
          const opacity = (1 - distance / mouseDistance) * 0.6;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mousePos.x, mousePos.y);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();
        }
      });

      // رسم النجوم
      updatedStars.forEach(star => {
        const distance = getDistance(mousePos.x, mousePos.y, star.x, star.y);
        const isNearMouse = distance < mouseDistance;
        const size = isNearMouse ? star.size * 1.5 : star.size;
        const opacity = isNearMouse ? Math.min(star.opacity * 1.8, 1) : star.opacity;

        // رسم التوهج حول النجم
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, size * 3);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // رسم النجم نفسه
        ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();

        // إضافة نقطة بيضاء صغيرة في المركز
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      setStars(updatedStars);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, mousePos, isMobile]);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* الكانفاس للشبكة النجمية */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      />

      {/* العنوان الرئيسي */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-gold-gradient text-7xl font-bold mb-4 drop-shadow-lg">Senior Pack</h1>
        <p className="text-white text-xl font-medium">Experience Excellence</p>
      </div>

      {/* طبقة شفافة لإعطاء عمق للعنوان */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
      
      {/* تأثير الضوء المتحرك */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out pointer-events-none z-5"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
        }}
      />
    </section>
  );
};

export default Hero;