import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#1D1D1F]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-lg text-white/40 font-light mb-8 leading-relaxed">
            告诉我们您的需求，专家团队将提供一对一的专业咨询
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:400-888-6666" className="text-white/45 font-light text-sm tracking-wider hover:text-white transition-colors">
              400-888-6666
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#007AFF] text-white font-medium text-sm tracking-wider rounded-md btn-shadow hover:bg-[#0066D6] hover:brightness-110 transition-all"
            >
              预约咨询
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
