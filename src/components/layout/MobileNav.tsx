"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-warm-800/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-warm-50 shadow-2xl animate-[slideIn_0.2s_ease-out] rounded-l-3xl">
        <div className="flex items-center justify-between p-5">
          <span className="font-semibold text-warm-800">导航</span>
          <button onClick={onClose} className="p-2 text-warm-400 hover:text-warm-600 rounded-full hover:bg-warm-100" aria-label="关闭">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {items.map((item) =>
            item.children ? (
              <div key={item.href}>
                <button
                  onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-warm-700 hover:bg-warm-100/50 rounded-2xl transition-colors"
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${expanded === item.href ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expanded === item.href && (
                  <div className="ml-4 space-y-1 border-l-2 border-warm-200 pl-4 mt-1">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={onClose} className="block px-4 py-2.5 text-sm text-warm-500 hover:text-warm-700 rounded-2xl">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={onClose} className="block px-4 py-3 text-sm font-medium text-warm-700 hover:bg-warm-100/50 rounded-2xl transition-colors">
                {item.label}
              </Link>
            )
          )}
          <div className="pt-5 mt-5 border-t border-warm-200">
            <Link href="/contact" onClick={onClose} className="block w-full text-center px-5 py-3.5 bg-warm-800 text-warm-50 rounded-full font-medium">
              项目咨询
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
