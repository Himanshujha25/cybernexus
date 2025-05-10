import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../src/assets/go.png"
// Reusable Components
const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 ${className}`}
    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children }) => <div className="space-y-3">{children}</div>;

const Button = ({ children, className = "", ...props }) => (
  <motion.button
    className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-medium ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Icons components
const Icon = ({ children, className = "" }) => (
  <div className={`text-blue-400 text-2xl ${className}`}>{children}</div>
);

const CircleBackground = ({ size = 300, top, left, right, opacity = 0.2 }) => (
  <div 
    className="absolute rounded-full blur-3xl bg-blue-600 z-0"
    style={{ 
      width: size, 
      height: size, 
      top, 
      left, 
      right,
      opacity
    }}
  />
);

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const NavLink = ({ children, to }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <motion.button
      className="text-gray-300 hover:text-white px-4 py-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection(to)}
    >
      {children}
    </motion.button>
  );
};

const CyberNexus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, our team will connect with you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  // Observer for sections to update active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setIsNavVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00bfff" },
            links: { 
              enable: true, 
              color: "#00bfff", 
              distance: 150,
              opacity: 0.5,
              width: 1 
            },
            move: { 
              enable: true, 
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              bounce: false,
            },
            size: { value: 3, random: true },
            opacity: { value: 0.5, random: true },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        }}
      />
      
      {/* Background Decorative Elements */}
      <CircleBackground size={400} top="-100px" left="-100px" opacity={0.15} />
      <CircleBackground size={500} top="30%" right="-200px" opacity={0.1} />
      <CircleBackground size={300} top="70%" left="10%" opacity={0.12} />
      
      {/* Sticky Header */}
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isNavVisible ? 'bg-black bg-opacity-70 shadow-lg' : ''}`}
          style={{ opacity: headerOpacity }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
          <motion.img
            src={`${logo}`}
            alt="CyberNexus Logo"
            className="h-10 mr-3"
            whileHover={{ rotate: 10 }}
          />
          <h1 className="text-xl font-bold hidden md:block">CyberNexus</h1>
            </div>
            
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { name: "Home", to: "home" },
              { name: "Mission", to: "mission" },
              { name: "Projects", to: "projects" },
              { name: "Team", to: "team" },
              { name: "Services", to: "services" },
              { name: "Testimonials", to: "testimonials" },
              { name: "Contact", to: "contact" }
            ].map((item) => (
              <NavLink key={item.name} to={item.to}>
                <span className={activeSection === item.to ? "text-blue-400 font-medium" : ""}>
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            className="bg-gray-900 bg-opacity-95 md:hidden py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col space-y-2 px-4">
              {[
                { name: "Home", to: "home" },
                { name: "Mission", to: "mission" },
                { name: "Projects", to: "projects" },
                { name: "Team", to: "team" },
                { name: "Services", to: "services" },
                { name: "Testimonials", to: "testimonials" },
                { name: "Contact", to: "contact" }
              ].map((item) => (
                <NavLink key={item.name} to={item.to} onClick={() => setIsMenuOpen(false)}>
                  <span className={activeSection === item.to ? "text-blue-400 font-medium" : ""}>
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-32">
          <motion.img
            src={`${logo}`}
            alt="CyberNexus Logo"
            className="mx-auto h-32 mb-6 rounded-full border-3 border-blue-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.2, type: "spring" }}
          />
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            CyberNexus <span className="text-blue-400">Tech</span> Collective
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-blue-500 my-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.6 }}
          />
          <motion.p
            className="text-blue-400 text-xl md:text-2xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We Learn. We Build. We Secure.
          </motion.p>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-center mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Driving innovation in cybersecurity and full-stack development through collaborative excellence.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button className="bg-blue-600 text-white">Join Our Team</Button>
            <Button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30">
              Explore Projects
            </Button>
          </motion.div>
          
         
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div className="text-center mb-16" variants={sectionVariants} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                At CyberNexus, we focus on building real-world solutions powered by ethical hacking, secure development, and deep tech innovation.
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
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">What Sets Us Apart</h3>
                    <p className="text-gray-300 mb-4">
                      We combine expertise in cybersecurity with full-stack development to create secure, scalable, and innovative solutions. Our collective brings together professionals from diverse backgrounds with a common passion for technology.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      {["Ethical Hacking", "Secure Development", "Advanced Research", "Open Source Contribution"].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-blue-400 mr-2">✓</span> {item}
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
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
                    <p className="text-gray-300">
                      We envision a digital landscape where innovation thrives within a secure ecosystem. Our collective aims to:
                    </p>
                    <ul className="space-y-4 mt-4">
                      {[
                        "Create secure, accessible technology solutions for real-world problems",
                        "Build a community of lifelong learners devoted to technical excellence",
                        "Foster ethical technology practices and open-source contribution",
                        "Lead research in emerging cybersecurity challenges"
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

        {/* Why Join Us */}
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

        {/* Projects */}
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
            tech: ["React", "Node.js", "MongoDB", "API Integration"]
          },
          { 
            title: "Smart CV", 
            desc: "An AI-powered resume builder that crafts professional CVs with real-time tips, customizable templates, and export options.",
            image: "/smartcv.jpg",
            tech: ["HTML", "CSS", "JavaScript", "AI Suggestions"]
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
                    <Button className="mt-4 w-full bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section (New) */}
        <section id="services" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
          <CircleBackground size={400} top="20%" left="-200px" opacity={0.1} />
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
                Comprehensive technology solutions with security at their core.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
              { 
                title: "Frontend Development", 
                desc: "Modern, responsive, and visually appealing user interfaces using the latest frontend technologies.",
                icon: "🎨"
              },
              { 
                title: "Backend Development", 
                desc: "Robust and secure server-side development with scalable architecture and database integration.",
                icon: "🧠"
              },
              { 
                title: "Full-Stack Development", 
                desc: "Complete web solutions from UI to database — seamless integration of frontend and backend services.",
                icon: "🔗"
              },
              { 
                title: "DevOps & Deployment", 
                desc: "Streamlined deployment processes, version control, and CI/CD integration for efficient development workflows.",
                icon: "🚀"
              },
              { 
                title: "UI/UX Design", 
                desc: "Intuitive and user-friendly designs crafted using Figma to ensure engaging digital experiences.",
                icon: "🖌️"
              }
              
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-3">{service.title}</h3>
                      <p className="text-gray-300">{service.desc}</p>
                      
                      <motion.button
                        className="text-blue-400 flex items-center mt-4 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
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
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "TypeScript (Learning)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker (Learning)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kali Linux (Cybersecurity)", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kali-dragon-icon.svg" }
]
.map((tech, i) => (
                <motion.div 
                  key={i}
                  className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 flex flex-col items-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 191, 255, 0.2)" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="bg-gray-700 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-2xl">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-medium text-blue-300">{tech.name}</h3>
                </motion.div>))}
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
          <CircleBackground size={500} top="50%" right="-200px" opacity={0.1} />
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
                CyberNexus is led by a passionate team of developers, analysts, and designers with a shared goal of building a secure and open digital ecosystem.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
  { 
    name: "Himanshu Jha", 
    role: "Full Stack Developer", 
    skills: "React, Node.js, MongoDB, System Design",
    bio: "Himanshu is a full stack developer passionate about building scalable web applications with a focus on clean architecture and performance.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  { 
    name: "Kritik Verma", 
    role: "UI/UX Designer", 
    skills: "Figma, Tailwind CSS, Responsive Design",
    bio: "Kritik crafts engaging and user-friendly interfaces, ensuring delightful user experiences through thoughtful design.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  { 
    name: "Nitin Prakash", 
    role: "Tester", 
    skills: "Python, Manual Testing, Kali Linux",
    bio: "Nitin ensures product reliability and security through rigorous testing and vulnerability checks.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  { 
    name: "Bittu Choudhary", 
    role: "Tester", 
    skills: "Bug Tracking, Functional Testing, Reporting",
    bio: "Bittu is a detail-oriented tester dedicated to delivering bug-free, high-quality applications.",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  { 
    name: "Shudhanshu Yadav", 
    role: "frontend Developer", 
    skills: "Networking,javascript,html,css,react",
    bio: "Shudhanshu Yadav is a passionate frontend developer with a strong foundation in web technologies and networking.",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  }
]

.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center group">
                    <div className="w-32 h-32 rounded-full bg-blue-900 bg-opacity-20 mx-auto mb-4 border-2 border-blue-400 overflow-hidden p-1">
                      <div className="bg-gray-700 rounded-full h-full w-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-400">{member.name.charAt(0)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition">{member.name}</h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="mb-2 text-sm text-gray-400">Skills:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.split(", ").map((skill, j) => (
                        <span key={j} className="bg-gray-700 px-2 py-1 rounded-full text-xs text-blue-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-3">
                      {["github", "linkedin", "twitter"].map((social, j) => (
                        <motion.a 
                          key={j} 
                          href="#" 
                          className="text-gray-400 hover:text-blue-400"
                          whileHover={{ y: -2 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
              </p>
              <Button>View Open Positions</Button>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section (New) */}
        <section id="testimonials" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16" 
              variants={sectionVariants} 
              initial="hidden" 
              whileInView="visible" 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Feedback from our collaborators, clients, and community members.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
  {
    quote: "Himanshu and his team built a powerful full-stack solution for our platform. From a sleek UI to rock-solid backend and strong testing – everything was top-notch.",
    author: "Anjali Mehra",
    role: "Founder, RecipeNest"
  },
  {
    quote: "The CyberNexus team delivered beyond expectations. Their coordination, design precision, and testing approach helped us go live smoothly and confidently.",
    author: "Akash Yadav",
    role: "Product Manager, TaskFlow"
  },
  {
    quote: "This team blends creativity with functionality. Himanshu’s full-stack leadership, and the strong testing by Nitin and Bittu gave our project a professional edge.",
    author: "Neha Sinha",
    role: "Client, SmartCV Project"
  }
]
.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="text-blue-400 text-4xl mb-4">"</div>
                      <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-blue-900 bg-opacity-30 rounded-full flex items-center justify-center text-blue-400 font-bold">
                          {testimonial.author.split(' ').map(name => name[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-white">{testimonial.author}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative">
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
              {[
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
                },
              ].map((value, i) => (
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

        {/* Contact Form */}
        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16" 
              variants={sectionVariants} 
              initial="hidden" 
              whileInView="visible" 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Want to collaborate, contribute, or join our mission? CyberNexus is always open to passionate minds.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent>
                    <h3 className="text-2xl font-bold text-blue-400 mb-6">Get In Touch</h3>
                    <div className="space-y-6">
                      {[
                        { label: "Email", value: "team@cybernexus.tech", icon: "📧" },
                        { label: "Discord", value: "discord.gg/cybernexus", icon: "💬" },
                        { label: "GitHub", value: "github.com/cybernexus-collective", icon: "📁" },
                        { label: "Location", value: "Global Team (Remote)", icon: "🌎" },
                      ].map((contact, i) => (
                        <div key={i} className="flex items-center">
                          <div className="text-2xl mr-4">{contact.icon}</div>
                          <div>
                            <div className="text-sm text-gray-400">{contact.label}</div>
                            <div className="text-blue-400">{contact.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-400 mt-8 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {["twitter", "github", "linkedin", "discord"].map((social, i) => (
                        <motion.a 
                          key={i} 
                          href="#" 
                          className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-white"
                          whileHover={{ y: -5 }}
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg> 
                        </motion.a>
                      ))}
                    </div>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-6">Send A Message</h3>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-500 transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-500 transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-500 h-32 resize-none transition"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-black px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <img src={logo} alt="CyberNexus Logo" className="h-10 mr-3" />
                <div>
                  <h2 className="text-xl font-bold text-white">CyberNexus</h2>
                  <p className="text-gray-400 text-sm">Tech Collective</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                {["Home", "Mission", "Projects", "Team", "Contact"].map((item, i) => (
                  <a key={i} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <hr className="border-gray-800 my-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} CyberNexus Tech Collective. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Code of Conduct"].map((item, i) => (
                  <a key={i} href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
      
 
      {showBackToTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ y: -5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default CyberNexus;