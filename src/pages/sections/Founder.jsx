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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Leadership & Vision
        </h2>

        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />

        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Strategic leadership, long-term vision, and a commitment to building
          secure, future-ready technology.
        </p>
      </motion.div>

      <Card>
        <CardContent className="space-y-5">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-blue-400 font-semibold">Himanshu</span> is the
            Founder of <span className="text-blue-400 font-semibold">CyberNexus</span>,
            a technology collective focused on delivering secure, scalable, and
            high-impact digital solutions. CyberNexus was founded with the belief
            that modern software development must be deeply aligned with
            cybersecurity principles from day one.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Under his leadership, CyberNexus operates at the intersection of
            full-stack engineering and ethical cybersecurity—prioritizing clean
            architecture, performance, and long-term maintainability while
            safeguarding user trust and data integrity.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Beyond product development, his vision extends to building a
            collaborative ecosystem where developers, security researchers,
            and innovators grow together—sharing knowledge, contributing to
            open-source initiatives, and solving real-world challenges through
            responsible technology.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-300 italic">
            “The future of technology is not defined by speed alone, but by how
            securely, ethically, and responsibly it is built.”
          </blockquote>
        </CardContent>
      </Card>
    </div>
  </section>
);


export default Founder;
