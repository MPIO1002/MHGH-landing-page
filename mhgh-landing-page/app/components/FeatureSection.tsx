"use client";
import React, { useState } from "react";

const features = [
    { id: 1, img: "/feature_1.jpeg" },
    { id: 2, img: "/feature_2.jpeg" },
    { id: 3, img: "/feature_3.jpeg" },
    { id: 4, img: "/feature_4.jpeg" },
    { id: 5, img: "/feature_5.jpeg" }
];

const FeatureSection = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    // Auto change feature every 5 seconds
    React.useEffect(() => {
        if (features.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIdx(prevIdx => (prevIdx + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full flex flex-col items-center justify-center py-10 md:py-20">
            {/* Title */}
            <div className="w-full flex flex-col items-center z-10 mb-6">
                <div className="hidden md:flex justify-center mb-6">
                    <img src="/featureLabel.png" alt="Feature Label Desktop" width={400} height={100} className="w-auto h-20 md:h-22 xl:h-24" loading="lazy" />
                </div>
                <div className="flex md:hidden justify-center mb-4">
                    <img src="/featureMobileLabel.png" alt="Feature Label Mobile" width={200} height={50} className="w-auto h-12" loading="lazy" />
                </div>
            </div>
            {/* Custom 3D Carousel */}
            <div className="relative w-full max-w-5xl mx-auto">
                <div className="flex items-center justify-center h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-xl overflow-hidden">
                    {/* Mobile: chỉ hiện ảnh trung tâm, desktop: 3 ảnh 3D */}
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Desktop: 3 ảnh 3D */}
                        <div className="hidden md:flex w-full h-full items-center justify-center">
                            {[-1, 0, 1].map((offset) => {
                                const idx = (activeIdx + offset + features.length) % features.length;
                                const isCenter = offset === 0;
                                const isSide = offset !== 0;
                                const itemWidth = isCenter ? '50%' : '25%';
                                const marginLeft = isSide && offset === -1 ? '-8%' : undefined;
                                const marginRight = isSide && offset === 1 ? '-8%' : undefined;
                                const imgSize = isCenter ? 600 : 400;
                                return (
                                    <div
                                        key={idx}
                                        className={`flex items-center justify-center transition-all duration-500 ` + (isCenter ? "z-20 scale-110 shadow-2xl" : "z-10 scale-90")}
                                        style={{ width: itemWidth, height: '100%', marginLeft, marginRight }}
                                    >
                                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%' }}>
                                                <img
                                                    src={features[idx].img}
                                                    alt={"Feature " + features[idx].id}
                                                    width={imgSize}
                                                    height={imgSize}
                                                    className={`object-contain max-h-full w-full h-full transition-all duration-500 ` + (isCenter ? "rounded-xl" : "") + (isSide ? "brightness-50" : "")}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Mobile: chỉ hiện ảnh trung tâm */}
                        <div className="flex md:hidden w-full h-full items-center justify-center">
                            <div className="flex items-center justify-center z-10 w-full h-full">
                                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%' }}>
                                        <img
                                            src={features[activeIdx].img}
                                            alt={"Feature " + features[activeIdx].id}
                                            width={220}
                                            height={220}
                                            className="object-contain max-h-full w-full h-full transition-all duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Custom Pagination Dots dùng ảnh */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {features.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className="p-0 bg-transparent border-none cursor-pointer"
                        >
                            <img
                                src={activeIdx === idx ? "/paginationActive.svg" : "/pagination.svg"}
                                alt={activeIdx === idx ? "active" : "dot"}
                                width={25}
                                height={25}
                                className="transition-all duration-300 md:w-[25px] md:h-[25px] w-[14px] h-[14px]"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
                {/* Arrow Controls */}
                {/* Arrow Controls responsive */}
                <div className="absolute md:-left-5 left-2 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
                    <button onClick={() => setActiveIdx((activeIdx - 1 + features.length) % features.length)} className="bg-transparent border-none">
                        <img src="/arrow.png" alt="Trái" width={204} height={168} className="cursor-pointer md:w-[60px] md:h-[50px] w-[22px] h-[22px]" loading="lazy" />
                    </button>
                </div>
                <div className="absolute md:-right-5 right-2 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
                    <button onClick={() => setActiveIdx((activeIdx + 1) % features.length)} className="bg-transparent border-none rotate-180">
                        <img src="/arrow.png" alt="Phải" width={204} height={168} className="cursor-pointer md:w-[60px] md:h-[50px] w-[22px] h-[22px]" loading="lazy" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
