"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "完成项目" },
  { value: 120, suffix: "+", label: "服务客户" },
  { value: 15, suffix: "年", label: "行业经验" },
  { value: 100, suffix: "%", label: "验收通过率" },
];

function AnimatedNumber({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const timer = setInterval(() => {
      current += target / 50;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 40);
    return () => clearInterval(timer);
  }, [started, target]);
  return <span>{count}{suffix}</span>;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl md:text-6xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} started={inView} />
              </div>
              <div className="text-sm text-text-tertiary font-light tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
