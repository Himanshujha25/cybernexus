import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, sectionVariants } from "../components/Common";

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            At CyberNexus, our mission is to design and deliver secure, scalable,
            and future-ready technology solutions by integrating ethical hacking,
            secure engineering, and deep-tech innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  What Sets Us Apart
                </h3>
                <p className="text-gray-300 mb-4">
                  CyberNexus stands at the intersection of cybersecurity and
                  full-stack development. Our team applies industry-grade security
                  practices alongside modern engineering standards to build
                  reliable, resilient, and high-impact digital products.
                </p>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Ethical Hacking & Security Research",
                    "Secure-by-Design Development",
                    "Advanced Technical Research",
                    "Active Open-Source Contributions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300">
                  Our vision is to shape a digital ecosystem where innovation
                  evolves within a foundation of trust, security, and ethical
                  responsibility. We strive to:
                </p>
                <ul className="space-y-4 mt-4">
                  {[
                    "Deliver secure and accessible solutions to real-world challenges",
                    "Cultivate a community committed to continuous learning and excellence",
                    "Promote ethical technology practices and open collaboration",
                    "Lead research initiatives addressing emerging cybersecurity threats",
                  ].map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-blue-400 mr-3 text-xl">→</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;