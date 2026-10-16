import Link from "next/link";
import Video from "@/components/Video";
import Words from "@/components/Words";
import Arrow from "@/components/Arrow";
import ClientsBand from "@/components/ClientsBand";
import { SERVICES, STATS, VALUES, THREE_D } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Showreel plays inside the giant "23D" letters, then zooms open on scroll */}
      <section className="zoomhero">
        <div className="zoomhero__sticky">
          <Video src="/media/showreel.mp4" poster="/media/showreel-poster.jpg" label="Showreel of 23D Studio renders" />
          <div className="zoomtext" aria-hidden="true"><span className="display">23D</span></div>
          <div className="zoomhero__bottom">
            <h1><Words text="Blending creative vision with innovative thinking." start={1.5} step={0.05} /></h1>
            <span className="scrollcue fadein" style={{ animationDelay: "2.1s" }}>
              <span className="cue" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
              </span>
              Scroll to enter the studio
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "40px 96px", alignItems: "flex-end" }}>
          <h2 className="display h2 reveal" style={{ flex: "1 1 640px" }}>We are 23D Studio. Bold designs that tell your story.</h2>
          <div className="stack reveal" style={{ flex: "0 1 420px", gap: 24 }}>
            <p className="lead">
              We help brands tell their stories and stand out with fresh strategies and creative services that actually work —
              building brands people love and delivering results that help your business grow.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/work" className="btn btn-blue">View work <Arrow /></Link>
              <Link href="/about" className="btn btn-line">About us</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="wrap head-row" style={{ padding: "0 4%" }}>
          <h2 className="display h2 reveal">Five disciplines in motion</h2>
          <p className="lead reveal" style={{ maxWidth: 340, fontSize: 16 }}>Swipe through the reel for each service, then tap one to learn more.</p>
        </div>
        <div className="reelrow tilt">
          {SERVICES.map((s, i) => (
            <Link key={s.title} href="/services" className="vcard">
              <div className="frame frame-fill">
                <Video src={s.video} />
                <span className="num">0{i + 1}</span>
              </div>
              <span className="meta">{s.title} <Arrow size={20} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section dark" style={{ marginBottom: 120 }}>
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="head-row">
            <h2 className="display h2 reveal" style={{ maxWidth: 900 }}>Every idea, in three dimensions.</h2>
            <p className="lead reveal" style={{ maxWidth: 360, fontSize: 16 }}>We think in depth — so we show our work that way too.</p>
          </div>
          <div className="frame three-d__main clipin">
            <Video src={THREE_D[0].src} label={THREE_D[0].title} />
            <span className="badge-3d">3D</span>
          </div>
          <div className="three-d__grid">
            {THREE_D.slice(1).map((v) => (
              <figure key={v.src} className="reveal">
                <div className="frame">
                  <Video src={v.src} label={v.title} />
                  <span className="badge-3d">3D</span>
                </div>
                <figcaption><b>{v.title}</b><span>{v.text}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 4% 120px" }}>
        <dl className="wrap stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat reveal">
              <span className="rule" aria-hidden="true" />
              <dt>{s.label}</dt>
              <dd className="display">
                <span className="sr-only">{s.value}{s.suffix}</span>
                <span className="count" aria-hidden="true" style={{ "--to": s.value }} />
                {s.suffix ? <span aria-hidden="true">{s.suffix}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section dark">
        <div className="wrap split-sticky">
          <div className="frame split-sticky__media"><Video src="/media/reel-arch.mp4" /></div>
          <div className="split-sticky__text">
            <h2 className="display h2 reveal">What drives us</h2>
            {VALUES.map((v, i) => (
              <div key={v.title} className="value reveal">
                <span className="idx">0{i + 1}</span>
                <h3 className="display h3">{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 48 }}>
          <div className="head-row reveal">
            <h2 className="display h2">Featured work</h2>
            <Link href="/work" className="btn btn-line">All projects <Arrow /></Link>
          </div>
          <div className="feature-grid">
            <Link href="/work" className="tile frame frame-fill clipin">
              <Video src="/media/reel-expo.mp4" />
              <span className="tag"><b>Exhibition design reel</b></span>
            </Link>
            <Link href="/work" className="tile frame frame-fill clipin">
              <img src="/media/feature.jpg" alt="" />
              <span className="tag"><b>Living and dining interior</b></span>
            </Link>
          </div>
        </div>
      </section>

      <ClientsBand />
    </>
  );
}
