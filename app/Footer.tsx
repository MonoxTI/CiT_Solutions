import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const groups = [
    { title: "Infrastructure", links: ["Managed IT", "Networking", "Server Solutions", "Technical Installations"] },
    { title: "Security", links: ["CCTV & Surveillance", "Firewall & VPN", "Access Control", "Endpoint Protection"] },
    { title: "Connectivity", links: ["WiFi Solutions", "Wireless Bridges", "Township WiFi", "Hotspot Systems"] },
    { title: "Specialist", links: ["Smart Schools", "Web & Digital", "Custom Projects", "eNatis Workstations"] },
  ];

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid #161616" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2.5rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 20 }}>
              <Image src="/logo.jpeg" alt="CiT Solutions" width={42} height={42} style={{ borderRadius: 4, objectFit: "cover" }} />
              <div>
                <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: "0.04em" }}>CiT solutions</div>
                <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.46rem", color: "#333", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 2 }}>Technology. Innovation. Solutions.</div>
              </div>
            </a>
            <p style={{ fontFamily: "DM Sans,sans-serif", fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.75, marginBottom: 20 }}>
              Professional IT infrastructure, CCTV, networking & managed technology for homes, schools, and businesses across South Africa.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[{ href: "tel:+27645282169", text: "+27 64 528 2169" }, { href: "mailto:masinacalvin@icloud.com", text: "masinacalvin@icloud.com" }].map(c => (
                <a key={c.href} href={c.href} style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", color: "#333", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#888")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333")}>{c.text}</a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {groups.map(g => (
            <div key={g.title}>
              <h5 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff", marginBottom: 20, letterSpacing: "0.02em" }}>{g.title}</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {g.links.map(l => (
                  <li key={l}>
                    <a href="#services" style={{ fontFamily: "DM Sans,sans-serif", fontSize: "0.8rem", color: "#333", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#888")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#333")}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "#111", marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#222", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            © {year} CiT Solutions · South Africa · All rights reserved
          </p>
          <p style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#222", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Technology. Innovation. Solutions.
          </p>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .footer-grid{grid-template-columns:1fr 1fr!important} }
        @media(max-width:600px){ .footer-grid{grid-template-columns:1fr!important} }
      `}</style>
    </footer>
  );
}