'use client'

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './ui/logo'; // Adjust the import path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubsidiariesOpen, setIsSubsidiariesOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'من نحن', href: '#about' },
    { label: 'الشركات التابعة', hasDropdown: true },
    { label: 'خدماتنا', href: '#services' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'تواصل معنا', href: '#contact' }
  ];

const subsidiaries = [
  { name: 'Senior Marketing Agency', href: '#digital-marketing' },
  { name: 'Senior Creative Studio', href: '#design' },
  { name: 'Senior Digital Studio', href: '#software-development' },
  { name: 'Senior Print Center', href: '#printing' },
  { name: 'Senior Packaging Solutions', href: '#packaging' } 
];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#936e2a] to-[#ffe2a6] rounded-full flex items-center justify-center">
               <Logo />
            </div>
            <div className="mr-3 hidden sm:block">
              <h1 className="text-[#321b12] font-bold text-lg lg:text-xl">Senior Holding Company</h1>
              <p className="text-[#936e2a] text-xs lg:text-sm">تجربة متكاملة للمنتجات</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsSubsidiariesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsSubsidiariesOpen(false)}
              >
                <a
                  href={item.href}
                  className="text-[#321b12] hover:text-[#936e2a] font-medium transition-colors duration-300 flex items-center"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 mr-1" />}
                </a>
                
                {/* Dropdown Menu with Safe Zone */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 z-50 transition-all duration-300 ease-in-out transform origin-top ${
                      isSubsidiariesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="w-70 bg-white rounded-lg shadow-xl border border-gray-100 py-3 px-3">
                      <div className="w-64 rounded-lg shadow-xl border border-[#936e2a]/30 p-3">
                        {subsidiaries.map((subsidiary) => (
                          <a
                            key={subsidiary.name}
                            href={subsidiary.href}
                            className="block px-4 py-3 text-[#321b12] hover:text-[#936e2a] hover:bg-gray-50 transition-colors duration-300 text-sm font-medium rounded-md"
                          >
                            {subsidiary.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              احصل على عرض مخصص
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#321b12] hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-[#321b12] hover:text-[#936e2a] hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsSubsidiariesOpen(!isSubsidiariesOpen);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && isSubsidiariesOpen && (
                  <div className="bg-gray-50 border-r-2 border-[#936e2a]">
                    {subsidiaries.map((subsidiary) => (
                      <a
                        key={subsidiary.name}
                        href={subsidiary.href}
                        className="block px-8 py-2 text-[#321b12] hover:text-[#936e2a] text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subsidiary.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-2">
              <button className="w-full bg-gradient-to-r from-[#936e2a] to-[#ffe2a6] text-white px-6 py-2.5 rounded-full font-medium">
                احصل على عرض مخصص
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;