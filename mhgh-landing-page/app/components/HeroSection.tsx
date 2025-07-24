import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/bgHero.webp"
          alt="Hero Background Desktop"
          fill
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
      
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 h-screen">
        <Image
          src="/bg-mobile.png"
          alt="Hero Background Mobile"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Desktop Game Name - Top Right */}
      <div className="hidden md:block absolute top-2 right-0 z-20">
        <Image
          src="/game-name.png"
          alt="Game Name"
          width={600}
          height={500}
          className="w-auto h-45 lg:h-50"
          loading="lazy"
        />
      </div>

      {/* Desktop Grid Layout - Bottom */}
      <div className="hidden md:block absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40">
        <div className="relative">
          {/* Vector Background */}
          <Image
            src="/vector.svg"
            alt="Vector Background"
            width={800}
            height={200}
            className="w-[700px] h-auto"
            loading="lazy"
          />
          
          {/* Grid Content */}
          <div className="absolute inset-0 grid grid-cols-[1fr_2fr_2fr_2fr] grid-rows-2 gap-1 px-12 py-6">
            {/* Column 1: Sign Up - Full Height */}
            <div className="col-start-1 row-start-1 row-span-2 flex items-center justify-center">
              <Image
                src="/sign-up.png"
                alt="Sign Up"
                width={120}
                height={60}
                className="h-[calc(100%-8px)] w-full hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>

            {/* Column 2: Pay - Full Height */}
            <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
              <Image
                src="/pay.png"
                alt="Pay"
                width={120}
                height={60}
                className="w-full h-full hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>

            {/* Column 3 Row 1: App Store */}
            <div className="col-start-3 row-start-1 flex items-center justify-center">
              <Image
                src="/appstore.svg"
                alt="App Store"
                width={120}
                height={40}
                className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>

            {/* Column 3 Row 2: APK */}
            <div className="col-start-3 row-start-2 flex items-center justify-center">
              <Image
                src="/apk.svg"
                alt="APK Download"
                width={120}
                height={40}
                className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>

            {/* Column 4 Row 1: Google Play */}
            <div className="col-start-4 row-start-1 flex items-center justify-center">
              <Image
                src="/googleplay.svg"
                alt="Google Play"
                width={120}
                height={40}
                className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>

            {/* Column 4 Row 2: Download */}
            <div className="col-start-4 row-start-2 flex items-center justify-center">
              <Image
                src="/download.svg"
                alt="Download"
                width={120}
                height={40}
                className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Grid Layout - Bottom */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm p-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {/* Row 1 - Left: Sign Up */}
          <div className="flex items-center justify-center">
            <Image
              src="/register-mobile.png"
              alt="Sign Up"
              width={120}
              height={60}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>

          {/* Row 1 - Right: Pay */}
          <div className="flex items-center justify-center">
            <Image
              src="/chest-2.png"
              alt="Pay"
              width={120}
              height={60}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>

          {/* Row 2 - Left: App Store and APK stacked */}
          <div className="flex flex-col space-y-1">
            <Image
              src="/appstore.svg"
              alt="App Store"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            <Image
              src="/apk.svg"
              alt="APK Download"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>

          {/* Row 2 - Right: Google Play and Download stacked */}
          <div className="flex flex-col space-y-1">
            <Image
              src="/googleplay.svg"
              alt="Google Play"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            <Image
              src="/download.svg"
              alt="Download"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
