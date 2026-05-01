import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCaseStudies } from "@/lib/content";

export default function FeaturedCases() {
  const cases = getCaseStudies().filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-32 md:py-40 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <SectionHeading
          overline="Selected Works"
          title="精选案例"
          description="每一个项目，都是对科研环境的深度理解与精工交付"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
                <img
                  src={c.thumbnail}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/60 text-xs font-medium tracking-wider uppercase">
                    {c.industry}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-white/30 font-light">
                {c.client} · {c.area} · {c.duration}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <Link
            href="/cases"
            className="inline-flex items-center gap-3 text-white/50 font-medium text-sm tracking-wider hover:text-white transition-colors group"
          >
            查看全部案例
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
