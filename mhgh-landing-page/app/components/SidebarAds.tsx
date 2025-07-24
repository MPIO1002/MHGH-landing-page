"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SidebarAds = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`hidden md:block fixed right-0 pt-12 md:right-1 top-18 z-50 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ backgroundImage: 'url(/flag.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', borderRadius: '1rem', width: '200px', minHeight: '730px' }}
    >
      {/* 3 icon đầu */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <Image src="/fb_2.png" alt="Facebook" width={32} height={32} className="w-8 h-8 rounded" />
        <Image src="/group.png" alt="Group" width={32} height={32} className="w-8 h-8 rounded" />
        <Image src="/youtube_2.png" alt="Youtube" width={32} height={32} className="w-8 h-8 rounded" />
      </div>
      {/* Decor */}
      <div className="flex justify-center mb-2">
        <Image src="/decor.svg" alt="Decor" width={40} height={10} className="w-[130px] h-2" />
      </div>
      {/* Appstore, APK, Googleplay, Simulator */}
      <div className="flex flex-col items-center gap-2 mb-2">
        <Image src="/appstore-2.png" alt="App Store" width={40} height={40} className="w-[130px] h-10" />
        <Image src="/apk-2.png" alt="APK" width={40} height={40} className="w-[130px] h-10" />
        <Image src="/googleplay-2.png" alt="Google Play" width={40} height={40} className="w-[130px] h-10" />
        <Image src="/simulator-2.png" alt="Simulator" width={40} height={40} className="w-[130px] h-10" />
      </div>
      {/* Decor dưới */}
      <div className="flex justify-center mb-2">
        <Image src="/decor.svg" alt="Decor" width={40} height={10} className="w-[130px] h-2" />
      </div>
      {/* Register, Chest */}
      <div className="flex flex-col items-center gap-2 mb-2">
        <Image src="/register_2.png" alt="Register" width={40} height={40} className="w-[130px] h-10" />
        <Image src="/chest-2.png" alt="Chest" width={40} height={40} className="w-[130px] h-auto" />
      </div>
      {/* Top arrow */}
      <div className="flex flex-col items-center gap-1 mt-2 cursor-pointer" onClick={scrollToTop}>
        <Image src="/top-arrow.svg" alt="Top" width={28} height={28} className="w-7 h-7" />
        <span className="text-xs font-bold text-white drop-shadow">TOP</span>
      </div>
    </div>
  );
};

export default SidebarAds;
