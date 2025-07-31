'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface MobileMenuProps {
  menuItems: Array<{
    name: string;
    icon: string;
    href: string;
  }>;
}

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Social Media Icons - Centered */}
      <div className="md:hidden flex-1 flex justify-center items-center space-x-4">
        <Image
          src="/fb_2.png"
          alt="Facebook"
          width={32}
          height={32}
          className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity"
          loading="lazy"
        />
        <Image
          src="/group.png"
          alt="Group"
          width={32}
          height={32}
          className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity"
          loading="lazy"
        />
        <Image
          src="/tiktok-2.png"
          alt="TikTok"
          width={32}
          height={32}
          className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity"
          loading="lazy"
        />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-amber-100 hover:text-yellow-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Image
            src="/mobile-menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="h-10 w-10"
            loading="lazy"
          />
        </button>
      </div>

      {/* Mobile Menu Slide from Right */}
      <div className={`md:hidden fixed bg-amber-50 top-0 right-0 w-full h-[340px] transform transition-transform duration-300 ease-in-out z-50 p-2 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Menu Background Frame */}
        <div className="relative h-[310px] w-full">
          <Image
            src="/frame.png"
            alt="Frame"
            fill
            className=""
            loading="lazy"
          />
          
          {/* Menu Content */}
          <div className="relative z-10 p-3 h-full flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-orange-900 font-bold p-1"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {/* Logo and Game Name */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={30}
                className="mb-2"
                loading="lazy"
              />
              <Image
                src="/game-name.png"
                alt="Game Name"
                width={120}
                height={25}
                className="mb-2"
                loading="lazy"
              />
            </div>

            {/* Menu Items */}
            <div className="flex-1 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 px-2 py-2 text-orange-900 font-medium hover:bg-white hover:bg-opacity-20 rounded transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className={`${item.icon} text-sm text-orange-900`}></i>
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                  {/* Đường gạch ngang - không hiện ở item cuối */}
                  {index < menuItems.length - 1 && (
                    <hr className="border-orange-900 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Bottom Frame */}
              <div className="flex justify-center mt-0">
                <Image
                  src="/bottom-frame.svg"
                  alt="Bottom Frame"
                  width={200}
                  height={30}
                  className="w-[calc(100%-10px)] h-4"
                  loading="lazy"
                />
              </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
