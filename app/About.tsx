"use client";

const pillars = [
  { num: "01", title: "Infrastructure First", desc: "We architect networks and servers that grow with your business — not stopgap solutions." },
  { num: "02", title: "Security Built In", desc: "From CCTV to firewalls and VPNs, security is embedded in everything we deploy." },
  { num: "03", title: "Local Expertise", desc: "South African ISPs, compliance standards, and market nuances — we know them all." },
  { num: "04", title: "Ongoing Support", desc: "Monthly maintenance contracts and helpdesk support keep your systems running 24/7." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "#080808" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 64 }} className="about-top">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 2, height: 48, background: "#fff" }} />
              <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#606060" }}>About CiT Solutions</span>
            </div>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", marginBottom: 24 }}>
              Technology That Works.<br />
              <span style={{ background: "linear-gradient(135deg,#fff,#777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Single Day.</span>
            </h2>
            <p style={{ fontFamily: "DM Sans,sans-serif", color: "#666", lineHeight: 1.8, marginBottom: 18 }}>
              CiT Solutions is a South African IT infrastructure, networking, CCTV, and managed technology solutions company. We deliver end-to-end technology services from structured cabling and server deployment to smart surveillance and school connectivity.
            </p>
            <p style={{ fontFamily: "DM Sans,sans-serif", color: "#666", lineHeight: 1.8 }}>
              Whether you're a small business, a school, or an enterprise deploying multi-branch infrastructure — we build, secure, and maintain it all.
            </p>
          </div>

          {/* Photo */}
          <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", height: 380 }}>
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80&auto=format&fit=crop"
              alt="IT professional working"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.05)", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, transparent 60%)" }} />
            {/* Floating label */}
            <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(0,0,0,0.85)", border: "1px solid #262626", padding: "10px 16px", borderRadius: 3 }}>
              <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.55rem", color: "#555", letterSpacing: "0.14em", textTransform: "uppercase" }}>Est.</div>
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff" }}>2015</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #1E1E1E", borderRadius: 4, overflow: "hidden", marginBottom: 64 }}>
          {[{ val: "100+", label: "Projects Delivered" }, { val: "24/7", label: "Support Available" }, { val: "ZA", label: "Nationwide Reach" }].map((s, i) => (
            <div key={s.label} style={{ padding: "36px 0", textAlign: "center", background: "#0E0E0E", borderRight: i < 2 ? "1px solid #1E1E1E" : "none" }}>
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2.4rem", color: "#fff", marginBottom: 8 }}>{s.val}</div>
              <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#505050", textTransform: "uppercase", letterSpacing: "0.14em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="pillars-grid">
          {pillars.map(p => (
            <div key={p.title} className="card card-accent" style={{ borderRadius: 4, padding: "28px 22px" }}>
              <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.65rem", color: "#404040", marginBottom: 18, letterSpacing: "0.1em" }}>{p.num}</div>
              <h4 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: 12 }}>{p.title}</h4>
              <p style={{ fontFamily: "DM Sans,sans-serif", fontSize: "0.875rem", color: "#666", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .about-top{grid-template-columns:1fr!important} }
        @media(max-width:768px){ .pillars-grid{grid-template-columns:1fr 1fr!important} }
        @media(max-width:480px){ .pillars-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}