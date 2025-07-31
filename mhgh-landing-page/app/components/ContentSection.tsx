import React from 'react';
import HeroCharacterSection from './HeroCharacterSection';
import FeatureSection from './FeatureSection';

const ContentSection = () => {
  return (
    <section className="relative w-full h-full z-30 md:-mt-[450px] 2xl:-mt-[560px] flex flex-col items-center justify-start pt-10 md:pt-20">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full pointer-events-none select-none">
        <img
          src="/mainBg.png"
          alt="Main Background Desktop"
          className="object-cover object-top"
        />
      </div>
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 w-full pointer-events-none select-none -mt-[390px] xs:-mt-[650px]">
        <img
          src="/mainMobileBg.png"
          alt="Main Background Mobile"
          className="object-cover object-top"
        />
      </div>

      {/* Title Images */}
      <div className="w-full flex flex-col items-center z-10">
        {/* Desktop title */}
        <div className="hidden md:flex justify-center mb-6 mt-[480px] lg:mt-[600px]">
          <img
            src="/attractiveLabel.png"
            alt="Attractive Label Desktop"
            width={400}
            height={100}
            className="w-auto h-16 md:h-18 xl:h-20"
          />
        </div>
        {/* Mobile title */}
        <div className="flex md:hidden justify-center mb-4 -mt-[150px] min-[400px]:-mt-[240px]">
          <img
            src="/attractiveMobileLabel.png"
            alt="Attractive Label Mobile"
            width={300}
            height={80}
            className="w-auto h-25"
          />
        </div>
      </div>
      {/* Grid layout dưới title */}
      <div className="w-full max-w-4xl mx-auto z-10 px-2 md:px-0 -mt-5 min-[400px]:-mt-30 md:mt-20">
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-8 2xl:gap-20">
          {[
            {img: '/gift-1.png', name: 'EXP'},
            {img: '/gift-2.png', name: 'KNB'},
            {img: '/gift-3.png', name: 'Gạo'},
            {img: '/gift-4.png', name: 'Võ Hồn'},
            {img: '/gift-5.png', name: 'Vải'},
            {img: '/gift-6.png', name: 'Đá CH'}
          ].map((gift, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <img
                src={gift.img}
                alt={gift.name}
                width={192}
                height={146}
                className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-16 h-16 md:w-40 md:h-40 object-contain drop-shadow-xl"
                loading="lazy"
              />
              <img
                src="/gift-frame.png"
                alt={`Khung vật phẩm ${gift.name}`}
                width={160}
                height={160}
                className="w-25 h-25 md:w-50 md:h-50 object-contain mb-2 drop-shadow-lg relative z-0"
                loading="lazy"
              />
              <span className="text-orange-900 text-base md:text-3xl font-extrabold -mt-5 md:-mt-10 z-10" style={{ textShadow: '0 0 2px #fef3c7, 0 0 6px #fef3c7, 1px 1px 0 #fef3c7, -1px -1px 0 #fef3c7' }}>{gift.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* ...existing code... */}
      <div className="w-full mt-30 2xl:mt-40">
        <HeroCharacterSection />
      </div>
      {/* Feature Section */}
      <div className="w-full -mt-25 md:-mt-15">
        <FeatureSection />
      </div>
    </section>
  );
};

export default ContentSection;
