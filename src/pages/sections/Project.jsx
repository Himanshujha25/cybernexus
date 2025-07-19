import React, { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFire } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiFirebase,
  SiMaterialdesignicons,
} from "react-icons/si";
import { SlArrowDown } from "react-icons/sl";

// Icons
const techIcons = {
  React: <FaReact className="text-lg text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-lg text-green-500" />,
  MongoDB: <SiMongodb className="text-lg text-green-400" />,
  HTML: <FaHtml5 className="text-lg text-orange-500" />,
  CSS: <FaCss3Alt className="text-lg text-blue-500" />,
  JavaScript: <SiJavascript className="text-lg text-yellow-400" />,
  Firebase: <SiFirebase className="text-lg text-orange-400" />,
  "Material UI": <SiMaterialdesignicons className="text-lg text-indigo-400" />,
  "API Integration": <FaFire className="text-lg text-red-400" />,
  Authentication: <FaFire className="text-lg text-red-400" />,
  Routing: <FaReact className="text-lg text-cyan-300" />,
  "AI Suggestions": <FaFire className="text-lg text-red-300" />,
  "Image Assets": <FaReact className="text-lg text-white" />,
};

// Descriptions
const skillDescriptions = {
  React: "JavaScript library for building UIs",
  "Node.js": "Backend runtime using Chrome V8",
  MongoDB: "NoSQL database for modern apps",
  HTML: "Structure of web pages",
  CSS: "Styling for layout and design",
  JavaScript: "Core language for interactivity",
  Firebase: "Backend service by Google",
  "Material UI": "Prebuilt UI components",
  "API Integration": "Connects apps to external services",
  Authentication: "User login & security",
  Routing: "Navigate between pages",
  "AI Suggestions": "Smart, personalized feedback",
  "Image Assets": "Optimized images for web",
};

// Projects Data
const projects = [
  {
    title: "Triply",
    desc: "Smart travel assistant delivering tailor-made trip plans instantly.",
    tech: ["React", "Node.js", "MongoDB", "API Integration"],
    link: "https://triplyv2-himanshujha25s-projects.vercel.app",
    bg: "https://imgs.search.brave.com/jYTIelC04fLWXyUn6LWoVrbW284mIXrlkEJ6259zHTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/aHJpc3RtYXMtdHJh/dmVsLWNvbmNlcHQt/d2l0aC1sYXB0b3Bf/MjMtMjE0OTU3MzA4/MC5qcGc_c2VtdD1h/aXNfaXRlbXNfYm9v/c3RlZCZ3PTc0MA",
  },
  {
    title: "AI Resume Analyzer",
    desc: "AI-powered resume builder with real-time, intelligent suggestions.",
    tech: ["HTML", "CSS", "JavaScript", "AI Suggestions"],
    link: "https://smart-cv-iota.vercel.app/",
    bg: "https://imgs.search.brave.com/-U2NuISxzQn4LQkm7uV0EalxJa1C8_dXy-G69r2xSuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tL2Nkbi1j/Z2kvaW1hZ2UvZj1h/dXRvLHE9NzAvNGRj/OTNkMGItY2UwNy00/OWIyLWIxNTYtYjg1/ZjQxODg0OGViL2Fp/LXJlc3VtZS1idWls/ZGVyX2hvdy10b18y/eC5wbmc",
  },
  {
    title: "IngreDish",
    desc: "Modern recipe app for food lovers with responsive design.",
    tech: ["React", "CSS", "Routing", "Image Assets"],
    link: "https://smart-cv-iota.vercel.app/",
    bg: "https://imgs.search.brave.com/RlDJwTYy6El9ES33ir0gbiWbPpOtvLZ-yBNX6bWT0qo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/dmludGFnZS1yZWNp/cGVzLXlvdXR1YmUt/Y2hhbm5lbC1hcnRf/MjMtMjE0ODkwNDEx/My5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
  },
  {
    title: "Attendance Tracker",
    desc: "Efficient task manager with Firebase login and real-time updates.",
    tech: ["React", "Firebase", "Authentication", "Material UI"],
    link: "https://smart-cv-iota.vercel.app/",
    bg: "https://imgs.search.brave.com/SPsITCKjazw3NFWiLbGMVUEPWSIv-izsKWkkTnjtFnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uaWZ0/eXBtLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAyL0hpdmUtdGFz/ay1tYW5hZ2VtZW50/LXNvZnR3YXJlLTEw/MjR4NjA1LnBuZw",
  },
];

const ProjectDashboard = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white w-full border-t-1 border-zinc-900">
      <div className="max-w-6xl mx-auto text-center mb-10 px-4">
        <h2 className="text-5xl text-zinc-200 font-semibold mb-4">Signature Solutions</h2>
        <p className="text-gray-300 text-lg font-sans">
          Explore my custom-crafted web applications and <br />
          real-world digital solutions built for performance, scalability, and style.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 cursor-pointer">
        {projects.map((proj, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800  shadow overflow-hidden flex flex-col">
            {/* Image */}
            <img src={proj.bg} alt={proj.title} className="w-full h-60 object-cover" />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Title & Live Button */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                {proj.link && (
                  <button
                    onClick={() => window.open(proj.link, "_blank")}
                    className="px-3 font-black hover:text-white bg-zinc-300 text-black   hover:bg-zinc-600 transition"
                  >
                    Live
                  </button>
                )}
              </div>

              {/* Description */}
              <p className="text-sm font-semibold text-gray-300 mb-2">{proj.desc}</p>

              {/* Toggle Arrow */}
              <button onClick={() => toggleDetails(i)} className="text-sm text-zinc-400 flex items-center gap-1 hover:underline">
                View Tech Stack <SlArrowDown className={`transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>

              {/* Skills Expanded */}
              {openIndex === i && (
                <div className="mt-3 space-y-2">
                  {proj.tech.map((tech, j) => (
                    <div key={j} className="flex items-center gap-2 bg-zinc-800 p-2 rounded text-xs">
                      {techIcons[tech]}
                      <span className="text-white font-semibold">{tech}:</span>
                      <span className="text-gray-400">{skillDescriptions[tech]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDashboard;