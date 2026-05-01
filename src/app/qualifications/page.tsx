import CTASection from "@/components/home/CTASection";
import { getQualifications } from "@/lib/content";

export default function QualificationsPage() {
  const quals = getQualifications();
  const categories = Array.from(new Set(quals.map((q) => q.category)));

  return (
    <>
      <section className="pt-40 pb-24 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">Credentials</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight leading-none mb-6">资质证书</h1>
          <p className="text-lg text-text-tertiary font-light max-w-xl">专业资质铸就品质保障</p>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {categories.map((category) => (
            <div key={category} className="mb-32 last:mb-0">
              <h2 className="text-xl font-bold text-[#1D1D1F] mb-12 tracking-tight">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quals
                  .filter((q) => q.category === category)
                  .map((q) => (
                    <div key={q.id} className="flex items-start gap-6 p-8 bg-[#F5F5F7] hover:bg-[#EEEEF0] transition-colors">
                      <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1D1D1F]">{q.name}</h3>
                        <p className="text-sm text-text-tertiary font-light mt-2">{q.issuer}</p>
                        <span className="inline-block mt-3 text-xs px-3 py-1.5 bg-white text-text-secondary font-medium">{q.date}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
