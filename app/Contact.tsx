"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", service:"", message:"" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", service:"", message:"" });
  };

  const inputStyle: React.CSSProperties = { width:"100%", background:"#050A18", border:"1px solid #1A2D52", color:"#fff", padding:"12px 16px", borderRadius:8, fontFamily:"DM Sans,sans-serif", fontSize:14, outline:"none", transition:"border-color 0.2s" };

  return (
    <section id="contact" style={{ padding:"6rem 0", background:"#050A18" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }} className="contact-grid">

          {/* Left */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ width:4, height:44, background:"#2563EB", borderRadius:2 }} />
              <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.68rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#60A5FA" }}>Get in Touch</span>
            </div>
            <h2 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(2rem,4vw,3rem)", color:"#fff", marginBottom:20 }}>
              Let's Build Your<br /><span style={{ color:"#3B82F6" }}>IT Infrastructure</span>
            </h2>
            <p style={{ fontFamily:"DM Sans,sans-serif", color:"#64748B", lineHeight:1.75, marginBottom:40 }}>
              Whether you need a quick helpdesk fix or a full enterprise network rollout, CiT Solutions is ready. Reach out for a free consultation or site assessment.
            </p>

            {/* Contact info */}
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:40 }}>
              {[
                { label:"Phone", value:"+27 64 528 2169", href:"tel:+27645282169" },
                { label:"Email", value:"masinacalvin@icloud.com", href:"mailto:masinacalvin@icloud.com" },
                { label:"Location", value:"South Africa", href:null },
              ].map(c => (
                <div key={c.label} style={{ display:"flex", alignItems:"center", gap:16, padding:"16px 20px", background:"#080F22", border:"1px solid #1A2D52", borderRadius:10, transition:"border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor="#2563EB55")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor="#1A2D52")}>
                  <div style={{ width:36, height:36, borderRadius:8, background:"rgba(37,99,235,0.12)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:"#2563EB" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:3 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"#CBD5E1", textDecoration:"none" }}
                          onMouseEnter={e => (e.currentTarget.style.color="#60A5FA")}
                          onMouseLeave={e => (e.currentTarget.style.color="#CBD5E1")}>{c.value}</a>
                      : <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"#CBD5E1" }}>{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {["Managed IT","CCTV","Networking","Servers","WiFi","Schools","Access Control"].map(t => (
                <span key={t} style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", border:"1px solid #1A2D52", padding:"6px 12px", borderRadius:4, letterSpacing:"0.12em", textTransform:"uppercase", cursor:"default", transition:"all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#2563EB55"; (e.currentTarget as HTMLElement).style.color="#60A5FA"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#1A2D52"; (e.currentTarget as HTMLElement).style.color="#2D3F5C"; }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background:"#080F22", border:"1px solid #1A2D52", borderRadius:16, padding:"40px 36px" }}>
            <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.5rem", color:"#fff", marginBottom:24 }}>Send a Message</h3>

            {sent && (
              <div style={{ marginBottom:20, border:"1px solid rgba(16,185,129,0.3)", background:"rgba(16,185,129,0.08)", color:"#10B981", fontFamily:"Space Mono,monospace", fontSize:"0.7rem", letterSpacing:"0.1em", padding:"12px 16px", borderRadius:8, textTransform:"uppercase" }}>
                ✓ Message received — we'll be in touch shortly.
              </div>
            )}

            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                <div>
                  <label style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", marginBottom:8 }}>Name</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor="#2563EB")} onBlur={e => (e.target.style.borderColor="#1A2D52")} />
                </div>
                <div>
                  <label style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", marginBottom:8 }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor="#2563EB")} onBlur={e => (e.target.style.borderColor="#1A2D52")} />
                </div>
              </div>
              <div>
                <label style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", marginBottom:8 }}>Service Required</label>
                <select name="service" value={form.service} onChange={onChange} style={{ ...inputStyle, appearance:"none" as React.CSSProperties["appearance"] }}
                  onFocus={e => (e.target.style.borderColor="#2563EB")} onBlur={e => (e.target.style.borderColor="#1A2D52")}>
                  <option value="" disabled>Select a service...</option>
                  {["Managed IT Services","Networking Solutions","CCTV & Surveillance","Security & Protection","Server & Infrastructure","Wireless & Internet","Smart School Solutions","Access Control","Web & Digital Services","Other / Custom Project"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontFamily:"Space Mono,monospace", fontSize:"0.62rem", color:"#2D3F5C", letterSpacing:"0.15em", textTransform:"uppercase", display:"block", marginBottom:8 }}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} placeholder="Describe your requirements..." rows={5} style={{ ...inputStyle, resize:"vertical" }}
                  onFocus={e => (e.target.style.borderColor="#2563EB")} onBlur={e => (e.target.style.borderColor="#1A2D52")} />
              </div>
              <button onClick={onSubmit}
                style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"#2563EB", color:"#fff", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"0.85rem", letterSpacing:"0.08em", textTransform:"uppercase", padding:"14px 0", borderRadius:8, border:"none", cursor:"pointer", transition:"all 0.2s", marginTop:4 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#3B82F6"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#2563EB"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .contact-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}