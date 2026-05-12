function IconFor({ label }: { label: string }) {
  const cls = "w-3 h-3 text-[#007AFF]/40";
  const icon = (d: React.ReactNode) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{d}</svg>;
  switch (label) {
    case "台面": return icon(<><rect x="4" y="4" width="16" height="3" rx="1" /><rect x="4" y="10" width="16" height="3" rx="1" /><rect x="4" y="16" width="16" height="3" rx="1" /></>);
    case "框架": return icon(<><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /></>);
    case "承重": return icon(<><line x1="12" y1="5" x2="12" y2="19" /><polyline points="8 15 12 19 16 15" /><line x1="5" y1="5" x2="19" y2="5" /></>);
    case "精度": return icon(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></>);
    case "防腐": return icon(<><path d="M12 2L4 7v5c0 5.25 3.5 10 8 11.5 4.5-1.5 8-6.25 8-11.5V7l-8-5z" /><line x1="9" y1="12" x2="15" y2="12" /></>);
    case "气流": return icon(<><path d="M2 12h4l2-6 4 14 2-8h4" /></>);
    case "控制": return icon(<><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><circle cx="4" cy="12" r="2" /><circle cx="12" cy="10" r="2" /><circle cx="20" cy="14" r="2" /></>);
    case "补风": return icon(<><circle cx="12" cy="12" r="9" /><path d="M12 3a3 6 0 100 12" /><path d="M12 9a3 6 0 100 12" /></>);
    case "安全": return icon(<><path d="M12 2L3 7v5c0 6 4 10 9 12 5-2 9-6 9-12V7l-9-5z" /><polyline points="8 12 11 15 16 9" /></>);
    case "材质": return icon(<><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><path d="M8 10V4" /><path d="M16 10V4" /></>);
    case "前期调研": return icon(<><circle cx="12" cy="12" r="9" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /><circle cx="12" cy="12" r="3" /></>);
    case "数字推演": return icon(<><rect x="4" y="8" width="16" height="12" rx="1" /><polyline points="8 8 12 4 16 8" /><line x1="12" y1="12" x2="12" y2="16" /><circle cx="12" cy="17" r="0.5" fill="currentColor" /></>);
    case "项目执行": return icon(<><path d="M9 12l2 2 4-4" /><rect x="4" y="3" width="16" height="18" rx="2" /></>);
    case "实验配套": return icon(<><circle cx="12" cy="12" r="3" /><path d="M12 1v3m0 16v3M1 12h3m16 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" /></>);
    case "标准保障": return icon(<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="12" y2="17" /></>);
    default: return icon(<circle cx="12" cy="12" r="4" />);
  }
}

