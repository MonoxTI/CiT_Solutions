"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  const inputStyle: React.CSSProperties = { width: "100%", background: "#000", border: "1px solid #1E1E1E", color: "#fff", padding: "12px 14px", borderRadius: 3, fontFamily: "DM Sans,sans-serif", fontSize: 14, outline: "none", transition: "border-color 0.2s" };
  const labelStyle: React.CSSProperties = { fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#404040", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: 8 };

  return (
    <section id="contact" style={{ padding: "6rem 0", background: "#000", position: "relative", overflow: "hidden" }}>

      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=70&auto=format&fit=crop"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.12)" }}
        />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-grid">

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 2, height: 48, background: "#fff" }} />
              <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#606060" }}>Get in Touch</span>
            </div>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", marginBottom: 20 }}>
              Let's Build Your<br />
              <span style={{ background: "linear-gradient(135deg,#fff,#666)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>IT Infrastructure</span>
            </h2>
            <p style={{ fontFamily: "DM Sans,sans-serif", color: "#555", lineHeight: 1.8, marginBottom: 44 }}>
              Whether you need a quick helpdesk fix or a full enterprise network rollout, CiT Solutions is ready. Reach out for a free consultation or site assessment.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 44 }}>
              {[
                { label: "Phone", value: "+27 64 528 2169", href: "tel:+27645282169" },
                { label: "Email", value: "masinacalvin@icloud.com", href: "mailto:masinacalvin@icloud.com" },
                { label: "Location", value: "South Africa", href: null },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", background: "rgba(8,8,8,0.9)", border: "1px solid #1A1A1A", borderRadius: 3, transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#3A3A3A")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#1A1A1A")}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
                  <div>
                    <div style={labelStyle}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ fontFamily: "DM Sans,sans-serif", fontSize: 14, color: "#B0B0B0", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#B0B0B0")}>{c.value}</a>
                      : <span style={{ fontFamily: "DM Sans,sans-serif", fontSize: 14, color: "#B0B0B0" }}>{c.value}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Managed IT", "CCTV", "Networking", "Servers", "WiFi", "Schools", "Access Control"].map(t => (
                <span key={t} style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#363636", border: "1px solid #1A1A1A", padding: "6px 12px", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "default", transition: "all 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#3A3A3A"; el.style.color = "#888"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1A1A1A"; el.style.color = "#363636"; }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(8,8,8,0.95)", border: "1px solid #1E1E1E", borderRadius: 4, padding: "44px 36px", backdropFilter: "blur(10px)" }}>
            <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "#fff", marginBottom: 28 }}>Send a Message</h3>

            {sent && (
              <div style={{ marginBottom: 20, border: "1px solid #2A2A2A", background: "#111", color: "#B0B0B0", fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.1em", padding: "12px 16px", borderRadius: 3, textTransform: "uppercase" }}>
                ✓ Message received — we'll be in touch shortly.
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#4A4A4A")} onBlur={e => (e.target.style.borderColor = "#1E1E1E")} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#4A4A4A")} onBlur={e => (e.target.style.borderColor = "#1E1E1E")} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Service Required</label>
                <select name="service" value={form.service} onChange={onChange} style={{ ...inputStyle, appearance: "none" as React.CSSProperties["appearance"] }}
                  onFocus={e => (e.target.style.borderColor = "#4A4A4A")} onBlur={e => (e.target.style.borderColor = "#1E1E1E")}>
                  <option value="" disabled>Select a service...</option>
                  {["Managed IT Services","Networking Solutions","CCTV & Surveillance","Security & Protection","Server & Infrastructure","Wireless & Internet","Smart School Solutions","Access Control","Web & Digital Services","Other / Custom Project"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} placeholder="Describe your requirements..." rows={5} style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "#4A4A4A")} onBlur={e => (e.target.style.borderColor = "#1E1E1E")} />
              </div>
              <button onClick={onSubmit}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#fff", color: "#000", fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 0", borderRadius: 3, border: "none", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C0C0C0"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}>
                Send Message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ .contact-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}