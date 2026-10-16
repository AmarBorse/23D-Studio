"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, CONTACT, SOCIALS } from "@/data/site";
import Arrow from "./Arrow";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu whenever the page changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock page scroll and allow Escape while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header className="site-header fadein" style={{ animationDelay: "1.4s" }}>
        <Link href="/" className="logo" aria-label="23D Studio home">
          <img src="/media/logo-dark.png" alt="23D Studio" />
        </Link>
        <nav aria-label="Main" className="desktop-nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="nl"
              aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-blue desktop-cta">Start a project <Arrow size={14} /></Link>
        <button type="button" className={`menu-btn${open ? " is-open" : ""}`} aria-expanded={open}
          aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile" className="mobile-menu__nav">
          {[{ label: "Home", href: "/" }, ...NAV].map((item, i) => (
            <Link key={item.href} href={item.href} className="mobile-menu__link"
              style={{ transitionDelay: open ? `${0.15 + i * 0.07}s` : "0s" }}
              aria-current={pathname === item.href ? "page" : undefined}>
              <span className="mobile-menu__num">0{i + 1}</span>
              <span className="display">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot" style={{ transitionDelay: open ? "0.55s" : "0s" }}>
          <a href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <div className="mobile-menu__social">
            {SOCIALS.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </div>
          <Link href="/contact" className="btn btn-light">Start a project <Arrow size={14} /></Link>
        </div>
      </div>
    </>
  );
}
