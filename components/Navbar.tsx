"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/95 backdrop-blur-md border-b border-[#1E2D42]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 border-2 border-[#0EA5E9] rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
            <div className="absolute inset-[5px] bg-[#0EA5E9] rotate-45 group-hover:bg-[#38BDF8] transition-colors duration-300" />
          </div>
          <div>
            <span className="font-['Rajdhani'] font-700 text-xl text-white tracking-widest">
              CiT
            </span>
            <span className="font-['Rajdhani'] font-700 text-xl text-[#0EA5E9] tracking-widest ml-1">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-['Barlow'] text-sm font-500 tracking-widest uppercase text-[#8BA3C0] hover:text-[#0EA5E9] transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0EA5E9] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-[#0EA5E9] text-[#0EA5E9] px-5 py-2 text-sm font-['Rajdhani'] font-600 tracking-widest uppercase hover:bg-[#0EA5E9] hover:text-[#080C14] transition-all duration-200"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-[#0EA5E9] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#0EA5E9] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#0EA5E9] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1420] border-t border-[#1E2D42] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#8BA3C0] hover:text-[#0EA5E9] font-['Barlow'] uppercase tracking-widest text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 border border-[#0EA5E9] text-[#0EA5E9] px-5 py-2 text-sm font-['Rajdhani'] font-600 tracking-widest uppercase text-center hover:bg-[#0EA5E9] hover:text-[#080C14] transition-all"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}