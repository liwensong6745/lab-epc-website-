import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudies, getCaseBySlug } from "@/lib/content";
import CTASection from "@/components/home/CTASection";

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <section className="pt-40 pb-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-2 text-white/30 text-sm font-light mb-8">
            <Link href="/cases" className="hover:text-white/60 transition-colors">案例</Link>
            <span>/</span>
            <span className="text-white/80">{c.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-8">{c.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm font-light text-white/40">
            <span>{c.client}</span>
            <span>{c.location}</span>
            <span>{c.area}</span>
            <span>{c.duration}</span>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {c.images.map((img, i) => (
              <div key={i} className="aspect-[4/3] bg-subtle overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <img src={img} alt={`${c.title} - ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="max-w-3xl space-y-32">
            <div>
              <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-8">Challenge</p>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">项目难点</h2>
              <div className="text-text-secondary font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: c.challengeHtml || "" }} />
            </div>

            <div>
              <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-8">Solution</p>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">解决方案</h2>
              <div className="text-text-secondary font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: c.solutionHtml || "" }} />
            </div>

            <div>
              <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-8">Results</p>
              <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">项目成果</h2>
              <ul className="space-y-4">
                {c.results.map((r) => (
                  <li key={r} className="flex items-start gap-4 text-text-secondary font-light">
                    <span className="text-accent mt-0.5 shrink-0">→</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            {c.testimonial && (
              <div className="bg-subtle p-12">
                <blockquote className="text-xl text-white font-light italic mb-8 leading-relaxed">
                  &ldquo;{c.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-dark flex items-center justify-center text-white font-bold text-sm">{c.testimonial.author[0]}</div>
                  <div>
                    <div className="font-medium text-white text-sm">{c.testimonial.author}</div>
                    <div className="text-sm text-text-tertiary font-light">{c.testimonial.title}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-32 pt-12 border-t border-border">
            <Link href="/cases" className="inline-flex items-center gap-3 text-white font-medium text-sm tracking-wider hover:text-accent transition-colors group">
              <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> 返回案例列表
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
