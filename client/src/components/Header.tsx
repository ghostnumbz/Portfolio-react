import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };
  
  const checkScrollPosition = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  
  return (
    <header className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-[#121620]/90 shadow-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-heading font-bold text-primary">
            <span className="text-dark">Yaswanth</span>Kumar
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#certificates" className="font-medium hover:text-primary transition-colors">Certificates</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
            <DarkModeToggle />
          </div>
          
          <div className="flex items-center md:hidden">
            <DarkModeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="ml-2 text-dark dark:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? "block animate-fade-in" : "hidden"} mt-4 pb-2`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium hover:text-primary transition-colors" 
              onClick={handleMobileNavClick}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-medium hover:text-primary transition-colors"
              onClick={handleMobileNavClick}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="font-medium hover:text-primary transition-colors"
              onClick={handleMobileNavClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="font-medium hover:text-primary transition-colors"
              onClick={handleMobileNavClick}
            >
              Skills
            </a>
            <a 
              href="#certificates" 
              className="font-medium hover:text-primary transition-colors"
              onClick={handleMobileNavClick}
            >
              Certificates
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors"
              onClick={handleMobileNavClick}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
