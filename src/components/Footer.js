import Link from "next/link";
import { NAV, CONTACT, SOCIALS } from "@/data/site";
import Arrow from "./Arrow";
import Video from "./Video";

export default function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="footer-cta">
        <Video src="/media/reel-expo.mp4" />
        <div className="footer-cta__body reveal">
          <h2 className="display">Let’s create something remarkable.</h2>
          <Link href="/contact" className="btn btn-light btn-lg">Start a project <Arrow /></Link>
        </div>
      </div>
      <div className="footer-main wrap">
        <div className="footer-cols">
          <div className="footer-about">
            <img src="/media/logo-light.png" alt="23D Studio" />
            <p>We transform visionary concepts into impactful realities, combining innovation with results-driven strategy.</p>
          </div>
          <nav aria-label="Footer">
            <Link href="/" className="nl">Home</Link>
            {NAV.map((n) => <Link key={n.href} href={n.href} className="nl">{n.label}</Link>)}
          </nav>
          <div className="contact">
            {CONTACT.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>Nashik, Maharashtra</span>
          </div>
          <nav aria-label="Social">
            {SOCIALS.map((s) => <a key={s.href} href={s.href} className="nl" target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </nav>
        </div>
        <p className="wordmark display slide" aria-hidden="true">23D STUDIO 23D STUDIO</p>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 23D Studio, Nashik</p>
          <p>Website designed &amp; managed by <strong>Hiresnix</strong></p>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
