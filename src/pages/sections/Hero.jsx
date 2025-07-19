import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Common";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import busssLottie from "../../assets/lotties/busss.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse xl:flex-row items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Left Section */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center font-poppins py-10 sm:py-16 xl:py-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          >
            Hire Elite Freelance  Developers
            <br className="hidden sm:block" />
            & Creative Technologists
          </motion.h1>

          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6 tracking-tight font-semibold"
          >
            <strong className="text-blue-700">CyberNexus</strong> is a trusted network of full-stack developers, UI/UX designers,
            DevOps engineers, and product creators — united by a mission to build scalable,
            secure, and future-ready digital solutions.
          </motion.p>

          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-gray-400 text-md sm:text-base md:text-lg mt-5 font-stretch-85%"
          >
            Whether you're a startup or an enterprise, our vetted team delivers with precision,
            speed, and global standards.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeul_WrSbIi3tJcDaKLsc6l2bh8ODao1wHdOTcIo5nmSWtb8A/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 text-white px-6 py-3 text-sm sm:text-base rounded-md transition duration-300">
                Join Our Team
              </Button>
            </a>

            <Link to="projects" smooth={true} duration={800} offset={-70}>
              <Button className="bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-800 hover:bg-opacity-20 px-6 py-3 text-sm sm:text-base rounded-md shadow hover:shadow-blue-600/30 transition duration-300">
                Explore Projects
              </Button>
            </Link>

          </motion.div>
        </div>
      </div>

      {/* Right Section - Lottie Animation */}
      <motion.div
        className="w-full xl:w-1/2 flex justify-start xl:justify-end items-center py-20 overflow-hidden rounded-xl shadow-md
 sm:py-20 xl:py-0 px-4 sm:px-8"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="w-[450px] sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[650px]">
          <Lottie animationData={busssLottie} loop={true} />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
