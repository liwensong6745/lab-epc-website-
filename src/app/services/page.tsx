import Link from "next/link";
import FumeHoodFan from "@/components/services/FumeHoodFan";

const spreads = [
  {
    en: "Precision Lab Furniture", title: "实验室家具系统",
    desc: "一张好台面，经得住试剂的反复侵蚀、仪器的常年荷载、时间的默然注视。SEFA 8M 不是终点，是起点。模块化的意义在于——实验室会变，家具不该成为变动的阻力。",
    details: ["类目 | 中央岛台 · 边台 · 仪器台 · 天平台", "台面 | 陶瓷 · 理化板 · 环氧树脂板", "结构 | 全钢框架 · 模块化组合 · 悬挂系统", "品质 | SEFA 8M 认证 · 耐腐蚀 · 承重 · 阻燃"],
    img: "/images/showcase/01.png",
  },
  {
    en: "Precision Fume Hoods", title: "通风柜与安全",
    desc: "空气是看不见的，风险也是。一组合格的气流数据，一道安静运转的辅助气流，一扇坠不下去的调节门——把看不见的东西控制住，才敢说安全。能耗降下来是顺便的，极窄边框省出来的空间也是。说到底，一个好的通风柜不需要你注意到它在工作。",
    details: ["气流 | 0.2–0.5m/s 自适应 · ASHRAE 110-2016 & EN 14175-3", "材质 | 1.2mm 冷轧钢 · SEFA 级环氧喷涂", "安全 | 防坠落 · 防滴落 · 限高锁定 · 压力释放", "配置 | 防火柜 · 废液柜 · 垃圾柜 · 深度设备集成"],
    img: "/images/showcase/02.png",
    reverse: true,
  },
  {
    en: "Infrastructure", title: "实验室基础配套",
    desc: "供气管路、纯水系统、废水处理、洁净空调——看不见的地方，才见真功夫。管路隐藏式走线，气压自动监测，一键紧急切断，每一处都考虑到了极端情况下的安全冗余。",
    details: ["高纯气体管路系统", "中央纯水 |超纯水", "实验室废水环保处理", "洁净空调 & 环境控制"],
    img: "/images/showcase/03.png",
  },
  {
    en: "Custom", title: "按需定制方案",
    desc: "没有两个实验室是相同的。我们根据空间布局、科研流程和使用习惯，从家具选型到系统集成，量身定制每一套方案。方案确定前，提供 3D 效果图与全尺寸样板间。",
    details: ["空间规划 & 3D 方案设计", "家具 & 设备选型建议", "现场测量 & 安装调试", "终身维护 · 2小时响应"],
    img: "/images/showcase/04.png",
    reverse: true,
  },
];

const transitions = [
  { zh: "好的设计，就是消失的设计", en: "Good design is invisible" },
  { zh: "看不见的地方，才见真功夫", en: "Where mastery hides" },
  { zh: "没有两个实验室是相同的", en: "No two labs are alike" },
];

