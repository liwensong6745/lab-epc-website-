"use client";

import { useEffect, useRef, useState } from "react";

// ---- MEI BO Series — Parallax scroll effect ----
function MeiboParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far the section has scrolled into view (0 = just entered, 1 = fully passed)
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Image moves 30% faster than scroll
      setOffset(clamped * rect.height * 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-40 md:py-56 overflow-hidden bg-[#050505]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image column — parallax */}
          <div className="relative overflow-hidden" ref={imageRef}>
            <div
              className="aspect-[4/3] bg-[#0a0a0a] shadow-[0_4px_40px_rgba(0,0,0,0.3)]"
              style={{ transform: `translateY(${-offset}px)` }}
            >
              <img
                src="/images/showcase/03.png"
                alt="MEI BO Series 通风柜系统"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="relative">
            <p className="text-white/15 text-xs tracking-[0.3em] uppercase mb-6">
              MEI BO Series
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
              美博系列
              <span className="block text-xl md:text-2xl font-light text-white/30 mt-2">
                智能通风柜系统
              </span>
            </h3>
            <div className="space-y-6 text-white/40 font-light leading-relaxed text-base">
              <p>
                采用CFD气流模拟优化，确保面风速均匀性偏差低于5%，为实验人员提供A级安全防护。
              </p>
              <p>
                VAV变风量智能调节，实时响应柜门开度变化，节能效率提升40%以上。
              </p>
              <p>
                模块化结构设计，支持现场快速组装与后期灵活改造，维护周期缩短60%。
              </p>
            </div>

            <hr className="w-20 border-white/8 mt-12 mb-8" />

            <a
              href="/services/hvac-system"
              className="inline-flex items-center gap-2 text-white/50 text-sm font-medium tracking-wider hover:text-white transition-colors"
            >
              了解详情
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- OU RUI Series — Split-screen layout ----
function OuruiSplit() {
  return (
    <section className="bg-[#050505]">
      <hr className="border-white/5" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — large image */}
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#080808]">
          <img
            src="/images/showcase/02.png"
            alt="OU RUI Series 模块化实验室系统"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — bullet points */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-20 lg:py-32">
          <p className="text-white/15 text-xs tracking-[0.3em] uppercase mb-6">
            OU RUI Series
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            欧瑞系列
          </h3>
          <p className="text-xl font-light text-white/30 mb-16">
            模块化实验室系统
          </p>

          <div className="space-y-10">
            {[
              {
                num: "100%",
                title: "灵活性",
                desc: "全模块化组件，支持任意布局调整与功能重组，适应不断演进的科研需求",
              },
              {
                num: "0 工具",
                title: "免工具重组",
                desc: "专利卡扣式连接结构，无需专业工具即可完成模块拆装与重新配置",
              },
              {
                num: "48h",
                title: "极速交付",
                desc: "工厂预制、现场拼装，从下单到交付使用最快48小时内完成",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <span className="text-white/15 text-2xl font-bold tracking-tight shrink-0 leading-none">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/30 font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/services/process-design"
            className="inline-flex items-center gap-2 mt-14 text-white/50 text-sm font-medium tracking-wider hover:text-white transition-colors"
          >
            了解欧瑞系列
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---- Export ----
export default function ProductArchitecture() {
  return (
    <>
      <OuruiSplit />
      <MeiboParallax />
    </>
  );
}
