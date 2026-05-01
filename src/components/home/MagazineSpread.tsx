export default function MagazineSpread() {
  return (
    <section className="pb-28 md:pb-40 bg-gradient-to-b from-[#E8E8EB] via-[#F2F2F4] to-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 -mt-16 md:-mt-24 relative z-10 pt-28 md:pt-40">

        {/* Row 1: Large image card left, text card right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="lg:w-3/5 overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]">
            <img
              src="/images/showcase/01.png"
              alt=""
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="lg:w-2/5 flex flex-col justify-center bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] p-10 md:p-14">
            <p className="text-[#007AFF]/50 text-[10px] tracking-[0.35em] font-medium mb-6 select-none">
              PRECISION ENGINEERING
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] leading-tight tracking-tight select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              每一个<span className="font-bold">细节</span>，<br />都经得起<span className="font-bold">审视</span>
            </h2>
            <div className="w-12 h-px bg-black/8 my-8" />
            <p className="text-sm text-black/30 font-light leading-relaxed select-none">
              从实验台面的材质选择到通风柜的气流模拟，我们相信真正的品质藏在看不见的地方
            </p>
          </div>
        </div>

        {/* Row 2: Text + image joined as one continuous card */}
        <div className="flex flex-col lg:flex-row mb-16 md:mb-20 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] min-h-[420px] md:min-h-[520px]">
          <div className="lg:w-2/5 flex flex-col justify-center bg-white p-10 md:p-16 lg:order-1 order-2">
            <p className="text-[#007AFF]/50 text-[10px] tracking-[0.35em] font-medium mb-6 select-none">
              LAB ENVIRONMENT
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] leading-tight tracking-tight select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                让科研人员<span className="font-bold">专注</span>于<br />真正<span className="font-bold">重要</span>的事
            </h2>
            <div className="w-12 h-px bg-black/8 my-8" />
            <p className="text-sm text-black/30 font-light leading-relaxed select-none">
              安全、舒适、高效的实验环境，是我们对每一位科研工作者的承诺
            </p>
          </div>
          <div className="lg:w-3/5 lg:order-2 order-1 overflow-hidden">
            <img
              src="/images/showcase/02.png"
              alt=""
              className="w-full h-full object-cover min-h-[280px] md:min-h-0"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
