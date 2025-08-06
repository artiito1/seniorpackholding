'use client'

import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'أحمد محمد',
      position: 'مدير التسويق',
      company: 'شركة الابتكار التجاري',
      content: 'تجربة رائعة مع فريق شركة الهولدينغ. لقد قدموا لنا حلولاً متكاملة من التصميم إلى التنفيذ، وكانت النتائج تفوق توقعاتنا بكثير. احترافية عالية في كل التفاصيل.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'فاطمة السعيد',
      position: 'مؤسسة',
      company: 'متجر الأناقة الحديثة',
      content: 'ساعدونا في تطوير هوية بصرية شاملة لمتجرنا الإلكتروني. من تصميم الشعار إلى تطوير الموقع وتصميم التغليف، كل شيء كان متناغماً ومتميزاً. أنصح بهم بشدة.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'خالد العمري',
      position: 'مدير المنتجات',
      company: 'صناعات الغذاء المتطورة',
      content: 'عملنا معهم على تصميم وتطوير تغليف جديد لمنتجاتنا. الشركات التابعة المختلفة عملت بتناغم مذهل، وحصلنا على نتائج احترافية في وقت قياسي.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'مريم أحمد',
      position: 'مديرة العلامة التجارية',
      company: 'تقنيات المستقبل',
      content: 'اختارنا شركة الهولدينغ لتطوير موقعنا الإلكتروني وحملاتنا التسويقية. النتيجة كانت استثنائية، وتفاعل العملاء مع علامتنا التجارية ازداد بشكل ملحوظ.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#321b12] mb-6">
            آراء عملائنا
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف ما يقوله عملاؤنا عن تجربتهم مع خدماتنا المتكاملة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-8 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-[#ffe2a6] opacity-20">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Image 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-bold text-[#321b12] text-xl">{currentTestimonial.name}</h4>
                  <p className="text-[#936e2a] font-medium">{currentTestimonial.position}</p>
                  <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-[#ffe2a6] fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2 space-x-reverse">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-gradient-to-r from-[#936e2a] to-[#ffe2a6]' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#936e2a] transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setCurrentIndex(testimonials.findIndex(t => t.name === testimonial.name))}
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover ml-3"
                  />
                  <div>
                    <h5 className="font-semibold text-[#321b12] group-hover:text-[#936e2a] transition-colors duration-300">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#ffe2a6] fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.content.substring(0, 100)}..."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#936e2a] mb-2">98%</div>
            <div className="text-gray-600 text-sm lg:text-base">رضا العملاء</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#936e2a] mb-2">500+</div>
            <div className="text-gray-600 text-sm lg:text-base">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#936e2a] mb-2">5 سنوات</div>
            <div className="text-gray-600 text-sm lg:text-base">خبرة في السوق</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#936e2a] mb-2">24/7</div>
            <div className="text-gray-600 text-sm lg:text-base">دعم مستمر</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;