import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t-2 border-black/8">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-black font-bold text-lg tracking-tight">RayHo</span>
            <p className="text-sm font-light leading-relaxed mt-4 text-black/55">
              北京瑞辉筑业实验室科技有限公司
            </p>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">导航</h3>
            <ul className="space-y-3 text-sm font-light text-black/55">
              <li><Link href="/services" className="hover:text-black/70 transition-colors">产品中心</Link></li>
              <li><Link href="/cases" className="hover:text-black/70 transition-colors">项目案例</Link></li>
              <li><Link href="/about" className="hover:text-black/70 transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-black/70 transition-colors">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">产品中心</h3>
            <ul className="space-y-3 text-sm font-light text-black/55">
              <li><Link href="/services" className="hover:text-black/70 transition-colors">实验室家具</Link></li>
              <li><Link href="/services" className="hover:text-black/70 transition-colors">通风柜系统</Link></li>
              <li><Link href="/services" className="hover:text-black/70 transition-colors">实验台系列</Link></li>
              <li><Link href="/services" className="hover:text-black/70 transition-colors">实验室配件</Link></li>
              <li><Link href="/services" className="hover:text-black/70 transition-colors">定制解决方案</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">联系</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-black/55">400-888-6666</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-black/55">ruihuizhuye@126.com</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-black/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-black/55">北京市昌平区国家信息产业基地13号1046</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pb-6 text-xs text-black/30 font-light border-t border-black/8 pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} 北京瑞辉筑业实验室科技有限公司</span>
          <span>京ICP备XXXXXXXX号-X</span>
        </div>
      </div>
    </footer>
  );
}
