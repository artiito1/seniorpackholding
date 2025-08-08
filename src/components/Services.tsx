'use client'

import React, { useState } from 'react';
import { Palette, Printer, Camera, Box, Code, Search, Check, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Define the type for category keys
type CategoryKey = 'printing' | 'graphics' | 'decoration' | 'marketing' | 'photography' | 'threed' | 'programming';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('printing');

  const categories = [
    { id: 'printing' as CategoryKey, label: 'الطباعة', icon: Printer, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'graphics' as CategoryKey, label: 'الرسوميات', icon: Palette, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'decoration' as CategoryKey, label: 'الديكور', icon: Palette, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'marketing' as CategoryKey, label: 'التسويق', icon: Search, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'photography' as CategoryKey, label: 'التصوير', icon: Camera, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'threed' as CategoryKey, label: 'ثلاثي الأبعاد', icon: Box, gradient: 'from-[#936e2a] to-[#ffe2a6]' },
    { id: 'programming' as CategoryKey, label: 'البرمجة', icon: Code, gradient: 'from-[#936e2a] to-[#ffe2a6]' }
  ];

  const services: Record<CategoryKey, Array<{
    title: string;
    description: string;
    features: string[];
  }>> = {
    printing: [
      {
        title: 'طباعة مواد التعبئة والتغليف',
        description: 'طباعة عالية الجودة للمواد المرنة والصلبة للمنتجات الغذائية والاستهلاكية',
        features: ['طباعة البقوليات والشيبس', 'طباعة البسكويت والقهوة', 'ألوان نابضة بالحياة', 'وضوح نصي دقيق']
      },
      {
        title: 'طباعة الملصقات والكرتون',
        description: 'خدمات طباعة شاملة للملصقات والعبوات الكرتونية بجودة عالية',
        features: ['ملصقات المنظفات', 'ملصقات المعلبات الغذائية', 'كرتون المنتجات الغذائية', 'التسليم في الوقت المناسب']
      }
    ],
    graphics: [
      {
        title: 'تصميم الجرافيك والهوية البصرية',
        description: 'تحويل الأفكار إلى مرئيات مؤثرة تعزز الهوية المؤسسية للعلامات التجارية',
        features: ['تصميم الشعارات', 'اختيار الألوان', 'تطوير الهوية المؤسسية', 'التميز في المجتمع']
      },
      {
        title: 'تصميم التعبئة والتغليف',
        description: 'تصميم إبداعي للتغليف كأداة تسويقية رئيسية تضمن وصول رسالة العلامة التجارية',
        features: ['تصميم عبوات مبتكرة', 'مرئيات مقنعة', 'رسائل تجارية واضحة', 'تعزيز المبيعات']
      }
    ],
    decoration: [
      {
        title: 'تنفيذ المعارض',
        description: 'تصميم وتنفيذ أجنحة المعارض بإبداع واحترافية وإدارة متميزة',
        features: ['تنظيم إبداعي', 'إدارة احترافية', 'أسعار تنافسية', 'تنفيذ دقيق ومتميز']
      },
      {
        title: 'التصميم الداخلي',
        description: 'تحويل المساحات الداخلية للمنازل والمؤسسات التعليمية وأماكن العمل',
        features: ['تحسين المظهر الجمالي', 'بيئة مريحة وآمنة', 'حلول تجارية وسكنية', 'جوانب عملية وتقنية']
      }
    ],
    marketing: [
      {
        title: 'تحسين محركات البحث (SEO)',
        description: 'تحسين ترتيب موقعك في محركات البحث باستخدام استراتيجيات متقدمة',
        features: ['كلمات رئيسية استراتيجية', 'تحسين الظهور', 'زيادة الزيارات', 'تحليل الأداء']
      },
      {
        title: 'إدارة وسائل التواصل الاجتماعي',
        description: 'تعزيز التواجد الرقمي وإنشاء محتوى جذاب لجذب العملاء',
        features: ['إدارة المنصات الاجتماعية', 'محتوى جذاب', 'استشارات تسويقية مبتكرة', 'زيادة التفاعل']
      }
    ],
    photography: [
      {
        title: 'تصوير المنتجات',
        description: 'تصوير احترافي يبرز جمالية المنتجات ويعزز جاذبيتها التسويقية',
        features: ['لقطات ذكية ومبتكرة', 'إضاءة احترافية', 'تعزيز المبيعات', 'مناسب للمتاجر الإلكترونية']
      }
    ],
    threed: [
      {
        title: 'النمذجة ثلاثية الأبعاد',
        description: 'إنشاء تمثيل رقمي ثلاثي الأبعاد للكائنات باستخدام أحدث البرامج المتخصصة',
        features: ['عرض الحجم والشكل', 'إظهار الملمس والتفاصيل', 'تصميمات حقيقية ومفاهيمية', 'نماذج رقمية متقدمة']
      }
    ],
    programming: [
      {
        title: 'تصميم وبرمجة المواقع',
        description: 'إنشاء مواقع ويب قوية تقنياً وجذابة بصرياً مع خدمات الإدارة والصيانة',
        features: ['مواقع متجاوبة', 'تطوير التطبيقات', 'إدارة وصيانة', 'تصدر نتائج البحث', 'تحسين تجربة المستخدم']
      },
      {
        title: 'الخدمات التقنية المتكاملة',
        description: 'حلول شاملة تشمل الاستضافة وإعلانات جوجل وأرشفة المواقع',
        features: ['استضافة البريد الاحترافية', 'إدارة إعلانات جوجل', 'أرشفة محركات البحث', 'تركيب وتخصيص الأنظمة','حجز أسم لموقع الشركة']
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
                نقدم مجموعة شاملة من الخدمات المتخصصة في الطباعة، التصميم، الديكور، التسويق، التصوير، النمذجة ثلاثية الأبعاد، والبرمجة
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white shadow-lg'
                      : 'bg-white text-[#321b12] hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <category.icon className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
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

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-end">
                    <button className="flex items-center text-[#936e2a] hover:text-[#321b12] font-semibold group-hover:translate-x-1 transition-all duration-300">
                      تواصل معنا
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Flow */}
            <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#321b12] text-center mb-12">
                مراحل العمل في سينيور ديزاين
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold text-[#321b12] mb-2">دراسة المشروع</h4>
                  <p className="text-gray-600 text-sm">فهم احتياجاتك ومتطلبات المشروع بدقة</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold text-[#321b12] mb-2">التصميم الإبداعي</h4>
                  <p className="text-gray-600 text-sm">إنشاء تصاميم مبتكرة تلبي توقعاتك</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold text-[#321b12] mb-2">التنفيذ المتميز</h4>
                  <p className="text-gray-600 text-sm">تنفيذ المشروع بأعلى معايير الجودة</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-bold text-[#321b12] mb-2">التسليم والدعم</h4>
                  <p className="text-gray-600 text-sm">تسليم في الوقت المحدد مع دعم مستمر</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Services;