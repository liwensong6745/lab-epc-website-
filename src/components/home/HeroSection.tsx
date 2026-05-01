"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoY, setVideoY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVideoY(window.scrollY * 0.03);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => { video.play().catch(() => {}); };
    const events = ["touchstart", "click", "scroll"];
    events.forEach((e) => document.addEventListener(e, play, { once: true }));
    return () => events.forEach((e) => document.removeEventListener(e, play));
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen"
        onContextMenu={(e) => e.preventDefault()}
        className="absolute inset-0 w-full h-full md:h-[110%] object-cover select-none"
        style={{ transform: `translateY(${videoY}px)` }}
        poster="/images/showcase/01.png"
        onLoadedData={() => {
          videoRef.current?.play().catch(() => {});
        }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center text — cinematic title */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 transition-all duration-[2000ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-white font-light tracking-[0.15em] leading-none text-[14vw] md:text-[8vw] lg:text-[7vw] select-none"
          style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 100 }}>
          RAYHO
        </h1>
        <p className="text-white/70 text-sm md:text-base font-light tracking-[0.35em] mt-6 md:mt-8 select-none">
          瑞辉筑业 — 实验室 EPC 整体解决方案
        </p>
        <Link
          href="/contact"
          className="mt-12 md:mt-16 inline-flex items-center gap-2 px-10 py-3.5 border border-white/30 text-white/90 text-xs tracking-[0.25em] font-light hover:bg-white/10 hover:border-white/50 transition-all duration-700 select-none"
        >
          预约咨询
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/45 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

    </section>
  );
}
