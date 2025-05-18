import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import { animateProgressBars } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    // Initialize animations on scroll
    window.addEventListener("scroll", animateProgressBars);
    
    // Initial call to animate visible elements
    animateProgressBars();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", animateProgressBars);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-light text-dark font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />

    </div>
  );
}
