import Link from "next/link";
import SubHero from "@/components/SubHero";
import Video from "@/components/Video";
import Arrow from "@/components/Arrow";
import { SERVICES, PROCESS } from "@/data/site";

export const metadata = {
  title: "Services",
  description: "Architectural visualization, product visualization, exhibition design, branding and marketing by 23D Studio.",
};

export default function Services() {
  return (
    <>
      <SubHero
        title="Five disciplines. One studio."
        intro="From the first sketch to the final render, we design across architecture, product, exhibition, brand and marketing."
        video="/media/3d-flythrough.mp4"
      />

      <section style={{ padding: "80px 4% 40px" }}>
        <div className="wrap" style={{ borderBottom: "2px solid var(--ink)" }}>
          {SERVICES.map((s, i) => (
            <article key={s.title} className="service">
              <div className="frame service__media widen"><Video src={s.video} label={`${s.title} reel`} /></div>
              <div className="service__body reveal">
                <span className="service__num">0{i + 1}</span>
                <h2 className="display h3">{s.title}</h2>
                <p className="lead">{s.text}</p>
                <ul className="chips">{s.includes.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link href="/contact" className="btn btn-blue" style={{ alignSelf: "flex-start" }}>Enquire about this <Arrow size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--blue)", color: "#fff" }}>
        <div className="wrap stack" style={{ gap: 56 }}>
          <h2 className="display h2 reveal">Our process</h2>
          <ol className="process">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="reveal">
                <span className="n">{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
