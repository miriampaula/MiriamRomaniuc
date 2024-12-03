"use client";

import { useState, useEffect, useRef } from "react";
import GradientCircle3 from '@/components/GradientCircle3';
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandAzure } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";


const ProjectSections = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting); // Toggle inView when the section enters/exits the viewport
            },
            { threshold: 0.1 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            id="scroll-target"
            ref={sectionRef}
            className="w-full relative z-50 mb-[4vw] mt-[8vw]"
        >
            <div className="absolute w-[80vw] border border-black h-[90vh] blur-3xl opacity-40 rounded-full top-1/3 left-[-10vw] pointer-events-none overflow-hidden">
                <GradientCircle3 />
            </div>

            <div className="flex w-11/12 mx-auto gap-[3vw]">
                {/* Left Side */}
                <div
                    className={`w-8/12 relative z-30 grid gap-[3vw] transition-transform duration-700 ease-in-out ${
                        inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
                >
                    <div className="w-full p-[5%] bg-white z-30 rounded-3xl flex flex-col items-start">
                        {/* Header */}
                        <div>
                            <div className="text-[2vw] font-extrabold text-black">When</div>
                        </div>

                        {/* Inline Content */}
                        <div className="inline-flex relative text-[2vw] font-extrabold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                            <FaLocationDot size={30} />
                            Cluj Hackaton
                            <div className="absolute text-[1vw] font-extrabold text-[#5775fa] top-[2.3vw] right-0">
                                MAY 2024
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-[1.2vw] thin pt-8 w-10/12 text-center self-center flex-1 items-center">
                            This project is the result of
                            <span className="text-[#5775fa] font-semibold"> 3 intense contest days </span>
                            where we got the challenge to create from concept to functional app a
                            solution to one of the 30 challenges given to us, using, obviously, AI.
                        </div>
                    </div>

                    <div className="w-full p-10 bg-white rounded-3xl">
                        <div className="text-[2vw] font-extrabold text-black">How</div>
                        <div className="text-center w-10/12 mx-auto pt-[3vw] thin text-[1.2vw]">
                            The interface was built quickly using TailwindCSS, React, and NextJS,
                            focusing on simplicity and usability.
                        </div>
                        <div className="pt-[1vw] my-[3vw] text-gray-700 fun flex justify-evenly">
                            <div className="grid content-center text-center gap-3">
                                <RiTailwindCssFill className="mx-auto" size={50} />
                                TailwindCSS
                            </div>
                            <div className="grid content-center text-center gap-3">
                                <GrReactjs className="mx-auto" size={50} />
                                React
                            </div>
                            <div className="grid content-center text-center gap-3">
                                <RiNextjsLine className="mx-auto" size={50} />
                                NextJS
                            </div>
                            <div className="grid content-center text-center gap-3">
                                <TbBrandAzure className="mx-auto" size={50} />
                                Azure API
                            </div>
                        </div>
                        <div className="w-full text-center font-extrabold mt-8 text-[1vw] text-[#9fd197]">
                            ~ Stack Used ~
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className={`w-4/12 p-10 bg-white z-30 rounded-3xl transition-transform  duration-700 ease-in-out ${
                        inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                >
                    <div className="text-[2vw] font-extrabold text-black">What</div>
                    <div className="grid my-[2vw] h-full justify-evenly text-center pb-10">
                        {/* Frontend Development */}
                        <div>
                            <div className="inline-flex text-[1.5vw] font-bold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                                <FaCode size={35} />
                                Frontend Development
                            </div>
                            <div className="text-[1vw] thin">
                                Developed a dynamic and
                                <span className="font-extrabold text-[#88b9ff]">
                                    {" "}
                                    responsive user interface,{" "}
                                </span>
                                integrating seamless interactions and ensuring performance optimization.
                            </div>
                        </div>

                        {/* UX/UI Design */}
                        <div>
                            <div className="inline-flex text-[1.5vw] font-bold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                                <MdDesignServices size={35} />
                                {" "} UX/UI Design{" "}
                            </div>
                            <div className="text-[1vw] thin">
                                Created
                                <span className="font-extrabold text-[#88b9ff]"> user-centric designs </span>
                                with intuitive navigation, aligning the project with modern UI/UX best practices.
                            </div>
                        </div>

                        {/* Branding & Presentation */}
                        <div>
                            <div className="inline-flex text-[1.5vw] font-bold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                                <MdOutlineBrandingWatermark size={35} />
                                Branding & Presentation
                            </div>
                            <div className="text-[1vw] thin">
                                Defined the
                                <span className="font-extrabold text-[#88b9ff]">
                                    {" "} visual identity {" "}
                                </span>
                                , including branding elements, and presented the project as a viable
                                product to stakeholders.
                            </div>
                        </div>

                        {/* Product Storytelling */}
                        <div>
                            <div className="inline-flex text-[1.5vw] font-bold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                                <IoMdPaper size={35} />
                                Product Storytelling
                            </div>
                            <div className="text-[1vw] thin">
                                Crafted a compelling
                                <span className="font-extrabold text-[#88b9ff]"> narrative </span>
                                highlighting the project's problem-solving capabilities, value proposition,
                                and real-world applications.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSections;
