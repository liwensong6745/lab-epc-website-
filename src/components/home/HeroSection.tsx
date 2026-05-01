"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoY, setVideoY] = useState(0);

  // Scroll → video displacement
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVideoY(window.scrollY * 0.04);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Full-screen lab video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-[115%] object-cover hidden md:block"
        style={{ transform: `translateY(${videoY}px)` }}
        poster="/images/showcase/01.png"
        onLoadedData={() => {
          videoRef.current?.play().catch(() => {});
        }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile image */}
      <img
        src="/images/showcase/01.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* Scroll hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
