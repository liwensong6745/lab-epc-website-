import Link from "next/link";
import { getServices } from "@/lib/content";

const products = [
  { en: "Lab Furniture", title: "实验室家具", desc: "模块化设计的实验台、试剂架、天平台，兼具美观与功能", href: "/services", img: "/images/showcase/01.png" },
  { en: "Fume Hoods", title: "通风柜系统", desc: "通过ASHRAE 110认证，精准气流控制，守护实验安全", href: "/services", img: "/images/showcase/02.png" },
  { en: "Workbenches", title: "实验台系列", desc: "耐腐蚀台面，按需定制尺寸与配置，适配各类实验场景", href: "/services", img: "/images/showcase/03.png" },
  { en: "Accessories", title: "实验室配件", desc: "水气电综合供应系统，隐藏式走线，整洁高效", href: "/services", img: "/images/showcase/01.png" },
  { en: "Custom", title: "定制解决方案", desc: "根据实验室空间与科研需求，量身定制整体方案", href: "/services", img: "/images/showcase/02.png" },
];

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">DURABLE BY DESIGN</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            每一个<span className="font-bold">细节</span>，<br />都经得起<span className="font-bold">审视</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            模块化实验室家具系统，从实验台面到通风柜，精密制造
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="pb-32 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {products.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group block bg-white px-10 md:px-12 pt-20 md:pt-28 pb-24 md:pb-32 hover:bg-[#1D1D1F] transition-all duration-700 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[5/3] overflow-hidden mb-10 -mx-2">
                  <img src={p.img} alt="" className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[1500ms] ease-out" />
                </div>
                <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-3 group-hover:text-[#007AFF]/60 transition-colors duration-700 select-none">
                  {p.en}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] group-hover:text-white transition-colors duration-700 mb-5 tracking-tight select-none">
                  {p.title}
                </h3>
                <p className="text-sm text-black/25 group-hover:text-white/25 transition-colors duration-700 font-light select-none leading-relaxed">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service capabilities from MD content */}
      {services.length > 0 && (
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">CAPABILITIES</p>
            <h2 className="text-2xl md:text-3xl font-light text-[#1D1D1F] tracking-tight mb-20 select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              全链路<span className="font-bold">服务能力</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group block bg-[#F5F5F7] px-10 py-14 hover:bg-[#1D1D1F] transition-all duration-700"
                >
                  <p className="text-[9px] text-[#007AFF]/40 tracking-[0.3em] font-medium mb-3 group-hover:text-[#007AFF]/60 transition-colors duration-700 select-none">{s.icon}</p>
                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-white transition-colors duration-700 mb-3 select-none">{s.title}</h3>
                  <p className="text-sm text-black/25 group-hover:text-white/25 transition-colors duration-700 font-light select-none">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
