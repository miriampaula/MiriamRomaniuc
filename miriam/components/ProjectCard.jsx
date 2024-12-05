"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const ProjectCard = ({ title, stack, pic, description, link, animationDelay = 0 }) => {
  const router = useRouter();
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true when the card is visible
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the card is visible
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
  
    const card = cardRef.current;
    const image = card.querySelector(".project-image");
    const imageRect = image.getBoundingClientRect();
  
    // Create overlay image
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
  
    // Add the fade-out class to the parent container
    const parentContainer = document.querySelector(".parent-container"); // Replace with your main container class
    if (parentContainer) {
      parentContainer.classList.add("animate-fade-out");
    }
  
    // Animate the overlay image to the final position
    setTimeout(() => {
      overlay.style.top = `calc(9vw + 96px)`; // 9vw + 50px + 26px
      overlay.style.left = `calc(3vw + (0.5/12 * 94vw))`; // Position the right side at the center
      overlay.style.width = "38.77%"; // Maintain the correct width
      overlay.style.height = "auto"; // Maintain aspect ratio
    }, 0);
  
    // Navigate to the destination page after the animation
    setTimeout(() => {
      router.push(link);
    }, 500);
  };
  
  
  

  return (
    <div
      ref={cardRef}
      className={`group project-card mx-auto p-8 grid w-[33vw] cursor-pointer hover:bg-white/40 bg-white shadow-md rounded-3xl relative transition-all duration-500 ease-in-out hover:shadow-lg hover:pt-14 ${inView ? "animate-fade-left" : "opacity-0"
        }`}
      onClick={handleNavigation}
      style={{ animationDelay: `${animationDelay}s` }} // Apply animation delay
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
      <div className="pt-[2vw] text-[1.5vw]">
        <div className="font-bold">{title}</div>
        <div className="flex gap-3 my-3 font-bold text-[1vw]">
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center gap-2 bg-[#d2dbfb]">
            <RiNextjsLine /> NextJS
          </div>
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center gap-2 bg-[#d2dbfb]">
            <FaReact /> React
          </div>
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center gap-2 bg-[#d2dbfb]">
            <TbBrandAzure /> AzureAPI
          </div>
        </div>
        <div className="text-[0.9vw] pr-4">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
