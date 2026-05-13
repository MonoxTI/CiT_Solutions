export default function Footer() {
  const year = new Date().getFullYear();
  const groups = [
    { title:"Infrastructure", links:["Managed IT","Networking","Server Solutions","Technical Installations"] },
    { title:"Security", links:["CCTV & Surveillance","Firewall & VPN","Access Control","Endpoint Protection"] },
    { title:"Connectivity", links:["WiFi Solutions","Wireless Bridges","Township WiFi","Hotspot Systems"] },
    { title:"Specialist", links:["Smart Schools","Web & Digital","Custom Projects","eNatis Workstations"] },
  ];

  return (
    <footer style={{ background:"#080F22", borderTop:"1px solid #1A2D52" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"4rem 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", gap:40, marginBottom:48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#home" style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none", marginBottom:20 }}>
              <div style={{ width:32, height:32, background:"#2563EB", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"Syne,sans-serif", fontWeight:800, color:"#fff", fontSize:13 }}>C</span>
              </div>
              <span style={{ fontFamily:"Syne,sans-serif", fontWeight:700, color:"#fff", fontSize:17 }}>
                CiT <span style={{ color:"#3B82F6" }}>Solutions</span>
              </span>
            </a>
            <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.875rem", color:"#64748B", lineHeight:1.7, marginBottom:20 }}>
              Professional IT infrastructure, CCTV, networking & managed technology for homes, schools, and businesses across South Africa.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {[{href:"tel:+27645282169",text:"+27 64 528 2169"},{href:"mailto:masinacalvin@icloud.com",text:"masinacalvin@icloud.com"}].map(c => (
                <a key={c.href} href={c.href} style={{ fontFamily:"Space Mono,monospace", fontSize:"0.72rem", color:"#2D3F5C", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color="#3B82F6")}
                  onMouseLeave={e => (e.currentTarget.style.color="#2D3F5C")}>{c.text}</a>
              ))}
            </div>
          </div>

          {/* Groups */}
          {groups.map(g => (
            <div key={g.title}>
              <h5 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"0.875rem", color:"#fff", marginBottom:20 }}>{g.title}</h5>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                {g.links.map(l => (
                  <li key={l}>
                    <a href="#services" style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.8rem", color:"#2D3F5C", textDecoration:"none", transition:"color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color="#60A5FA")}
                      onMouseLeave={e => (e.currentTarget.style.color="#2D3F5C")}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height:1, background:"#1A2D52", marginBottom:24 }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontFamily:"Space Mono,monospace", fontSize:"0.65rem", color:"#1A2D52", letterSpacing:"0.1em", textTransform:"uppercase" }}>
            © {year} CiT Solutions · South Africa · All rights reserved
          </p>
          <p style={{ fontFamily:"Space Mono,monospace", fontSize:"0.65rem", color:"#1A2D52", letterSpacing:"0.1em", textTransform:"uppercase" }}>
            Complete IT & Security Solutions
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