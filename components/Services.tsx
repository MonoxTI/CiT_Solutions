"use client";
import { useState } from "react";

const categories = [
  {
    id: "managed-it",
    icon: "⬡",
    title: "Managed IT Services",
    color: "#0EA5E9",
    services: [
      "Remote & onsite IT support",
      "Monthly IT maintenance contracts",
      "Helpdesk support",
      "PC and laptop troubleshooting",
      "Software installation & updates",
      "Microsoft 365 setup and support",
      "Email setup and migration",
      "Printer and scanner setup",
      "IT consulting for schools and businesses",
    ],
  },
  {
    id: "networking",
    icon: "⬢",
    title: "Networking Solutions",
    color: "#0EA5E9",
    services: [
      "Network design and implementation",
      "Office and school network setup",
      "Structured LAN cabling",
      "WiFi installation and optimization",
      "VLAN configuration",
      "Router and switch configuration",
      "Cisco network configuration",
      "DHCP, NAT and firewall configuration",
      "Multi-branch network connectivity",
      "Network monitoring and optimization",
    ],
  },
  {
    id: "security",
    icon: "⬟",
    title: "Security & Protection",
    color: "#0EA5E9",
    services: [
      "Firewall deployment and management",
      "VPN setup and management",
      "Secure remote access solutions",
      "Content filtering solutions",
      "Website and social media blocking",
      "User/device monitoring solutions",
      "Endpoint protection setup",
    ],
  },
  {
    id: "cctv",
    icon: "◈",
    title: "CCTV & Surveillance",
    color: "#0EA5E9",
    services: [
      "CCTV camera installations",
      "IP and analog camera installations",
      "Remote viewing setup",
      "DVR/NVR installations",
      "CCTV maintenance and repairs",
      "Smart surveillance solutions",
      "Camera network isolation using VLANs",
      "Long-distance wireless CCTV links",
      "Residential & business systems",
    ],
  },
  {
    id: "servers",
    icon: "▣",
    title: "Server & Infrastructure",
    color: "#0EA5E9",
    services: [
      "Windows Server setup",
      "Linux server setup",
      "Active Directory deployment",
      "DNS and DHCP server configuration",
      "File sharing and storage solutions",
      "Proxmox virtualization solutions",
      "VM deployment and management",
      "Backup and recovery solutions",
      "NAS setup and configuration",
      "Server maintenance and upgrades",
    ],
  },
  {
    id: "wireless",
    icon: "◉",
    title: "Wireless & Internet",
    color: "#0EA5E9",
    services: [
      "Outdoor wireless bridge installations",
      "Point-to-point (P2P) wireless links",
      "Hotspot solutions",
      "Township WiFi deployments",
      "Business WiFi solutions",
      "Guest WiFi systems",
      "Internet sharing systems",
      "WiFi coverage optimization",
    ],
  },
  {
    id: "schools",
    icon: "◎",
    title: "Smart School Solutions",
    color: "#0EA5E9",
    services: [
      "Computer lab setup",
      "Student internet filtering",
      "Teacher and admin network separation",
      "School VPN solutions",
      "Student monitoring systems",
      "Safe browsing systems",
      "Educational IT infrastructure",
      "School server deployment",
      "Classroom connectivity solutions",
    ],
  },
  {
    id: "access",
    icon: "◬",
    title: "Access Control & Smart Security",
    color: "#0EA5E9",
    services: [
      "Boom gate integration support",
      "Access control systems",
      "Biometric systems",
      "Smart device integrations",
      "Visitor management systems",
    ],
  },
  {
    id: "web",
    icon: "◌",
    title: "Web & Digital Services",
    color: "#0EA5E9",
    services: [
      "Business website development",
      "Company profile websites",
      "IT business branding",
      "Business email setup",
      "Domain and hosting setup",
      "Technical support for websites",
    ],
  },
  {
    id: "installations",
    icon: "⬠",
    title: "Technical Installations",
    color: "#0EA5E9",
    services: [
      "Rack mounting and cable management",
      "Device installations",
      "Network cabinet installations",
      "Office IT setup",
      "Smart office solutions",
    ],
  },
  {
    id: "specialized",
    icon: "◆",
    title: "Specialized Solutions",
    color: "#0EA5E9",
    services: [
      "eNatis workstation connectivity setup",
      "Thermal printer setup",
      "Real-time data capturing device support",
      "Custom IT infrastructure projects",
      "Remote branch connectivity solutions",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 bg-[#080C14] grid-bg overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#0EA5E9]" />
              <span className="section-label">What We Do</span>
            </div>
            <h2 className="font-['Rajdhani'] text-5xl font-700 text-white leading-tight">
              Our Services
            </h2>
          </div>
          <p className="text-[#4A6080] font-['Share_Tech_Mono'] text-xs tracking-widest max-w-xs text-right">
            Click any service category to view full offerings
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative p-5 border cursor-pointer transition-all duration-300 group ${
                active === cat.id
                  ? "border-[#0EA5E9] bg-[#0EA5E9]/10"
                  : "border-[#1E2D42] bg-[#0D1420]/80 hover:border-[#0EA5E9]/50 hover:bg-[#0D1420]"
              }`}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
            >
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] transition-all duration-300 ${active === cat.id ? "border-t-[#0EA5E9] border-r-transparent" : "border-t-transparent border-r-transparent group-hover:border-t-[#0EA5E9]/30"}`} />

              <div className="flex items-start justify-between mb-3">
                <span className="text-[#0EA5E9] text-2xl font-['Share_Tech_Mono']">{cat.icon}</span>
                <span className={`font-['Share_Tech_Mono'] text-[10px] tracking-widest transition-colors duration-200 ${active === cat.id ? "text-[#0EA5E9]" : "text-[#4A6080]"}`}>
                  {active === cat.id ? "[ OPEN ]" : "[ VIEW ]"}
                </span>
              </div>

              <h3 className="font-['Rajdhani'] text-base font-700 text-white leading-tight mb-3">
                {cat.title}
              </h3>

              {/* Expanded list */}
              {active === cat.id && (
                <ul className="mt-3 space-y-1.5 border-t border-[#0EA5E9]/20 pt-3">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-[#8BA3C0] font-['Barlow']">
                      <span className="text-[#0EA5E9] mt-0.5 shrink-0">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {/* Collapsed: preview count */}
              {active !== cat.id && (
                <p className="text-[#4A6080] text-xs font-['Share_Tech_Mono']">
                  {cat.services.length} services
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}