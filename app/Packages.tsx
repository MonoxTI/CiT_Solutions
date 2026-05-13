"use client";
import { useState } from "react";

const cctvPlans = [
  { tier:"Residential", tag:"Home & Small Property", highlight:false, features:["2–4 camera IP/analog system","DVR/NVR installation","Remote viewing setup","Basic cable management","1-month warranty support"] },
  { tier:"Business", tag:"SME & Commercial", highlight:true, features:["4–16 camera system","IP cameras with PoE switching","VLAN camera network isolation","NVR + cloud remote access","Rack mounting & cable management","3-month warranty support"] },
  { tier:"Enterprise", tag:"Schools & Large Sites", highlight:false, features:["16+ camera deployments","Long-distance wireless CCTV links","Smart surveillance + analytics","Multi-site remote monitoring","Full rack installation","Ongoing maintenance contract"] },
];
const itPlans = [
  { tier:"Basic", tag:"Startups & Home Offices", highlight:false, features:["Monthly IT health check","Remote helpdesk support","Antivirus & patch management","Email & printer support","Up to 5 devices"] },
  { tier:"Business", tag:"Growing Companies", highlight:true, features:["Onsite + remote support","Network monitoring","Microsoft 365 management","Server maintenance","Up to 20 devices","Priority response time"] },
  { tier:"Enterprise", tag:"Schools & Large Businesses", highlight:false, features:["Dedicated IT support","Full infrastructure management","Active Directory & server admin","CCTV + security integration","Unlimited devices","SLA-backed response times"] },
];

export default function Packages() {
  const [tab, setTab] = useState<"cctv"|"it">("cctv");
  const plans = tab === "cctv" ? cctvPlans : itPlans;

  return (
    <section id="packages" style={{ padding:"6rem 0", background:"#080F22" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom:48 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
            <div style={{ width:4, height:44, background:"#2563EB", borderRadius:2 }} />
            <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.68rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#60A5FA" }}>Packages</span>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16 }}>
            <h2 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(2rem,4vw,3rem)", color:"#fff" }}>Plans & Packages</h2>
            {/* Toggle */}
            <div style={{ display:"flex", background:"#0C1630", border:"1px solid #1A2D52", borderRadius:8, padding:4, gap:4 }}>
              {(["cctv","it"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ padding:"8px 20px", borderRadius:6, border:"none", cursor:"pointer", fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:13, letterSpacing:"0.04em", transition:"all 0.2s", background:tab===t?"#2563EB":"transparent", color:tab===t?"#fff":"#64748B" }}>
                  {t==="cctv"?"CCTV":"Managed IT"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }} className="pkg-grid">
          {plans.map(plan => (
            <div key={plan.tier} style={{ position:"relative", borderRadius:12, padding:"32px 28px", border:`1px solid ${plan.highlight?"#2563EB":"#1A2D52"}`, background:plan.highlight?"#0F1D3A":"#0C1630", display:"flex", flexDirection:"column", boxShadow:plan.highlight?"0 16px 48px rgba(37,99,235,0.12)":"none", transition:"all 0.3s" }}>
              {plan.highlight && (
                <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:"#2563EB", color:"#fff", fontFamily:"Space Mono,monospace", fontSize:"0.65rem", letterSpacing:"0.12em", padding:"4px 14px", borderRadius:20, textTransform:"uppercase", whiteSpace:"nowrap" }}>
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom:24 }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.85rem", color:"#64748B", marginBottom:6 }}>{plan.tag}</div>
                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"2rem", color:"#fff" }}>{plan.tier}</h3>
              </div>

              <div style={{ height:1, background:"#1A2D52", marginBottom:24 }} />

              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:14, flex:1, marginBottom:28 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:12, fontFamily:"DM Sans,sans-serif", fontSize:"0.875rem", color:"#94A3B8" }}>
                    <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(37,99,235,0.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                      <span style={{ color:"#3B82F6", fontSize:"0.6rem" }}>✓</span>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{ display:"block", textAlign:"center", padding:"12px 0", borderRadius:6, fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"0.8rem", letterSpacing:"0.06em", textTransform:"uppercase", textDecoration:"none", transition:"all 0.2s", background:plan.highlight?"#2563EB":"transparent", color:plan.highlight?"#fff":"#64748B", border:plan.highlight?"none":"1px solid #1A2D52" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = plan.highlight?"#3B82F6":"#1A2D52"; el.style.color = plan.highlight?"#fff":"#60A5FA"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = plan.highlight?"#2563EB":"transparent"; el.style.color = plan.highlight?"#fff":"#64748B"; }}>
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop:32, textAlign:"center", fontFamily:"Space Mono,monospace", fontSize:"0.68rem", color:"#2D3F5C", letterSpacing:"0.1em" }}>
          All packages are customisable · Pricing on request · Contact us for a site assessment
        </p>
      </div>
      <style>{`
        @media(max-width:900px){ .pkg-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}