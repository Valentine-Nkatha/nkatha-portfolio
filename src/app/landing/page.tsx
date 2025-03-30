"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function LandingPage() {
  const socialLinks = [
    { href: "https://github.com/Valentine-Nkatha", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/valentine-nkatha-90abb4255/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://x.com/valnkatha", icon: FaTwitter, label: "Twitter" }
  ];

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center px-6 sm:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Section: Text & Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left space-y-6 md:space-y-8 z-10"
          >
            <div className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                Hello<span className="text-yellow-400">.</span>
              </h1>
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              I&apos;m Valentine Nkatha
            </h2>
            
            <p className="text-lg text-gray-400 max-w-md">
              Software Developer crafting elegant solutions for complex problems
            </p>
            
            {/* Download CV Button */}
            <motion.a
              href="/documents/Valentine Nkatha Kinyua CV.pdf"
              download="Valentine Nkatha Kinyua CV.pdf"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 
                        text-black font-medium px-6 py-3 rounded-md 
                        transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download CV</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ y: -3 }}
                animate={{ y: 3 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.a>
          </motion.div>
          
          {/* Right Section: Image & Socials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10"
          >
            {/* Animated Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-purple-400/20 rounded-2xl"
              animate={{ 
                filter: ["blur(20px)", "blur(30px)", "blur(20px)"],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            {/* Frame around the image */}
            <div className="relative border border-white/10 p-2 rounded-2xl backdrop-blur-sm bg-black/30 shadow-2xl">
              {/* Profile Image */}
              <Image
                src="/images/ValentineNkatha.jpg"
                alt="Developer Portrait"
                width={500}
                height={500}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 contrast-125 brightness-90
                        rounded-xl shadow-lg transition-all duration-700"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="absolute -bottom-6 right-6 flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black/70 p-3 rounded-full hover:bg-yellow-400 hover:text-black
                          transition-all duration-300 shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}