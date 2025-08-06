'use client'

import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const subsidiaries = [
    'شركة التصميم الإبداعي',
    'شركة التغليف المتطور',
    'شركة الحلول الرقمية',
    'شركة الطباعة المتقدمة',
    'شركة التسويق البصري'
  ];

  const quickLinks = [
    'من نحن',
    'خدماتنا',
    'أعمالنا',
    'الشركات التابعة',
    'تواصل معنا',
    'المدونة'
  ];

  const services = [
    'تصميم المنتجات',
    'تصميم التغليف',
    'المواقع الإلكترونية',
    'التطبيقات',
    'الهوية البصرية',
    'الطباعة'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#321b12] to-[#010101] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffe2a6] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#936e2a] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center ml-3">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">شركة الهولدينغ</h3>
                <p className="text-[#ffe2a6] text-sm">تجربة متكاملة للمنتجات</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              نقدم خدمات تصميم شاملة من الفكرة إلى السوق عبر مجموعة من الشركات التابعة المتخصصة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#936e2a] rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#936e2a] rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#936e2a] rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#936e2a] rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#ffe2a6] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#936e2a] rounded-full ml-3 group-hover:bg-[#ffe2a6] transition-colors duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#ffe2a6] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#936e2a] rounded-full ml-3 group-hover:bg-[#ffe2a6] transition-colors duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#ffe2a6] ml-3" />
                <span className="text-gray-300">+966 12 345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#ffe2a6] ml-3" />
                <span className="text-gray-300">info@holdingcompany.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#ffe2a6] ml-3" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-[#ffe2a6] ml-3" />
                <span className="text-gray-300">www.holdingcompany.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subsidiaries Section */}
        <div className="border-t border-white/10 py-8">
          <h4 className="text-xl font-bold text-white mb-6 text-center">شركاتنا التابعة</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {subsidiaries.map((company, index) => (
              <div key={index} className="bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 transition-colors duration-300">
                <span className="text-gray-300 text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 شركة الهولدينغ. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-[#ffe2a6] text-sm transition-colors duration-300">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ffe2a6] text-sm transition-colors duration-300">
              شروط الاستخدام
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;