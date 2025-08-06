'use client'

import React, { useState } from 'react';
import { Palette, Package, Globe, Printer, Share2, ArrowLeft, Check } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const categories = [
    { id: 'design', label: 'تصميم', icon: Palette },
    { id: 'production', label: 'تنفيذ', icon: Package },
    { id: 'digital', label: 'رقمي', icon: Globe },
    { id: 'marketing', label: 'تسويق', icon: Share2 }
  ];

  const services = {
    design: [
      {
        title: 'تصميم المنتجات',
        description: 'تصميم المنتجات المادية وتطوير أشكالها الخارجية',
        features: ['تصميم ثلاثي الأبعاد', 'نماذج أولية', 'دراسة الجدوى'],
        company: 'شركة التصميم الإبداعي'
      },
      {
        title: 'تصميم التغليف',
        description: 'تصميم أغلفة وعبوات المنتجات بشكل احترافي',
        features: ['تصميم العبوة', 'اختيار المواد', 'الطباعة عالية الجودة'],
        company: 'شركة التغليف المتطور'
      }
    ],
    production: [
      {
        title: 'الطباعة المتقدمة',
        description: 'خدمات طباعة شاملة بأحدث التقنيات',
        features: ['طباعة أوفست', 'طباعة رقمية', 'تشطيبات خاصة'],
        company: 'شركة الطباعة المتقدمة'
      },
      {
        title: 'الإنتاج والتصنيع',
        description: 'تنفيذ وإنتاج المنتجات وفقاً للمواصفات',
        features: ['إدارة الإنتاج', 'مراقبة الجودة', 'التسليم في الوقت'],
        company: 'شركة التصميم الإبداعي'
      }
    ],
    digital: [
      {
        title: 'تصميم المواقع',
        description: 'تصميم وتطوير المواقع الإلكترونية المتجاوبة',
        features: ['تصميم واجهة المستخدم', 'تجربة مستخدم محسنة', 'تطوير متجاوب'],
        company: 'شركة الحلول الرقمية'
      },
      {
        title: 'تطبيقات الهاتف',
        description: 'تطوير تطبيقات الهاتف الذكي لجميع المنصات',
        features: ['تطبيقات iOS', 'تطبيقات Android', 'واجهة سهلة الاستخدام'],
        company: 'شركة الحلول الرقمية'
      }
    ],
    marketing: [
      {
        title: 'السوشيال ميديا',
        description: 'تصميم منشورات ومحتوى السوشيال ميديا',
        features: ['تصميم المنشورات', 'إدارة المحتوى', 'حملات إعلانية'],
        company: 'شركة التسويق البصري'
      },
      {
        title: 'الهوية البصرية',
        description: 'تطوير الهوية البصرية الشاملة للعلامات التجارية',
        features: ['تصميم الشعار', 'دليل الهوية', 'تطبيقات الهوية'],
        company: 'شركة التسويق البصري'
      }
    ]
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#321b12] mb-6">
            خدماتنا
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات المتكاملة في مختلف مراحل دورة حياة المنتج
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white shadow-lg'
                  : 'bg-white text-[#321b12] hover:bg-gray-100 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5 ml-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services[activeCategory].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <h3 className="text-2xl font-bold text-[#321b12] mb-4 group-hover:text-[#936e2a] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[#321b12] mb-3">المميزات الرئيسية:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-[#936e2a] ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{service.company}</span>
                <button className="flex items-center text-[#936e2a] hover:text-[#321b12] font-semibold group-hover:translate-x-1 transition-all duration-300">
                  تواصل مع الشركة المختصة
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#321b12] text-center mb-12">
            مراحل العمل
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-[#321b12] mb-2">دراسة المشروع</h4>
              <p className="text-gray-600 text-sm">فهم احتياجاتك ومتطلبات المشروع</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-[#321b12] mb-2">التصميم والتطوير</h4>
              <p className="text-gray-600 text-sm">إنشاء التصاميم والحلول المطلوبة</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-[#321b12] mb-2">التنفيذ والإنتاج</h4>
              <p className="text-gray-600 text-sm">تنفيذ المشروع بأعلى مستويات الجودة</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-bold text-[#321b12] mb-2">التسليم والدعم</h4>
              <p className="text-gray-600 text-sm">تسليم المشروع مع الدعم المستمر</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;