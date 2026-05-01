"use client";

import { useEffect, useRef, useState } from "react";

export default function CraftPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => { video.play().catch(() => {}); };
    const events = ["touchstart", "click", "scroll"];
    events.forEach((e) => document.addEventListener(e, play, { once: true }));
    return () => events.forEach((e) => document.removeEventListener(e, play));
  }, []);

  return (
    <>
      {/* Full-screen hero video */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          disablePictureInPicture disableRemotePlayback
          controlsList="nodownload nofullscreen"
          onContextMenu={(e) => e.preventDefault()}
          className="absolute inset-0 w-full h-full object-cover select-none"
          poster="/images/showcase/02.png"
          onLoadedData={() => { videoRef.current?.play().catch(() => {}); }}
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 transition-all duration-[2000ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#007AFF]/60 text-[9px] tracking-[0.35em] font-medium mb-8 select-none">THE CRAFT</p>
          <h1 className="text-white font-light tracking-[0.05em] leading-tight text-3xl md:text-5xl lg:text-6xl max-w-2xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>
            安静地做好<br />骄傲地<span className="font-bold">展示</span>
          </h1>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-white/45 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Gallery placeholders */}
      <section className="py-32 md:py-40 bg-[#1D1D1F]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-24 md:mb-32">
            <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">IN MOTION</p>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              走进<span className="font-bold">制造</span>，眼见<span className="font-bold">为实</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[
              { title: "通风柜生产车间", desc: "精密钣金生产线，全自动激光切割", img: "/images/showcase/01.png" },
              { title: "实验台组装线", desc: "模块化拼装工艺，严苛的出厂检测", img: "/images/showcase/02.png" },
              { title: "风管预制工厂", desc: "洁净风管自动焊接，气密性逐根测试", img: "/images/showcase/03.png" },
              { title: "成品检验中心", desc: "ISO标准检测流程，每一件产品都有档案", img: "/images/showcase/01.png" },
            ].map((item, i) => (
              <div key={i} className="group block bg-black/50 overflow-hidden hover:bg-black/60 transition-all duration-700">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-[1500ms] ease-out" />
                </div>
                <div className="p-10 md:p-14">
                  <h3 className="text-lg md:text-xl font-bold text-white/80 select-none mb-2">{item.title}</h3>
                  <p className="text-sm text-white/25 font-light select-none">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <p className="text-white/15 text-sm font-light tracking-[0.15em] select-none">
              更多内容，敬请期待
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
