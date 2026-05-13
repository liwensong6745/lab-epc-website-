"use client";

import { useEffect } from "react";

export default function ImageProtect() {
  useEffect(() => {
    const isImg = (el: HTMLElement) => el.tagName === "IMG";

    const onContext = (e: MouseEvent) => {
      if (isImg(e.target as HTMLElement)) e.preventDefault();
    };

    // Mobile long-press
    let timer: ReturnType<typeof setTimeout>;
    const onTouchStart = (e: TouchEvent) => {
      const el = e.target as HTMLElement;
      if (!isImg(el)) return;
      timer = setTimeout(() => {
        e.preventDefault();
      }, 500);
    };
    const onTouchEnd = () => clearTimeout(timer);
    const onTouchMove = () => clearTimeout(timer);

    document.addEventListener("contextmenu", onContext);
    document.addEventListener("touchstart", onTouchStart, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchmove", onTouchMove);

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
