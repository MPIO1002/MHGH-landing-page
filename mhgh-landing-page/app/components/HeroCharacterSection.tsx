"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { heroCharacters } from "./heroCharacters";

const HeroCharacterSection = () => {
    const [selectedHeroIdx, setSelectedHeroIdx] = useState(0);
    const [animClass, setAnimClass] = useState("");
    const [showVideo, setShowVideo] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        setAnimClass("");
        const timeout = setTimeout(() => setAnimClass("slide-left-normal"), 10);
        return () => clearTimeout(timeout);
    }, [selectedHeroIdx]);

    // Auto change hero every 5 seconds
    useEffect(() => {
        if (heroCharacters.length <= 1) return;
        const interval = setInterval(() => {
            setSelectedHeroIdx(prevIdx => (prevIdx + 1) % heroCharacters.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const hero = heroCharacters[selectedHeroIdx] || heroCharacters[0];



    return (
        <section className="relative w-full flex flex-col items-center justify-center py-12 md:py-20 mb-20 mx-auto -mt-30 sm:-mt-0">
            {/* Mobile: stack layout */}
            <div className="flex flex-col items-center w-full md:hidden">
                <div className="mb-2 w-full flex items-center justify-center z-30">
                    <img src={hero.nameImg} alt="Tên tướng" width={400} height={80} className="object-contain w-[250px] h-[80px]" loading="lazy" />
                </div>
                <div className="relative flex flex-col items-center justify-center w-full">
                    {/* Mobile bg-hero behind character */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px] min-[430px]:w-[300px] min-[430px]:h-[300px] z-0 pointer-events-none select-none">
                        <img src="/bg-hero.png" alt="Hero Background" width={300} height={300} className="w-full h-full object-cover" draggable="false" />
                    </div>
                    {/* Mobile stage under character */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[120px] h-[30px] min-[375px]:w-[80px] min-[375px]:h-[20px] min-[430px]:w-[240px] min-[430px]:h-[60px] min-[430px]:-bottom-10 z-10 pointer-events-none select-none">
                        <img src="/stage.png" alt="Stage" width={120} height={30} className="w-full h-full object-contain" draggable="false" />
                    </div>
                    <div className="relative z-20 flex items-center justify-center w-[300px] h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px] min-[430px]:w-[300px] min-[430px]:h-[300px]">
                        <img src={hero.fullImg} alt={hero.nameImg} width={180} height={180} className={`object-contain h-[300px] w-[300px] min-[430px]:w-[300px] min-[430px]:h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px] drop-shadow-xl ${animClass}`} loading="lazy" />
                    </div>
                </div>
                <div className="mt-12 space-y-2 text-lg w-full flex flex-col items-start px-10">
                    <div className="flex items-center gap-2 text-base md:text-lg justify-center">
                        <img src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                        <span className="font-bold text-xs md:text-2xl">Giới tính:</span> <span className="text-xs md:text-lg">{hero.gender}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-lg justify-center">
                        <img src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                        <span className="font-bold text-xs md:text-2xl">Võ học:</span> <span className="text-xs md:text-lg">{hero.martial}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-lg justify-center">
                        <img src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                        <span className="font-bold text-xs md:text-2xl">Đặc điểm:</span> <span className="text-xs md:text-lg">{hero.feature}</span>
                    </div>
                </div>
                <div className="relative mt-6">
                    <button type="button" onClick={() => setShowVideo(true)} className="focus:outline-none">
                        <img src="/video-thumbnail.webp" alt="Special" width={400} height={120} className="rounded-xl w-[400px] h-auto md:w-[500px] cursor-pointer" loading="lazy" />
                    </button>
                    {mounted && showVideo && createPortal(
                        <div className="fixed inset-0 z-[99999] flex items-center justify-center" onClick={() => setShowVideo(false)}>
                            <div className="absolute inset-0 bg-black z-[99998]" style={{ opacity: 0.7 }}></div>
                            <div className="relative shadow-xl z-[99999]" style={{ width: '90vw', maxWidth: 900 }} onClick={e => e.stopPropagation()}>
                                <iframe
                                    width="100%"
                                    height="505"
                                    src="https://www.youtube.com/embed/LgeruS5kZLk?autoplay=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                ></iframe>
                                <button type="button" className="absolute top-2 right-2 text-white text-2xl font-bold z-[99999]" onClick={() => setShowVideo(false)}>
                                    ×
                                </button>
                            </div>
                        </div>, document.body)
                    }
                </div>
            </div>
            {/* Desktop: left image, right info & special frame */}
            <div className="hidden md:flex flex-row items-center w-full">
                {/* Left: Character image */}
                <div className="flex flex-col items-center justify-center w-[45%]">
                    <div className="relative flex flex-col items-center justify-center w-full">
                        {/* Background image fixed behind character */}
                        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[450px] h-[450px] z-0 pointer-events-none select-none">
                            <img src="/bg-hero.png" alt="Hero Background" width={450} height={450} className="w-full h-full object-cover" draggable="false" />
                        </div>
                        {/* Stage fixed at bottom center */}
                        <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-[400px] h-[160px] z-10 pointer-events-none select-none">
                            <img src="/stage.png" alt="Stage" width={320} height={80} className="w-full h-full object-contain" draggable="false" />
                        </div>
                        {/* Character image with arrows */}
                        <div className="relative z-20 flex items-center justify-center w-[600px] h-[600px]">
                            {/* Left arrow */}
                            <button
                                type="button"
                                className="absolute left-0 top-100 -translate-y-1/2 z-30 focus:outline-none"
                                onClick={() => {
                                    setAnimClass("");
                                    setTimeout(() => setAnimClass("slide-left-normal"), 10);
                                    setSelectedHeroIdx(idx => (idx - 1 + heroCharacters.length) % heroCharacters.length);
                                }}
                                aria-label="Previous Hero"
                            >
                                <img src="/arrow.png" alt="Previous" width={48} height={48} className="w-12 h-12 hover:scale-110 transition-transform" draggable="false" />
                            </button>
                            {/* Character image */}
                            <img src={hero.fullImg} alt={hero.nameImg} width={400} height={400} className={`object-contain w-[600px] h-[600px] drop-shadow-xl ${animClass}`} loading="lazy" />
                            {/* Right arrow */}
                            <button
                                type="button"
                                className="absolute right-0 top-100 -translate-y-1/2 z-30 focus:outline-none"
                                onClick={() => {
                                    setAnimClass("");
                                    setTimeout(() => setAnimClass("slide-left-normal"), 10);
                                    setSelectedHeroIdx(idx => (idx + 1) % heroCharacters.length);
                                }}
                                aria-label="Next Hero"
                            >
                                <img src="/arrow.png" alt="Next" width={48} height={48} className="w-12 h-12 rotate-180 hover:scale-110 transition-transform" draggable="false" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right: Name, Info & special frame */}
                <div className="flex flex-col justify-start w-[55%] px-4 md:px-8">
                    <div className="mb-6 w-full flex items-center justify-start">
                        <img src={hero.nameImg} alt="Tên tướng" width={600} height={120} className="object-contain w-[400px] h-[120px] md:w-[600px] md:h-[120px]" loading="lazy" />
                    </div>
                    <div className="space-y-4 w-full flex flex-col items-start">
                        <div className="flex items-center gap-2 text-xl">
                            <img src="/dot.png" alt="dot" width={22} height={22} className="inline-block w-[22px] h-[22px]" loading="lazy" />
                            <span className="font-bold text-xl">Giới tính:</span> <span className="text-xl">{hero.gender}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl">
                            <img src="/dot.png" alt="dot" width={22} height={22} className="inline-block w-[22px] h-[22px]" loading="lazy" />
                            <span className="font-bold text-xl">Võ học:</span> <span className="text-xl">{hero.martial}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl">
                            <img src="/dot.png" alt="dot" width={22} height={22} className="inline-block w-[22px] h-[22px]" loading="lazy" />
                            <span className="font-bold text-xl">Đặc điểm:</span> <span className="text-xl">{hero.feature}</span>
                        </div>
                    </div>
                    <div className="relative mt-8 w-full flex items-start">
                        <button type="button" onClick={() => setShowVideo(true)} className="focus:outline-none">
                            <img src="/video-thumbnail.webp" alt="Special" width={600} height={180} className="rounded-xl w-[500px] md:w-[600px] h-auto cursor-pointer" loading="lazy" />
                        </button>
                        {mounted && showVideo && createPortal(
                            <div className="fixed inset-0 z-[99999] flex items-center justify-center" onClick={() => setShowVideo(false)}>
                                <div className="absolute inset-0 bg-black z-[99998]" style={{ opacity: 0.7 }}></div>
                                <div className="relative shadow-xl z-[99999]" style={{ width: '90vw', maxWidth: 900 }} onClick={e => e.stopPropagation()}>
                                    <iframe
                                        width="100%"
                                        height="505"
                                        src="https://www.youtube.com/embed/LgeruS5kZLk?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full"
                                    ></iframe>
                                    <button type="button" className="absolute top-2 right-2 text-white text-2xl font-bold z-[99999]" onClick={() => setShowVideo(false)}>
                                        ×
                                    </button>
                                </div>
                            </div>, document.body)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCharacterSection;

