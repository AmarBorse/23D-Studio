"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { WORK } from "@/data/site";

const CATS = ["All", "3D", "Videos", "Architecture", "Interiors", "Exhibition", "Branding", "Product", "Marketing"];
const matches = (w, f) => f === "All" || (f === "Videos" ? w.video : w.cat === f);


const Chevron = ({ d }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={d} /></svg>
);

export default function WorkGallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(-1);
  const shown = useMemo(() => WORK.filter((w) => matches(w, filter)), [filter]);
  const n = shown.length;
  const current = open >= 0 ? shown[open] : null;

  const touchX = useRef(null);
  const prev = () => setOpen((o) => (o - 1 + n) % n);
  const next = () => setOpen((o) => (o + 1) % n);

  // Keyboard support and scroll lock while the lightbox is open
  useEffect(() => {
    if (!current) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <section style={{ padding: "0 4% 120px" }}>
      <div className="wrap stack" style={{ gap: 24 }}>
        <div role="group" aria-label="Filter projects" className="filters fadein" style={{ animationDelay: "1.9s" }}>
          {CATS.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={filter === c}
              onClick={() => { setFilter(c); setOpen(-1); }}>
              {c} <small>{WORK.filter((w) => matches(w, c)).length}</small>
            </button>
          ))}
        </div>
        <p aria-live="polite" style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
          Showing {n} {filter === "All" ? "" : filter.toLowerCase() + " "}{n === 1 ? "item" : "items"}
        </p>
        <div className="gallery">
          {shown.map((w, i) => (
            <div key={w.src} className={`reveal ${w.tall && filter === "All" ? "tall" : ""}`}>
              <button type="button" className="tile frame frame-fill" onClick={() => setOpen(i)}
                aria-label={`${w.video ? "Play" : "Open"} ${w.title}`}>
                {w.video ? (
                  <>
                    <video src={w.src} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
                    <span className="badge-video">
                      <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z" /></svg>
                      Video
                    </span>
                  </>
                ) : (
                  <img src={w.src} alt="" loading="lazy" />
                )}
                <span className="tag"><b>{w.title}</b><small>{w.cat}</small></span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title}>
          <div className="lightbox__top">
            <div><b>{current.title}</b><small>{current.cat}, {open + 1} of {n}</small></div>
            <button type="button" className="btn-round" onClick={() => setOpen(-1)} aria-label="Close" autoFocus>
              <Chevron d="M6 6l12 12M18 6L6 18" />
            </button>
          </div>
          <div className="lightbox__body">
            <button type="button" className="btn-round" onClick={prev} aria-label="Previous"><Chevron d="M15 6l-6 6 6 6" /></button>
            <div className="lightbox__media"
              onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touchX.current == null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
                touchX.current = null;
              }}>
              {current.video ? (
                <video key={current.src} className="pop" src={current.src} autoPlay muted loop playsInline controls aria-label={current.title} />
              ) : (
                <img key={current.src} className="pop" src={current.src} alt={current.title} />
              )}
            </div>
            <button type="button" className="btn-round" onClick={next} aria-label="Next"><Chevron d="M9 6l6 6-6 6" /></button>
          </div>
          <div className="lightbox__nav">
            <button type="button" className="btn-round" onClick={prev} aria-label="Previous"><Chevron d="M15 6l-6 6 6 6" /></button>
            <button type="button" className="btn-round" onClick={next} aria-label="Next"><Chevron d="M9 6l6 6-6 6" /></button>
          </div>
        </div>
      )}
    </section>
  );
}
