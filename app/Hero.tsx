"use client";
import { useEffect, useState } from "react";

const services = ["Networking Solutions","CCTV & Surveillance","Managed IT Services","Server Infrastructure","Smart School Systems","Wireless & WiFi"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx(i => (i + 1) % services.length); setVisible(true); }, 350);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", backgroundImage:"radial-gradient(circle, rgba(37,99,235,0.1) 1px, transparent 1px)", backgroundSize:"28px 28px" }}>
      {/* Glow blobs */}
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:600, height:600, borderRadius:"50%", background:"rgba(37,99,235,0.08)", filter:"blur(100px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", left:"-5%", width:400, height:400, borderRadius:"50%", background:"rgba(59,130,246,0.06)", filter:"blur(80px)", pointerEvents:"none" }} />

      {/* Ghost text */}
      <div style={{ position:"absolute", right:40, top:"50%", transform:"translateY(-50%)", fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"18vw", color:"#0F1D3A", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>CiT</div>

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"8rem 2.5rem 5rem", width:"100%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:700 }}>
          {/* Eyebrow */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32, animation:"fadeUp 0.6s ease both", animationDelay:"0.1s" }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#2563EB", animation:"pulse 2s infinite" }} />
            <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.68rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#60A5FA" }}>
              South Africa's IT Partner
            </span>
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(2.8rem,6vw,5rem)", color:"#fff", lineHeight:1.0, marginBottom:16, animation:"fadeUp 0.6s ease both", animationDelay:"0.2s" }}>
            Complete IT &<br />
            <span style={{ color:"#3B82F6" }}>Security Solutions</span>
          </h1>

          {/* Rotating service */}
          <div style={{ height:40, display:"flex", alignItems:"center", marginBottom:24, animation:"fadeUp 0.6s ease both", animationDelay:"0.3s" }}>
            <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:"1.2rem", color:"#60A5FA", fontStyle:"italic", fontWeight:300, opacity:visible?1:0, transition:"opacity 0.3s" }}>
              — {services[idx]}
            </span>
          </div>

          {/* Description */}
          <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:"1.05rem", color:"#64748B", maxWidth:520, lineHeight:1.7, marginBottom:40, animation:"fadeUp 0.6s ease both", animationDelay:"0.4s" }}>
            Professional IT infrastructure, CCTV, networking, and managed technology for homes, schools, and businesses across South Africa.
          </p>

          {/* CTA buttons */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:16, animation:"fadeUp 0.6s ease both", animationDelay:"0.5s" }}>
            <a href="#services" className="btn-primary">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn-ghost">Contact Us</a>
          </div>

          {/* Stats */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:40, marginTop:56, paddingTop:40, borderTop:"1px solid #1A2D52", animation:"fadeUp 0.6s ease both", animationDelay:"0.65s" }}>
            {[{val:"100+",label:"Projects Delivered"},{val:"24/7",label:"Support Available"},{val:"11",label:"Service Categories"}].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"2.5rem", color:"#fff", lineHeight:1 }}>{s.val}</div>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.8rem", color:"#64748B", marginTop:6, letterSpacing:"0.03em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:100, background:"linear-gradient(to top, #050A18, transparent)", pointerEvents:"none" }} />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
      `}</style>
    </section>
  );
}