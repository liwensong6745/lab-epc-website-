import Link from "next/link";

const cards = [
  {
    en: "Solutions",
    title: "解决方案",
    desc: "每一个细节，都经得起审视",
    href: "/services",
    borderColor: "#007AFF",
    blobs: [
      { color: "rgba(0,122,255,0.22)", delay: "0s", top: "-10%", left: "-15%" },
      { color: "rgba(6,182,212,0.14)", delay: "2s", top: "25%", left: "20%" },
    ],
  },
  {
    en: "The Craft",
    title: "见证品质",
    desc: "安静地做好，骄傲地展示",
    href: "/craft",
    borderColor: "#06B6D4",
    blobs: [
      { color: "rgba(6,182,212,0.18)", delay: "0.5s", top: "-10%", left: "-15%" },
      { color: "rgba(139,92,246,0.16)", delay: "2.5s", top: "25%", left: "20%" },
    ],
  },
  {
    en: "About",
    title: "关于我们",
    desc: "把热情，写进每一个实验室",
    href: "/about",
    borderColor: "#F59E0B",
    blobs: [
      { color: "rgba(245,158,11,0.16)", delay: "1s", top: "-10%", left: "-15%" },
      { color: "rgba(0,122,255,0.12)", delay: "3s", top: "25%", left: "20%" },
    ],
  },
  {
    en: "Contact",
    title: "联系我们",
    desc: "告诉我们需求，剩下的交给我们",
    href: "/contact",
    borderColor: "#8B5CF6",
    blobs: [
      { color: "rgba(139,92,246,0.18)", delay: "1.5s", top: "-10%", left: "-15%" },
      { color: "rgba(245,158,11,0.12)", delay: "3.5s", top: "25%", left: "20%" },
    ],
  },
];

function CardIcon({ en }: { en: string }) {
  const cls = "w-3 h-3 text-[#007AFF]/40";
  const icon = (d: React.ReactNode) => (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {d}
    </svg>
  );

  switch (en) {
    case "Solutions":
      return icon(<><rect x="4" y="4" width="16" height="3" rx="1" /><rect x="4" y="10" width="16" height="3" rx="1" /><rect x="4" y="16" width="16" height="3" rx="1" /></>);
    case "About":
      return icon(<><path d="M9 12l2 2 4-4" /><rect x="4" y="3" width="16" height="18" rx="2" /></>);
    case "The Craft":
      return icon(<><path d="M12 2L3 7v5c0 6 4 10 9 12 5-2 9-6 9-12V7l-9-5z" /><polyline points="8 12 11 15 16 9" /></>);
    case "Contact":
      return icon(<><circle cx="12" cy="12" r="9" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /><circle cx="12" cy="12" r="3" /></>);
    default:
      return icon(<circle cx="12" cy="12" r="4" />);
  }
}

export default function ActionCards() {
  return (
    <section className="py-24 md:py-36 bg-[#F5F5F7]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">

        {/* Thin top rule to bridge from previous section */}
        <div className="w-full h-px bg-black/[0.04] mb-16 md:mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1200px] mx-auto">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{ "--accent": card.borderColor } as React.CSSProperties}
              className="group relative block bg-white border rounded-2xl px-8 md:px-10 pt-10 pb-28 md:pb-32 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden border-black/[0.08] hover:border-[var(--accent)]"
            >
              {/* Flowing blobs */}
              <div className="absolute inset-0 pointer-events-none">
                {card.blobs.map((blob, i) => (
                  <div
                    key={i}
                    className="absolute w-[90%] h-[85%] rounded-full blur-3xl animate-blob-1"
                    style={{
                      background: `radial-gradient(circle, ${blob.color}, transparent 65%)`,
                      animationDelay: blob.delay,
                      top: blob.top,
                      left: blob.left,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative">
                {/* Icon badge */}
                <span className="w-6 h-6 rounded-md bg-[#007AFF]/6 flex items-center justify-center mb-5">
                  <CardIcon en={card.en} />
                </span>

                <p className="text-[9px] text-[#007AFF]/30 tracking-[0.3em] font-medium mb-3 select-none">
                  {card.en}
                </p>
                <h3 className="text-lg font-light text-[#1D1D1F] tracking-tight mb-3 select-none"
                  style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                  {card.title}
                </h3>
                <div className="w-6 h-px bg-black/8 mb-4" />
                <p className="text-xs text-black/35 font-light leading-relaxed select-none">
                  {card.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                <svg className="w-4 h-4 text-[#007AFF]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