function DetailList({ details }: { details: string[] }) {
  return (
    <ul className="space-y-2">
      {details.map((d) => {
        const parts = d.split(" | ");
        const label = parts.length === 2 ? parts[0] : "";
        return (
          <li key={d} className="flex items-center gap-3 text-xs font-light border border-black/[0.05] rounded-xl px-4 py-3 hover:border-black/[0.1] hover:bg-black/[0.01] transition-all duration-300">
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
      })}
    </ul>
  );
}

const indentStyle = { textIndent: "2em" };

const s1 = {
  en: "The Craft",
  title: <>把<span className="font-bold">简单</span>的事，<br />做到<span className="font-bold">无可挑剔</span></>,
  desc: "好的东西有一种安静的气质。台面的触感是温润的，抽屉推回去的阻尼刚好，焊缝摸上去像是长在一起的。这些感受，来自一些你看不到的坚持——不是更高的标准，是判断。不是更贵的材料，是分寸。一放下去，就在那里，十年过去了还靠得住。",
  details: [
    "台面 | 陶瓷、理化板、环氧树脂，全系通过检测认证",
    "框架 | 1.0–1.2mm 冷轧钢板 · 整体热处理 · 静电环氧粉末喷涂",
    "承重 | 中央台面设计荷载 ≥ 400kg/m²，仪器台 ≥ 600kg/m²",
    "精度 | 数控冲裁 ±0.1mm · 折弯角度偏差 ≤ 0.5° · 焊道余高 ≤ 0.3mm",
    "防腐 | 盐雾测试 ≥ 200h，耐 37% 盐酸 72h 无变化",
  ],
  img: "/images/图1-1.png",
  img2: "/images/图1-2.png",
  img3: "/images/图1-3.png",
};

const s2 = {
  en: "Invisible Shield",
  title: <>最<span className="font-bold">好</span>的保护，<br />是你<span className="font-bold">感觉不到</span>它的存在</>,
  desc: "一个通风柜在工作时，你几乎听不到声音。调节门滑过指尖的力度不轻不重，气流稳定到让你忘了它正在以每秒数百升的速度替换着空气。这份不动声色，是因为每 0.1 秒有一次采样、变频器在实时修正转速、补风系统在操作口前方织着一道看不见的气幕。真正可靠的东西往往就是这样——不响、不亮、不弹通知，但断电那一刻自动切备用回路，风机故障三秒接管。它不发一言，但每个深夜都在说同一句话：我在。",
  details: [
    "气流 | 面风速 0.3–0.5m/s 自适应，通过 ASHRAE 110-2016 & EN 14175-3",
    "控制 | 红外位移传感器 · VAV 变频调速 · 排风柜面风速实时显示",
    "补风 | 主动式气幕设计 · 补风角度可调 · 避免操作口紊流与交叉污染",
    "安全 | 双路独立供电 · 应急排风 3s 接管 · 调节门限高锁定 · 防坠落钢丝绳",
    "材质 | 1.2mm 冷轧钢柜体 · SEFA 级环氧喷涂 · 导流板可拆卸清洗",
  ],
  img: "/images/图2.png",
};

const s3 = {
  en: "End to End",
  title: <>你只管<span className="font-bold">科研</span>，<br />剩下的<span className="font-bold">交给我们</span></>,
  desc: "每个实验室开始前，先摸清实验流程、研究员的工作习惯。试剂瓶放在哪个高度、走廊推车几点经过。这些不会写进招标文件，但会写进我们的第一笔。画的第一张图不是平面，是动线：样品怎么进来，废弃物怎么出去，人从工位到通风柜要走几步。没有一个是重复的——因为科研不同，形态就该不同。",
  details: [
    "前期调研 | 工艺调研先行 · 三维全专业协同 · 管线综合碰撞检查 · 预留增容接口",
    "数字推演 | Revit 全专业模型 · Navisworks 碰撞检测 · 管线排布优化",
    "项目执行 | 现场统筹 · 进度管控 · 节点验收 · 数字归档",
    "实验配套 | 高纯气体管路 · 中央纯水/超纯水 · 废水处理 · 洁净空调 · 楼宇自控",
    "标准保障 | GB 50346 · GB 50472 · ISO 14644 · SEFA · ASHRAE",
  ],
  img: "/images/图3.png",
};

export default function MagazineSpread() {
  return (
    <section>
      {/* ====== Spread 1 — Two small images left, text right ====== */}
      <div className="bg-[#F5F5F7]">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20 py-32 md:py-48">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 lg:items-center">

            {/* Text — takes the lead this time */}
            <div className="lg:w-[48%]">
              <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s1.en}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-8"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s1.title}</h2>
              <div className="w-10 h-px bg-black/8 mb-6" />
              <p className="text-sm text-black/50 font-light leading-relaxed mb-8 max-w-md select-none" style={indentStyle}>{s1.desc}</p>
              <DetailList details={s1.details} />
            </div>

            {/* Images — fan of cards from single pivot */}
            <div className="lg:w-[48%] flex items-center justify-center h-[540px] md:h-[640px] lg:h-[720px]">
              <div className="relative w-[380px] h-[500px] md:w-[420px] md:h-[560px]">
                {[
                  { src: s1.img,  rotate: "-16deg", z: "z-10" },
                  { src: s1.img2, rotate: "-2deg",  z: "z-20" },
                  { src: s1.img3, rotate: "12deg",  z: "z-30" },
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt=""
                    className={`absolute bottom-[8%] left-1/2 w-[300px] md:w-[340px] rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.1)] opacity-90 hover:opacity-100 hover:scale-110 hover:rotate-0 hover:z-50 transition-all duration-500 cursor-default wind-float ${img.z}`}
                    style={{
                      transform: `translateX(-50%) rotate(${img.rotate})`,
                      transformOrigin: "bottom center",
                    }}
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Spread 2 — Offset bleed, image pushed right ====== */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20 py-32 md:py-48">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-center">
            {/* Text */}
            <div className="lg:w-[42%] lg:pr-16">
              <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s2.en}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-8"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s2.title}</h2>
              <div className="w-10 h-px bg-black/8 mb-6" />
              <p className="text-sm text-black/50 font-light leading-relaxed mb-8 max-w-md select-none" style={indentStyle}>{s2.desc}</p>
              <DetailList details={s2.details} />
            </div>

            {/* Image — offset right */}
            <div className="lg:w-[54%] lg:ml-auto lg:mt-20 lg:aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={s2.img} alt="" className="w-full h-auto lg:h-full lg:object-contain block opacity-90" draggable={false} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Spread 3 — Balanced split, image right ====== */}
      <div className="bg-[#F5F5F7]">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20 py-32 md:py-48">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

            <div className="lg:w-[58%] lg:mt-20 lg:aspect-[4/5]">
              <img src={s3.img} alt="" className="w-full h-auto lg:h-full lg:object-contain block rounded-2xl opacity-90" draggable={false} />
            </div>

            <div className="lg:w-[38%]">
              <p className="text-[10px] text-[#007AFF]/45 tracking-[0.35em] font-medium mb-6 select-none">{s3.en}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-8"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}>{s3.title}</h2>
              <div className="w-10 h-px bg-black/8 mb-6" />
              <p className="text-sm text-black/50 font-light leading-relaxed mb-8 max-w-md select-none" style={indentStyle}>{s3.desc}</p>
              <DetailList details={s3.details} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
