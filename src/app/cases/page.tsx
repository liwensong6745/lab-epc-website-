import Link from "next/link";
import { getCaseStudies } from "@/lib/content";

export default function CasesPage() {
  const cases = getCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">THE PROOF</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            每一次交付<br />都是<span className="font-bold">作品</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            走进 200+ 实验室项目的真实现场
          </p>
        </div>
      </section>

      {/* Image-led case grid */}
      <section className="pb-32 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {cases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`}
                className="group block bg-white overflow-hidden hover:bg-[#1D1D1F] transition-all duration-700 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={c.thumbnail} alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out" />
                </div>
                <div className="p-10 md:p-14">
                  <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-3 group-hover:text-[#007AFF]/60 transition-colors duration-700 select-none">
                    {c.industry}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] group-hover:text-white transition-colors duration-700 mb-3 tracking-tight select-none">
                    {c.title}
                  </h3>
                  <div className="w-8 h-px bg-black/8 group-hover:bg-white/20 transition-colors duration-700 mb-5" />
                  <p className="text-sm text-black/25 group-hover:text-white/25 transition-colors duration-700 font-light select-none">
                    {c.client} · {c.location} · {c.area}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
