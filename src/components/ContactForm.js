"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Arrow from "./Arrow";
import { SERVICES } from "@/data/site";

// Uses the same EmailJS setup as the original project (see .env.example).
export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="success pop" role="status">
        <span className="tick" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L19 7" /></svg>
        </span>
        <h2 className="display" style={{ fontSize: 36 }}>Enquiry sent</h2>
        <p className="lead" style={{ fontSize: 16 }}>Thanks for reaching out. Our team will get back to you shortly.</p>
        <button type="button" className="btn btn-line" style={{ alignSelf: "flex-start" }} onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={form} className="form" onSubmit={onSubmit}>
      <h2 className="display" style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)", letterSpacing: "-0.03em" }}>Tell us about your project</h2>
      <div className="row2">
        <div className="field">
          <label htmlFor="user_name">Name</label>
          <input id="user_name" name="user_name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="user_phone">Phone</label>
          <input id="user_phone" name="user_phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="user_email">Email</label>
        <input id="user_email" name="user_email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue={SERVICES[0].title}>
          {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      {status === "error" && (
        <p className="form-error" role="alert">
          Sorry, your message could not be sent. Please try again, or email us at 23dstudiodesign@gmail.com.
        </p>
      )}
      <button type="submit" className="btn btn-blue btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : <>Send enquiry <Arrow /></>}
      </button>
    </form>
  );
}
