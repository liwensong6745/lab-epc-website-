import { notFound } from "next/navigation";
import Link from "next/link";
import { getServices, getServiceBySlug } from "@/lib/content";
import CTASection from "@/components/home/CTASection";

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="pt-40 pb-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-2 text-white/30 text-sm font-light mb-8">
            <Link href="/services" className="hover:text-white/60 transition-colors">服务</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">{service.icon} {service.title}</h1>
          <p className="text-lg text-white/40 font-light max-w-xl">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-white/50 prose-p:font-light prose-p:leading-relaxed prose-li:text-white/50 prose-li:font-light"
                dangerouslySetInnerHTML={{ __html: service.bodyHtml || "" }}
              />
            </div>
            <div className="lg:w-1/3">
              <div className="sticky top-28 bg-subtle p-10">
                <h3 className="font-bold text-white text-sm tracking-wider uppercase mb-8">服务特色</h3>
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 text-sm text-text-secondary font-light">
                      <span className="text-accent mt-0.5 shrink-0">→</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-border">
                  <Link href="/contact" className="block w-full text-center px-8 py-4 bg-accent text-white font-medium text-sm tracking-wider hover:bg-accent-hover transition-colors">
                    立即咨询
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
