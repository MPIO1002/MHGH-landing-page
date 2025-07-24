import React from 'react';
import Image from 'next/image';
import HeroCharacterSection from './HeroCharacterSection';
import FeatureSection from './FeatureSection';

const ContentSection = () => {
  return (
    <section className="relative w-full z-30 md:-mt-32 xl:-mt-[450px] 2xl:-mt-[570px] flex flex-col items-center justify-start pt-10 md:pt-20">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/mainBg.webp"
          alt="Main Background Desktop"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 w-full pointer-events-none select-none -mt-[250px]">
        <Image
          src="/mainBgMobile.png"
          alt="Main Background Mobile"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Title Images */}
      <div className="w-full flex flex-col items-center z-10">
        {/* Desktop title */}
        <div className="hidden md:flex justify-center mb-6 mt-[480px] md:mt-[500px]">
          <Image
            src="/attractiveLabel.webp"
            alt="Attractive Label Desktop"
            width={400}
            height={100}
            className="w-auto h-16 md:h-18 xl:h-20"
            priority
          />
        </div>
        {/* Mobile title */}
        <div className="flex md:hidden justify-center mb-4 -mt-[50px]">
          <Image
            src="/attractiveMobileLabel.png"
            alt="Attractive Label Mobile"
            width={300}
            height={80}
            className="w-auto h-25"
            priority
          />
        </div>
      </div>
      {/* Grid layout dưới title */}
      <div className="w-full max-w-4xl mx-auto z-10 px-2 md:px-0">
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8 2xl:gap-10">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src="/gift-frame.webp"
                alt={`Vật phẩm ${i}`}
                width={160}
                height={160}
                className="w-25 h-25 md:w-40 md:h-40 object-contain mb-2 drop-shadow-lg"
                loading="lazy"
              />
              <span className="text-orange-900 text-base md:text-lg font-semibold drop-shadow">Vật phẩm {i}</span>
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
