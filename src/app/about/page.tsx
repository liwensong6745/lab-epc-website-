export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">FOCUSED</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            把<span className="font-bold">热情</span>，<br />写进每一个<span className="font-bold">实验室</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            热爱这件事，已经很久了
          </p>
        </div>
      </section>

      {/* Story — large text, editorial */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <div className="text-xl md:text-2xl text-black/55 font-light leading-relaxed space-y-8 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            <p>
              北京瑞辉筑业实验室科技有限公司，成立于2010年。一群<span className="text-black/75">真正热爱实验室</span>的人，从设计到交付，专注于一件事——<span className="text-black/75">好的实验室</span>。
            </p>
            <p>
              我们相信，最好的实验室不是炫技，而是让科研人员<span className="text-black/75">忘了自己在实验室</span>。通风柜不吵不抖，台面耐得住腐蚀，气流静悄悄地换，水电随手可及——好的设计，就是消失的设计。
            </p>
            <p>
              服务客户遍及高校科研、生物医药、医疗卫生、材料科学等领域，已累计完成<span className="text-black/75">超过200个</span>实验室建设项目。
            </p>
          </div>

          <div className="w-12 h-px bg-black/8 my-16" />

          <p className="text-black/20 text-sm font-light tracking-[0.2em] select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            The best laboratory is the one you never have to think about.
          </p>
          <p className="text-black/30 text-xs font-light tracking-[0.15em] mt-2 select-none">
            最好的实验室，是你从未察觉的存在
          </p>
        </div>
      </section>

      {/* Timeline — refined */}
      <section className="py-32 md:py-40 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-12 select-none">TIMELINE</p>
          <div className="space-y-0">
            {[
              { year: "2010", event: "公司成立，专注实验室工程领域" },
              { year: "2013", event: "获得建筑装修装饰工程专业承包壹级资质" },
              { year: "2015", event: "累计完成100个项目，团队突破50人" },
              { year: "2018", event: "通过ISO 9001/14001双体系认证" },
              { year: "2020", event: "承接首个符合FDA标准的生物医药项目" },
              { year: "2023", event: "项目总数突破200个，覆盖全国30+城市" },
            ].map((item) => (
              <div key={item.year} className="flex items-baseline gap-6 py-5 border-b border-black/5 last:border-b-0">
                <span className="text-[#007AFF]/50 text-xs font-medium tracking-wider shrink-0 w-10 select-none">{item.year}</span>
                <p className="text-black/40 font-light select-none">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info — minimal */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">GET IN TOUCH</p>
          <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight mb-12 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            找到我们
          </h2>
          <div className="space-y-5 text-sm text-black/40 font-light select-none">
            <p>北京瑞辉筑业实验室科技有限公司</p>
            <p>北京市昌平区国家信息产业基地13号1046</p>
            <p className="text-black/25">400-888-6666 · ruihuizhuye@126.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
