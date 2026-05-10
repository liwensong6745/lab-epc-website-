"use client";

import FumeHoodFan from "@/components/services/FumeHoodFan";
import { LuWrench, LuDroplet, LuRecycle, LuWind } from "react-icons/lu";

/* ── Inline icon helper (mirrors MagazineSpread) ── */
function IconFor({ label }: { label: string }) {
  const cls = "w-3 h-3 text-[#007AFF]/40";
  const icon = (d: React.ReactNode) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{d}</svg>;
  switch (label) {
    case "台面": return icon(<><rect x="4" y="4" width="16" height="3" rx="1" /><rect x="4" y="10" width="16" height="3" rx="1" /><rect x="4" y="16" width="16" height="3" rx="1" /></>);
    case "框架": return icon(<><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /></>);
    case "承重": return icon(<><line x1="12" y1="5" x2="12" y2="19" /><polyline points="8 15 12 19 16 15" /><line x1="5" y1="5" x2="19" y2="5" /></>);
    case "精度": return icon(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></>);
    case "防腐": return icon(<><path d="M12 2L4 7v5c0 5.25 3.5 10 8 11.5 4.5-1.5 8-6.25 8-11.5V7l-8-5z" /><line x1="9" y1="12" x2="15" y2="12" /></>);
    case "安全": return icon(<><path d="M12 2L3 7v5c0 6 4 10 9 12 5-2 9-6 9-12V7l-9-5z" /><polyline points="8 12 11 15 16 9" /></>);
    default: return icon(<circle cx="12" cy="12" r="4" />);
  }
}

function DetailItem({ d }: { d: string }) {
  const parts = d.split(" | ");
  const label = parts.length === 2 ? parts[0] : "";
  return (
    <li className="flex items-center gap-3 text-xs font-light select-none border border-black/[0.05] rounded-xl px-4 py-3 hover:border-black/[0.1] hover:bg-black/[0.01] transition-all duration-300">
      <span className="w-5 h-5 rounded-md bg-[#007AFF]/6 flex items-center justify-center shrink-0">
        <IconFor label={label} />
      </span>
      {parts.length === 2 ? (
        <><span className="text-black/55 font-medium whitespace-nowrap">{parts[0]}</span><span className="text-[#007AFF]/30 mx-1 shrink-0">|</span><span className="text-black/40">{parts[1]}</span></>
      ) : (
        <span className="text-black/40">{d}</span>
      )}
    </li>
  );
}

/* ── Chapter break (same as before) ── */
function ChapterBreak({ zh, en }: { zh: string; en: string }) {
  return (
    <div className="py-28 md:py-36 relative overflow-hidden">
      <div className="relative z-10 text-center">
        <div className="w-6 h-px bg-black/8 mx-auto mb-8" />
        <p className="text-sm text-black/30 font-light tracking-[0.3em] select-none"
          style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{zh}</p>
        <p className="text-[10px] text-black/20 font-light tracking-[0.2em] mt-3 select-none">{en}</p>
      </div>
    </div>
  );
}

const indentStyle = { textIndent: "2em" };

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const s1 = {
  en: "Precision Lab Furniture",
  title: "实验室家具系统",
  desc: "十五年前我们开始做实验室家具的时候，没有人觉得一张台面值得认真对待。但好的东西有一种安静的气质——台面的触感是温润的，抽屉推回去的阻尼刚好，焊缝摸上去像是长在一起的。这些感受来自一些你看不到的坚持：陶瓷台面在液氮与高温之间反复冲击，理化板在浓酸里一泡就是几天，钢框架在炉子里缓慢退火，让应力一点一点释放干净。不是标准要求，是十五年做同一件事教会了我们分寸。它们安静地待在那里，十年后依然可靠。",
  details: [
    "台面 | 陶瓷、理化板、环氧树脂，全系 SEFA 8M 认证",
    "框架 | 1.2mm 冷轧钢板 · 焊后整体热处理 · 静电环氧喷涂",
    "承重 | 中央台面 ≥ 400kg/m²，仪器台 ≥ 600kg/m²",
    "精度 | 数控冲裁 ±0.1mm · 折弯角度偏差 ≤ 0.5°",
    "防腐 | 环氧涂层盐雾测试 ≥ 1000h，耐 37% 盐酸 72h 无变化",
  ],
  cards: ["/images/图1-1.png", "/images/图1-2.png", "/images/图1-3.png"],
};

