// Founder.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, sectionVariants } from "../components/Background"; // adjust path if needed

const Founder = () => (
  <section id="founder" className="py-24 px-6 bg-gray-900">
    <div className="container mx-auto max-w-4xl">
      <motion.div 
        className="text-center mb-16" 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet the Founder</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Vision, Mission & Future by Himanshu
        </p>
      </motion.div>

      <Card>
        <CardContent>
          <p className="text-gray-300 text-lg mb-4">
            I’m <span className="text-blue-400 font-semibold">Himanshu</span>, the founder of <span className="text-blue-400 font-semibold">CyberNexus</span> — a next-gen digital innovation hub where development meets security. My passion lies in building powerful full-stack applications with scalable, secure, and elegant architecture.
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
  </section>
);

export default Founder;
