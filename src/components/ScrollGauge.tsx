"use client"; // tracks window scroll, so it must run in the browser

import { useEffect, useState } from "react";

// Thin glowing "RPM" bar across the very top — fills as you scroll.
export default function ScrollGauge() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-[width] duration-100"
      style={{ width: `${width}%`, boxShadow: "0 0 14px rgba(34,211,238,0.8)" }}
    />
  );
}
