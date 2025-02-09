"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

const ProjectCard = ({ title, stack, pic, description, link, animationDelay = 0 }) => {
  const router = useRouter();
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleNavigation = (e) => {
    e.preventDefault();
    
    if (window.innerWidth < 1024) {
      router.push(link);
      return;
    }

    const card = cardRef.current;
    const image = card.querySelector(".project-image");
    const imageRect = image.getBoundingClientRect();

    const overlay = image.cloneNode(true);
    overlay.classList.add("overlay-image");
    overlay.style.position = "fixed";
    overlay.style.top = `${imageRect.top}px`;
    overlay.style.left = `${imageRect.left}px`;
    overlay.style.width = `${imageRect.width}px`;
    overlay.style.height = `${imageRect.height}px`;
    overlay.style.transition = "all 1s ease-in-out";
    overlay.style.zIndex = "1000";

    document.body.appendChild(overlay);

    const parentContainer = document.querySelector(".parent-container");
    if (parentContainer) {
      parentContainer.classList.add("animate-fade-out");
    }

    setTimeout(() => {
      overlay.style.top = `calc(9vw + 96px)`;
      overlay.style.left = `calc(3vw + (0.5/12 * 94vw))`;
      overlay.style.width = "38.77%";
      overlay.style.height = "auto";
    }, 0);

    setTimeout(() => {
      router.push(link);
    }, 700);
  };

  return (
    <div
      ref={cardRef}
      className={`group project-card mx-auto p-6 lg:p-8 grid w-[80vw] md:w-[38vw] lg:w-[33vw] cursor-pointer hover:bg-white/40 bg-white shadow-md rounded-3xl relative transition-all duration-500 ease-in-out hover:shadow-md hover:pt-14 ${
        inView ? "animate-fade-left" : "opacity-0"
      }`}
      onClick={handleNavigation}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="absolute top-6 font-extrabold flex place-items-center gap-2 right-4 opacity-0 group-hover:opacity-100 text-[#7786e1] text-sm transition-opacity duration-800 ease-in-out">
        See More
        <TbArrowUpRight />
      </div>

      <Image
        src={pic}
        className="rounded-3xl project-image border-gray-200 border w-[100%] mx-auto"
        alt="proj"
        width={450}
        height={200}
      />

      {/* Project Details */}
      <div className="pt-[2vw] text-[3vw] md:text-[3vw] lg:text-[1.5vw]">
        <div className="font-bold">{title}</div>

        {/* Stack List */}
        <div className="flex gap-3 my-3 font-semibold md:font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw]">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="rounded-full px-2 lg:px-3 py-1 flex justify-evenly place-items-center gap-1 md:gap-2 bg-[#d2dbfb]"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>

        <div className="text-[3vw] md:text-[1.3vw] lg:text-[0.9vw] pr-4">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
