import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { loadFull } from "tsparticles";
import logo from "../src/assets/go.png";
import "./App.css"

// Import all section components
import Header from "./pages/sections/Header";
import HeroSection from "./pages/sections/Hero";
import WhyJoinUsSection from "./pages/sections/Join us";
import ProjectsSection from "./pages/sections/Project";
import ServicesSection from "./pages/sections/Services";
import TechStackSection from "./pages/sections/Tech";
import Founder from "./pages/sections/Founder";
import TeamSection from "./pages/sections/Team";
import Review from "./pages/sections/Review";
import Values from "./pages/sections/core values";
import Contact from "./pages/sections/Contact";
import MissionSection from "./pages/sections/Mission";
import Footer from "./pages/sections/Footer";


import { ParticlesBackground } from "./pages/components/Background";
import { CircleBackground } from "./pages/components/Common";

const CyberNexus = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);


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


  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesInit = React.useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

      <ParticlesBackground particlesInit={particlesInit} />


      <CircleBackground size={400} top="-100px" left="-100px" opacity={0.15} />
      <CircleBackground size={500} top="30%" right="-200px" opacity={0.1} />
      <CircleBackground size={300} top="70%" left="10%" opacity={0.12} />


      <Header activeSection={activeSection} headerOpacity={headerOpacity} logo={logo} />

      <div className="relative z-10">
        <HeroSection logo={logo} />
        <MissionSection />
        <WhyJoinUsSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <Founder />
        <TeamSection />
        <Review />
        <Values />
        <Contact />
        <Footer logo={logo} />
      </div>
    </div>
  );
};

export default CyberNexus;