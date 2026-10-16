export default function ClientsBand({ title = "Trusted by brands across India" }) {
  return (
    <section aria-label="Clients" className="clients marquee-wrap dark">
      <h2 className="reveal">{title}</h2>
      <div className="marquee" aria-hidden="true">
        <img src="/media/clients.png" alt="" />
        <img src="/media/clients.png" alt="" />
      </div>
      <p className="sr-only">
        Clients include Neelay Group, TDK, Tints Design Studio, Aditya Enterprises, Yash Builders and
        Developers, Blanc Space, Supreme Capitals, VCK Associates, Elements Studio and Dayani Lohokare.
      </p>
    </section>
  );
}
