import Link from "next/link";
import { getCaseStudies } from "@/lib/content";

export default function FeaturedCases() {
  const cases = getCaseStudies().filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="mb-24 md:mb-32">
          <p className="text-[#007AFF]/60 text-xs tracking-[0.3em] font-medium mb-6 select-none">
            SELECTED WORKS
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-2xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            精选<span className="font-bold">案例</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {cases.map((c) => (
            <Link key={c.slug} href={`/cases/${c.slug}`} className="group block">
              <div className="bg-white overflow-hidden hover:bg-white/95 transition-colors duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.thumbnail}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-3 select-none">
                    {c.industry}
                  </p>
                  <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 tracking-tight select-none">
                    {c.title}
                  </h3>
                  <p className="text-sm text-black/25 font-light select-none">
                    {c.client} · {c.area}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-3 text-black/20 font-light text-sm tracking-[0.2em] hover:text-black/60 transition-colors group"
          >
            查看全部案例
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
