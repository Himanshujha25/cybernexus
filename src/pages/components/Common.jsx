import React from "react";
import { motion } from "framer-motion";

// Reusable Components that are used across multiple sections
export const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 ${className}`}
    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const CardContent = ({ children }) => (
  <div className="space-y-3">{children}</div>
);

export const Button = ({ children, className = "", ...props }) => (
  <motion.button
    className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-medium ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Icons components
export const Icon = ({ children, className = "" }) => (
  <div className={`text-blue-400 text-2xl ${className}`}>{children}</div>
);

export const CircleBackground = ({ size = 300, top, left, right, opacity = 0.2 }) => (
  <div 
    className="absolute rounded-full blur-3xl bg-blue-600 z-0"
    style={{ 
      width: size , 
      height: size, 
      top, 
      left, 
      right,
      opacity
    }}
  />
);

export const NavLink = ({ children, to, onClick }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (onClick) onClick();
  };
  
  return (
    <motion.button
      className="text-gray-300 hover:text-white px-4 py-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection(to)}
    >
      {children}
    </motion.button>
  );
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};