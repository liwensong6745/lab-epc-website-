"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const models = [
  { src: "/images/fumehoods/01.png" },
  { src: "/images/fumehoods/05.png" },
  { src: "/images/fumehoods/03.png" },
  { src: "/images/fumehoods/04.png" },
];

export default function FumeHoodFan() {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const dirRef = useRef(1);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      dirRef.current = index > current ? 1 : -1;
      setExiting(current);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    goTo((current + 1) % models.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + models.length) % models.length);
  }, [current, goTo]);

  useEffect(() => {
    if (hovered || exiting !== null) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [hovered, next, exiting]);

  function getStyle(i: number) {
    const d = dirRef.current;

    if (i === current) {
      // Entering: start from side, settle at center
      return {
        opacity: 1,
        transform: "translateX(0) scale(1)",
        transition: "opacity 1.2s cubic-bezier(0.22, 0.61, 0.36, 1), transform 1.2s cubic-bezier(0.22, 0.61, 0.36, 1)",
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    }

    if (i === exiting) {
      // Exiting: drift away
      return {
        opacity: 0,
        transform: `translateX(${d === 1 ? "-10%" : "10%"}) scale(0.98)`,
        transition: "opacity 0.9s ease-in, transform 0.9s ease-in",
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    }

    // Hidden
    return {
      opacity: 0,
      transform: `translateX(${d === 1 ? "10%" : "-10%"}) scale(0.98)`,
      transition: "none",
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[480px]">
      {/* Vertical nav — absolute, percentage-based so it scales with width */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-20 select-none">
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full flex items-center justify-center text-black/10 hover:text-[#007AFF] hover:bg-black/3 transition-all duration-300"
          aria-label="上一张"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 15l-7-7-7 7" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-3">
          {models.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? "w-1.5 h-5 bg-[#007AFF]/70"
                  : "w-1.5 h-1.5 bg-black/12 hover:bg-black/30"
              }`}
              aria-label={`第 ${i + 1} 张`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-7 h-7 rounded-full flex items-center justify-center text-black/10 hover:text-[#007AFF] hover:bg-black/3 transition-all duration-300"
          aria-label="下一张"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9l7 7 7-7" />
          </svg>
        </button>
      </div>

      {/* Image area — full width */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {models.map((m, i) => {
          const style = getStyle(i);

          return (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={style}
              onTransitionEnd={() => {
                if (i === exiting) setExiting(null);
              }}
            >
              <img
                src={m.src}
                alt=""
                className="max-h-full max-w-[92%] object-contain select-none p-4"
                draggable={false}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
