import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // at top

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-400 px-6 pt-12 pb-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Logo + Brand */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img
                src="/go.png"
                alt="CyberNexus Logo"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-200">CyberNexus</h2>
                <p className="text-sm mt-1 text-zinc-500">
                  Where Development Meets Security
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 text-2xl">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="mailto:contact@cybernexus.com" className="hover:text-white transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide text-sm leading-relaxed text-center justify-center items-center">
            {/* Company */}
            <div className="shrink-0 w-fit text-center">
              <h4 className="text-zinc-200 text-xl font-semibold mb-1">Company</h4>
              <ul className="">
                <li><a href="#home" className="hover:text-white transition ">About Us</a></li>
                <li><a href="#projects" className="hover:text-white transition">Our Projects</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="shrink-0 w-fit">
              <h4 className="text-white text-xl font-semibold mb-1">Legal</h4>
              <ul className="">
                <li to="/privacy-policy"><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="shrink-0 w-fit">
              <h4 className="text-white text-xl font-semibold mb-1">Support</h4>
              <ul className="">
                <li><a href="#contact" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
              </ul>
            </div>
          </div>


          <div className="text-center pt-4 text-md text-zinc-500">
            <p>
              © {new Date().getFullYear()} <strong>CyberNexus Tech Collective</strong>. All rights reserved.
            </p>
            <p className="mt-1">Built with ❤️ by full-stack engineers & creators.</p>
          </div>
        </div>
               <hr className="border-gray-800" />
      </footer>
      
   

      {/* Back*/}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
