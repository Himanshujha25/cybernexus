import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button, sectionVariants } from "../components/Common";
import { CircleBackground } from "../components/Background";

const WhyJoinUsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <CircleBackground size={400} top="50%" right="-200px" opacity={0.1} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16" 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Be part of a collective that values innovation, collaboration, and technical excellence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Build Real Projects",
              desc: "Work on real-world applications with practical impact. No toy projects here - we build solutions that make a difference.",
              icon: "💻"
            },
            {
              title: "Collaborate Globally",
              desc: "Connect with developers, security researchers, and tech enthusiasts from around the world in our inclusive community.",
              icon: "🌎"
            },
            {
              title: "Learn Cutting-edge Skills",
              desc: "Stay ahead with hands-on experience in the latest technologies, frameworks, and security practices.",
              icon: "🚀"
            },
          ].map((item, i) => (
            <Card key={i} delay={i * 0.1}>
              <CardContent>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button>Apply To Join</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;