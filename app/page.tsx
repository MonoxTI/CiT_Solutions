"use client";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Packages from "./Packages";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <main style={{ background:"#050A18", minHeight:"100vh", color:"#CBD5E1", overflowX:"hidden" }}>
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