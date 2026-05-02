import Link from "next/link";
import { getServices } from "@/lib/content";

const spreads = [
  {
    en: "Lab Furniture", title: "实验室家具系统", desc: "模块化设计的实验台、试剂架、天平台、药品柜，兼顾科研美学与实用功能。每一件家具都经过严苛的耐腐蚀与承重测试。",
    img: "/images/showcase/01.png", href: "/services",
  },
  {
    en: "Fume Hoods", title: "通风柜与安全", desc: "通过 ASHRAE 110 国际认证的通风柜系统，精准控制面风速，有效排除有害气体，为科研人员提供可靠的安全屏障。",
    img: "/images/showcase/02.png", href: "/services", reverse: true,
  },
  {
    en: "Custom Solutions", title: "按需定制", desc: "没有两个实验室是相同的。我们根据空间布局、科研流程和使用习惯，量身定制每一套方案。",
    img: "/images/showcase/03.png", href: "/services",
  },
];

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Hero — editorial opener */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">DURABLE BY DESIGN</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            每一个<span className="font-bold">细节</span>，<br />都经得起<span className="font-bold">审视</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            模块化实验室家具，精密制造，从实验台面到通风柜系统
          </p>
          {/* Blueprint line */}
          <div className="w-40 h-[0.5px] bg-gradient-to-r from-[#007AFF]/10 via-[#007AFF]/15 to-transparent mt-12" />
        </div>
      </section>

      {/* Editorial spreads — alternating image/text */}
      <section className="pb-28 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-1">
            {spreads.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className={`group flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} bg-white hover:bg-[#1D1D1F] transition-all duration-700 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]`}
              >
                {/* Image */}
                <div className="lg:w-3/5 overflow-hidden">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                    <img
                      src={s.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-2/5 flex flex-col justify-center px-10 md:px-14 py-16 md:py-24">
                  <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-4 group-hover:text-[#007AFF]/60 transition-colors duration-700 select-none">
                    {s.en}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-6 group-hover:text-white transition-colors duration-700 select-none"
                    style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                    {s.title}
                  </h2>
                  <div className="w-8 h-px bg-black/8 group-hover:bg-white/15 transition-colors duration-700 mb-6" />
                  <p className="text-sm text-black/25 group-hover:text-white/25 transition-colors duration-700 font-light leading-relaxed select-none">
                    {s.desc}
                  </p>

                  <div className="mt-10 flex items-center gap-3 text-black/15 group-hover:text-white/40 transition-colors duration-700 select-none">
                    <span className="text-xs tracking-[0.2em]">了解更多</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service capabilities — refined list */}
      {services.length > 0 && (
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">CAPABILITIES</p>
              <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight mb-16 select-none"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                全链路<span className="font-bold">服务能力</span>
              </h2>

              <div className="space-y-0">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}
                    className="group flex items-center justify-between py-6 border-b border-black/5 last:border-b-0 hover:px-4 transition-all duration-500"
                  >
                    <div>
                      <p className="text-[9px] text-[#007AFF]/40 tracking-[0.2em] font-medium mb-1 select-none">{s.icon}</p>
                      <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors duration-500 select-none">{s.title}</h3>
                      <p className="text-sm text-black/25 font-light select-none mt-0.5">{s.shortDescription}</p>
                    </div>
                    <svg className="w-5 h-5 text-black/10 group-hover:text-[#007AFF] group-hover:translate-x-1 transition-all duration-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
