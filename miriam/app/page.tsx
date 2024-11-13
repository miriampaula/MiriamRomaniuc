'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

import ProjectCard from "@/components/ProjectCard";
import ResizableInput from "@/components/ResizableInput";
import ContactButton from "@/components/ContactButton";
import GradientCircle from "@/components/GradientCircle";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative">
      <div className="absolute top-10 right-20">
        <ContactButton />
      </div>

      <div className="w-full md:w-9/12   h-[80vh] pt-[6vw] mx-auto md:flex relative">
        {/* Left content area */}
        <div className="w-9/12  z-20 animate-fade-down"
          style={{ animationDelay: "0.7s" }}
        >
          <div
            className="text-[3.8vw]"
          >
            Hi,
          </div>          <div className="text-[3.8vw] flex gap-4">
            <div>I'm</div>
            <div className="font-bold">Miriam</div>
          </div>
          <div className="flex text-[0.7vw] gap-5 mt-5">
            <div className="rounded-full bg-white/80 px-5 py-2 border border-black ">
              Web Developer
            </div>
            <div className="rounded-full bg-white/80 px-5 py-2 border border-black ">
              Front-End Enthusiast
            </div>
            <div className="rounded-full bg-white/80 px-5 py-2 border border-black ">
              Full-Stack Capabilities
            </div>
          </div>
          <div className="mt-8 text-[1vw]">
            I bring designs to life, crafting seamless user experiences with a passion for making the web beautiful, inside and out.
          </div>
        </div>

        <div className="w-5/12  relative flex justify-center items-center"
          style={{
            transform: `translateY(${-scrollY * 0.5}px)`, // Parallax effect
          }}>
          <div
            className="w-[40vw] opacity-30 blur-3xl overflow-hidden  h-[600px] rounded-full top-0 left-[-200px] absolute"

          >
            <GradientCircle />
          </div>
        </div>



        {/* Image with underline */}
        <div className="absolute top-1/2 left-2/3">
          <Image src={"/imgs/miriam.png"} alt="miriam" width={300} height={300} />
          {/* The underline */}
          <div className="relative ">
            <div
              className="absolute right-0 h-[1px] bg-black"
              style={{
                width: "60vw", // Extends the line from the right edge of the page
              }}
            ></div>
          </div>

          <div className="w-full place-items-center text-gray-700 flex justify-between  pt-10 ">

            <FaGithub size={30} />
            <FaLinkedin size={30} />
            <div className=" w-[10vw]  rounded-full border border-gray-700 text-[1vw] place-items-center justify-evenly  flex gap-3 px-5 py-2  bg-white text-gray-800 font-obld ">
              <MdOutlineFileDownload size={20} />
              <div>
                Resume
              </div>
            </div>

          </div>
        </div>




      </div>


      <div className="mt-[10vw] grid gap-6 text-center">

        <div className="mt-[10vw] font-extrabold text-purple-700 text-center">PORTOFOLIO</div>
        <div className="font-extrabold text-[1.8vw] text-center">Latest Projects</div>
        <div className=" font-bold  text-[1vw]  w-5/12 mx-auto">Get a glimpse into some of my recent projects, showcasing a range of challenges and the solutions developed to address them.</div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-10 justify-center w-10/12 mx-auto">
        <ProjectCard title={"Route Optimizer"} stack={""} pic={"/imgs/proj1.jpg"} description={"An app designed to optimize waste collection by using real-time data and advanced algorithms to cut costs, reduce pollution, and ensure timely pickups. A subscription model enables waste management companies to operate more efficiently while enhancing service for municipalities and residents. "} />
        <ProjectCard title={"Fake News Detector"} stack={""} pic={"/imgs/proj2.png"} description={"This project is a tool designed to combat misinformation by allowing users to verify the authenticity of online content quickly. With a browser extension and a user-friendly interface, the app analyzes text and video content, offering instant feedback on credibility."} />
        <ProjectCard title={"Reading Assistant"} stack={""} pic={"/imgs/proj3.png"} description={"Your ideal reading buddy. An app that can be trained on whatever book you fancy, learn all about it and answer any questions you have, about the plot, the structure of the lecture, or whatever else you need."} />
      </div>

      <div className="mt-[10vw] font-extrabold text-purple-700 text-center">CONTACT</div>
      <div className="mt-4 font-extrabold text-[1.8vw] text-center">Get In Touch With Me</div>

      <div className="mt-8 mb-[5vw] w-1/2 mx-auto">
        <div className="flex flex-wrap justify-between gap-4">
          {/* Name Field */}
          <div className="w-full sm:w-[48%]">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email Field */}
          <div className="w-full sm:w-[48%]">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Message Field */}
        <ResizableInput />

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="px-8 py-3 rounded-full bg-purple-700 text-white font-bold hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300">
            Send Message
          </button>
        </div>
      </div>

    </div>
  );
}
