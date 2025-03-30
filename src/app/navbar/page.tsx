'use client';
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Optional: update active section based on scroll position
      // This would need section IDs on your page sections to work properly
      const sections = document.querySelectorAll("section[id]");
      const currentPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 
        ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="relative group">
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-yellow-400">Val</span>
            <span className="text-white">entine</span>
            <span className="text-yellow-400">.</span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-1">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth"
                    });
                    setActiveSection(item.href.substring(1));
                  }}
                  className={`relative px-4 py-2 block text-sm font-medium transition-all duration-300 group`}
                >
                  <span className={`relative z-10 ${activeSection === item.href.substring(1) ? "text-black" : "text-white group-hover:text-black"}`}>
                    {item.name}
                  </span>
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 -z-0 ${
                    activeSection === item.href.substring(1)
                      ? "bg-yellow-400 scale-100 opacity-100"
                      : "bg-yellow-400/0 scale-75 opacity-0 group-hover:opacity-10 group-hover:scale-90"
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="ml-6 px-6 py-2.5 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.4)]"
          >
            Let&apos;s Talk
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-gray-800/50 border border-gray-700 md:hidden focus:outline-none transition-all duration-300 hover:bg-yellow-400/20"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? 
            <X size={24} className="text-yellow-400" /> : 
            <Menu size={24} className="text-yellow-400" />
          }
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col justify-center md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 px-6 py-8">
          {navLinks.map((item, index) => (
            <li key={index} className="w-full max-w-xs">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth"
                  });
                  setActiveSection(item.href.substring(1));
                  setIsMenuOpen(false);
                }}
                className={`relative flex items-center justify-between w-full text-xl font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-yellow-400/20 text-yellow-400"
                    : "text-white hover:bg-gray-800/50"
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown 
                  size={18} 
                  className={`transform transition-transform duration-300 ${
                    activeSection === item.href.substring(1) ? "rotate-180 text-yellow-400" : ""
                  }`} 
                />
              </a>
            </li>
          ))}
          
          {/* Mobile CTA Button */}
          <li className="w-full max-w-xs pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth"
                });
                setIsMenuOpen(false);
              }}
              className="block w-full py-3.5 bg-yellow-400 text-black font-bold rounded-lg text-center hover:bg-yellow-300 transition-all duration-300 shadow-lg text-lg"
            >
              Get In Touch
            </a>
          </li>
        </ul>
        
        {/* Decorative elements for mobile menu */}
        <div className="absolute top-20 left-8 w-16 h-16 border-t-2 border-l-2 border-yellow-400/20 rounded-tl-xl"></div>
        <div className="absolute bottom-20 right-8 w-16 h-16 border-b-2 border-r-2 border-yellow-400/20 rounded-br-xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-5"></div>
      </div>
    </nav>
  );
}