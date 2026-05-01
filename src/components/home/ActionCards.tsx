import Link from "next/link";

const cards = [
  { en: "Durable", title: "产品中心", desc: "模块化实验室家具系统", href: "/services",
    blobs: [
      { color: "rgba(0,122,255,0.28)", delay: "0s" },
      { color: "rgba(6,182,212,0.18)", delay: "2s" },
    ]},
  { en: "The Proof", title: "项目实证", desc: "每一次交付都是作品", href: "/cases",
    blobs: [
      { color: "rgba(245,158,11,0.20)", delay: "1s" },
      { color: "rgba(0,122,255,0.16)", delay: "3s" },
    ]},
  { en: "The Craft", title: "见证品质", desc: "安静地做好，骄傲地展示", href: "/craft",
    blobs: [
      { color: "rgba(6,182,212,0.22)", delay: "0.5s" },
      { color: "rgba(139,92,246,0.20)", delay: "2.5s" },
    ]},
  { en: "Focused", title: "关于瑞辉", desc: "把热情，写进每一个实验室", href: "/about",
    blobs: [
      { color: "rgba(139,92,246,0.22)", delay: "1.5s" },
      { color: "rgba(245,158,11,0.16)", delay: "3.5s" },
    ]},
];

export default function ActionCards() {
  return (
    <section className="py-28 md:py-40 bg-[#F5F5F7]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-1">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block bg-white/60 px-10 md:px-14 pt-24 md:pt-36 pb-32 md:pb-44 hover:bg-white/20 hover:backdrop-blur-xl transition-all duration-700 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.02),0_16px_32px_rgba(0,0,0,0.04),0_40px_80px_rgba(0,0,0,0.06)] w-full md:w-[calc(50%-2px)] lg:w-[320px] overflow-hidden"
            >
              {/* Flowing blobs within card */}
              <div className="absolute inset-0 pointer-events-none">
                {card.blobs.map((blob, i) => (
                  <div
                    key={i}
                    className="absolute w-[90%] h-[85%] rounded-full blur-3xl animate-blob-1"
                    style={{
                      background: `radial-gradient(circle, ${blob.color}, transparent 65%)`,
                      animationDelay: blob.delay,
                      top: i === 0 ? "-10%" : "25%",
                      left: i === 0 ? "-15%" : "20%",
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-3 group-hover:text-[#007AFF]/80 transition-colors duration-700 select-none">
                  {card.en}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-black/60 transition-colors duration-700 mb-6 tracking-tight select-none">
                  {card.title}
                </h3>
                <div className="w-8 h-px bg-black/10 group-hover:bg-black/20 transition-colors duration-700 mb-6" />
                <p className="text-sm text-black/40 group-hover:text-black/65 transition-colors duration-700 font-light select-none leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/8 flex items-center justify-center text-black/20 group-hover:border-black/25 group-hover:text-black/60 group-hover:bg-black/8 transition-all duration-700">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
