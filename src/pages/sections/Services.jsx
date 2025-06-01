import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button, CircleBackground, sectionVariants } from "../components/Common";

const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      desc: "Modern, responsive, and visually appealing user interfaces using the latest frontend technologies like React and Tailwind CSS.",
      icon: "🎨",
      features: ["Responsive Design", "Interactive UIs", "Performance Optimization"]
    },
    {
      title: "Backend Development",
      desc: "Robust and secure server-side development with scalable architecture and database integration.",
      icon: "🧠",
      features: ["RESTful APIs", "Database Management", "Authentication Systems"]
    },
    {
      title: "Full-Stack Development",
      desc: "Complete web solutions from UI to database — seamless integration of frontend and backend services.",
      icon: "🔗",
      features: ["End-to-End Solutions", "Consistent Architecture", "Unified Development"]
    },
    {
      title: "DevOps & Deployment",
      desc: "Streamlined deployment processes, version control, and CI/CD integration for efficient development workflows.",
      icon: "🚀",
      features: ["CI/CD Pipelines", "Docker Containerization", "Cloud Deployment"]
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and user-friendly designs crafted to ensure engaging digital experiences that delight users.",
      icon: "🖌️",
      features: ["User Research", "Wireframing", "Interactive Prototyping"]
    },
    {
      title: "Cybersecurity",
      desc: "Comprehensive security audits and implementation of best practices to protect your digital assets.",
      icon: "🔒",
      features: ["Vulnerability Assessment", "Security Testing", "Implementation of Security Protocols"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <CircleBackground size={400} top="20%" left="-200px" opacity={0.1} />
      <CircleBackground size={300} bottom="-50px" right="10%" opacity={0.05} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive technology solutions with security at their core, designed to propel your business into the digital future.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group">
                <CardContent>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="text-blue-400 flex items-center mt-4 text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6">
            Our team excels at creating tailor-made solutions for unique business challenges.
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              Schedule a Consultation
            </Button>
            <Button className="bg-transparent border-2 border-blue-600 hover:bg-blue-900 hover:bg-opacity-20">
              View Our Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;