"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080C14] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}