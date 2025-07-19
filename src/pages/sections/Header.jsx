import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../components/Common"; // Assumed to be smooth-scroll or react-scroll version

const Header = ({ activeSection, headerOpacity, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "Join us", to: "Join us" },
    { name: "Services", to: "services" },
    { name: "Tech", to: "Tech"},
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.header
  className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-800 to-black backdrop-blur-md transition-all duration-300 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="CyberNexus Logo"
            className="h-15 sm:h-15 w-auto rounded-full object-cover mr-2"
          />
          <h1 className="text-xl font-bold text-zinc-100 hidden md:block">
            CyberNexus
          </h1>
        </div>

        {/* Desktop Nav */}
      <nav className="hidden md:flex ">
  {menuItems.map((item) => (
    <NavLink key={item.name} to={item.to}>
      <span
        className={`relative text-lg font-semibold   tracking-tighter pb-1 transition-colors duration-300 ${
          activeSection === item.to
            ? "text-blue-500"
            : "text-white hover:text-blue-500"
        }`}
      >
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </NavLink>
  ))}
</nav>


        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  whileHover={{ rotate: 360 }}
        d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-23 left-0 w-full bg-black bg-opacity-95 px-6 py-4 md:hidden z-40"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="flex flex-col divide-y divide-zinc-800">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className={`block py-3 text-1xl font-sans font-semibold text-left ${
                      activeSection === item.to
                        ? "text-blue-500"
                        : "text-white hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
