'use client'

import React, { useState } from 'react';
import { Eye, ArrowLeft, Filter } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'جميع الأعمال' },
    { id: 'product', label: 'تصميم المنتجات' },
    { id: 'packaging', label: 'التغليف' },
    { id: 'web', label: 'مواقع إلكترونية' },
    { id: 'branding', label: 'هوية بصرية' },
    { id: 'printing', label: 'طباعة' }
  ];

  const projects = [
    {
      id: 1,
      title: 'تصميم عبوة منتج غذائي',
      category: 'packaging',
      company: 'شركة التغليف المتطور',
      image: 'https://images.pexels.com/photos/4040664/pexels-photo-4040664.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تصميم عبوة مبتكرة لمنتج غذائي مع التركيز على الجاذبية البصرية والوظائف العملية'
    },
    {
      id: 2,
      title: 'موقع إلكتروني لشركة تقنية',
      category: 'web',
      company: 'شركة الحلول الرقمية',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تصميم وتطوير موقع إلكتروني متجاوب مع تجربة مستخدم متميزة'
    },
    {
      id: 3,
      title: 'هوية بصرية شاملة',
      category: 'branding',
      company: 'شركة التسويق البصري',
      image: 'https://images.pexels.com/photos/3585045/pexels-photo-3585045.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تطوير هوية بصرية متكاملة تشمل الشعار والألوان والخطوط'
    },
    {
      id: 4,
      title: 'تصميم منتج إلكتروني',
      category: 'product',
      company: 'شركة التصميم الإبداعي',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تصميم منتج إلكتروني مبتكر مع التركيز على سهولة الاستخدام'
    },
    {
      id: 5,
      title: 'مواد طباعة تسويقية',
      category: 'printing',
      company: 'شركة الطباعة المتقدمة',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تصميم وطباعة مواد تسويقية عالية الجودة للحملات الإعلانية'
    },
    {
      id: 6,
      title: 'تغليف منتجات التجميل',
      category: 'packaging',
      company: 'شركة التغليف المتطور',
      image: 'https://images.pexels.com/photos/3685541/pexels-photo-3685541.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'تصميم تغليف أنيق لمجموعة منتجات التجميل الفاخرة'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#321b12] mb-6">
            معرض أعمالنا
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استعرض مجموعة من أفضل مشاريعنا التي نفذتها شركاتنا التابعة في مختلف المجالات
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-[#936e2a] font-semibold mb-4 w-full sm:w-auto justify-center">
            <Filter className="w-5 h-5 ml-2" />
            فلترة حسب:
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#936e2a] bg-[#ffe2a6]/20 px-2 py-1 rounded-full">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                  <span className="text-xs text-gray-500">{project.company}</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#321b12] mb-3 group-hover:text-[#936e2a] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <button className="flex items-center text-[#936e2a] hover:text-[#321b12] font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
                  عرض التفاصيل
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            عرض المزيد من الأعمال
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;