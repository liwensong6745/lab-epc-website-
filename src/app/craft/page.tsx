"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/showcase/01.png",
  "/images/showcase/02.png",
  "/images/showcase/03.png",
  "/images/showcase/04.png",
];

export default function CraftPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-black">
        <img
          src="/images/光影.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center px-6 transition-all duration-[2000ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#007AFF]/50 text-[9px] tracking-[0.35em] font-medium mb-8 select-none text-center">THE CRAFT</p>
          <h1 className="text-white font-light tracking-[0.05em] leading-tight text-3xl md:text-5xl lg:text-6xl max-w-2xl"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>
            <span className="block -ml-12 md:-ml-20">安静地做好</span>
            <span className="block ml-12 md:ml-20 mt-2">骄傲地<span className="font-bold">展示</span></span>
          </h1>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* Photo essay */}
      <section className="relative bg-[#F5F5F7] py-24 md:py-36">
        {/* Large watermark — sticky, follows viewport through this section */}
        <div className="absolute inset-0 pointer-events-none select-none z-10" style={{ clipPath: "inset(0 0 0 0)" }}>
          <div className="sticky top-1/2 h-0 flex items-center justify-between"
            style={{
              paddingLeft: "max(0.5rem, calc((100vw - 960px) / 2 + 0.5rem))",
              paddingRight: "max(0.5rem, calc((100vw - 960px) / 2 + 0.5rem))",
            }}>
            <span className="text-black/[0.06] font-black tracking-[0.15em] block"
              style={{
                fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                writingMode: "vertical-rl",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 0.8,
                transform: "rotate(180deg)",
              }}>
              RAYHO
            </span>
            <span className="text-black/[0.06] font-black tracking-[0.15em] block"
              style={{
                fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                writingMode: "vertical-rl",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 0.8,
              }}>
              RAYHO
            </span>
          </div>
        </div>

        <div className="max-w-[960px] mx-auto px-8 lg:px-16 flex flex-col gap-32 md:gap-44">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover opacity-85"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-black/30 text-base md:text-lg font-light tracking-tight leading-relaxed"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            好的东西，<br />都是安静的
          </p>
          <p className="text-black/15 text-xs font-light tracking-[0.2em] mt-8"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            Good things are quiet
          </p>
        </div>
      </section>
    </>
  );
}
