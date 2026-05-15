"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const services = ["Networking Solutions", "CCTV & Surveillance", "Managed IT Services", "Server Infrastructure", "Smart School Systems", "Wireless & WiFi"];

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
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#000" }}>

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />

      {/* Glow behind logo */}
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,180,180,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 2.5rem 5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 420px", gap: 80, alignItems: "center" }} className="hero-grid">

        {/* Text */}
        <div>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36, animation: "fadeUp 0.6s ease both", animationDelay: "0.1s" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#505050" }}>
              South Africa's IT Partner
            </span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,#262626,transparent)", maxWidth: 120 }} />
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(3rem,6vw,5.5rem)", color: "#fff", lineHeight: 0.95, marginBottom: 24, animation: "fadeUp 0.6s ease both", animationDelay: "0.2s" }}>
            Complete IT &<br />
            <span style={{ background: "linear-gradient(135deg,#fff 0%,#888 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Security Solutions
            </span>
          </h1>

          {/* Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, animation: "fadeUp 0.6s ease both", animationDelay: "0.28s" }}>
            <div style={{ width: 20, height: "1px", background: "#303030" }} />
            <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", letterSpacing: "0.22em", color: "#404040", textTransform: "uppercase" }}>Technology. Innovation. Solutions.</span>
            <div style={{ width: 20, height: "1px", background: "#303030" }} />
          </div>

          {/* Rotating service */}
          <div style={{ height: 34, display: "flex", alignItems: "center", marginBottom: 28, animation: "fadeUp 0.6s ease both", animationDelay: "0.35s" }}>
            <span style={{ fontFamily: "DM Sans,sans-serif", fontSize: "1.05rem", color: "#606060", fontStyle: "italic", fontWeight: 300, opacity: visible ? 1 : 0, transition: "opacity 0.35s" }}>
              — {services[idx]}
            </span>
          </div>

          <p style={{ fontFamily: "DM Sans,sans-serif", fontSize: "1rem", color: "#555", maxWidth: 500, lineHeight: 1.8, marginBottom: 44, animation: "fadeUp 0.6s ease both", animationDelay: "0.42s" }}>
            Professional IT infrastructure, CCTV, networking, and managed technology for homes, schools, and businesses across South Africa.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, animation: "fadeUp 0.6s ease both", animationDelay: "0.5s" }}>
            <a href="#services" className="btn-primary">
              Explore Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#contact" className="btn-ghost">Contact Us</a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 44, marginTop: 56, paddingTop: 40, borderTop: "1px solid #161616", animation: "fadeUp 0.6s ease both", animationDelay: "0.62s" }}>
            {[{ val: "100+", label: "Projects Delivered" }, { val: "24/7", label: "Support Available" }, { val: "11", label: "Service Categories" }].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2.6rem", color: "#fff", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.6rem", color: "#444", marginTop: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo side */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", animation: "fadeUp 0.9s ease both", animationDelay: "0.4s" }} className="hero-logo">
          {/* Rotating outer ring */}
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", border: "1px solid #1A1A1A", animation: "rotate-ring 30s linear infinite" }}>
            {[0, 60, 120, 180, 240, 300].map(deg => (
              <div key={deg} style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: "#2A2A2A", top: "50%", left: "50%", transformOrigin: "0 0", transform: `rotate(${deg}deg) translateX(210px) translateY(-50%)` }} />
            ))}
          </div>
          {/* Static inner ring */}
          <div style={{ position: "absolute", width: 370, height: 370, borderRadius: "50%", border: "1px solid #161616" }} />

          <Image src="/logo.jpeg" alt="CiT Solutions" width={300} height={300} loading="eager" priority
            style={{ borderRadius: "50%", objectFit: "cover", display: "block", position: "relative", zIndex: 1, filter: "brightness(1.08) contrast(1.05)" }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 140, background: "linear-gradient(to top, #000, transparent)", pointerEvents: "none" }} />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.2;transform:scale(0.5)} }
        @keyframes rotate-ring { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media(max-width:960px){ .hero-grid{grid-template-columns:1fr!important} .hero-logo{display:none!important} }
      `}</style>
    </section>
  );
}