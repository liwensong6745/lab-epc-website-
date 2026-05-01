import CTASection from "@/components/home/CTASection";
import { getTeamMembers } from "@/lib/content";

const timeline = [
  { year: "2010", event: "公司成立，专注实验室工程领域" },
  { year: "2013", event: "获得建筑装修装饰工程专业承包壹级资质" },
  { year: "2015", event: "累计完成100个项目，团队突破50人" },
  { year: "2018", event: "通过ISO 9001/14001双体系认证" },
  { year: "2020", event: "承接首个符合FDA标准的生物医药项目" },
  { year: "2023", event: "项目总数突破200个，覆盖全国30+城市" },
];

const values = [
  { title: "安全第一", desc: "实验室安全是设计的核心出发点，严格遵守各类安全规范" },
  { title: "品质至上", desc: "从选材到工艺，精益求精，确保交付质量超出预期" },
  { title: "创新驱动", desc: "持续关注前沿技术，将最新设计理念应用于项目实践" },
  { title: "客户为本", desc: "深入理解需求，与客户建立长期互信的合作伙伴关系" },
];

export default function AboutPage() {
  const team = getTeamMembers();

  return (
    <>
      <section className="pt-40 pb-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">About</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">十五年专注实验室工程</h1>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <div className="text-lg text-text-secondary font-light leading-relaxed space-y-6">
            <p>北京瑞辉筑业实验室科技有限公司成立于2010年，是一家专业从事实验室整体解决方案的EPC服务商。业务涵盖实验室工艺设计、暖通洁净系统、供气管路系统、废水环保处理、智能化控制系统等全领域。</p>
            <p>服务客户遍及高校科研、生物医药、医疗卫生、材料科学、精细化工等多个行业，已累计完成超过200个实验室建设项目。</p>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-20">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-bold text-white mb-4">{v.title}</h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-20">发展历程</h2>
          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-8">
                <span className="text-accent font-bold text-sm tracking-wider shrink-0 w-12">{item.year}</span>
                <p className="text-text-secondary font-light">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-20">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member) => (
              <div key={member.id}>
                <div className="w-16 h-16 bg-dark flex items-center justify-center mb-8">
                  <span className="text-xl font-bold text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-4">{member.title}</p>
                <p className="text-sm text-text-secondary font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
