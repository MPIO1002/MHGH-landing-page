import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img
          src="/bgHero.png"
          alt="Hero Background Desktop"
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
      
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 w-full h-auto">
        <img
          src="/bgHeroMobile.png"
          alt="Hero Background Mobile"
          width={552}
          height={726}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      
      {/* Mobile Game Name - Top Right */}
      <div className="md:hidden absolute top-3 right-0 w-[150px] h-auto">
        <img
          src="/game-name.png"
          alt="Game Name"
          className="w-auto"
          loading="lazy"
        />
      </div>

      {/* Desktop Grid Layout - Bottom */}
      <div className="hidden lg:block absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 w-full">
        <div className="flex flex-row items-end justify-center w-full">
          {/* Left: Grid layout */}
          <div className="relative">
            {/* Vector Background */}
            <img
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
                <img
                  src="/sign-up.png"
                  alt="Sign Up"
                  width={139}
                  height={175}
                  className="h-[calc(100%-8px)] w-full hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
              {/* Column 2: Pay - Full Height */}
              <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
                <img
                  src="/pay.png"
                  alt="Pay"
                  width={295}
                  height={280}
                  className="w-full h-full hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
              {/* Column 3 Row 1: App Store */}
              <div className="col-start-3 row-start-1 flex items-center justify-center">
                <img
                  src="/appstore.png"
                  alt="App Store"
                  width={251}
                  height={76}
                  className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
              {/* Column 3 Row 2: APK */}
              <div className="col-start-3 row-start-2 flex items-center justify-center">
                <img
                  src="/apk.png"
                  alt="APK Download"
                  width={251}
                  height={76}
                  className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
              {/* Column 4 Row 1: Google Play */}
              <div className="col-start-4 row-start-1 flex items-center justify-center">
                <img
                  src="/googleplay.png"
                  alt="Google Play"
                  width={251}
                  height={76}
                  className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
              {/* Column 4 Row 2: Download */}
              <div className="col-start-4 row-start-2 flex items-center justify-center">
                <img
                  src="/simulator.png"
                  alt="Download"
                  width={251}
                  height={76}
                  className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Right: Alert 18+ and 3 small images below */}
          <div className="flex flex-col items-center justify-center ml-5 pt-5 h-[200px]" style={{ height: '200px' }}>
            <img src="/alert.png" alt="Alert 18+" width={72} height={72} className="w-[127px] h-[127px] mb-1 object-contain" />
            <div className="flex flex-row items-center justify-center gap-1">
              <img src="/fb.png" alt="Facebook" width={24} height={24} className="w-10 h-10 object-contain" />
              <img src="/group.png" alt="Group" width={24} height={24} className="w-10 h-10 object-contain" />
              <img src="/tiktok.png" alt="TikTok" width={24} height={24} className="w-10 h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Grid Layout - Bottom */}
      <div className="block lg:hidden absolute bottom-25 min-[400px]:bottom-50 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm p-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-0">
          {/* Row 1 - Left: App Store and APK stacked */}
          <div className="flex flex-col space-y-1">
            <img
              src="/appstore.png"
              alt="App Store"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            <img
              src="/apk.png"
              alt="APK Download"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>

          {/* Row 1 - Right: Google Play and Download stacked */}
          <div className="flex flex-col space-y-1">
            <img
              src="/googleplay.png"
              alt="Google Play"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            <img
              src="/simulator.png"
              alt="Download"
              width={120}
              height={40}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>
          {/* Row 2 - Left: Sign Up */}
          <div className="flex items-center justify-center">
            <img
              src="/register-mobile.png"
              alt="Sign Up"
              width={120}
              height={60}
              className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
          </div>
          {/* Row 2 - Right: Pay */}
          <div className="flex items-center justify-center">
            <img
              src="/pay-mobile.png"
              alt="Pay"
              width={120}
              height={60}
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