function ChapterBreak({ zh, en, accent }: { zh: string; en: string; accent: string }) {
  return (
    <div className="py-28 md:py-36 relative overflow-hidden">
      {/* Flowing color wash behind text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center">
        <div
          className="w-[340px] h-[100px] rounded-full blur-2xl animate-blob-1 opacity-40"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 text-center">
        <div className="w-6 h-px bg-black/8 mx-auto mb-8" />
        <p className="text-sm text-black/30 font-light tracking-[0.3em] select-none"
          style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
          {zh}
        </p>
        <p className="text-[10px] text-black/20 font-light tracking-[0.2em] mt-3 select-none">
          {en}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const accentColors = [
    "rgba(0,122,255,0.5)",
    "rgba(6,182,212,0.4)",
    "rgba(139,92,246,0.4)",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">DURABLE BY DESIGN</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            每一个<span className="font-bold">细节</span>，<br />都经得起<span className="font-bold">审视</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            模块化实验室家具与系统集成，精密制造，从台面到管路
          </p>
          <div className="w-40 h-[0.5px] bg-gradient-to-r from-[#007AFF]/10 via-[#007AFF]/15 to-transparent mt-12" />
        </div>
      </section>

      {/* Editorial spreads with narrative chapter breaks */}
      <section className="pb-28 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col">
            {spreads.map((s, i) => (
              <div key={i}>
                <div
                  className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-8 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] relative lg:min-h-[620px]`}
                >
                  {/* Watermark specs overlay */}
                  {i === 0 && (
                    <div className="absolute inset-0 pointer-events-none select-none z-20">
                      <span className="absolute top-[12%] left-[8%] text-[48px] md:text-[60px] lg:text-[72px] font-black text-black/[0.025] leading-none tracking-tighter">SEFA&nbsp;8M</span>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute inset-0 pointer-events-none select-none z-20">
                      <span className="absolute top-[10%] left-[8%] text-[48px] md:text-[60px] lg:text-[72px] font-black text-black/[0.025] leading-none tracking-tighter">ASHRAE&nbsp;110</span>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute inset-0 pointer-events-none select-none z-20">
                      <span className="absolute top-[10%] left-[8%] text-[48px] md:text-[60px] lg:text-[72px] font-black text-black/[0.025] leading-none tracking-tighter">MEP</span>
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute inset-0 pointer-events-none select-none z-20">
                      <span className="absolute top-[10%] left-[8%] text-[48px] md:text-[60px] lg:text-[72px] font-black text-black/[0.025] leading-none tracking-tighter">BESPOKE</span>
                    </div>
                  )}
                  <div className="lg:w-3/5 overflow-hidden">
                    {i === 1 ? (
                      <FumeHoodFan />
                    ) : (
                      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                        <img src={s.img} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  <div className="lg:w-2/5 flex flex-col justify-center px-10 md:px-14 py-16 md:py-24">
                    <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-4 select-none">{s.en}</p>
                    <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-6 select-none"
                      style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                      {s.title}
                    </h2>
                    <div className="w-8 h-px bg-black/8 mb-6" />
                    {(() => {
                      const kwMap: Record<number, { regex: RegExp; words: string[] }> = {
                        0: { regex: /(侵蚀|荷载|模块化|SEFA 8M|起点|阻力)/g, words: ["侵蚀", "荷载", "模块化", "SEFA 8M", "起点", "阻力"] },
                        1: { regex: /(风险|安全|空间)/g, words: ["风险", "安全", "空间"] },
                        2: { regex: /(看不见|安全冗余|一键紧急切断|隐藏式走线|自动监测)/g, words: ["看不见", "安全冗余", "一键紧急切断", "隐藏式走线", "自动监测"] },
                        3: { regex: /(量身定制|3D 效果图|全尺寸样板间|2小时响应|终身维护)/g, words: ["量身定制", "3D 效果图", "全尺寸样板间", "2小时响应", "终身维护"] },
                      };
                      const entry = kwMap[i];
                      if (!entry) {
                        return <p className="text-sm text-black/40 font-light leading-relaxed mb-8 select-none">{s.desc}</p>;
                      }
                      return (
                        <p className="text-sm text-black/40 font-light leading-relaxed mb-8 select-none">
                          {s.desc.split(entry.regex).map((part, j) =>
                            entry.words.includes(part) ? (
                              <span key={j} className="text-[#007AFF]/60 font-bold">{part}</span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    })()}
                    <ul className="space-y-2 mb-10">
                      {s.details.map((d) => {
                        const parts = d.split(" | ");
                        return (
                          <li key={d} className="flex items-start gap-2 text-xs text-black/30 font-light select-none whitespace-nowrap">
                            <span className="w-1 h-1 rounded-full bg-[#007AFF]/30 shrink-0 mt-1.5" />
                            {parts.length === 2 ? (
                              <>
                                <span>{parts[0]}</span>
                                <span className="text-[#007AFF]/30 mx-0.5">|</span>
                                <span>{parts[1]}</span>
                              </>
                            ) : (
                              d
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    {i === spreads.length - 1 && (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 text-black/20 hover:text-[#007AFF] transition-colors duration-500 group select-none"
                      >
                        <span className="text-xs tracking-[0.2em]">预约咨询</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Chapter break with flowing color */}
                {i < transitions.length && (
                  <ChapterBreak zh={transitions[i].zh} en={transitions[i].en} accent={accentColors[i]} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
