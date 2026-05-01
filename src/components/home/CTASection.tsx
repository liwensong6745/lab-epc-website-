import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 md:py-40 bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-8">
            准备好开始了吗？
          </h2>
          <p className="text-lg text-white/40 font-light mb-12 leading-relaxed">
            告诉我们您的需求，专家团队将提供一对一的专业咨询
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="tel:400-888-6666" className="text-white/50 font-light text-sm tracking-wider hover:text-white transition-colors">
              400-888-6666
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white font-medium text-sm tracking-wider hover:bg-accent-hover transition-colors"
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
