"use client";

const pillars = [
  { num:"01", title:"Infrastructure First", desc:"We architect networks and servers that grow with your business — not stopgap solutions." },
  { num:"02", title:"Security Built In", desc:"From CCTV to firewalls and VPNs, security is embedded in everything we deploy." },
  { num:"03", title:"Local Expertise", desc:"South African ISPs, compliance standards, and market nuances — we know them all." },
  { num:"04", title:"Ongoing Support", desc:"Monthly maintenance contracts and helpdesk support keep your systems running 24/7." },
];

const S = {
  section: { padding:"6rem 0", background:"#080F22" } as React.CSSProperties,
  wrap: { maxWidth:1280, margin:"0 auto", padding:"0 2.5rem" } as React.CSSProperties,
  eyebrow: { fontFamily:"Space Mono,monospace", fontSize:"0.68rem", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:"#60A5FA" },
  h2: { fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(2rem,4vw,3rem)", color:"#fff", lineHeight:1.1 } as React.CSSProperties,
};

export default function About() {
  return (
    <section id="about" style={S.section}>
      <div style={S.wrap}>
        {/* Header grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"end", marginBottom:56 }} className="about-grid">
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ width:4, height:44, background:"#2563EB", borderRadius:2 }} />
              <span style={S.eyebrow}>About CiT Solutions</span>
            </div>
            <h2 style={S.h2}>Technology That Works.<br /><span style={{ color:"#3B82F6" }}>Every Single Day.</span></h2>
          </div>
          <div>
            <p style={{ fontFamily:"DM Sans,sans-serif", color:"#64748B", lineHeight:1.75, marginBottom:16 }}>
              CiT Solutions is a South African IT infrastructure, networking, CCTV, and managed technology solutions company. We deliver end-to-end technology services — from structured cabling and server deployment to smart surveillance and school connectivity.
            </p>
            <p style={{ fontFamily:"DM Sans,sans-serif", color:"#64748B", lineHeight:1.75 }}>
              Whether you're a small business needing reliable WiFi, a school requiring student internet filtering, or an enterprise deploying multi-branch infrastructure — we build, secure, and maintain it all.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderRadius:12, overflow:"hidden", border:"1px solid #1A2D52", marginBottom:56 }}>
          {[{val:"100+",label:"Projects Delivered"},{val:"24/7",label:"Support Available"},{val:"ZA",label:"Nationwide Reach"}].map((s,i) => (
            <div key={s.label} style={{ background:"#0C1630", padding:"28px 0", textAlign:"center", borderRight:i<2?"1px solid #1A2D52":"none" }}>
              <div style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"2rem", color:"#fff", marginBottom:6 }}>{s.val}</div>
              <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.75rem", color:"#64748B", textTransform:"uppercase", letterSpacing:"0.1em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }} className="pillars-grid">
          {pillars.map(p => (
            <div key={p.title} className="card card-accent" style={{ borderRadius:10, padding:"24px 20px" }}>
              <div style={{ fontFamily:"Space Mono,monospace", fontSize:"0.7rem", color:"#2563EB", marginBottom:16, letterSpacing:"0.1em" }}>{p.num}</div>
              <h4 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"1.05rem", color:"#fff", marginBottom:10 }}>{p.title}</h4>
              <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.875rem", color:"#64748B", lineHeight:1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .about-grid{grid-template-columns:1fr!important} }
        @media(max-width:768px){ .pillars-grid{grid-template-columns:1fr 1fr!important} }
        @media(max-width:480px){ .pillars-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}