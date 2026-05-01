import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { step: "01", title: "需求诊断", desc: "深度理解研究方向与实验流程，梳理技术参数与核心需求" },
  { step: "02", title: "方案设计", desc: "平面布局、工艺流线、专项系统设计，BIM三维可视化预演" },
  { step: "03", title: "采购集成", desc: "全球供应链设备选型，进口清关与安装调试一站式完成" },
  { step: "04", title: "施工交付", desc: "专业团队严格按图施工，分阶段验收，确保工程品质" },
  { step: "05", title: "验证运维", desc: "环境参数调试验证，协助通过认证评审，提供长期运维支持" },
];

export default function ProcessTimeline() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <SectionHeading
          overline="Process"
          title="服务流程"
          description="标准化且灵活的项目管理体系"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
          {steps.map((item) => (
            <div key={item.step}>
              <span className="text-7xl font-black text-subtle leading-none">{item.step}</span>
              <h3 className="text-lg font-bold text-dark mt-8 mb-4">{item.title}</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
