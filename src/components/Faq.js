"use client";
import { useState } from "react";
import { FAQ } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="faq-item">
            <button type="button" className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}>
              {f.q}
              <span className="faq-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            {isOpen && <p id={`faq-${i}`} className="faq-a fadein">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
