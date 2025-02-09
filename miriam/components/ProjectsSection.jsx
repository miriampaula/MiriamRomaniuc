"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { FaMedapps } from "react-icons/fa";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const ProjectsSection = () => {
  const [textInView, setTextInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Financial Tool",
      stack: [
        { name: "Python", icon: <AiOutlinePython /> },
        { name: "Tkinter", icon: <FaMedapps /> },
        { name: "PdfPlumber", icon: <MdOutlinePictureAsPdf /> },


      ],
      pic: "/imgs/financialtool.jpg",
      description:
"An application that automates a financial report analysis, reducing task completion time from five minutes to ten seconds while enhancing efficiency and accuracy.",
      link: "/project/FinancialTool",
      animationDelay: 0.2,
    },
    {
      title: "Route Optimizer",
      stack: [
        { name: "NextJS", icon: <RiNextjsLine /> },
        { name: "React", icon: <FaReact /> },
        { name: "AzureAPI", icon: <TbBrandAzure /> },
      ],
      pic: "/imgs/routeoptimizer.jpg",
      description:
        "An app that optimizes waste collection, reducing costs, pollution, and ensuring efficient waste management.",
      link: "/project/RouteOptimizer",
      animationDelay: 0.2,
    },
    {
      title: "Fake News Detector",
      stack: [
        { name: "Python", icon: <AiOutlinePython /> },
        { name: "React", icon: <FaReact /> },
        { name: "NextJS", icon: <RiNextjsLine /> },

      ],
      pic: "/imgs/fakefewsdetector.jpg",
      description:
        "A tool to verify online content quickly, featuring both a browser extension and a dashboard-type interface to analyze and provide instant feedback.",
      link: "/project/FakeNewsDetector",
      animationDelay: 0.6,
    },
    {
      title: "Reading Assistant",
      stack: [
        { name: "Python", icon: <AiOutlinePython /> },
        { name: "NextJS", icon: <RiNextjsLine /> },
        { name: "React", icon: <FaReact /> },
      ],
      pic: "/imgs/readingassistant.jpg",
      description:
        "An app that learns from your favorite books, like a fine-tuned LLM, answering questions about the plot, structure, or anything else you need.",
      link: "/project/ReadingAssistant",
      animationDelay: 0.2,
    },
  ];

  return (
    <div id="portfolio-section">

      <div className="md:h-[7vw] h-[15vw] mt-[15vh] md:mt-0 rounded-t-3xl bg-gradient-to-b from-transparent to-[#e2e7fd]/30"></div>

      <div className="py-[3vw] bg-[#e2e7fd]/30">
        <div
          ref={textRef}
          className={`grid other-elements gap-4 text-center transition-all duration-1000 ease-in-out ${textInView ? "animate-fade-inward opacity-100" : "opacity-0"
            }`}
        >
          <div className="font-extrabold text-[6vw] md:text-[3vw] lg:text-base text-[#7786e1]">PORTFOLIO</div>
          <div className="font-extrabold text-[4vw] md:text-[2vw] lg:text-[1.8vw]">Latest Projects</div>
          <div className="font-bold text-[3vw] md:text-[1.5vw] lg:text-[1vw] w-[80vw] md:w-5/12 mx-auto">
            Get a glimpse into some of my recent projects, showcasing a range of challenges and solutions.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 justify-center md:w-[85vw] lg:w-9/12 mx-auto">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
      <div className=" h-[15vw] md:h-[7vw] bg-gradient-to-t rounded-b-3xl from-transparent to-[#e2e7fd]/30"></div>

    </div>
  );
};

export default ProjectsSection;
