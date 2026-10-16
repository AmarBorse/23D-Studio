"use client";
import { useEffect, useRef } from "react";

// Small dot that follows the mouse and grows over links and buttons.
export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const hit = e.target.closest?.("a, button");
      el.classList.toggle("big", Boolean(hit));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor" aria-hidden="true"><span /></div>;
}
