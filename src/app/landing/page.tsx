import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <div className="bg-black text-white mb-8 sm:mb-12">
        {/* Navigation */}
        

        {/* Hero Section */}
        <div className="flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] items-center px-4 sm:px-6">
            
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  Hello<span className="text-yellow-400">.</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  I&apos;m Valentine Nkatha
                </h2>
                <p className="text-lg sm:text-xl text-gray-400">
                  Software Developer
                </p>

                <button className="bg-yellow-400 text-white 
                  px-4 sm:px-6 
                  py-2 sm:py-3 
                  text-sm sm:text-base
                  rounded 
                  hover:bg-yellow-200 
                  transition-colors 
                  hover:scale-105 
                  transform duration-200">
                     <a
              href="/documents/Valentine Nkatha Kinyua CV.pdf"
              download="Valentine Nkatha Kinyua CV.pdf"
              className="text-white hover:text-[#010C04]"
            >
                  Download CV
                  </a>
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="relative 
                  w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]
                  h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]
                  mx-auto">
                  {/* Blur Background */}
                  <div className="absolute inset-0 bg-emerald-400/10 filter blur-xl"></div>
                  
                  {/* Main Image */}
                  <Image
                    src="/images/ValentineNkatha.jpg"
                    alt="Developer Portrait"
                    width={500}
                    height={500}
                    className="relative w-full h-full object-cover 
                      grayscale contrast-125 brightness-90
                      rounded-lg sm:rounded-xl md:rounded-2xl
                      shadow-lg"
                  />

                  {/* Social Media Icons Overlay */}
                  <div className="absolute 
                    bottom-4 sm:bottom-6 md:bottom-8 
                    right-4 sm:right-6 md:right-8 
                    flex space-x-2 sm:space-x-3 md:space-x-4">
                    {/* GitHub Icon */}
                    <a
              href="https://github.com/Valentine-Nkatha"
              target="_blank"
              rel="noopener noreferrer"
            >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                      bg-black/50 
                      rounded-full 
                      flex items-center justify-center 
                      hover:bg-black/70 
                      transform hover:scale-110 
                      transition-all duration-200 
                      cursor-pointer">
                      <FaGithub className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 
                        text-white 
                        hover:text-yellow-200" />
                    </div>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
              href="https://www.linkedin.com/in/valentine-nkatha-90abb4255/"
              target="_blank"
              rel="noopener noreferrer"
            >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                      bg-black/50 
                      rounded-full 
                      flex items-center justify-center 
                      hover:bg-black/70 
                      transform hover:scale-110 
                      transition-all duration-200 
                      cursor-pointer">
                      <FaLinkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 
                        text-white 
                        hover:text-yellow-200" />
                    </div>
                    </a>

                    {/* Twitter Icon */}
                    <a
              href="https://x.com/valnkatha"
              target="_blank"
              rel="noopener noreferrer"
            >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                      bg-black/50 
                      rounded-full 
                      flex items-center justify-center 
                      hover:bg-black/70 
                      transform hover:scale-110 
                      transition-all duration-200 
                      cursor-pointer">
                      <FaTwitter className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 
                        text-white 
                        hover:text-yellow-200" />
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}