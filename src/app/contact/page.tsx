'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
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
        'service_9l0yy7m', // replace with your EmailJS service ID
        'template_0oeffmf', // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'valentinnenkatha@gmail.com', // your email address
        },
        'BJJjsrVQRO6U1-LnS' // replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error sending email:', error.message); // Access the error message
      } else {
        console.error('Error sending email:', error); // Log the error as-is for debugging
      }
      setStatus('error');
  };
}

  return (
    <div>
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <ul className="text-gray-400 space-y-4">
              <li>
                <span className="font-semibold">Address:</span> 616 Korongo Road,
                Off Ndege Road, Karen
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:inovarthemes@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  valentinnenkatha@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +254701815843
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {/* Twitter */}
                <a
                  href="https://x.com/valnkatha"
                  className="text-gray-400 hover:text-yellow-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/valentine-nkatha-90abb4255/"
                  className="text-gray-400 hover:text-yellow-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Valentine-Nkatha"
                  className="text-gray-400 hover:text-yellow-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">Contact Me</h2>

            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-4 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-yellow-400 hover:bg-yellow-200 text-black font-bold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
