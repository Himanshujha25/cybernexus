// Founder.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, sectionVariants } from "../components/Background"; // Update path 
import himanshuImage from "../../assets/himanshu.jpg"; // Replace with the actual image 

const Founder = () => {
  return (
    <section id="founder" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black border-t-1 border-zinc-800">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold text-zinc-200 mb-4">Meet the Founder</h2>
          <p className="text-gray-400 text-lg  mx-auto">
Fueling the future of digital innovation by merging technology, creativity, and cybersecurity into seamless, scalable solutions — one line of code at a time.          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-30  "
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Text */}
          <div className="w-full md:w-2/3 ">
            <Card  className="bg-zinc-900/50 border border-zinc-800">
              <CardContent>
                <p className="text-gray-300 text-lg mb-4">
                  I’m <span className="text-blue-500 font-semibold">Himanshu</span>, founder of <span className="text-blue-500 font-semibold">CyberNexus</span> — a next-gen digital innovation hub where development meets security. My passion lies in building powerful full-stack applications with scalable, secure, and elegant architecture.
                </p>
                <p className="text-gray-400 mb-4">
                  CyberNexus is more than a team; it’s a mission to craft meaningful digital solutions, blending clean code, human-centered design, and cybersecurity-first thinking.
                </p>
                <p className="text-gray-400 mb-4">
                  My vision is to lead CyberNexus into becoming a trusted name in full-stack development and ethical cybersecurity, providing top-tier tech solutions while mentoring a new generation of developers.
                </p>
                <p className="text-gray-400 italic">
                  “I believe in a future where tech empowers trust, not just transactions.”
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Image */}
          <div className="w-56 h-56 md:w-60 md:h-60 rounded-full border-4 border-blue-900 overflow-hidden shadow-lg">
            <img
              src={himanshuImage} // Replace with the actual image path
              alt="Founder Himanshu"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
