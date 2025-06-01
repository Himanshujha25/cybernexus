import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "../components/Common";

const Header = ({ activeSection, headerOpacity, logo }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isNavVisible ? 'bg-black bg-opacity-70 shadow-lg' : ''}`}
      style={{ opacity: headerOpacity }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="CyberNexus Logo"
            className="h-14 mr-2 rounded-full "
            whileHover={{ rotate: 10 }}
          />
          <h1 className="text-xl font-bold hidden md:block">CyberNexus</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {[
            { name: "Home", to: "home" },
            { name: "Mission", to: "mission" },
            { name: "Projects", to: "projects" },
            { name: "Team", to: "team" },
            { name: "Services", to: "services" },
            { name: "Testimonials", to: "testimonials" },
            { name: "Contact", to: "contact" }
          ].map((item) => (
            <NavLink key={item.name} to={item.to}>
              <span className={activeSection === item.to ? "text-blue-400 font-medium" : ""}>
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="bg-gray-900 bg-opacity-95 md:hidden py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-2 px-4">
            {[
              { name: "Home", to: "home" },
              { name: "Mission", to: "mission" },
              { name: "Projects", to: "projects" },
              { name: "Team", to: "team" },
              { name: "Services", to: "services" },
              { name: "Testimonials", to: "testimonials" },
              { name: "Contact", to: "contact" }
            ].map((item) => (
              <NavLink key={item.name} to={item.to} onClick={() => setIsMenuOpen(false)}>
                <span className={activeSection === item.to ? "text-blue-400 font-medium" : ""}>
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;