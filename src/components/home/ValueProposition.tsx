export default function ValueProposition() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-8">
            实验室灵活性专家{" "}
            <span className="text-black/10 font-light">|</span>{" "}
            <span className="font-light text-black/35">重新定义科研空间</span>
          </h2>

          <div className="flex items-center gap-12 md:gap-20 mt-16 mb-16">
            {[
              { label: "ASHRAE 110" },
              { label: "SEFA 8M" },
              { label: "ISO 9001" },
            ].map((cert) => (
              <div key={cert.label} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-black/6 flex items-center justify-center bg-white">
                  <svg className="w-6 h-6 text-black/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-black/15 text-[10px] tracking-[0.25em] uppercase font-medium">{cert.label}</span>
              </div>
            ))}
          </div>

          <hr className="w-40 border-black/6 mb-16" />

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-[#1D1D1F] text-white font-medium text-sm tracking-wider rounded-md btn-shadow hover:bg-[#007AFF] transition-all"
          >
            立即预约 3D 方案演示
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
