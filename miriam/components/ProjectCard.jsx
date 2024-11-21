"use client"

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { TbArrowUpRight } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const ProjectCard = ({ title, stack, pic, description, link }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(link); 
  };

  return (
    <div
      className="group mx-auto p-8  grid w-[33vw] cursor-pointer hover:bg-white/40 bg-white shadow-md rounded-3xl relative transition-all duration-300 ease-in-out hover:shadow-lg hover:pt-14"
      onClick={handleNavigation} 
    >
      <div className="absolute top-6 font-extrabold flex place-items-center gap-2 right-4 opacity-0 group-hover:opacity-100 text-[#7786e1] text-sm  transition-opacity duration-800 ease-in-out">
        See More 
        <TbArrowUpRight />
      </div>

      <Image
        src={pic}
        className="rounded-3xl border-gray-200 border w-[100%] mx-auto"
        alt="proj"
        width={450}
        height={200}
      />

      {/* Project Details */}
      <div className="pt-[2vw] text-[1.5vw]">
        <div className="font-bold">{title}</div>
        <div className="flex gap-3 my-3 font-bold text-[1vw]">
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center  gap-2 bg-[#e4e7ff]"> <RiNextjsLine /> NextJS</div>
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center  gap-2 bg-[#e4e7ff]"> <FaReact /> React</div>
          <div className="rounded-full px-3 py-1 flex justify-evenly  place-items-center  gap-2 bg-[#e4e7ff]"> <TbBrandAzure /> AzureAPI</div>
        </div>
        <div className=" text-[0.9vw]  pr-4">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
