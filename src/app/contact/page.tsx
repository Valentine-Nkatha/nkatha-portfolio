'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiSend, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_9l0yy7m',
        'template_0oeffmf',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'valentinnenkatha@gmail.com',
        },
        'BJJjsrVQRO6U1-LnS'
      );

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error sending email:', error.message);
      } else {
        console.error('Error sending email:', error);
      }
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-yellow-400">Let&apos;s</span> Connect
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 h-fit">
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center">
              Contact Details
              <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </h2>
            
            <ul className="space-y-8 mb-12">
              <li className="flex items-start">
                <div className="bg-yellow-400/20 p-3 rounded-xl mr-4">
                  <FiMapPin className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="font-medium">616 Korongo Road, Off Ndege Road, Karen</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400/20 p-3 rounded-xl mr-4">
                  <FiMail className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:valentinnenkatha@gmail.com"
                    className="font-medium hover:text-yellow-400 transition-colors group inline-flex items-center"
                  >
                    valentinnenkatha@gmail.com
                    <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400/20 p-3 rounded-xl mr-4">
                  <FiPhone className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="font-medium">+254 701 815 843</p>
                </div>
              </li>
            </ul>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/valnkatha"
                  className="bg-gray-700 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl group-hover:text-black" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/valentine-nkatha-90abb4255/"
                  className="bg-gray-700 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl group-hover:text-black" />
                </a>
                
                <a
                  href="https://github.com/Valentine-Nkatha"
                  className="bg-gray-700 hover:bg-yellow-400 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 relative">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Send a <span className="text-yellow-400">Message</span>
            </h2>
            
            {/* Status messages */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 text-green-300 border border-green-500 rounded-xl flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                Your message has been sent successfully!
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 text-red-300 border border-red-500 rounded-xl flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                Failed to send message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 pl-5 bg-gray-700/50 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${formData.name ? 'w-full' : 'w-0'}`}></div>
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 pl-5 bg-gray-700/50 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${formData.phone ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 pl-5 bg-gray-700/50 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-500"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${formData.email ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 pl-5 bg-gray-700/50 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-500"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${formData.message ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                {status === 'sending' ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Send Message
                    <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>
            </form>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-yellow-400/30 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}