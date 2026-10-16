"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal, .clipin, .tilt, .rule, .ruley, .widen, .count, .team";

// Fallback for browsers without CSS scroll-driven animations (Firefox, older iOS Safari):
// reproduces the reveals, count-ups, hero zoom and progress bar with JavaScript.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const supported = typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (supported || reduced) return;

    const root = document.documentElement;
    root.classList.add("io");

    const countUp = (el) => {
      const to = Number(el.dataset.to) || 0;
      const start = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.style.setProperty("--to", String(Math.round(to * eased)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          if (e.target.classList.contains("count")) countUp(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains("count") && !el.dataset.to) {
          el.dataset.to = el.style.getPropertyValue("--to") || "0";
          el.style.setProperty("--to", "0");
        }
        io.observe(el);
      });
    }, 60);

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--page-p", String(max > 0 ? window.scrollY / max : 0));
        root.style.setProperty("--hero-p", String(Math.min(1, window.scrollY / (window.innerHeight * 1.2))));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
