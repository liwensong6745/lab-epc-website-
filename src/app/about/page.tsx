import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于瑞辉 | RayHo 瑞辉筑业",
  description: "北京瑞辉筑业实验室科技有限公司，十五年专注实验室工程，从设计到交付，为超过200个实验室提供整体解决方案",
};

export default function AboutPage() {
  return (
    <>
      {/* ═══════ Hero — Full-bleed ═══════ */}
      <section className="relative bg-white overflow-hidden" style={{ height: "100vh" }}>
        <img src="/images/关于hero.png" alt="瑞辉筑业实验室项目展示" className="absolute inset-0 w-full h-full object-cover" style={{ transform: "scaleX(-1)", filter: "saturate(0.85) hue-rotate(-8deg)" }} draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.02]" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
            <p className="text-white/60 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">FOCUSED</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              把<span className="font-bold">热情</span>，<br />写进每一个<span className="font-bold">实验室</span>
            </h1>
            <p className="text-white/50 text-sm font-light mt-6 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
              热爱这件事，已经很久了
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 关于我们 + Philosophy + 加入我们 ═══════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none flex items-center z-40" style={{ justifyContent: "flex-end", paddingRight: "max(1rem, calc((100vw - 920px) / 2 - 4rem))" }}>
          <span className="text-black/[0.12] font-bold tracking-[0.1em]"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', writingMode: "vertical-rl", fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.8 }}>RAYHO</span>
        </div>

      <section className="pt-24 md:pt-32 pb-0 bg-white">
        <div className="max-w-2xl mx-auto px-8 lg:px-16 text-center">
          <div className="w-8 h-px bg-black/[0.12] mx-auto mb-8" />
          <p className="text-black/50 text-2xl md:text-3xl font-light tracking-tight"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            关于我们
          </p>
          <p className="text-[#007AFF]/35 text-[10px] tracking-[0.35em] font-medium mt-4 select-none">ABOUT US</p>
        </div>
      </section>

      {/* ═══════ Philosophy ═══════ */}
      <section className="relative pt-14 md:pt-20 pb-20 md:pb-32 bg-white">
        <div className="relative z-10 px-8 lg:px-16">
          <div className="flex gap-0" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="w-full lg:w-[50%]">
              <div className="w-fit">
                <p className="text-black/55 text-base md:text-lg font-light leading-relaxed"
                  style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                  <span className="font-bold text-black/60">我们</span><span className="text-sm md:text-base">做的不是标准产品。<br />
                  每一间实验室，都是先理解研究本身，再考虑空间。<br />
                  从家具到管路，从通风到照明，<br />
                  每个决定都要有理由。</span>
                </p>
              </div>
              <div className="w-16 h-px bg-black/[0.08] my-12" />
              <div className="w-fit">
                <p className="text-black/45 text-sm md:text-base font-light leading-relaxed"
                  style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                  八年了，我们学会一件事——<br />
                  实验室不是建出来的，是一点一点磨出来的。<br />
                  但我们不急，<br />
                  因为我们做的，是要用很久的东西。
                </p>
              </div>
              <div className="w-16 h-px bg-black/[0.08] my-12" />
              <div className="w-fit">
                <p className="text-black/35 text-sm md:text-base font-light leading-relaxed"
                  style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                  好的实验室该是什么样？<br />
                  不是好看，是好用。<br />
                  不是先进，是可靠。<br />
                  不是标准化，是刚刚好。
                </p>
              </div>
            </div>
            <div className="hidden lg:block relative self-stretch" style={{ width: "50%" }}>
              <img src="/images/光影.png" alt="" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Join Us ═══════ */}
      <section className="bg-white" style={{ height: "70vh", maxHeight: "600px" }}>
        <div className="flex h-full">
          <div className="flex-1 relative overflow-hidden">
            <img src="/images/插图2.png" alt="瑞辉筑业团队" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
          </div>
          <div className="w-72 md:w-80 lg:w-96 flex items-center px-8 md:px-12">
            <div>
              <div className="w-8 h-px bg-black/[0.12] mb-10 -mt-20" />
            <p className="text-black/40 text-lg md:text-xl font-light tracking-tight mb-3"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                加入我们
              </p>
              <p className="text-[#007AFF]/35 text-[10px] tracking-[0.3em] font-medium mb-8 select-none">JOIN US</p>
              <p className="text-black/55 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: '"Songti SC", "STSong", "Noto Serif SC", serif' }}>
                我们相信好的东西都是安静的。
              </p>
              <p className="text-black/45 text-sm md:text-base font-light mt-6 leading-relaxed"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                如果你也愿意把一件小事做好——<br />来坐坐。
              </p>
              <p className="text-black/45 text-sm font-light tracking-[0.15em] mt-8 inline-flex items-center gap-2 px-4 py-2 border border-black/[0.08] rounded-full"
                style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
                <svg className="w-3.5 h-3.5 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ruihuizhuye@126.com
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-black/40 text-base md:text-lg font-light tracking-tight leading-relaxed"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            好的设计，<br />就是消失的设计
          </p>
          <p className="text-black/20 text-xs font-light tracking-[0.2em] mt-8 mb-16"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            Good design is invisible
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 mx-auto mb-20 opacity-80 select-none">
            <img src="/images/合作单位/北京大学.jpg" alt="北京大学" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/清华大学.jpg" alt="清华大学" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/中国地质科学院.jpg" alt="中国地质科学院" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/中科院物理研究所.jpg" alt="中科院物理研究所" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/国家电网.jpg" alt="国家电网" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/航空航天.jpg" alt="航空航天" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/北京科技大学.jpg" alt="北京科技大学" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/中国农业大学.jpg" alt="中国农业大学" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/检验检疫.jpg" alt="检验检疫" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/中国长江三峡集团公司.jpg" alt="中国长江三峡集团公司" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/大禹节水集团股份有限公司.jpg" alt="大禹节水集团股份有限公司" className="h-16 w-auto" draggable={false} />
            <img src="/images/合作单位/交通运输部天津水运工程科学研究院.jpg" alt="交通运输部天津水运工程科学研究院" className="h-16 w-auto" draggable={false} />
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium rounded-full hover:bg-[#007AFF] transition-all duration-500"
          >
            预约咨询
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
