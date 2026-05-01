import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/30">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <span className="text-white font-bold text-lg tracking-tight">RayHo</span>
            <p className="text-sm font-light leading-relaxed mt-6 text-white/25">
              北京瑞辉筑业实验室科技有限公司
            </p>
          </div>
          <div>
            <h3 className="text-white/50 font-medium text-xs tracking-[0.2em] uppercase mb-8">导航</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/services" className="hover:text-white/70 transition-colors">服务能力</Link></li>
              <li><Link href="/cases" className="hover:text-white/70 transition-colors">项目案例</Link></li>
              <li><Link href="/qualifications" className="hover:text-white/70 transition-colors">资质证书</Link></li>
              <li><Link href="/about" className="hover:text-white/70 transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-white/70 transition-colors">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/50 font-medium text-xs tracking-[0.2em] uppercase mb-8">服务</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/services/process-design" className="hover:text-white/70 transition-colors">实验室工艺设计</Link></li>
              <li><Link href="/services/hvac-system" className="hover:text-white/70 transition-colors">暖通洁净系统</Link></li>
              <li><Link href="/services/gas-system" className="hover:text-white/70 transition-colors">供气管路系统</Link></li>
              <li><Link href="/services/waste-treatment" className="hover:text-white/70 transition-colors">废水环保处理</Link></li>
              <li><Link href="/services/smart-control" className="hover:text-white/70 transition-colors">智能化控制</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/50 font-medium text-xs tracking-[0.2em] uppercase mb-8">联系</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>400-888-6666</li>
              <li>ruihuizhuye@126.com</li>
              <li>北京市昌平区国家信息产业基地13号1046</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pb-8 text-xs text-white/15 font-light">
        © {new Date().getFullYear()} 北京瑞辉筑业实验室科技有限公司
      </div>
    </footer>
  );
}
