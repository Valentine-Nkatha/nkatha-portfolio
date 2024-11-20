'use client'
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
       <nav className="relative bg-black">
      <div className="flex flex-wrap justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold z-20">
          <span className="text-yellow-400">Val</span>entine
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg md:hidden z-20 hover:bg-gray-800"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed md:relative top-0 left-0 
          w-full md:w-auto h-screen md:h-auto
          flex flex-col md:flex-row 
          items-center justify-center md:justify-end
          space-y-8 md:space-y-0 md:space-x-8
          bg-black md:bg-transparent
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 z-10' : 'opacity-0 md:opacity-100 -z-10 md:z-0'}
          ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto'}
        `}>
          <li className="hover:text-yellow-400 cursor-pointer text-lg md:text-base transition-colors">
            
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer text-lg md:text-base transition-colors">
            
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer text-lg md:text-base transition-colors">
            
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer text-lg md:text-base transition-colors">
            
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer text-lg md:text-base transition-colors">
            
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    )}