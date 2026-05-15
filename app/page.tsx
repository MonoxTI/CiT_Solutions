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
    <main style={{ background: "#000", minHeight: "100vh", color: "#B0B0B0", overflowX: "hidden" }}>
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