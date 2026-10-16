import Words from "@/components/Words";
import WorkGallery from "@/components/WorkGallery";

export const metadata = {
  title: "Work",
  description: "Selected architecture, interior, exhibition, branding, product and marketing work by 23D Studio.",
};

export default function Work() {
  return (
    <>
      <section className="subhero" style={{ paddingBottom: 40 }}>
        <div className="wrap subhero__top">
          <h1 className="display" style={{ flex: "1 1 640px", fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.88 }}>
            <Words text="Work in motion." />
          </h1>
          <p className="lead fadein" style={{ animationDelay: "1.7s" }}>
            Spaces, products, exhibitions and brands — in stills and motion. Choose a category, then tap any piece to view it larger.
          </p>
        </div>
      </section>
      <WorkGallery />
    </>
  );
}
