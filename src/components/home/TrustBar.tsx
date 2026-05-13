"use client";

import { useEffect, useRef } from "react";

export default function TrustBar() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => { video.play().catch(() => {}); };
    const events = ["touchstart", "click", "scroll"];
    events.forEach((e) => document.addEventListener(e, play, { once: true }));
    return () => events.forEach((e) => document.removeEventListener(e, play));
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-[#1D1D1F]">
      {/* Background video */}
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
        className="absolute inset-0 w-full h-full object-cover select-none"
        poster="/images/showcase/02.png"
        onLoadedData={() => {
          videoRef.current?.play().catch(() => {});
        }}
      >
        <source src="/video/TrustBar.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Single line — like a movie subtitle */}
      <div className="relative z-10 h-full flex items-end pb-12 md:pb-20 justify-center px-6 md:px-8">
        <div className="text-center">
          <p className="text-white/40 text-[11px] md:text-base font-light tracking-[0.06em] md:tracking-[0.2em] select-none max-w-[240px] md:max-w-none mx-auto leading-snug md:leading-relaxed"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            The best laboratory is the one you never have to think about.
          </p>
          <p className="text-white/40 text-[10px] md:text-sm font-light tracking-[0.06em] md:tracking-[0.15em] mt-2 md:mt-3 select-none">
            最好的实验室，是你从未察觉的存在
          </p>
        </div>
      </div>
    </section>
  );
}
