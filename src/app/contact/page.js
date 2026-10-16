import Video from "@/components/Video";
import Words from "@/components/Words";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { CONTACT } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Start a project with 23D Studio in Nashik. Call, WhatsApp, email or send an enquiry.",
};

export default function Contact() {
  return (
    <>
      <section style={{ padding: "150px 4% 100px" }}>
        <div className="wrap contact-grid">
          <div className="contact-panel dark fadein" style={{ animationDelay: "1.3s" }}>
            <Video src="/media/reel-brand.mp4" />
            <div className="contact-panel__body">
              <h1 className="display"><Words text="Let’s build something together." start={1.5} /></h1>
              <div className="info-grid">
                <div>
                  <span className="k">Call or WhatsApp</span>
                  {CONTACT.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                </div>
                <div>
                  <span className="k">Email</span>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
                <div>
                  <span className="k">Studio</span>
                  <span style={{ lineHeight: 1.5 }}>{CONTACT.addressShort}</span>
                  <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, textDecoration: "underline" }}>Get directions</a>
                </div>
                <div>
                  <span className="k">Opening hours</span>
                  <span>{CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-card fadein" style={{ animationDelay: "1.5s" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 4% 120px" }}>
        <div className="wrap-narrow stack" style={{ gap: 40 }}>
          <h2 className="display h2 reveal">Questions</h2>
          <Faq />
        </div>
      </section>
    </>
  );
}
