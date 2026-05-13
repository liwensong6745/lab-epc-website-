import Link from "next/link";
import { getSiteSettings } from "@/lib/content";

export default function Footer() {
  const settings = getSiteSettings();
  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.12]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-8">
          <div>
            <span className="text-black font-bold text-lg tracking-tight">RayHo</span>
            <p className="text-sm font-light leading-relaxed mt-4 text-black/55 max-w-xs">
              北京瑞辉筑业实验室科技有限公司
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center hover:bg-[#007AFF] transition-colors">
                <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
<span className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center hover:bg-[#07C160] transition-colors cursor-default">
                <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.368 6.095c-2.56 0-4.76 1.77-4.76 4.307 0 2.537 2.2 4.307 4.76 4.307.432 0 .865-.056 1.286-.164l1.381.808c.038.022.08.034.122.034.116 0 .21-.096.21-.214 0-.052-.02-.104-.035-.155l-.283-1.074a2.28 2.28 0 001.604-2.168c0-2.198-1.945-3.874-4.285-3.874zm-2.19 2.47c.467 0 .845.385.845.858a.852.852 0 01-.845.856.852.852 0 01-.844-.856c0-.473.378-.858.845-.858zm4.38 0c.467 0 .845.385.845.858a.852.852 0 01-.845.856.852.852 0 01-.845-.856c0-.473.379-.858.845-.858z" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">导航</h3>
            <ul className="space-y-3 text-sm font-light text-black/55">
              <li><Link href="/" className="hover:text-black/70 transition-colors">首页</Link></li>
              <li><Link href="/services" className="hover:text-black/70 transition-colors">解决方案</Link></li>
              <li><Link href="/about" className="hover:text-black/70 transition-colors">关于</Link></li>
              <li><Link href="/contact" className="hover:text-black/70 transition-colors">联系</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">解决方案</h3>
            <ul className="space-y-3 text-sm font-light text-black/55">
              <li><Link href="/services#furniture" className="hover:text-black/70 transition-colors">实验室家具系统</Link></li>
              <li><Link href="/services#fumehood" className="hover:text-black/70 transition-colors">通风柜与安全</Link></li>
              <li><Link href="/services#infrastructure" className="hover:text-black/70 transition-colors">实验室基础配套</Link></li>
              <li><Link href="/services#tailored" className="hover:text-black/70 transition-colors">因需而变</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black/55 font-medium text-xs tracking-[0.2em] uppercase mb-6">联系</h3>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-black/55 select-text">15711406648</span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-black/55 select-text">ruihuizhuye@126.com</span>
              </li>
              <li className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-black/55 select-text">北京市昌平区国家信息产业基地13号1046</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pb-6 text-xs font-light border-t border-black/[0.12] pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-black/30">
          <span>© {new Date().getFullYear()} 北京瑞辉筑业实验室科技有限公司</span>
          <div className="flex items-center gap-4">
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-black/50 transition-colors">
              {settings.icpLicense}
            </a>
            <span>{settings.policeBeian}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
