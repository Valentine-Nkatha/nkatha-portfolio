'use client'
import Image from "next/image";
import { FaTasks } from "react-icons/fa";
import { 
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaMagnifyingGlass,
  FaMobile,
  FaPalette,
  FaServer,
  FaTwitter
} from "react-icons/fa6";
import { motion } from "framer-motion";
import LandingPage from "../landing/page";
import Contact from "../contact/page";
import Navbar from "../navbar/page";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    description: "Modern property marketplace with search functionality",
    image: "/images/uwazi.jpeg",
    link: "https://uwazi-lilac.vercel.app/viewcategories",
    tags: ["React", "NextJS", "Tailwind"]
  },
  {
    id: 2,
    title: "Shawazi Informational Website",
    description: "Business information portal with elegant UI",
    image: "/images/shawaziinfo.png",
    link: "https://magezi-informational-c594.vercel.app/",
    tags: ["React", "CSS", "Responsive"]
  },
  {
    id: 3,
    title: "Suubi Informational Website",
    description: "Clean, minimalist information website",
    image: "/images/suubi.png",
    link: "https://my-suubi-webpage.vercel.app/",
    tags: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 4,
    title: "Shawazi Project",
    description: "E-commerce platform with buyer portal",
    image: "/images/shawazibuyer.png",
    link: "https://shawazi-magezi.vercel.app/",
    tags: ["NextJS", "React", "API"]
  },
  {
    id: 5,
    title: "Mama Mind App",
    description: "Mental health mobile application",
    image: "/images/mind.png",
    link: "https://appetize.io/app/b_w7zc6ecydiz2efq47xdy5b6are",
    tags: ["React Native", "Mobile", "Health"]
  },
  {
    id: 6,
    title: "Musica Website",
    description: "Music streaming platform with player interface",
    image: "/images/musicas.png",
    link: "https://musica-website-app.vercel.app/",
    tags: ["React", "Audio API", "CSS"]
  },
];

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 filter blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-emerald-400/20 filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <section id="home">
          <Navbar />
        </section>
        
        <LandingPage />
        
        {/* About Section with Glass Morphism */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="relative"
        >
          <div className=" py-2">
          <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white text-center"
                variants={fadeInUp}
              >
                About <span className="text-yellow-400">Me</span>
              </motion.h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center py-16 px-8 md:px-16 space-y-10 md:space-y-0 md:space-x-12">
            <motion.div 
              className="w-full md:w-2/5"
              variants={fadeInUp}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <Image
                  src="/images/ValentineNkatha.jpg"
                  alt="Profile Picture"
                  width={500}
                  height={500}
                  className="relative rounded-lg object-cover shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-3/5"
              variants={fadeInUp}
            >
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10 shadow-xl">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Hello! I am Valentine Nkatha
                </h2>
                <h3 className="text-xl font-bold text-white mb-6">
                  I&apos;m a Passionate Software Developer Focused on Frontend & Backend Development
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Valentine&apos;s passion for the future of forensic science is fueled by her excitement for the potential of artificial intelligence to revolutionize the field. Artificial Intelligence algorithms assist in facial recognition, handwriting analysis, voice analysis, and pattern recognition. With her technical expertise and scientific curiosity, she aims to contribute to the development of new tools, techniques, and methodologies that can enhance the accuracy, efficiency, and accessibility of forensic analysis. She aims to combine her technological prowess with unwavering dedication to make a meaningful impact on the future of forensic science.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="h-10 w-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span><strong className="text-yellow-400">Email:</strong> valentinnenkatha@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="h-10 w-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span><strong className="text-yellow-400">Location:</strong> Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Skills Section */}
        <section id="skills" className="py-24 px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex flex-col items-center mb-16">
              <motion.div 
                className="h-1 w-20 bg-yellow-400 mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white"
                variants={fadeInUp}
              >
                My <span className="text-yellow-400">Skills</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Frontend Web Development", icon: <FaLaptopCode />, description: "Building responsive, interactive UIs" },
                { title: "Mobile Development", icon: <FaMobile />, description: "Native and cross-platform mobile apps" },
                { title: "Backend Development", icon: <FaServer />, description: "Scalable server architecture and APIs" },
                { title: "UX Research", icon: <FaMagnifyingGlass />, description: "User-centered design principles" },
                { title: "UI & UX Design", icon: <FaPalette />, description: "Creating intuitive, beautiful interfaces" },
                { title: "Product Management", icon: <FaTasks />, description: "Strategic planning and execution" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative h-full backdrop-blur-sm bg-gray-800/80 border border-white/10 p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-2">
                    <div className="text-5xl mb-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-24 px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex flex-col items-center mb-16">
              <motion.div 
                className="h-1 w-20 bg-yellow-400 mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white"
                variants={fadeInUp}
              >
                My <span className="text-yellow-400">Projects</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project,) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-xl h-full">
                    <div className="aspect-w-16 aspect-h-10 h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-yellow-400/20 text-yellow-300 text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg inline-flex items-center space-x-1 hover:bg-yellow-300 transform transition-all duration-300 hover:scale-105"
                      >
                        <span>Visit Site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        {/* Enhanced Footer */}
        <footer className="relative bg-gray-900 py-12">
          <div className="container mx-auto px-8">
            <div className="flex flex-col items-center space-y-8">
              {/* Logo or Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white"
              >
                <span className="text-yellow-400">V</span>alentine <span className="text-yellow-400">N</span>katha
              </motion.div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                {[
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/valentine-nkatha-90abb4255/" },
                  { icon: <FaTwitter />, href: "https://x.com/valnkatha" },
                  { icon: <FaGithub />, href: "https://github.com/Valentine-Nkatha" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              
              {/* Footer Text */}
              <p className="text-gray-500 text-sm flex items-center space-x-2">
                <span className="text-red-500">❤️</span>
                <span>Created with passion by Valentine © {new Date().getFullYear()}</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}