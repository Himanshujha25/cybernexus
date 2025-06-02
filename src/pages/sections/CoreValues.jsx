import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CircleBackground, sectionVariants } from "../components/Common";

const Values = () => {
  const coreValues = [
    {
      title: "Innovation",
      desc: "Constantly pushing boundaries and exploring new technologies and approaches to solve complex problems.",
      icon: "💡"
    },
    {
      title: "Security First",
      desc: "Security isn't an afterthought - it's integrated into everything we build from day one.",
      icon: "🔒"
    },
    {
      title: "Team Collaboration",
      desc: "We believe the best solutions emerge from diverse perspectives working together.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      desc: "Technology evolves rapidly, and we're committed to growing our skills every day.",
      icon: "📚"
    },
    {
      title: "Inclusivity",
      desc: "Creating a welcoming environment where everyone can contribute regardless of background.",
      icon: "🌈"
    },
    {
      title: "Technical Excellence",
      desc: "Striving for high-quality code, architecture, and solutions in everything we do.",
      icon: "⭐"
    }
  ];

  return (
    <section id="values" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <CircleBackground size={300} top="30%" left="10%" opacity={0.1} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            The principles that guide our work and community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;