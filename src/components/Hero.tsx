'use client'

import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#321b12]/90 via-[#936e2a]/80 to-[#ffe2a6]/70"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Logo Animation */}
          <div className="mb-8 transform animate-pulse">
            <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <span className="text-white font-bold text-3xl lg:text-4xl">H</span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            نحو تجربة متكاملة للمنتجات
            <span className="block text-2xl lg:text-3xl xl:text-4xl mt-2 text-[#ffe2a6] font-medium">
              من الفكرة إلى السوق
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            تحت سقف واحد، نقدم رحلة تصميم كاملة تشمل تصميم المنتجات، التغليف، المواقع الإلكترونية، والهوية البصرية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
              استعرض خدماتنا
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              من نحن
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ffe2a6] mb-2">500+</div>
              <div className="text-white/80 text-sm lg:text-base">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ffe2a6] mb-2">50+</div>
              <div className="text-white/80 text-sm lg:text-base">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ffe2a6] mb-2">5</div>
              <div className="text-white/80 text-sm lg:text-base">شركات تابعة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#ffe2a6] mb-2">24/7</div>
              <div className="text-white/80 text-sm lg:text-base">دعم العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;