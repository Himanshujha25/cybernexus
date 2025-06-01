import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Common";

import { Link } from "react-scroll";
const HeroSection = ({ logo }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-32">
      <motion.img
        src={logo}
        alt="CyberNexus Logo"
        className="mx-auto h-32 mb-6 rounded-full border-3 border-blue-500 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.2, type: "spring" }}
      />
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        CyberNexus <span className="text-blue-400">Tech</span> Collective
      </motion.h1>
      <motion.div
        className="h-1 w-32 bg-blue-500 my-6 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 0.6 }}
      />
      <motion.p
        className="text-blue-400 text-xl md:text-2xl font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We Learn. We Build. We Secure.
      </motion.p>
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto text-center mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Driving innovation in cybersecurity and full-stack development through collaborative excellence.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >

        <Link to="contact" smooth={true} duration={1000}>
          <Button className="bg-blue-600 text-white">Join Our Team</Button>
        </Link>

        <Link to="projects" smooth={true} duration={500}>
          <Button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30">
            Explore Projects
          </Button>
        </Link>

      </motion.div>
    </section>
  );
};

export default HeroSection;