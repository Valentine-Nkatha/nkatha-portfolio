import Image from "next/image";
import {
  
  FaTasks,
  
} from "react-icons/fa";
import { FaGithub, FaLaptopCode, FaLinkedin, FaMagnifyingGlass, FaMobile, FaPalette, FaServer, FaTwitter } from "react-icons/fa6";
import LandingPage from "../landing/page";
import Contact from "../contact/page";
import Navbar from "../navbar/page";


const projects = [
  {
    id: 1,
    title: "Multimedia Informational Website",
    image: "/images/magezi.png",
    link: "https://valentine-magezi.vercel.app/",
  },
  {
    id: 2,
    title: "Shawazi Informational Website",
    image: "/images/shawaziinfo.png",
    link: "https://magezi-informational-c594.vercel.app/",
  },

  {
    id: 3,
    title: "Suubi Informational Website",
    image: "/images/suubi.png",
    link: "https://my-suubi-webpage.vercel.app/",
  },
  {
    id: 4,
    title: "Shawazi project",
    image: "/images/shawazibuyer.png",
    link: "https://shawazi-magezi.vercel.app/",
  },
  {
    id: 5,
    title: "Mama Mind app",
    image: "/images/mind.png",
    link: "https://appetize.io/app/b_w7zc6ecydiz2efq47xdy5b6are",
  },
  {
    id: 6,
    title: "Musica Website",
    image: "/images/musicas.png",
    link: "https://musica-website-app.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white">
      <section id="home">
      <Navbar/>
      </section>
      <section id="about">
      <LandingPage/>
      </section>

      <section id="skills">
      <div className="bg-gray-900 text-white py-5">
        <h2 className="text-center text-3xl font-bold text-yellow-400">
          ABOUT ME
        </h2>
      </div>
      <section className="flex flex-col md:flex-row items-center py-20 px-10 bg-gray-900 text-white space-y-10 md:space-y-0 md:space-x-10 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/ValentineNkatha.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-lg border-4 border-gray-700 shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Hello! I am Valentine Nkatha
          </h2>
          <h3 className="text-xl font-bold text-white mb-6">
            I&apos;m a Passionate Software Developer Focused on Frontend & Backend
            Development
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Valentine&apos;s passion for the future of forensic science is fueled by
            her excitement for the potential of artificial intelligence to
            revolutionize the field. Artificial Intelligence algorithms assist
            in facial recognition, handwriting analysis, voice analysis, and
            pattern recognition. With her technical expertise and scientific
            curiosity, she aims to contribute to the development of new tools,
            techniques, and methodologies that can enhance the accuracy,
            efficiency, and accessibility of forensic analysis. She aims to
            combine her technological prowess with unwavering dedication to make
            a meaningful impact on the future of forensic science.
          </p>
          <div className="mt-6 space-y-2 text-gray-300">
            <p>
              <strong className="text-yellow-400">Email:</strong>{" "}
              valentinnenkatha@gmail.com
            </p>
            <p>
              <strong className="text-yellow-400">Location:</strong> Nairobi,
              Kenya
            </p>
          </div>
        </div>
      </section>
      </section>

      {/* Services Section */}
      <section id="projects">
      <section className="py-20 px-10">
        <h2 className="text-center text-3xl font-bold mb-10 text-yellow-400">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Frontend Web Development", icon: <FaLaptopCode /> },
            { title: "Mobile Development", icon: <FaMobile /> },
            { title: "Backend Development", icon: <FaServer /> },
            { title: "UX Research", icon: <FaMagnifyingGlass /> },
            { title: "UI & UX Design", icon: <FaPalette /> },
            { title: "Product Managament", icon: <FaTasks /> },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-md text-center hover:bg-gray-700"
            >
              <div className="text-4xl mb-4 text-yellow-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="projects py-20 px-10">
        <h2 className="text-center text-4xl font-bold mb-8 text-yellow-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg font-semibold mb-2">{project.title}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-200"
                >
                  Visit Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      </section>
      <section id="contact">
<Contact/>
</section>
      <footer className="bg-gray-900 py-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/valentine-nkatha-90abb4255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 hover:text-white text-xl" />
            </a>
            <a
              href="https://x.com/valnkatha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-400 hover:text-white text-xl" />
            </a>
            <a
              href="https://github.com/Valentine-Nkatha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-400 hover:text-white text-xl" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-gray-500 text-sm flex items-center space-x-2">
            <span>❤️</span>
            <span>Created by Valentine</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
