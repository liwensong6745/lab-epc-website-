import Link from "next/link";

export default function CTASection() {
  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-black/25 text-xs font-light tracking-[0.2em] select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            Ready to start?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-5 px-10 py-3.5 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium rounded-full hover:bg-[#007AFF] transition-all duration-500 select-none"
          >
            预约咨询
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
