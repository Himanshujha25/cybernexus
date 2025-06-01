import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button, sectionVariants } from "../components/Common";
import { Link } from "react-scroll";

const ProjectsSection = () => {
  const handleButtonClick = (Links) => {
    window.open(Links, "_blank");
  };
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16" 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our ongoing and completed projects that showcase our technical capabilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Triply", 
              desc: "A smart travel planner app that helps users explore destinations, manage itineraries, and get personalized recommendations.",
              image: "/triply.jpg",
              tech: ["React", "Node.js", "MongoDB", "API Integration"],
              Links: "https://triplyv2-himanshujha25s-projects.vercel.app"

            },
            { 
              title: "Smart CV", 
              desc: "An AI-powered resume builder that crafts professional CVs with real-time tips, customizable templates, and export options.",
              image: "/smartcv.jpg",
              tech: ["HTML", "CSS", "JavaScript", "AI Suggestions"],
              Links: "https://smart-cv-iota.vercel.app/"
            },
            { 
              title: "RecipeMaker", 
              desc: "A recipe collection and discovery app featuring categorized vegetarian, vegan, and dessert dishes with clean UI and filtering.",
              image: "/recipemaker.jpg",
              tech: ["React", "CSS Modules", "Routing", "Image Assets"]
            },
            { 
              title: "Task Management System", 
              desc: "A productivity app to manage daily tasks with priority levels, due dates, and progress tracking across projects.",
              image: "/taskmanager.jpg",
              tech: ["React", "Firebase", "Authentication", "Material UI"]
            }
          ].map((proj, i) => (
            <Card key={i} delay={i * 0.05} className="overflow-hidden group">
              <div className="h-48 -m-6 mb-4 bg-gray-700 relative">
                <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{proj.title}</h3>
                </div>
              </div>
              <CardContent>
                <p className="text-gray-300 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, j) => (
                    <span key={j} className="bg-gray-700 px-2 py-1 rounded-md text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="mt-4 w-full bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30" onClick={()=>handleButtonClick(proj.Links)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;