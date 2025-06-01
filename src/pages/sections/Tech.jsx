import React from "react";
import { motion } from "framer-motion";
import { Card, CircleBackground, Button, sectionVariants } from "../components/Common";

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative">
      <CircleBackground size={500} top="10%" left="-200px" opacity={0.1} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16" 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack We Love</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our toolkit for building secure, scalable, and modern applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "HTML", category: "Frontend" },
            { name: "CSS", category: "Frontend" },
            { name: "JavaScript", category: "Frontend" },
            { name: "React", category: "Frontend" },
            { name: "Node.js", category: "Backend" },
            { name: "MongoDB", category: "Database" },
            { name: "Firebase", category: "Backend" },
            { name: "GitHub", category: "DevOps" },
            { name: "Tailwind CSS", category: "Frontend" },
            { name: "TypeScript", category: "Frontend", status: "Learning" },
            { name: "Docker", category: "DevOps", status: "Learning" },
            { name: "Kali Linux", category: "Cybersecurity" }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center group h-full flex flex-col" delay={i * 0.05}>
                <div className="w-16 h-16 rounded-full bg-blue-900 bg-opacity-20 mx-auto mb-4 border-2 border-blue-400 overflow-hidden p-1">
                  <div className="bg-gray-700 rounded-full h-full w-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{tech.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-blue-400 transition">{tech.name}</h3>
                <p className="text-blue-400 mb-2">{tech.category}</p>
                {tech.status && (
                  <span className="bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-xs text-blue-300 mt-2">
                    {tech.status}
                  </span>
                )}
                <div className="mt-auto pt-4">
                  <motion.button
                    className="text-sm text-gray-400 hover:text-blue-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn more
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Development Philosophy</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            We embrace modern technologies while prioritizing security, performance, and user experience in every project we build.
          </p>
          <Button>Learn Our Process</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;