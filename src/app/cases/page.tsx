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
          <div className="w-40 h-[0.5px] bg-gradient-to-r from-[#007AFF]/10 via-[#007AFF]/15 to-transparent mt-12" />
        </div>
      </section>

      {/* Case editorial spreads */}
      <section className="pb-28 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-1">
            {cases.map((c, i) => (
              <div
                key={c.slug}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]`}
              >
                {/* Image */}
                <div className="lg:w-3/5 overflow-hidden">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]">
                    <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/5 flex flex-col justify-center px-10 md:px-14 py-16 md:py-20">
                  <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-4 select-none">
                    {c.industry}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight leading-tight mb-4 select-none"
                    style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                    {c.title}
                  </h2>
                  <p className="text-xs text-black/20 font-light mb-8 select-none">
                    {c.client} · {c.location} · {c.area} · {c.duration}
                  </p>

                  <div className="w-8 h-px bg-black/8 mb-6" />

                  {/* Challenge */}
                  {c.challengeHtml && (
                    <div className="mb-6">
                      <p className="text-[9px] text-black/25 tracking-[0.2em] font-medium mb-3 uppercase select-none">挑战</p>
                      <div
                        className="text-sm text-black/40 font-light leading-relaxed space-y-1 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1"
                        dangerouslySetInnerHTML={{ __html: c.challengeHtml }}
                      />
                    </div>
                  )}

                  {/* Solution */}
                  {c.solutionHtml && (
                    <div className="mb-6">
                      <p className="text-[9px] text-black/25 tracking-[0.2em] font-medium mb-3 uppercase select-none">方案</p>
                      <div
                        className="text-sm text-black/40 font-light leading-relaxed space-y-1 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1"
                        dangerouslySetInnerHTML={{ __html: c.solutionHtml }}
                      />
                    </div>
                  )}

                  {/* Results */}
                  {c.results && c.results.length > 0 && (
                    <ul className="space-y-1.5 mb-8">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-xs text-black/35 font-light select-none">
                          <span className="w-1 h-1 rounded-full bg-[#007AFF]/30 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Testimonial */}
                  {c.testimonial && (
                    <div className="border-l-2 border-[#007AFF]/15 pl-4 mb-8">
                      <p className="text-sm text-black/35 font-light italic leading-relaxed select-none">
                        &ldquo;{c.testimonial.quote}&rdquo;
                      </p>
                      <p className="text-xs text-black/20 font-light mt-2 select-none">
                        — {c.testimonial.author}，{c.testimonial.title}
                      </p>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-black/20 hover:text-[#007AFF] transition-colors duration-500 group select-none"
                  >
                    <span className="text-xs tracking-[0.2em]">预约咨询</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-black/25 text-xs font-light tracking-[0.2em] select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            Start your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-5 px-10 py-3.5 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium rounded-full hover:bg-[#007AFF] transition-all duration-500 select-none"
          >
            预约咨询
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
