"use client";

import { useEffect, useRef, useCallback } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomRef = useRef(1);
  const rafRef = useRef(0);
  const animRef = useRef(0);

  const drawMask = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const dpr = window.devicePixelRatio || 1;
    const cw = w / dpr;
    const ch = h / dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Fill entire canvas with deep black
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, cw, ch);

    // Cut out "RAYHO" text — reveals video underneath
    ctx.globalCompositeOperation = "destination-out";

    const fontSize = Math.min(cw * 0.22, ch * 0.35) * zoomRef.current;
    ctx.font = `900 ${fontSize}px Inter, "Noto Sans SC", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("RAYHO", cw / 2, ch / 2);

    animRef.current = requestAnimationFrame(drawMask);
  }, []);

  // Scroll → zoom
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          zoomRef.current = 1 + window.scrollY * 0.00035;
          if (zoomRef.current > 1.12) zoomRef.current = 1.12;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
    };

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(drawMask);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [drawMask]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#050505]"
    >
      {/* Video — hidden on mobile, fallback to poster image */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        poster="/images/showcase/01.png"
        onLoadedData={() => {
          videoRef.current?.play().catch(() => {});
        }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile fallback image */}
      <img
        src="/images/showcase/01.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* Canvas text mask overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Scroll hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
