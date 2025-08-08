'use client'

import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  // const features = [
  //   {
  //     icon: Target,
  //     title: 'رؤية واضحة',
  //     description: 'نهدف إلى تقديم تجربة متكاملة تجمع كل خدمات التصميم تحت سقف واحد'
  //   },
  //   {
  //     icon: Users,
  //     title: 'فريق متخصص',
  //     description: 'مجموعة من الخبراء في كل مجال يعملون بتناغم لتحقيق أفضل النتائج'
  //   },
  //   {
  //     icon: Award,
  //     title: 'جودة عالية',
  //     description: 'التزام بأعلى معايير الجودة في كل مرحلة من مراحل المشروع'
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: 'نمو مستدام',
  //     description: 'نساعد عملاءنا على النمو والتطور من خلال حلول إبداعية ومبتكرة'
  //   }
  // ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#1c1c1c] bg-[url('/images/paper-texture-dark.png')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-8 text-gold-gradient">
            <h1 className="text-2xl lg:text-3xl font-bold mb-6">
              من نحن
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl leading-relaxed">
            سينيور باك | حلول التصميم الشاملة للمنتجات المادية والرقمية
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
            سينيور باك هي شركة رائدة في تقديم حلول التصميم الشاملة للمنتجات المادية والرقمية، نرافق علامتك التجارية منذ الفكرة الأولى وحتى وصول المنتج إلى يد العميل.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
            تحت سقف واحد، نجمع خبرات متعددة في مجالات تصميم المنتجات، تطوير أشكالها الخارجية، ابتكار التغليف المميز، الطباعة الاحترافية، تصميم المواقع والتطبيقات، وبناء الهوية البصرية القوية للسوشيال ميديا.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
            في سينيور باك، لا نقدم خدمة واحدة، بل نصنع رحلة تصميم متكاملة ترتقي بمنتجك إلى المعايير الأوروبية، مع لمستنا الخاصة التي تمنحه طابعاً فريداً يلفت الأنظار ويضمن تميّزه في السوق.
            </p>
            {/* <div className="flex items-center hidden sm:block">
              <button className="bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                اكتشف شركاتنا التابعة
              </button>
            </div> */}
          </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* تصميم المنتجات */}
                  <div className="h-40 relative rounded-2xl overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/about/design.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/80"></div>
                    <span className="relative z-10 text-gold-gradient font-bold text-xl">تصميم المنتجات</span>
                  </div>

                  {/* تغليف احترافي */}
                  <div className="h-32 relative rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/about/packaging.png')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffe2a6]/80 to-[#936e2a]/80"></div>
                    <span className="relative z-10 text-black font-semibold">تغليف احترافي</span>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {/* مواقع رقمية */}
                  <div className="h-32 relative rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/about/web.png')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffe2a6]/80 to-[#936e2a]/80"></div>
                    <span className="relative z-10 text-black font-semibold">مواقع رقمية</span>
                  </div>

                  {/* طباعة متقدمة */}
                  <div className="h-40 relative rounded-2xl overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/about/printing.png')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/70"></div>
                    <span className="relative z-10 text-gold-gradient font-bold text-xl">طباعة متقدمة</span>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Features Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#321b12] mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;