'use client'

import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'رؤية واضحة',
      description: 'نهدف إلى تقديم تجربة متكاملة تجمع كل خدمات التصميم تحت سقف واحد'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'مجموعة من الخبراء في كل مجال يعملون بتناغم لتحقيق أفضل النتائج'
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'التزام بأعلى معايير الجودة في كل مرحلة من مراحل المشروع'
    },
    {
      icon: TrendingUp,
      title: 'نمو مستدام',
      description: 'نساعد عملاءنا على النمو والتطور من خلال حلول إبداعية ومبتكرة'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#321b12] mb-6">
            من نحن
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شركة هولدينغ رائدة في مجال تصميم تجربة المستخدم الشاملة للمنتجات المادية والرقمية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#321b12] mb-6">
              تحت سقف واحد، نُقدّم رحلة تصميم كاملة
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              نحن شركة هولدينغ متخصصة في تقديم خدمات التصميم المتكاملة، حيث نجمع تحت مظلة واحدة 
              مجموعة من الشركات التابعة المتخصصة في مختلف جوانب التصميم والإنتاج.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              من تصميم المنتجات وأشكالها الخارجية، إلى تصميم التغليف والطباعة، وصولاً إلى 
              المواقع الإلكترونية والتطبيقات، والهوية البصرية للسوشيال ميديا - نحن نوفر 
              كل ما يحتاجه منتجك للنجاح في السوق.
            </p>
            <div className="flex items-center">
              <button className="bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                اكتشف شركاتنا التابعة
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-2xl p-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">تصميم المنتجات</span>
                </div>
                <div className="h-32 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center border border-gray-100">
                  <span className="text-[#321b12] font-semibold">تغليف احترافي</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center border border-gray-100">
                  <span className="text-[#321b12] font-semibold">مواقع رقمية</span>
                </div>
                <div className="h-40 bg-gradient-to-br from-[#ffe2a6] to-[#936e2a] rounded-2xl p-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">طباعة متقدمة</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#321b12] mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;