import CaseList from "@/components/cases/CaseList";
import CTASection from "@/components/home/CTASection";
import { getCaseStudies } from "@/lib/content";

export default function CasesPage() {
  const cases = getCaseStudies();

  return (
    <>
      <section className="pt-40 pb-24 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">Works</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight leading-none mb-6">项目案例</h1>
          <p className="text-lg text-text-tertiary font-light max-w-xl">每一个项目，都是对科研环境的深度理解与精工交付</p>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <CaseList cases={cases} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
