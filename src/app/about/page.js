import SubHero from "@/components/SubHero";
import ClientsBand from "@/components/ClientsBand";
import { TIMELINE, TEAM } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Meet 23D Studio, a multidisciplinary design studio founded in 2025 in Nashik, Maharashtra.",
};

export default function About() {
  return (
    <>
      <SubHero
        title="We craft stories through design."
        intro="Turning concepts into experiences and visions into realities, for spaces, products and brands."
        video="/media/showreel.mp4"
        poster="/media/showreel-poster.jpg"
      />

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "40px 96px" }}>
          <h2 className="display h2 reveal" style={{ flex: "1 1 360px" }}>Our story</h2>
          <div className="stack" style={{ flex: "2 1 560px", gap: 24 }}>
            <p className="reveal" style={{ margin: 0, fontWeight: 600, fontStretch: "110%", fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)", lineHeight: 1.3 }}>
              Founded with the belief that design should inspire, we have grown into a multidisciplinary studio creating
              spaces, visuals and identities that leave lasting impressions.
            </p>
            <p className="lead reveal">Every project is an opportunity to shape how people interact with environments, brands and experiences.</p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap split-sticky">
          <div className="frame split-sticky__media" style={{ flexBasis: 440 }}>
            <img src="/media/about.jpg" alt="The 23D Studio workspace" />
          </div>
          <div className="timeline">
            <span className="ruley" aria-hidden="true" />
            <ol>
              {TIMELINE.map((t) => (
                <li key={t.title} className="reveal">
                  <h3 className="display">{t.title}</h3>
                  <p>{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 56 }}>
          <div className="head-row reveal">
            <h2 className="display h2">Meet the team</h2>
            <p className="lead" style={{ maxWidth: 340, fontSize: 16 }}>Nine designers, artists and developers working as one studio.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <figure key={m.name} className="team reveal">
                <div className="frame"><img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" /></div>
                <figcaption><b>{m.name}</b><span>{m.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ClientsBand title="Brands that trust us" />
    </>
  );
}
