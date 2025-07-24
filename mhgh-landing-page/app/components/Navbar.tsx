import React from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const menuItems = [
    { name: 'TRANG CHỦ', icon: 'fas fa-home', href: '#' },
    { name: 'ĐIỀU KHOẢN', icon: 'fas fa-file-contract', href: '#' },
    { name: 'CỘNG ĐỒNG', icon: 'fas fa-users', href: '#' },
    { name: 'HỖ TRỢ', icon: 'fas fa-headset', href: '#' },
  ];

  return (
    <nav className="relative">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/navBg.svg"
          alt="Navigation Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/mobileNavBg.png"
          alt="Mobile Navigation Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo - Positioned to extend beyond navbar height */}
          <div className="flex-shrink-0 relative z-20">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={80}
              className="h-12 md:h-24 xl:h-30 w-auto relative top-0 md:top-10 xl:top-10 left-0 md:left-15 xl:left-20"
              priority
            />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-3 lg:space-x-6 xl:space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-amber-100 hover:text-yellow-200 px-2 lg:px-3 py-2 text-xs md:text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 flex items-center space-x-1 lg:space-x-2 whitespace-nowrap"
                >
                  <i className={`${item.icon} text-xs md:text-sm text-amber-200`}></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Component (Client-side) */}
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
