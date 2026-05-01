import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import { getServices } from "@/lib/content";

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <section className="pt-40 pb-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-6">全链路服务</h1>
          <p className="text-lg text-white/40 font-light max-w-xl">覆盖实验室从设计到运维的每一个环节</p>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="space-y-40">
            {services.map((service, i) => (
              <div key={service.slug} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-32 items-center`}>
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] bg-subtle overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">{service.icon} {service.title}</p>
                  <h2 className="text-2xl md:text-4xl font-bold text-dark tracking-tight mb-8">{service.title}</h2>
                  <p className="text-text-secondary font-light leading-relaxed mb-10">{service.shortDescription}</p>
                  <ul className="space-y-4 mb-12">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-4 text-sm text-text-secondary font-light">
                        <span className="text-accent mt-0.5 shrink-0">→</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-3 text-dark font-medium text-sm tracking-wider hover:text-accent transition-colors group">
                    了解更多 <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
