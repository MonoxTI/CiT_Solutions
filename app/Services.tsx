"use client";
import { useState } from "react";

// Unsplash images per service category
const categoryImages: Record<string, string> = {
  "managed-it": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=70&auto=format&fit=crop",
  "networking":  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70&auto=format&fit=crop",
  "security":    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=70&auto=format&fit=crop",
  "cctv":        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=70&auto=format&fit=crop",
  "servers":     "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=70&auto=format&fit=crop",
  "wireless":    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=70&auto=format&fit=crop",
  "schools":     "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=70&auto=format&fit=crop",
  "access":      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=70&auto=format&fit=crop",
  "web":         "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=70&auto=format&fit=crop",
  "install":     "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=70&auto=format&fit=crop",
  "special":     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=70&auto=format&fit=crop",
};

const categories = [
  { id: "managed-it", num: "01", title: "Managed IT Services", services: ["Remote & onsite IT support","Monthly IT maintenance contracts","Helpdesk support","PC and laptop troubleshooting","Software installation & updates","Microsoft 365 setup and support","Email setup and migration","Printer and scanner setup","IT consulting for schools and businesses"] },
  { id: "networking", num: "02", title: "Networking Solutions", services: ["Network design and implementation","Office and school network setup","Structured LAN cabling","WiFi installation and optimization","VLAN configuration","Router and switch configuration","Cisco network configuration","DHCP, NAT and firewall configuration","Multi-branch network connectivity","Network monitoring and optimization"] },
  { id: "security", num: "03", title: "Security & Protection", services: ["Firewall deployment and management","VPN setup and management","Secure remote access solutions","Content filtering solutions","Website and social media blocking","User/device monitoring solutions","Endpoint protection setup"] },
  { id: "cctv", num: "04", title: "CCTV & Surveillance", services: ["CCTV camera installations","IP and analog camera installations","Remote viewing setup","DVR/NVR installations","CCTV maintenance and repairs","Smart surveillance solutions","Camera network isolation using VLANs","Long-distance wireless CCTV links","Residential & business systems"] },
  { id: "servers", num: "05", title: "Server & Infrastructure", services: ["Windows Server setup","Linux server setup","Active Directory deployment","DNS and DHCP server configuration","File sharing and storage solutions","Proxmox virtualization solutions","VM deployment and management","Backup and recovery solutions","NAS setup and configuration","Server maintenance and upgrades"] },
  { id: "wireless", num: "06", title: "Wireless & Internet", services: ["Outdoor wireless bridge installations","Point-to-point wireless links","Hotspot solutions","Township WiFi deployments","Business WiFi solutions","Guest WiFi systems","Internet sharing systems","WiFi coverage optimization"] },
  { id: "schools", num: "07", title: "Smart School Solutions", services: ["Computer lab setup","Student internet filtering","Teacher and admin network separation","School VPN solutions","Student monitoring systems","Safe browsing systems","Educational IT infrastructure","School server deployment","Classroom connectivity solutions"] },
  { id: "access", num: "08", title: "Access Control", services: ["Boom gate integration support","Access control systems","Biometric systems","Smart device integrations","Visitor management systems"] },
  { id: "web", num: "09", title: "Web & Digital Services", services: ["Business website development","Company profile websites","IT business branding","Business email setup","Domain and hosting setup","Technical support for websites"] },
  { id: "install", num: "10", title: "Technical Installations", services: ["Rack mounting and cable management","Device installations","Network cabinet installations","Office IT setup","Smart office solutions"] },
  { id: "special", num: "11", title: "Specialized Solutions", services: ["eNatis workstation connectivity setup","Thermal printer setup","Real-time data capturing device support","Custom IT infrastructure projects","Remote branch connectivity solutions"] },
];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" style={{ padding: "6rem 0", background: "#000", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 2, height: 48, background: "#fff" }} />
              <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#606060" }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff" }}>Our Services</h2>
          </div>
          <span style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#303030", letterSpacing: "0.12em" }}>Click any category to expand</span>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="svc-grid">
          {categories.map(cat => {
            const isOpen = active === cat.id;
            return (
              <div key={cat.id} onClick={() => setActive(isOpen ? null : cat.id)}
                style={{ borderRadius: 4, border: `1px solid ${isOpen ? "#4A4A4A" : "#1E1E1E"}`, background: isOpen ? "#0E0E0E" : "#080808", cursor: "pointer", transition: "all 0.25s", overflow: "hidden" }}
                onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = "#303030"; }}
                onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"; }}>

                {/* Image thumbnail */}
                <div style={{ height: 120, overflow: "hidden", position: "relative" }}>
                  <img src={categoryImages[cat.id]} alt={cat.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) contrast(1.1)", transition: "transform 0.4s", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, transparent 60%)" }} />
                  <span style={{ position: "absolute", top: 10, right: 10, fontFamily: "Space Mono,monospace", fontSize: "0.6rem", color: "#444", letterSpacing: "0.1em" }}>{cat.num}</span>
                </div>

                {/* Content */}
                <div style={{ padding: "16px 18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>{cat.title}</h3>
                    <svg style={{ transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none", flexShrink: 0 }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  {!isOpen && <p style={{ fontFamily: "Space Mono,monospace", fontSize: "0.58rem", color: "#333", letterSpacing: "0.08em" }}>{cat.services.length} services</p>}
                  {isOpen && (
                    <ul style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #1E1E1E", listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {cat.services.map(s => (
                        <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "DM Sans,sans-serif", fontSize: "0.84rem", color: "#888" }}>
                          <span style={{ color: "#555", marginTop: 3, fontSize: "0.6rem", flexShrink: 0 }}>▸</span>{s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .svc-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:600px){ .svc-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}