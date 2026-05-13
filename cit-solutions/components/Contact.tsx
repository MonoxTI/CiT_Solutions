"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  const inputCls = "w-full bg-[#080C14] border border-[#1E2D42] text-[#CBD5E1] placeholder-[#2D3F56] px-4 py-3 font-['Barlow'] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors duration-200";

  return (
    <section id="contact" className="relative py-28 bg-[#080C14] grid-bg overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#0EA5E9]" />
              <span className="section-label">Get in Touch</span>
            </div>
            <h2 className="font-['Rajdhani'] text-5xl font-700 text-white leading-tight mb-6">
              Let's Build Your
              <br />
              <span className="text-[#0EA5E9]">IT Infrastructure</span>
            </h2>
            <p className="text-[#8BA3C0] font-['Barlow'] leading-relaxed mb-10">
              Whether you need a quick helpdesk fix or a full enterprise network rollout, 
              CiT Solutions is ready. Reach out for a free consultation or site assessment.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  label: "Phone",
                  value: "+27 64 528 2169",
                  icon: "◈",
                  href: "tel:+27645282169",
                },
                {
                  label: "Email",
                  value: "masinacalvin@icloud.com",
                  icon: "◉",
                  href: "mailto:masinacalvin@icloud.com",
                },
                {
                  label: "Location",
                  value: "South Africa",
                  icon: "◎",
                  href: null,
                },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[#1E2D42] flex items-center justify-center text-[#0EA5E9] font-['Share_Tech_Mono'] group-hover:border-[#0EA5E9]/60 transition-colors duration-200 shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-['Barlow'] text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors duration-200">
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-['Barlow'] text-[#CBD5E1]">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="hr-blue my-10" />

            {/* Services list quick */}
            <div>
              <p className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase mb-3">Quick Enquire About</p>
              <div className="flex flex-wrap gap-2">
                {["Managed IT", "CCTV", "Networking", "Servers", "WiFi", "Schools", "Access Control"].map((t) => (
                  <span key={t} className="text-xs font-['Share_Tech_Mono'] text-[#4A6080] border border-[#1E2D42] px-3 py-1.5 tracking-widest cursor-default hover:border-[#0EA5E9]/40 hover:text-[#0EA5E9] transition-all duration-200 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative p-8 border border-[#1E2D42] bg-[#0D1420]">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#0EA5E9]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#0EA5E9]" />

            <h3 className="font-['Rajdhani'] text-2xl font-700 text-white mb-6">Send a Message</h3>

            {sent && (
              <div className="mb-4 border border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981] font-['Share_Tech_Mono'] text-xs tracking-widest px-4 py-3 uppercase">
                ✓ Message received — we'll be in touch shortly.
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase block mb-1.5">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase block mb-1.5">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    type="email"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase block mb-1.5">Service Required</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none`}
                >
                  <option value="" disabled>Select a service...</option>
                  <option>Managed IT Services</option>
                  <option>Networking Solutions</option>
                  <option>CCTV & Surveillance</option>
                  <option>Security & Protection</option>
                  <option>Server & Infrastructure</option>
                  <option>Wireless & Internet</option>
                  <option>Smart School Solutions</option>
                  <option>Access Control</option>
                  <option>Web & Digital Services</option>
                  <option>Other / Custom Project</option>
                </select>
              </div>

              <div>
                <label className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements..."
                  rows={5}
                  className={inputCls}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#0EA5E9] text-[#080C14] py-3.5 font-['Rajdhani'] font-700 text-base tracking-widest uppercase hover:bg-[#38BDF8] transition-colors duration-200 flex items-center justify-center gap-3"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}