const s2 = {
  en: "Precision Fume Hoods",
  title: "通风柜与安全",
  desc: "一个通风柜在工作时，你几乎听不到声音。调节门滑过指尖的力度不轻不重，气流稳定到让你忘了它正在以每秒数百升的速度替换着空气。这份不动声色，是因为每 0.1 秒有一次采样、变频器在实时修正转速、补风系统在操作口前方织着一道看不见的气幕。真正可靠的东西往往就是这样——不响、不亮、不弹通知，但断电那一刻自动切备用回路，风机故障三秒接管。它不发一言，但每个深夜都在说同一句话：我在。",
  details: [
    "气流 | 面风速 0.3–0.5m/s 自适应 · ASHRAE 110 & EN 14175-3 双标",
    "控制 | 0.1s 采样 · 红外位移传感器 · VAV 变频调速",
    "补风 | 主动气幕 · 补风角度可调 · 避免操作口紊流",
    "安全 | 双路供电 · 应急排风 3s 接管 · 防坠落钢丝绳",
  ],
};

const s3 = {
  en: "Infrastructure",
  title: "实验室基础配套",
  desc: "供气管路、纯水系统、废水处理、洁净空调——看不见的地方，才见真功夫。管路隐藏式走线，气压自动监测，一键紧急切断。每一处都考虑到了极端情况下的安全冗余。这些不是写进合同的条款，是让使用者每天安然走进实验室的理由。",
  items: [
    { label: "高纯气体管路系统", desc: "N₂、Ar、He 等特种气体从不锈钢管路输送到每一个用气点，自动压力监测，一键紧急切断，泄漏报警联动。" },
    { label: "中央纯水 / 超纯水系统", desc: "自来水经多级处理后达到 18.2 MΩ·cm 超纯水标准，全循环管路设计，无死角，抑制细菌滋生。" },
    { label: "实验室废水环保处理", desc: "实验废水经过酸碱中和、重金属沉淀、有机降解三级处理，达标后方可排放，全过程在线监测。" },
    { label: "洁净空调 & 环境控制", desc: "万级至千级洁净度控制，恒温恒湿运行，HEPA 末端高效过滤，风量根据室内负荷自动调节。" },
  ],
};

