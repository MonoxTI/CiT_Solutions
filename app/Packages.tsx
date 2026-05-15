"use client";
import { useState } from "react";

const cctvPlans = [
  { tier: "Residential", tag: "Home & Small Property", highlight: false, features: ["2–4 camera IP/analog system", "DVR/NVR installation", "Remote viewing setup", "Basic cable management", "1-month warranty support"] },
  { tier: "Business", tag: "SME & Commercial", highlight: true, features: ["4–16 camera system", "IP cameras with PoE switching", "VLAN camera network isolation", "NVR + cloud remote access", "Rack mounting & cable management", "3-month warranty support"] },
  { tier: "Enterprise", tag: "Schools & Large Sites", highlight: false, features: ["16+ camera deployments", "Long-distance wireless CCTV links", "Smart surveillance + analytics", "Multi-site remote monitoring", "Full rack installation", "Ongoing maintenance contract"] },
];
const itPlans = [
  { tier: "Basic", tag: "Startups & Home Offices", highlight: false, features: ["Monthly IT health check", "Remote helpdesk support", "Antivirus & patch management", "Email & printer support", "Up to 5 devices"] },
  { tier: "Business", tag: "Growing Companies", highlight: true, features: ["Onsite + remote support", "Network monitoring", "Microsoft 365 management", "Server maintenance", "Up to 20 devices", "Priority response time"] },
  { tier: "Enterprise", tag: "Schools & Large Businesses", highlight: false, features: ["Dedicated IT support", "Full infrastructure management", "Active Directory & server admin", "CCTV + security integration", "Unlimited devices", "SLA-backed response times"] },
];

export default function Packages() {
  const [tab, setTab] = useState<"cctv" | "it">("cctv");
  const plans = tab === "cctv" ? cctvPlans : itPlans;

  return (
    <section id="packages" style={{ padding: "6rem 0", background: "#080808" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 2, height: 48, background: "#fff" }} />
            <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#606060" }}>Packages</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff" }}>Plans & Packages</h2>
            <div style={{ display: "flex", background: "#0E0E0E", border: "1px solid #1E1E1E", borderRadius: 3, padding: 4, gap: 4 }}>
              {(["cctv", "it"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ padding: "8px 22px", borderRadius: 2, border: "none", cursor: "pointer", fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.2s", background: tab === t ? "#fff" : "transparent", color: tab === t ? "#000" : "#505050" }}>
                  {t === "cctv" ? "CCTV" : "Managed IT"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="pkg-grid">
          {plans.map(plan => (
            <div key={plan.tier} style={{ position: "relative", borderRadius: 4, padding: "36px 28px", border: `1px solid ${plan.highlight ? "#4A4A4A" : "#1E1E1E"}`, background: plan.highlight ? "#111" : "#0A0A0A", display: "flex", flexDirection: "column", transition: "all 0.3s", boxShadow: plan.highlight ? "0 0 60px rgba(255,255,255,0.03)" : "none" }}>
              {plan.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#000", fontFamily: "Space Mono,monospace", fontSize: "0.58rem", letterSpacing: "0.14em", padding: "4px 16px", borderRadius: 2, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Most Popular
                </div>
              )}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#505050", marginBottom: 8, letterSpacing: "0.1em" }}>{plan.tag}</div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#fff" }}>{plan.tier}</h3>
              </div>
              <div style={{ height: 1, background: "#1E1E1E", marginBottom: 24 }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, flex: 1, marginBottom: 28 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: "DM Sans,sans-serif", fontSize: "0.875rem", color: "#888" }}>
                    <span style={{ color: "#555", flexShrink: 0, marginTop: 2, fontSize: "0.7rem" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                style={{ display: "block", textAlign: "center", padding: "13px 0", borderRadius: 2, fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s", background: plan.highlight ? "#fff" : "transparent", color: plan.highlight ? "#000" : "#666", border: plan.highlight ? "none" : "1px solid #262626" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = plan.highlight ? "#C0C0C0" : "#1E1E1E"; el.style.color = plan.highlight ? "#000" : "#fff"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = plan.highlight ? "#fff" : "transparent"; el.style.color = plan.highlight ? "#000" : "#666"; }}>
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 32, textAlign: "center", fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#303030", letterSpacing: "0.12em" }}>
          All packages are customisable · Pricing on request · Contact us for a site assessment
        </p>
      </div>
      <style>{`
        @media(max-width:900px){ .pkg-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}