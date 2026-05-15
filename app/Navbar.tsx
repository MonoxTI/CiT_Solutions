"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      background: scrolled ? "rgba(0,0,0,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo.jpeg" alt="CiT Solutions" width={46} height={46} loading="eager"
            style={{ borderRadius: 4, objectFit: "cover", filter: "brightness(1.1)" }} />
          <div>
            <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 15, color: "#fff", letterSpacing: "0.04em" }}>
              Ci<span style={{ color: "#B8B8B8" }}>T</span> solutions
            </div>
            <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.5rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>
              Technology. Innovation. Solutions.
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 40, listStyle: "none" }} className="hide-mobile">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}
                style={{ fontFamily: "DM Sans,sans-serif", fontSize: 13, color: "#606060", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#606060")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hide-mobile btn-primary" style={{ padding: "9px 20px" }}>
          Get a Quote
        </a>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }} className="show-mobile">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.2s",
              transform: open ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
              opacity: open && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "#080808", borderTop: "1px solid #1E1E1E", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: 18 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "DM Sans,sans-serif", color: "#B0B0B0", textDecoration: "none", fontSize: 15 }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: "center", marginTop: 8 }}>
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