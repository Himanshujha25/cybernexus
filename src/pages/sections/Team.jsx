import React from "react";
import { motion } from "framer-motion";
import { Card, Button, CircleBackground, sectionVariants } from "../components/Common";

const TeamSection = () => {
  const teamMembers = [
    ,
    { 
      name: "Kritik Verma", 
      role: "UI/UX Designer", 
      skills: "Figma, Tailwind CSS, Responsive Design",
      bio: "Kritik crafts engaging and user-friendly interfaces, ensuring delightful user experiences through thoughtful design.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    { 
      name: "Nitin Prakash", 
      role: "Security Tester", 
      skills: "Python, Manual Testing, Kali Linux",
      bio: "Nitin ensures product reliability and security through rigorous testing and vulnerability checks.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
      name: "Himanshu Jha", 
      role: "Full Stack Developer", 
      skills: "React, Node.js, MongoDB, System Design",
      bio: "Himanshu is a full stack developer passionate about building scalable web applications with a focus on clean architecture and performance.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    { 
      name: "Bittu Choudhary", 
      role: "QA Specialist", 
      skills: "Bug Tracking, Functional Testing, Reporting",
      bio: "Bittu is a detail-oriented tester dedicated to delivering bug-free, high-quality applications.",
      image: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    { 
      name: "Shudhanshu Yadav", 
      role: "Frontend Developer", 
      skills: "Networking, JavaScript, CSS, React",
      bio: "Shudhanshu is a passionate frontend developer with a strong foundation in web technologies and networking.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const socialIcons = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  };

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <CircleBackground size={500} top="50%" right="-200px" opacity={0.1} />
      <CircleBackground size={300} bottom="-100px" left="10%" opacity={0.05} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16" 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            CyberNexus is led by a passionate team of developers, analysts, and designers with a shared goal 
            of building a secure and open digital ecosystem.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center group h-full flex flex-col">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-blue-900 bg-opacity-20 mx-auto mb-4 border-2 border-blue-400 overflow-hidden p-1 relative group-hover:border-blue-300 transition-all duration-300">
                  <div className="bg-gray-700 rounded-full h-full w-full flex items-center justify-center overflow-hidden">
                    <span className="text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-2 text-sm text-gray-400">Skills:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.split(", ").map((skill, j) => (
                    <span 
                      key={j} 
                      className="bg-gray-700 px-2 py-1 rounded-full text-xs text-blue-300 hover:bg-blue-900 hover:bg-opacity-30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-center space-x-3">
                  {Object.entries(socialIcons).map(([platform, path], j) => (
                    <motion.a 
                      key={j} 
                      href="#" 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ y: -2, scale: 1.1 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={path} />
                      </svg>
                    </motion.a>
                  ))}
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
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            We're always looking for talented individuals passionate about cybersecurity and development.
            Join us in building the next generation of secure digital solutions.
          </p>
          <Button>
            View Open Positions
            <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            </div>
            
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;