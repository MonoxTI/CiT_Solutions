"use client";

const pillars = [
  {
    icon: "◈",
    title: "Infrastructure First",
    desc: "We architect networks and servers that grow with your business — not stopgap solutions.",
  },
  {
    icon: "◉",
    title: "Security Built In",
    desc: "From CCTV to firewalls and VPNs, security is embedded in everything we deploy.",
  },
  {
    icon: "◎",
    title: "Local Expertise",
    desc: "South African market nuances, ISPs, and compliance standards — we know them all.",
  },
  {
    icon: "◌",
    title: "Ongoing Support",
    desc: "Monthly maintenance contracts and helpdesk support keep your systems running 24/7.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#0D1420] overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1E2D42] to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#0EA5E9]" />
              <span className="section-label">About CiT Solutions</span>
            </div>

            <h2 className="font-['Rajdhani'] text-5xl font-700 text-white leading-tight mb-6">
              Technology That Works.
              <br />
              <span className="text-[#0EA5E9]">Every Single Day.</span>
            </h2>

            <p className="text-[#8BA3C0] font-['Barlow'] leading-relaxed mb-5">
              CiT Solutions is a South African IT infrastructure, networking, CCTV, and managed 
              technology solutions company. We deliver end-to-end technology services — from 
              structured cabling and server deployment to smart surveillance and school connectivity.
            </p>
            <p className="text-[#8BA3C0] font-['Barlow'] leading-relaxed mb-10">
              Whether you're a small business needing reliable WiFi, a school requiring student 
              internet filtering, or an enterprise deploying multi-branch infrastructure — we 
              build, secure, and maintain it all.
            </p>

            {/* Divider */}
            <hr className="hr-blue mb-8" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "100+", label: "Projects Delivered" },
                { val: "24/7", label: "Support Available" },
                { val: "ZA", label: "Nationwide Reach" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-['Rajdhani'] text-3xl font-700 text-[#0EA5E9]">{s.val}</div>
                  <div className="font-['Barlow'] text-xs text-[#4A6080] tracking-wide uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="relative p-5 border border-[#1E2D42] hover:border-[#0EA5E9]/40 bg-[#080C14]/60 transition-all duration-300 group"
              >
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="font-['Share_Tech_Mono'] text-2xl text-[#0EA5E9] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {p.icon}
                </div>
                <h4 className="font-['Rajdhani'] text-lg font-700 text-white mb-2">{p.title}</h4>
                <p className="font-['Barlow'] text-sm text-[#8BA3C0] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}