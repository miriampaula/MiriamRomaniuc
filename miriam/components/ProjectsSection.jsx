"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

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
      { threshold: 0.5 } // Trigger when 50% of the text is visible
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

  return (
    <div className="">
      <div className="h-[7vw]  rounded-t-3xl bg-gradient-to-b from-transparent to-[#e2e7fd]/30"></div>
      <div className="py-[3vw] bg-[#e2e7fd]/30">
        {/* Text Above the ProjectCards */}
        <div
          ref={textRef}
          className={`grid other-elements gap-4 text-center transition-all duration-1000 ease-in-out ${textInView ? "animate-fade-inward opacity-100" : "opacity-0"
            }`}
        >
          <div className="font-extrabold text-[#7786e1] text-center">PORTFOLIO</div>
          <div className="font-extrabold text-[1.8vw] text-center">Latest Projects</div>
          <div className="font-bold text-[1vw] w-5/12 mx-auto">
            Get a glimpse into some of my recent projects, showcasing a range of challenges and the solutions developed to address them.
          </div>
        </div>

        <div className="mt-12  project-cards grid grid-cols-2 gap-10 justify-center w-9/12 mx-auto items-start">
          <ProjectCard
            title={"Route Optimizer"}
            stack={""}
            pic={"/imgs/proj1.jpg"}
            description={
              "An app that optimizes waste collection, reducing costs, pollution, and ensuring efficient waste management."
            }
            link={"/project/RouteOptimizer"}
            animationDelay={0.2} // Stagger effect
          />
          <ProjectCard
            title={"Fake News Detector"}
            stack={""}
            pic={"/imgs/proj2.png"}
            description={
              "A tool to verify online content quickly, using a browser extension and interface to analyze and provide instant feedback."
            }
            link={""}
            animationDelay={0.6}
          />
          <ProjectCard
            title={"Reading Assistant"}
            stack={""}
            pic={"/imgs/proj3.png"}
            description={
              "An app that learns from your favorite books, answering questions about the plot, structure, or anything else you need."
            }
            link={""}
            animationDelay={0.2}
          />

          <ProjectCard
            title={"Fake News Detector"}
            stack={""}
            pic={"/imgs/proj2.png"}
            description={
              "A tool to verify online content quickly, using a browser extension and interface to analyze and provide instant feedback."
            }
            link={""}
            animationDelay={0.6}
          />

        </div>
      </div>

      <div className="h-[7vw] bg-gradient-to-t rounded-b-3xl from-transparent to-[#e2e7fd]/30"></div>
    </div>
  );
};

export default ProjectsSection;
