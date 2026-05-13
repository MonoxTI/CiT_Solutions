"use client";
import { useEffect, useState } from "react";

const taglines = [
  "Networking Solutions",
  "CCTV & Surveillance",
  "Managed IT Services",
  "Server Infrastructure",
  "Smart School Systems",
  "Wireless & WiFi Solutions",
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0EA5E9]/5 blur-[120px] pointer-events-none" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent"
          style={{ animation: "scan 6s linear infinite" }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-20 h-20 border-t-2 border-l-2 border-[#0EA5E9]/30" />
      <div className="absolute bottom-12 right-6 w-20 h-20 border-b-2 border-r-2 border-[#0EA5E9]/30" />

      {/* Top right stats cluster */}
      <div className="absolute top-28 right-8 hidden lg:flex flex-col gap-3 text-right">
        {[
          { label: "UPTIME GUARANTEED", val: "99.9%" },
          { label: "YEARS IN OPERATION", val: "10+" },
          { label: "PROVINCES SERVED", val: "ZA" },
        ].map((s) => (
          <div key={s.label} className="group">
            <div className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest">{s.label}</div>
            <div className="font-['Rajdhani'] text-2xl font-700 text-[#0EA5E9] leading-none">{s.val}</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="w-8 h-px bg-[#0EA5E9]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[#0EA5E9] tracking-[0.3em] uppercase">
              South Africa's IT Partner
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-['Rajdhani'] font-700 text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white block">Complete IT &</span>
            <span className="text-[#0EA5E9] block" style={{ textShadow: "0 0 40px rgba(14,165,233,0.4)" }}>
              Security Solutions
            </span>
          </h1>

          {/* Rotating tagline */}
          <div
            className="h-8 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.35s" }}
          >
            <p
              className={`font-['Barlow'] text-lg text-[#8BA3C0] tracking-widest uppercase transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-[#0EA5E9] mr-2">▸</span>
              {taglines[taglineIndex]}
            </p>
          </div>

          {/* Description */}
          <p
            className="font-['Barlow'] text-base text-[#8BA3C0] max-w-xl leading-relaxed mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.45s" }}
          >
            Professional IT infrastructure, CCTV surveillance, networking, and managed technology 
            services for homes, schools, and businesses across South Africa.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fadeInUp"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-[#0EA5E9] text-[#080C14] px-8 py-3.5 font-['Rajdhani'] font-700 text-base tracking-widest uppercase hover:bg-[#38BDF8] transition-colors duration-200"
            >
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#1E2D42] text-[#8BA3C0] px-8 py-3.5 font-['Rajdhani'] font-700 text-base tracking-widest uppercase hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Bottom service pills */}
          <div
            className="flex flex-wrap gap-2 mt-14 animate-fadeInUp"
            style={{ animationDelay: "0.65s" }}
          >
            {["Managed IT", "CCTV", "Networking", "Servers", "WiFi", "Access Control", "Smart Schools"].map((tag) => (
              <span
                key={tag}
                className="font-['Share_Tech_Mono'] text-[10px] tracking-widest text-[#4A6080] border border-[#1E2D42] px-3 py-1.5 uppercase hover:border-[#0EA5E9]/40 hover:text-[#0EA5E9] transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent pointer-events-none" />
    </section>
  );
}