"use client"

import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import ProjectCard from "@/components/ProjectCard";
import ResizableInput from "@/components/ResizableInput";
import BigButton from "@/components/BigButton";
import GradientCircle from "@/components/GradientCircle";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import dynamic from 'next/dynamic';


const ParallaxSection = dynamic(() => import('@/components/ParallaxSection'), {
  ssr: false,
});

export default function Home() {

  return (
    <div className="relative mt-[4vw] ">
      <div className="absolute top-5 right-20">
        <BigButton message="Let's Talk" icon={BiMessageRounded} />
      </div>

      <div className="w-full md:w-9/12   h-[80vh] pt-[6vw] mx-auto md:flex relative">
        {/* Left content area */}
        <div className="w-9/12  z-20 animate-fade-down">
          <div className="text-[3.8vw]">Hi,</div>
          <div className="text-[3.8vw] flex gap-4">
            <div>I'm</div>
            <div className="font-bold">Miriam</div>
          </div>
          <div className="flex text-[0.7vw] gap-5 mt-5">
            <div className="rounded-full bg-white px-5 py-2 border border-black ">
              Web Developer
            </div>
            <div className="rounded-full bg-white px-5 py-2 border border-black ">
              Front-End Enthusiast
            </div>
            <div className="rounded-full bg-white px-5 py-2 border border-black ">
              Full-Stack Capabilities
            </div>
          </div>
          <div className="mt-8 pr-24 text-[1vw]">
            I bring designs to life, crafting seamless user experiences with a passion for making the web beautiful, inside and out.
          </div>
        </div>

        {/* Right content area */}
        <ParallaxSection />
      </div>

      <div className="grid gap-4 text-center">

        <div className="mt-[5vw] font-extrabold text-[#7786e1] text-center">PORTOFOLIO</div>
        <div className="font-extrabold text-[1.8vw] text-center">Latest Projects</div>
        <div className=" font-bold  text-[1vw]  w-5/12 mx-auto">Get a glimpse into some of my recent projects, showcasing a range of challenges and the solutions developed to address them.</div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-10 justify-center w-9/12 mx-auto items-start">
        <ProjectCard
          title={"Route Optimizer"}
          stack={""}
          pic={"/imgs/proj1.jpg"}
          description={"An app that optimizes waste collection using real-time data, reducing costs, pollution, and ensuring timely pickups for efficient waste management."}
          link={"/project/RouteOptimizer"}
        />
        <ProjectCard
          title={"Fake News Detector"}
          stack={""}
          pic={"/imgs/proj2.png"}
          description={"A tool to verify online content quickly, using a browser extension and interface to analyze and provide instant feedback on credibility."}
          link={""}
        />
        <ProjectCard
          title={"Reading Assistant"}
          stack={""}
          pic={"/imgs/proj3.png"}
          description={"An app that learns from your favorite books, answering questions about the plot, structure, or anything else you need."}
          link={""}
        />
      </div>

      <div className="mt-[10vw] font-extrabold text-[#7786e1] text-center">CONTACT</div>
      <div className="mt-4 font-extrabold text-[1.8vw] text-center">Get In Touch With Me</div>

      <div className="mt-8 mb-[5vw] w-1/2 mx-auto">
        <div className="flex flex-wrap justify-between gap-4">
          {/* Name Field */}
          <div className="w-full sm:w-[48%]">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
            />
          </div>

          {/* Email Field */}
          <div className="w-full sm:w-[48%]">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
            />
          </div>
        </div>

        {/* Message Field */}
        <ResizableInput />

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="px-8 py-3 rounded-full bg-[#7786e1] transition-all ease-in-out duration-300 text-white font-bold hover:bg-[#5c57c4] focus:outline-none focus:ring-4 focus:ring-[#939cec]">
            Send Message
          </button>
        </div>
      </div>

    </div>
  );
}
