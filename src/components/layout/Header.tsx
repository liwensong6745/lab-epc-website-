"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品中心", href: "/services" },
  { label: "案例", href: "/cases" },
  { label: "关于", href: "/about" },
  { label: "联系", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-white/90 backdrop-blur-xl lg:bg-transparent lg:hover:bg-white/90 lg:hover:backdrop-blur-xl lg:hover:shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <span className="text-xl tracking-tight text-black" style={{ fontFamily: '"ZCOOL XiaoWei", "Noto Serif SC", serif' }}>
                瑞辉筑业<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#007AFF] mx-2 align-middle" />RayHo
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-black/60 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <span className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-[#1D1D1F] text-white rounded-md btn-shadow select-none">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                400-888-6666
              </span>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-black"
              aria-label="菜单"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6">
              <span className="text-black" style={{ fontFamily: '"ZCOOL XiaoWei", "Noto Serif SC", serif' }}>瑞辉筑业<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#007AFF] mx-2 align-middle" />RayHo</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-black/40 hover:text-black">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-black/50 hover:text-black hover:bg-black/3 transition-colors">
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 mt-4 border-t border-black/8">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-[#1D1D1F] text-white text-sm font-medium rounded-md btn-shadow hover:bg-[#007AFF] transition-all">
                  在线咨询
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
