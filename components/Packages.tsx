"use client";
import { useState } from "react";

const cctvPackages = [
  {
    tier: "01",
    name: "Residential",
    tag: "Home & Small Property",
    features: [
      "2–4 camera IP/analog system",
      "DVR/NVR installation",
      "Remote viewing setup",
      "Basic cable management",
      "1-month warranty support",
    ],
    highlight: false,
  },
  {
    tier: "02",
    name: "Business",
    tag: "SME & Commercial",
    features: [
      "4–16 camera system",
      "IP cameras with PoE switching",
      "VLAN camera network isolation",
      "NVR + cloud remote access",
      "Rack mounting & cable management",
      "3-month warranty support",
    ],
    highlight: true,
  },
  {
    tier: "03",
    name: "Enterprise",
    tag: "Schools & Large Sites",
    features: [
      "16+ camera deployments",
      "Long-distance wireless CCTV links",
      "Smart surveillance + analytics",
      "Multi-site remote monitoring",
      "Full rack installation",
      "Ongoing maintenance contract",
    ],
    highlight: false,
  },
];

const managedPlans = [
  {
    tier: "01",
    name: "Basic",
    tag: "Startups & Home Offices",
    features: [
      "Monthly IT health check",
      "Remote helpdesk support",
      "Antivirus & patch management",
      "Email & printer support",
      "Up to 5 devices",
    ],
    highlight: false,
  },
  {
    tier: "02",
    name: "Business",
    tag: "Growing Companies",
    features: [
      "Onsite + remote support",
      "Network monitoring",
      "Microsoft 365 management",
      "Server maintenance",
      "Up to 20 devices",
      "Priority response time",
    ],
    highlight: true,
  },
  {
    tier: "03",
    name: "Enterprise",
    tag: "Schools & Large Businesses",
    features: [
      "Dedicated IT support",
      "Full infrastructure management",
      "Active Directory & server admin",
      "CCTV + security integration",
      "Unlimited devices",
      "SLA-backed response times",
    ],
    highlight: false,
  },
];

export default function Packages() {
  const [tab, setTab] = useState<"cctv" | "it">("cctv");
  const plans = tab === "cctv" ? cctvPackages : managedPlans;

  return (
    <section id="packages" className="relative py-28 bg-[#0D1420] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0EA5E9]" />
            <span className="section-label">Packages</span>
          </div>
          <h2 className="font-['Rajdhani'] text-5xl font-700 text-white mb-6">
            Plans & Packages
          </h2>

          {/* Tab switcher */}
          <div className="inline-flex border border-[#1E2D42] overflow-hidden">
            {(["cctv", "it"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 font-['Rajdhani'] font-600 text-sm tracking-widest uppercase transition-all duration-200 ${
                  tab === t
                    ? "bg-[#0EA5E9] text-[#080C14]"
                    : "text-[#4A6080] hover:text-[#8BA3C0]"
                }`}
              >
                {t === "cctv" ? "CCTV Packages" : "Managed IT Plans"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 border transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? "border-[#0EA5E9] bg-[#0EA5E9]/8"
                  : "border-[#1E2D42] bg-[#080C14]/70 hover:border-[#0EA5E9]/40"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-px left-6 bg-[#0EA5E9] text-[#080C14] font-['Share_Tech_Mono'] text-[10px] tracking-widest px-3 py-1 uppercase">
                  Most Popular
                </div>
              )}

              {/* Tier number */}
              <div className="font-['Share_Tech_Mono'] text-[#1E2D42] text-5xl font-bold absolute top-4 right-5 leading-none select-none">
                {plan.tier}
              </div>

              <div className="mb-5">
                <div className="font-['Share_Tech_Mono'] text-[10px] text-[#4A6080] tracking-widest uppercase mb-1">
                  {plan.tag}
                </div>
                <h3 className="font-['Rajdhani'] text-3xl font-700 text-white">{plan.name}</h3>
              </div>

              <hr className="hr-blue mb-5" />

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#8BA3C0] font-['Barlow']">
                    <span className="text-[#0EA5E9] text-base leading-none mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block text-center py-3 font-['Rajdhani'] font-700 text-sm tracking-widest uppercase transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#0EA5E9] text-[#080C14] hover:bg-[#38BDF8]"
                    : "border border-[#1E2D42] text-[#8BA3C0] hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-[#4A6080] font-['Share_Tech_Mono'] text-xs tracking-widest">
          All packages are customisable · Pricing on request · Contact us for a site assessment
        </p>
      </div>
    </section>
  );
}