const s4 = {
  en: "Tailored",
  title: "因需而变",
  desc: "你的实验室，只像你自己。我们不复制，只理解，最好的方案是从你的实验室里找到的。",
  steps: [
    { title: "需求调研 & 空间规划", desc: "每个项目开始之前，我们做的第一件事不是画图，是去看。看研究员的取试剂高度，看走廊推车几点经过，看上午的阳光从哪扇窗进来。这些不会写进招标文件，但会写进我们的第一根线。先有动线，后有空间——样品怎么进、废弃物怎么出、人从工位到通风柜走几步，动线清楚了，空间自然长出来。" },
    { title: "3D 方案设计 & BIM 协同", desc: "Revit 全专业建模，建筑、结构、机电、管路在同一模型里碰撞、妥协、找到最优解。不是画完图再检查——管线打架在设计阶段就解决了。方案确定前提供 3D 效果图与全尺寸样板间，你不需要看懂图纸，你只需要看到未来实验室的样子。" },
    { title: "精密制造 & 品质检验", desc: "自有工厂制造，不外包。数控冲裁精度控制在 ±0.1mm，钢框架焊接后整体退火，让应力一点一点释放干净。每一张台面出厂前逐张通过 SEFA 8M 全套测试，每一台通风柜逐台通过 ASHRAE 110 面风速检测——不是行业里常见的抽检，是每一件都测。" },
    { title: "现场安装 & 分阶段验收", desc: "自有施工团队进场，项目经理全程驻场，不转包。安装、调试、培训分阶段推进，每一阶段验收签字后才进入下一步。竣工 BIM 模型随交付一起归档——十年后你要改造实验室，打开模型就知道当初每一根管线怎么走的、每一个阀门在什么位置。终身维护，2 小时响应。" },
  ],
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function ServicesPage() {
  return (
    <>
      {/* ═══════ Hero — Full-bleed ═══════ */}
      <section className="relative bg-white overflow-hidden" style={{ height: "100vh" }}>
        <img src="/images/hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
            <p className="text-white/60 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">DURABLE BY DESIGN</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-3xl select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              每一个<span className="font-bold">细节</span>，<br />都经得起<span className="font-bold">审视</span>
            </h1>
            <p className="text-white/50 text-sm font-light mt-6 max-w-lg select-none leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              模块化实验室家具与系统集成，精密制造，从台面到管路
            </p>
            <div className="w-40 h-[0.5px] bg-white/20 mt-12" />
          </div>
        </div>
      </section>

      {/* ═══════ Spread 1 — Furniture ═══════ */}
      <section className="bg-white pt-32 md:pt-48 pb-0">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-center">

            {/* Image */}
            <div className="lg:w-[56%] rounded-2xl overflow-visible relative -translate-x-8">
              <img src="/images/实验室家具系统.png" alt="" className="w-full h-auto object-contain select-none" draggable={false} />
              <div className="absolute inset-0 pointer-events-none select-none z-10 flex items-center justify-center">
                <span className="text-[72px] md:text-[96px] lg:text-[120px] font-black text-black/[0.04] leading-none tracking-tighter select-none">RAYHO</span>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-[44%]">
              <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s1.en}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-8 select-none"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s1.title}</h2>
              <div className="w-10 h-px bg-black/8 mb-6" />
              <p className="text-sm text-black/50 font-light leading-relaxed mb-8 select-none" style={indentStyle}>{s1.desc}</p>
              <ul className="space-y-2">
                {s1.details.map((d) => <DetailItem key={d} d={d} />)}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ Spread 2 — 3D fume hood showcase ═══════ */}
      <section className="bg-white pt-20 md:pt-28 pb-32 md:pb-48">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-center">

            {/* FumeHoodFan 3D */}
            <div className="lg:w-[56%] rounded-2xl overflow-hidden relative">
              <FumeHoodFan />
              <div className="absolute inset-0 pointer-events-none select-none z-10 flex items-center justify-center">
                <span className="text-[72px] md:text-[96px] lg:text-[120px] font-black text-black/[0.04] leading-none tracking-tighter select-none">RAYHO</span>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-[44%]">
              <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s2.en}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-8 select-none"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s2.title}</h2>
              <div className="w-10 h-px bg-black/8 mb-6" />
              <p className="text-sm text-black/50 font-light leading-relaxed mb-8 select-none" style={indentStyle}>{s2.desc}</p>
              <ul className="space-y-2">
                {s2.details.map((d) => <DetailItem key={d} d={d} />)}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ Interlude ═══════ */}
      <section className="relative bg-[#F5F5F7]">
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <img src="/images/插页图.png" alt="" className="w-full h-auto block" draggable={false} />
        </div>
        <div className="text-center py-16 md:py-24">
          <p className="text-black/40 text-lg md:text-xl font-light tracking-tight leading-relaxed select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            不值得信赖的防护<br />本身就是一种风险
          </p>
          <p className="text-black/25 text-sm font-light tracking-[0.2em] mt-4 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            Trust is invisible until it fails
          </p>
        </div>
      </section>

      {/* ═══════ Spread 3 — Infrastructure card grid ═══════ */}
      <section className="bg-white py-32 md:py-48">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Top — centered heading */}
          <div className="text-center mb-12 md:mb-20">
            <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s3.en}</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s3.title}</h2>
            <div className="w-10 h-px bg-black/8 mx-auto mt-6 mb-8" />
            <p className="text-sm text-black/40 font-light leading-relaxed max-w-xl mx-auto select-none">{s3.desc}</p>
          </div>

          {/* Full-bleed image — capped height, frosted glass text badge */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 mb-16 overflow-hidden" style={{ maxHeight: "72vh" }}>
            <img src="/images/系统集成.png" alt="" className="w-full h-full object-cover block" draggable={false} style={{ maxHeight: "72vh" }} />
            {/* Frosted glass pill with flowing color, links to contact */}
            <style>{`@keyframes flow { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }`}</style>
            <div className="absolute inset-0 flex items-center justify-center select-none" style={{ paddingTop: "2.5%" }}>
              <a href="/contact" className="relative px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/50 tracking-[0.15em] overflow-hidden hover:bg-white/10 hover:text-white/70 transition-all duration-500"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200, fontSize: "clamp(1.25rem, 3.5vw, 3rem)" }}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/12 via-[#6C5CE7]/12 to-[#007AFF]/12 bg-[length:200%_100%] animate-[flow_4s_ease-in-out_infinite] rounded-full" />
                <span className="relative z-10">RAYHO</span>
              </a>
            </div>
          </div>

          {/* 4 annotation labels below image */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[900px] mx-auto">
            {(() => {
              const icons = [LuWrench, LuDroplet, LuRecycle, LuWind];
              return s3.items.map((item, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={item.label} className="bg-[#F5F5F7] rounded-2xl p-6 border border-black/[0.04] hover:-translate-y-1 hover:shadow-lg hover:border-black/[0.08] transition-all duration-500">
                    <div className="w-9 h-9 rounded-lg bg-[#007AFF]/6 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-[18px] h-[18px] text-[#007AFF]/50" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-black/55 font-light select-none mb-1.5 text-center">{item.label}</p>
                    {item.desc && <p className="text-xs text-black/30 font-light leading-relaxed text-center select-none">{item.desc}</p>}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* ═══════ Spread 4 — Staggered process ═══════ */}
      <section className="bg-[#F5F5F7] pt-24 pb-32 md:pt-36 md:pb-48">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">

          {/* Top — centered heading block */}
          <div className="text-center mb-20 md:mb-28">
            <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s4.en}</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#1D1D1F] tracking-tight leading-tight select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s4.title}</h2>
            <div className="w-10 h-px bg-black/8 mx-auto mt-6 mb-8" />
            <p className="text-sm text-black/45 font-light leading-relaxed max-w-xl mx-auto select-none">{s4.desc}</p>
          </div>

          {/* Four-step process — diagonal cascade, text tucked close to divider */}
          <div className="hidden md:block relative" style={{ height: "1350px" }}>
            {/* Vertical divider between left & right columns — ends at IMG 04 bottom */}
            <div className="absolute top-0 left-1/2 w-px bg-black/[0.1]" style={{ transform: "translateX(-0.5px)", height: "1320px" }} />

            {/* ── IMG 01 — left, top ── */}
            <div className="absolute top-0 left-[3%] w-[44%] h-[300px] rounded-2xl overflow-hidden">
              <img src="/images/process-01.png" alt="" className="w-full h-full object-cover opacity-90" draggable={false} />
            </div>
            {/* TEXT 01 — right, close to divider */}
            <div className="absolute top-0 right-[3%] w-[44%]">
              <p className="text-[10px] text-[#007AFF]/35 tracking-[0.25em] font-medium mb-2 select-none text-right">PHASE</p>
              <span className="text-5xl lg:text-6xl text-[#007AFF]/25 select-none leading-none block text-right"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>01</span>
              <h3 className="text-xl lg:text-2xl font-light text-[#1D1D1F] mt-3 mb-3 select-none text-right"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{s4.steps[0].title}</h3>
              <p className="text-base text-black/45 font-light leading-relaxed select-none" style={{ textIndent: "2em" }}>{s4.steps[0].desc}</p>
            </div>

            {/* ── IMG 02 — right, cascades from IMG 01 bottom ── */}
            <div className="absolute top-[340px] right-[3%] w-[44%] h-[300px] rounded-2xl overflow-hidden">
              <img src="/images/process-02.png" alt="" className="w-full h-full object-cover opacity-90" draggable={false} />
            </div>
            {/* TEXT 02 — left, close to divider */}
            <div className="absolute top-[360px] left-[3%] w-[44%]">
              <p className="text-[10px] text-[#007AFF]/35 tracking-[0.25em] font-medium mb-2 select-none">PHASE</p>
              <span className="text-5xl lg:text-6xl text-[#007AFF]/25 select-none leading-none block"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>02</span>
              <h3 className="text-xl lg:text-2xl font-light text-[#1D1D1F] mt-3 mb-3 select-none"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{s4.steps[1].title}</h3>
              <p className="text-base text-black/45 font-light leading-relaxed select-none" style={{ textIndent: "2em" }}>{s4.steps[1].desc}</p>
            </div>

            {/* ── IMG 03 — left, cascades from IMG 02 bottom ── */}
            <div className="absolute top-[680px] left-[3%] w-[44%] h-[300px] rounded-2xl overflow-hidden">
              <img src="/images/process-03.png" alt="" className="w-full h-full object-cover opacity-90" draggable={false} />
            </div>
            {/* TEXT 03 — right, close to divider */}
            <div className="absolute top-[680px] right-[3%] w-[44%]">
              <p className="text-[10px] text-[#007AFF]/35 tracking-[0.25em] font-medium mb-2 select-none text-right">PHASE</p>
              <span className="text-5xl lg:text-6xl text-[#007AFF]/25 select-none leading-none block text-right"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>03</span>
              <h3 className="text-xl lg:text-2xl font-light text-[#1D1D1F] mt-3 mb-3 select-none text-right"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{s4.steps[2].title}</h3>
              <p className="text-base text-black/45 font-light leading-relaxed select-none" style={{ textIndent: "2em" }}>{s4.steps[2].desc}</p>
            </div>

            {/* ── IMG 04 — right, cascades from IMG 03 bottom ── */}
            <div className="absolute top-[1020px] right-[3%] w-[44%] h-[300px] rounded-2xl overflow-hidden">
              <img src="/images/process-04.png" alt="" className="w-full h-full object-cover opacity-90" draggable={false} />
            </div>
            {/* TEXT 04 — left, close to divider */}
            <div className="absolute top-[1040px] left-[3%] w-[44%]">
              <p className="text-[10px] text-[#007AFF]/35 tracking-[0.25em] font-medium mb-2 select-none">PHASE</p>
              <span className="text-5xl lg:text-6xl text-[#007AFF]/25 select-none leading-none block"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>04</span>
              <h3 className="text-xl lg:text-2xl font-light text-[#1D1D1F] mt-3 mb-3 select-none"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{s4.steps[3].title}</h3>
              <p className="text-base text-black/45 font-light leading-relaxed select-none" style={{ textIndent: "2em" }}>{s4.steps[3].desc}</p>
            </div>
          </div>
          {/* Mobile: single column */}
          <div className="flex md:hidden flex-col gap-12">
            {s4.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={`/images/process-0${idx + 1}.png`} alt="" className="w-full h-full object-cover opacity-90" draggable={false} />
                </div>
                <div>
                  <p className="text-[10px] text-[#007AFF]/30 tracking-[0.3em] font-medium mb-2 select-none">{(idx + 1).toString().padStart(2, "0")}</p>
                  <h3 className="text-lg font-light text-[#1D1D1F] mb-2 select-none" style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>{step.title}</h3>
                  <p className="text-sm text-black/45 font-light leading-relaxed select-none">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════ Closing — Minimal, echoes homepage CTASection ═══════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-black/55 text-base md:text-lg font-light tracking-tight leading-relaxed select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              每个实验室都有自己的性格，<br />我们负责让它不被辜负。
            </p>
            <p className="text-black/25 text-xs font-light tracking-[0.15em] mt-4 mb-16 select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              Every lab has its own character. We make sure it stays true.
            </p>
            <p className="text-black/20 text-xs font-light tracking-[0.2em] select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              Ready to start?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 mt-5 px-10 py-3.5 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium rounded-full hover:bg-[#007AFF] transition-all duration-500 select-none"
            >
              预约咨询
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
