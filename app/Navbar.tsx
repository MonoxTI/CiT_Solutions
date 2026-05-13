"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.3s",
    background: scrolled ? "rgba(5,10,24,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid #1A2D52" : "1px solid transparent",
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2.5rem", height:72, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        {/* Logo */}
        <a href="#home" style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none" }}>
          <div style={{ width:34, height:34, background:"#2563EB", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, color:"#fff", fontSize:14 }}>C</span>
          </div>
          <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"#fff", fontSize:18, letterSpacing:"-0.01em" }}>
            CiT <span style={{ color:"#3B82F6" }}>Solutions</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display:"flex", gap:36, listStyle:"none", margin:0, padding:0 }} className="hide-mobile">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontFamily:"DM Sans,sans-serif", fontSize:14, color:"#64748B", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="#fff")}
                onMouseLeave={e => (e.currentTarget.style.color="#64748B")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hide-mobile" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#2563EB", color:"#fff", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:13, letterSpacing:"0.05em", textTransform:"uppercase", padding:"10px 22px", borderRadius:6, textDecoration:"none", transition:"background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background="#3B82F6")}
          onMouseLeave={e => (e.currentTarget.style.background="#2563EB")}>
          Get a Quote
        </a>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background:"none", border:"none", cursor:"pointer", padding:8, display:"flex", flexDirection:"column", gap:5 }} className="show-mobile">
          {[0,1,2].map(i => (
            <span key={i} style={{ display:"block", width:22, height:2, background:"#fff", borderRadius:2, transition:"all 0.2s",
              transform: open ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
              opacity: open && i===1 ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:"#080F22", borderTop:"1px solid #1A2D52", padding:"1.5rem 2rem", display:"flex", flexDirection:"column", gap:16 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily:"DM Sans,sans-serif", color:"#CBD5E1", textDecoration:"none", fontSize:16 }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ marginTop:8, background:"#2563EB", color:"#fff", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:13, textTransform:"uppercase", padding:"12px 0", borderRadius:6, textDecoration:"none", textAlign:"center" }}>
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .hide-mobile{display:none!important} .show-mobile{display:flex!important} }
        @media(min-width:769px){ .show-mobile{display:none!important} }
      `}</style>
    </nav>
  );
}