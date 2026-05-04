import Link from "next/link";

const items = [
  {
    title: "实验室工艺设计",
    en: "Process Design",
    desc: "从科研流程出发，规划最合理的空间布局与设备配置方案",
    href: "/services/process-design",
  },
  {
    title: "暖通洁净系统",
    en: "HVAC & Cleanroom",
    desc: "精准控制温度、湿度、洁净度，满足 ISO 及 GMP 标准",
    href: "/services/hvac-system",
  },
  {
    title: "供气管路系统",
    en: "Gas Systems",
    desc: "高纯气体、特种气体管路设计与施工，保障实验安全",
    href: "/services/gas-system",
  },
];

export default function Capabilities() {
  return (
    <>
      {/* Three cards on light bg */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-24 md:mb-32">
            <p className="text-[#007AFF]/60 text-xs tracking-[0.3em] font-medium mb-6 select-none">
              CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-2xl select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              专注实验室<span className="font-bold">核心系统</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block bg-white p-10 md:p-12 border border-black/[0.04] hover:bg-[#1D1D1F] hover:border-[#1D1D1F] transition-colors duration-700"
              >
                <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-8 select-none">
                  {item.en}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] group-hover:text-white transition-colors duration-700 mb-4 tracking-tight select-none">
                  {item.title}
                </h3>
                <p className="text-sm text-black/30 group-hover:text-white/30 transition-colors duration-700 font-light leading-relaxed select-none">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/images/showcase/02.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <p className="text-white/90 text-2xl md:text-4xl font-light tracking-tight leading-tight max-w-2xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            每一个实验室，<br /><span className="font-bold">都是独一无二的</span>
          </p>
        </div>
      </section>
    </>
  );
}
