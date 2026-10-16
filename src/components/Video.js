"use client";
import { useEffect, useRef } from "react";

// Muted, looping video that only plays while on screen (saves battery and data on phones).
export default function Video({ src, poster, label, className, style, controls = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster ?? src.replace(/\.mp4$/, ".jpg")}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls={controls}
      className={className}
      style={style}
      {...(label ? { "aria-label": label } : { "aria-hidden": true })}
    />
  );
}
