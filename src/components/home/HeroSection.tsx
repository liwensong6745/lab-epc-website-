import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/showcase/01.png"
          alt="现代化实验室内部环境展示 — 瑞辉筑业实验室工程"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/55 to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative w-full pt-32 pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-white/50 text-xs font-medium tracking-[0.3em] uppercase mb-8">
              Laboratory EPC Solutions
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-8">
              为科学研究
              <br />
              建造专业空间
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-lg mb-12 leading-relaxed">
              十五年专注实验室工程EPC，从设计到交付，为超过200个实验室提供整体解决方案
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/cases"
                className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white font-medium text-sm tracking-wider hover:bg-accent-hover transition-colors"
              >
                查看案例
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/25 text-white font-light text-sm tracking-wider hover:bg-white/[0.06] transition-all"
              >
                了解服务
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
