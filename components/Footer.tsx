export default function Footer() {
  const year = new Date().getFullYear();

  const serviceGroups = [
    {
      title: "Infrastructure",
      links: ["Managed IT", "Networking", "Server Solutions", "Technical Installations"],
    },
    {
      title: "Security",
      links: ["CCTV & Surveillance", "Firewall & VPN", "Access Control", "Endpoint Protection"],
    },
    {
      title: "Connectivity",
      links: ["WiFi Solutions", "Wireless Bridges", "Township WiFi", "Hotspot Systems"],
    },
    {
      title: "Specialist",
      links: ["Smart Schools", "Web & Digital", "Custom Projects", "eNatis Workstations"],
    },
  ];

  return (
    <footer className="relative bg-[#0D1420] border-t border-[#1E2D42]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 shrink-0">
                <div className="absolute inset-0 border-2 border-[#0EA5E9] rotate-45" />
                <div className="absolute inset-[4px] bg-[#0EA5E9] rotate-45" />
              </div>
              <span className="font-['Rajdhani'] font-700 text-xl text-white tracking-widest">
                CiT <span className="text-[#0EA5E9]">SOLUTIONS</span>
              </span>
            </a>
            <p className="text-[#4A6080] font-['Barlow'] text-sm leading-relaxed mb-4">
              Professional IT infrastructure, CCTV, networking & managed technology for homes, schools, and businesses across South Africa.
            </p>
            <div className="space-y-1.5">
              <a href="tel:+27645282169" className="block text-[#4A6080] text-xs font-['Share_Tech_Mono'] hover:text-[#0EA5E9] transition-colors">
                +27 64 528 2169
              </a>
              <a href="mailto:masinacalvin@icloud.com" className="block text-[#4A6080] text-xs font-['Share_Tech_Mono'] hover:text-[#0EA5E9] transition-colors">
                masinacalvin@icloud.com
              </a>
            </div>
          </div>

          {/* Service groups */}
          {serviceGroups.map((g) => (
            <div key={g.title}>
              <h5 className="font-['Rajdhani'] text-sm font-700 text-white tracking-widest uppercase mb-4">{g.title}</h5>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#services"
                      className="text-[#4A6080] text-xs font-['Barlow'] hover:text-[#0EA5E9] transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E2D42] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Share_Tech_Mono'] text-[10px] text-[#2D3F56] tracking-widest uppercase">
            © {year} CiT Solutions · South Africa · All rights reserved
          </p>
          <p className="font-['Share_Tech_Mono'] text-[10px] text-[#2D3F56] tracking-widest uppercase">
            Complete IT & Security Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}