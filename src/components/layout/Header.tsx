"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "服务", href: "/services" },
  { label: "案例", href: "/cases" },
  { label: "资质", href: "/qualifications" },
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
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <span className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-dark" : "text-white"
              }`}>
                RayHo
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-text-secondary hover:text-dark"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:400-888-6666"
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-text-secondary" : "text-white/60"
                }`}
              >
                400-888-6666
              </a>
              <Link
                href="/contact"
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "bg-dark text-white hover:bg-accent"
                    : "border border-white/30 text-white hover:bg-white/10"
                }`}
              >
                在线咨询
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${scrolled ? "text-dark" : "text-white"}`}
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
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6">
              <span className="font-semibold text-dark">RayHo</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-text-secondary hover:text-dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-dark hover:bg-subtle transition-colors">
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 mt-4 border-t border-border">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-dark text-white text-sm font-medium hover:bg-accent transition-colors">
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
