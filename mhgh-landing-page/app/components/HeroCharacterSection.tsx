"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { heroCharacters } from "./heroCharacters";

const systems = [
    { key: "Kim", img: "/kim.png", bg: "/bg-kim.webp" },
    { key: "Mộc", img: "/moc.png", bg: "/bg-moc.webp" },
    { key: "Thủy", img: "/thuy.png", bg: "/bg-thuy.webp" },
    { key: "Hỏa", img: "/hoa.png", bg: "/bg-hoa.webp" },
    { key: "Thổ", img: "/tho.png", bg: "/bg-tho.webp" }
];

const HeroCharacterSection = () => {
    const [selectedSystem, setSelectedSystem] = useState(systems[0].key);
    const systemHeroes = heroCharacters.filter(h => h.system === selectedSystem);
    const [selectedHeroIdx, setSelectedHeroIdx] = useState(0);
    const hero = systemHeroes[selectedHeroIdx] || systemHeroes[0];
    const [animClass, setAnimClass] = useState("");
    const [showVideo, setShowVideo] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        setAnimClass("");
        const timeout = setTimeout(() => setAnimClass("slide-left-normal"), 10);
        return () => clearTimeout(timeout);
    }, [selectedHeroIdx, selectedSystem]);

    // Auto change hero every 5 seconds
    useEffect(() => {
        if (systemHeroes.length <= 1) return;
        const interval = setInterval(() => {
            setSelectedHeroIdx(prevIdx => (prevIdx + 1) % systemHeroes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [systemHeroes.length, selectedSystem]);



    return (
        <section className="relative w-full flex flex-col md:flex-row items-center justify-center py-12 md:py-20 mb-20 mx-auto">
            {/* Mobile layout: tên tướng trên, hệ trái, tướng giữa, avatar phải, info dưới */}
            <div className="flex flex-col md:flex-row items-center md:w-1/2 w-full">
                {/* Tên tướng trên cùng khi mobile */}
                <div className="block md:hidden mb-2 w-full flex items-center justify-center z-30">
                    <Image src={hero.nameImg} alt="Tên tướng" width={400} height={80} className="object-contain w-[250px] h-[80px]" loading="lazy" />
                </div>
                <div className="flex flex-row w-full md:hidden">
                    {/* List hệ trái */}
                    <div className="flex flex-col gap-3 items-center justify-center pt-2 pl-2 z-30">
                        {systems.map((sys, idx) => (
                            <button
                                key={sys.key}
                                onClick={() => { setSelectedSystem(sys.key); setSelectedHeroIdx(0); }}
                                className={`transition-transform duration-300 cursor-pointer ${selectedSystem === sys.key ? 'scale-110' : 'hover:scale-110'} ${selectedSystem === sys.key ? 'w-11 h-11 md:w-[70px] md:h-[70px]' : 'w-9 h-9 md:w-[56px] md:h-[56px]'} mx-[2px] md:mx-0`}
                                style={{
                                    transform: `translateX(${(Math.pow(idx - 2, 2) * 12)}px)`
                                }}
                            >
                                <Image src={sys.img} alt={sys.key} width={44} height={44} className="w-full h-full" loading="lazy" />
                            </button>
                        ))}
                    </div>
                    {/* BG + tướng giữa */}
                    <div className="relative flex flex-col items-center justify-center w-full">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none w-[300px] h-[300px] min-[430px]:w-[300px] min-[430px]:h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px]">
                            <Image src={systems.find(s => s.key === selectedSystem)?.bg || ''} alt={`bg-${selectedSystem}`} width={300} height={300} className="w-full h-full opacity-80" loading="lazy" />
                        </div>
                        <div className="relative z-10 flex items-center justify-center w-[300px] h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px] min-[430px]:w-[300px] min-[430px]:h-[300px]">
                            <Image src={hero.fullImg} alt={hero.nameImg} width={180} height={180} className={`object-contain h-[300px] w-[300px] min-[430px]:w-[300px] min-[430px]:h-[300px] min-[375px]:w-[180px] min-[375px]:h-[180px] drop-shadow-xl ${animClass}`} priority loading="lazy" />
                        </div>
                    </div>
                    {/* Mini avatar phải */}
                    <div className="flex flex-col gap-3 items-center justify-center pt-1 pr-1">
                        {systemHeroes.map((h, idx) => (
                            <button
                                key={h.id}
                                onClick={() => setSelectedHeroIdx(idx)}
                                className={`rounded-full border-2 cursor-pointer w-15 h-15 xl:w-[60px] xl:h-[60px] aspect-square flex-shrink-0 flex-grow-0 ${selectedHeroIdx === idx ? "border-yellow-400" : "border-white"} bg-white p-1 transition mx-[2px] xl:mx-0`}
                                style={{ marginBottom: idx !== systemHeroes.length - 1 ? '4px' : '0' }}
                            >
                                <Image src={h.miniImg} alt={h.nameImg} width={32} height={32} className="w-full h-full rounded-full object-cover aspect-square" loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>
                {/* Desktop layout giữ nguyên */}
                <div className="hidden md:block relative w-full h-full">
                    {/* BG theo hệ - responsive md */}
                    <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none w-[550px] h-[550px]" style={{ overflow: 'visible' }}>
                        <Image src={systems.find(s => s.key === selectedSystem)?.bg || ''} alt={`bg-${selectedSystem}`} width={800} height={800} className="w-full h-full opacity-80" loading="lazy" />
                    </div>
                    {/* Full character - responsive md, căn giữa bg hệ */}
                    <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[550px] h-[550px] pointer-events-none select-none">
                        <Image src={hero.fullImg} alt={hero.nameImg} width={600} height={600} className={`object-contain w-[750px] h-[750px] drop-shadow-xl ${animClass}`} priority loading="lazy" />
                    </div>
                    {/* List hệ */}
                    <div className="absolute left-[95px] top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                        {systems.map((sys, idx) => (
                            <button
                                key={sys.key}
                                onClick={() => { setSelectedSystem(sys.key); setSelectedHeroIdx(0); }}
                                className={`transition-transform duration-300 cursor-pointer ${selectedSystem === sys.key ? 'scale-110' : 'hover:scale-110'}`}
                                style={{
                                    transform: `translateY(${(idx - 1) * 12}px) translateX(${(Math.pow(idx - 2, 2) * 18)}px)`
                                }}
                            >
                                <Image src={sys.img} alt={sys.key} width={selectedSystem === sys.key ? 110 : 90} height={selectedSystem === sys.key ? 110 : 90} loading="lazy" />
                            </button>
                        ))}
                    </div>
                    {/* Mini avatars của hệ - responsive md, căn giữa theo bg hệ */}
                    <div className="absolute left-2/3 top-[300px] -translate-x-1/2 flex gap-2 z-20">
                        {systemHeroes.map((h, idx) => (
                            <button
                                key={h.id}
                                onClick={() => setSelectedHeroIdx(idx)}
                                className={`rounded-full border-2 cursor-pointer ${selectedHeroIdx === idx ? "border-yellow-400" : "border-white"} bg-white p-1 transition`}
                            >
                                <Image src={h.miniImg} alt={h.nameImg} width={96} height={96} loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Right: Info */}
            <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12">
                <div className="hidden md:flex mb-4 w-[600px] h-[200px] items-center justify-center">
                    <Image src={hero.nameImg} alt="Tên tướng" width={400} height={80} className="object-contain w-full h-full" loading="lazy" />
                </div>
                <ul className="mb-4 space-y-2 text-lg">
                    <ul className="mt-6 space-y-2 text-lg">
                        <li className="flex items-center gap-2 text-base md:text-lg">
                            <Image src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                            <span className="font-bold text-xs md:text-2xl">Giới tính:</span> <span className="text-xs md:text-lg">{hero.gender}</span>
                        </li>
                        <li className="flex items-center gap-2 text-base md:text-lg">
                            <Image src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                            <span className="font-bold text-xs md:text-2xl">Võ học:</span> <span className="text-xs md:text-lg">{hero.martial}</span>
                        </li>
                        <li className="flex items-center gap-2 text-base md:text-lg">
                            <Image src="/dot.png" alt="dot" width={18} height={18} className="inline-block w-[10px] h-[10px] md:w-[18px] md:h-[18px]" loading="lazy" />
                            <span className="font-bold text-xs md:text-2xl">Đặc điểm:</span> <span className="text-xs md:text-lg">{hero.feature}</span>
                        </li>
                    </ul>
                </ul>
                <div className="relative">
                    <button type="button" onClick={() => setShowVideo(true)} className="focus:outline-none">
                        <Image src="/video-thumbnail.webp" alt="Special" width={400} height={120} className="rounded-xl w-[400px] h-auto md:w-[500px] cursor-pointer" loading="lazy" />
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
        </section>
    );
};

export default HeroCharacterSection;

