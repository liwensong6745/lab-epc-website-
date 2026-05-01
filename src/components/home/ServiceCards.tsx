import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServices } from "@/lib/content";

export default function ServiceCards() {
  const services = getServices();

  return (
    <section className="py-32 md:py-40 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <SectionHeading
          overline="Capabilities"
          title="全链路服务"
          description="从空间规划到持续运维，覆盖实验室全生命周期"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="w-10 h-10 bg-white/5 group-hover:bg-accent transition-colors flex items-center justify-center mb-8">
                <svg className="w-5 h-5 text-white/30 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.icon} {service.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
