"use client";

import { useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

export default function CaseList({ cases }: { cases: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState("全部");
  const industries = ["全部", ...Array.from(new Set(cases.map((c) => c.industry)))];

  const filtered = activeFilter === "全部" ? cases : cases.filter((c) => c.industry === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-20">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveFilter(industry)}
            className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer ${
              activeFilter === industry
                ? "bg-dark text-white"
                : "bg-subtle text-text-secondary hover:bg-dark hover:text-white"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((c) => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="group block">
            <div className="relative aspect-[4/3] bg-subtle overflow-hidden mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <img
                src={c.thumbnail}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 text-white text-xs font-medium tracking-wider uppercase">{c.industry}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors tracking-tight">{c.title}</h3>
            <p className="text-sm text-text-tertiary font-light">{c.client} · {c.location} · {c.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
