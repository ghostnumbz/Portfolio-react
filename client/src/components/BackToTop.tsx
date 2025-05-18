import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 ${
        isVisible 
          ? "opacity-100 visible" 
          : "opacity-0 invisible"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
