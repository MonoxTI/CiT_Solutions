"use client";
import { useState } from "react";

const categories = [
  { id:"managed-it", num:"01", title:"Managed IT Services", services:["Remote & onsite IT support","Monthly IT maintenance contracts","Helpdesk support","PC and laptop troubleshooting","Software installation & updates","Microsoft 365 setup and support","Email setup and migration","Printer and scanner setup","IT consulting for schools and businesses"] },
  { id:"networking", num:"02", title:"Networking Solutions", services:["Network design and implementation","Office and school network setup","Structured LAN cabling","WiFi installation and optimization","VLAN configuration","Router and switch configuration","Cisco network configuration","DHCP, NAT and firewall configuration","Multi-branch network connectivity","Network monitoring and optimization"] },
  { id:"security", num:"03", title:"Security & Protection", services:["Firewall deployment and management","VPN setup and management","Secure remote access solutions","Content filtering solutions","Website and social media blocking","User/device monitoring solutions","Endpoint protection setup"] },
  { id:"cctv", num:"04", title:"CCTV & Surveillance", services:["CCTV camera installations","IP and analog camera installations","Remote viewing setup","DVR/NVR installations","CCTV maintenance and repairs","Smart surveillance solutions","Camera network isolation using VLANs","Long-distance wireless CCTV links","Residential & business systems"] },
  { id:"servers", num:"05", title:"Server & Infrastructure", services:["Windows Server setup","Linux server setup","Active Directory deployment","DNS and DHCP server configuration","File sharing and storage solutions","Proxmox virtualization solutions","VM deployment and management","Backup and recovery solutions","NAS setup and configuration","Server maintenance and upgrades"] },
  { id:"wireless", num:"06", title:"Wireless & Internet", services:["Outdoor wireless bridge installations","Point-to-point wireless links","Hotspot solutions","Township WiFi deployments","Business WiFi solutions","Guest WiFi systems","Internet sharing systems","WiFi coverage optimization"] },
  { id:"schools", num:"07", title:"Smart School Solutions", services:["Computer lab setup","Student internet filtering","Teacher and admin network separation","School VPN solutions","Student monitoring systems","Safe browsing systems","Educational IT infrastructure","School server deployment","Classroom connectivity solutions"] },
  { id:"access", num:"08", title:"Access Control", services:["Boom gate integration support","Access control systems","Biometric systems","Smart device integrations","Visitor management systems"] },
  { id:"web", num:"09", title:"Web & Digital Services", services:["Business website development","Company profile websites","IT business branding","Business email setup","Domain and hosting setup","Technical support for websites"] },
  { id:"install", num:"10", title:"Technical Installations", services:["Rack mounting and cable management","Device installations","Network cabinet installations","Office IT setup","Smart office solutions"] },
  { id:"special", num:"11", title:"Specialized Solutions", services:["eNatis workstation connectivity setup","Thermal printer setup","Real-time data capturing device support","Custom IT infrastructure projects","Remote branch connectivity solutions"] },
];

export default function Services() {
  const [active, setActive] = useState<string|null>(null);

  return (
    <section id="services" style={{ padding:"6rem 0", background:"#050A18", backgroundImage:"radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)", backgroundSize:"28px 28px" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2.5rem" }}>
        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ width:4, height:44, background:"#2563EB", borderRadius:2 }} />
              <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.68rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#60A5FA" }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily:"Syne,sans-serif", fontWeight:800, fontSize:"clamp(2rem,4vw,3rem)", color:"#fff" }}>Our Services</h2>
          </div>
          <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.68rem", color:"#2D3F5C", letterSpacing:"0.1em" }}>Click any category to expand</span>
        </div>

        {/* Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }} className="services-grid">
          {categories.map(cat => {
            const isOpen = active === cat.id;
            return (
              <div key={cat.id} onClick={() => setActive(isOpen ? null : cat.id)}
                style={{ borderRadius:10, padding:20, border:`1px solid ${isOpen?"#2563EB":"#1A2D52"}`, background:isOpen?"#0F1D3A":"#080F22", cursor:"pointer", transition:"all 0.25s" }}
                onMouseEnter={e => { if(!isOpen) (e.currentTarget as HTMLElement).style.borderColor="#2563EB55" }}
                onMouseLeave={e => { if(!isOpen) (e.currentTarget as HTMLElement).style.borderColor="#1A2D52" }}>

                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <span style={{ fontFamily:"Space Mono,monospace", fontSize:"0.7rem", color:"#2563EB", letterSpacing:"0.1em" }}>{cat.num}</span>
                  <div style={{ width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", transition:"transform 0.3s", transform:isOpen?"rotate(45deg)":"rotate(0)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                </div>

                <h3 style={{ fontFamily:"Syne,sans-serif", fontWeight:700, fontSize:"0.975rem", color:"#fff", marginBottom:8 }}>{cat.title}</h3>

                {!isOpen && (
                  <p style={{ fontFamily:"DM Sans,sans-serif", fontSize:"0.78rem", color:"#2D3F5C" }}>{cat.services.length} services</p>
                )}

                {isOpen && (
                  <ul style={{ marginTop:16, paddingTop:16, borderTop:"1px solid #1A2D52", listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                    {cat.services.map(s => (
                      <li key={s} style={{ display:"flex", alignItems:"flex-start", gap:8, fontFamily:"DM Sans,sans-serif", fontSize:"0.85rem", color:"#94A3B8" }}>
                        <span style={{ color:"#2563EB", marginTop:2, fontSize:"0.7rem", flexShrink:0 }}>▸</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .services-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:600px){ .services-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}