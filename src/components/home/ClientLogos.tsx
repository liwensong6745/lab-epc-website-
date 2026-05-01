const clients = [
  "中国科学院", "北京大学", "清华大学", "华大基因",
  "药明康德", "北京协和医院", "复旦大学", "浙江大学",
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-[#F5F5F7]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <p className="text-xs text-text-tertiary tracking-[0.3em] uppercase mb-10 font-medium">Trusted by</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6">
          {clients.map((name) => (
            <div key={name} className="text-text-tertiary font-light text-sm hover:text-[#1D1D1F] transition-colors">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
