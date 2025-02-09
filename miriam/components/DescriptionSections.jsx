"use client";

import { useState, useEffect, useRef } from "react";
import GradientCircle3 from '@/components/GradientCircle3';
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandAzure } from "react-icons/tb";
import { FaLocationDot, FaCode } from "react-icons/fa6";
import { MdDesignServices, MdOutlineBrandingWatermark } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { DiPython } from "react-icons/di"; // Added for Python-related tech
import { SiFramework7 } from "react-icons/si";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";

const ProjectSections = ({ name }) => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current); // ✅ Check before calling unobserve
        };
    }, []);

    // Mapping for tech stack icons
    const techIcons = {
        "TailwindCSS": RiTailwindCssFill,
        "React": GrReactjs,
        "NextJS": RiNextjsLine,
        "Azure API": TbBrandAzure,
        "Python AI Models": DiPython,
        "Python": DiPython,
        "Tkinter Framework": SiFramework7, // Fallback icon for Tkinter Framework
        "PDFPlumber": MdOutlinePictureAsPdf,
    };

    // 🔹 Define dynamic content for different projects
    const projectContent = {
        "Route Optimizer": {
            location: "Cluj Hackathon",
            date: "MAY 2024",
            description: (
                <>
                    This project is the result of
                    <span className="text-[#5775fa] font-semibold"> 3 intense contest days </span>
                    where we tackled the challenge of optimizing waste collection routes, reducing costs, and minimizing pollution.
                </>
            ),
            techStack: ["TailwindCSS", "React", "NextJS", "Azure API"],
            whatSection: [
                {
                    icon: <FaCode size={35} />,
                    title: "Frontend Development",
                    desc: "Developed a <span class='text-[#88b9ff] font-extrabold'>dynamic and responsive user interface</span>, integrating seamless interactions and ensuring performance optimization."
                },
                {
                    icon: <MdDesignServices size={35} />,
                    title: "UX/UI Design",
                    desc: "Created <span class='text-[#88b9ff] font-extrabold'>user-centric designs</span> with intuitive navigation, aligning the project with modern UI/UX best practices."
                },
                {
                    icon: <MdOutlineBrandingWatermark size={35} />,
                    title: "Branding & Presentation",
                    desc: "Defined the <span class='text-[#88b9ff] font-extrabold'>visual identity</span>, including branding elements, and presented the project as a viable product to stakeholders."
                },
                {
                    icon: <IoMdPaper size={35} />, // Removed the erroneous "Services" prop here.
                    title: "Product Storytelling",
                    desc: "Crafted a <span class='text-[#88b9ff] font-extrabold'>compelling narative</span> highlighting the project's problem-solving capabilities, value proposition, and real-world applications."
                }
            ]
        },
        "Fake News Detector": {
            location: "XGEN 2024 Hackathon - Baia Mare",
            date: "APRIL 2024",
            description: (
                <>
                    This app resulted from a 
                    <span className="text-[#5775fa] font-semibold"> 24-hour AI Hackaton </span>
                    organized at the XGEN International Convention at Baia Mare, where we got the challenge of developing a solution for 
                    detecting fake news from idea to functional product in 24, uninterupted hours, spent at the Library of the University Campus.
                </>
            ),
            techStack: ["React", "NextJS", "Python"],
            whatSection: [
                {
                    icon: <MdDesignServices size={35} />,
                    title: "UX/UI Design",
                    desc: "Created <span class='text-[#88b9ff] font-extrabold'>user-centric designs</span> with intuitive navigation, aligning the project with modern UI/UX best practices."
                },
                {
                    icon: <FaCode size={35} />,
                    title: "Frontend Development",
                    desc: "Developed a <span class='text-[#88b9ff] font-extrabold'>dynamic and responsive user interface</span>, integrating seamless interactions and ensuring performance optimization."
                },
                {
                    icon: <MdOutlineBrandingWatermark size={35} />,
                    title: "Branding & Presentation",
                    desc: "Defined the <span class='text-[#88b9ff] font-extrabold'>visual identity</span>, including branding elements, and presented the project as a viable product to stakeholders."
                },
            ]
        },
        "Reading Assistant": {
            location: "XGEN 2023 Hackathon - Baia Mare",
            date: "NOVEMBER 2023",
            description: (
                <>
                    This app resulted from a 
                    <span className="text-[#5775fa] font-semibold"> 24-hour Hackaton </span>
                    organized at the XGEN International Convention at Baia Mare, where we got the challenge of creting a tool that could be 
                    trained on a specific large text to then serve as an assistant in the reading and comprehesnion of it,
                    from idea to functional product in 24, uninterupted hours, spent at the Library of the University Campus.
                </>
            ),
            techStack: ["React", "NextJS", "Python"],
            whatSection: [
                {
                    icon: <MdDesignServices size={35} />,
                    title: "UX/UI Design",
                    desc: "Created <span class='text-[#88b9ff] font-extrabold'>user-centric designs</span> with intuitive navigation, aligning the project with modern UI/UX best practices."
                },
                {
                    icon: <FaCode size={35} />,
                    title: "Frontend Development",
                    desc: "Developed a <span class='text-[#88b9ff] font-extrabold'>dynamic and responsive user interface</span>, integrating seamless interactions and ensuring performance optimization."
                },
                {
                    icon: <MdOutlineBrandingWatermark size={35} />,
                    title: "Branding & Presentation",
                    desc: "Defined the <span class='text-[#88b9ff] font-extrabold'>visual identity</span>, including branding elements, and presented the project as a viable product to stakeholders."
                },
            ]
        },
        "Financial Tool": {
            location: "Contractor",
            date: "JANUARY 2025",
            description: (
                <>
                This desktop app was a <span className="text-[#5775fa] font-semibold">request from a contractor</span>, 
                an accountant who needed to automate a process that took far too much time. Recognizing the need for a more 
                efficient solution, I developed a user-friendly tool that streamlined tedious manual tasks and significantly 
                reduced report generation time. 
                    </>
            ),
            techStack: ["Python", "Tkinter Framework", "PDFPlumber"],
            whatSection: [
                {
                    icon: <MdDesignServices size={35} />,
                    title: "UX/UI Design",
                    desc: "Created <span class='text-[#88b9ff] font-extrabold'>user-centric designs</span> with intuitive navigation, aligning the project with modern UI/UX best practices."
                },
                {
                    icon: <FaCode size={35} />,
                    title: "Frontend Development",
                    desc: "Developed a <span class='text-[#88b9ff] font-extrabold'>dynamic and responsive user interface</span>, integrating seamless interactions and ensuring performance optimization."
                },
                {
                    icon: <FaFileCode size={35} />,
                    title: "Backend Development",
                    desc: "Developed the api that <span class='text-[#88b9ff] font-extrabold'> processed the files and extracted</span> the needed data, aswel as writing the word documents with the desired reports."
                }, {
                    icon: <IoCodeWorking size={35} />,
                    title: "Testing",
                    desc: "Tested the app throughout the whole development process, fixing any errors and <span class='text-[#88b9ff] font-extrabold'> adjusting the app to the new incoming requests</span>."
                },
            ]
        }
    };

    const currentProject = projectContent[name] || {
        location: "Unknown Event",
        date: "Unknown Date",
        description: "No information available.",
        techStack: [],
        whatSection: []
    };

    return (
        <div id="scroll-target" ref={sectionRef} className="w-full relative z-50 md:h-[60vh] lg:h-auto lg:mb-[4vw] mt-[40vh] pt-10 md:mt-0 lg:mt-[5vh]">
            <div className="absolute w-[80vw] border border-black h-[90vh] blur-3xl opacity-40 rounded-full md:top-1/3 left-[-10vw] pointer-events-none overflow-hidden">
                <GradientCircle3 />
            </div>

            <div className="md:flex grid w-[80vw] md:w-[88vw] mx-auto gap-[10vw] md:gap-[3vw]">
                {/* Left Side */}
                <div className={`md:w-8/12 grid gap-[10vw] md:gap-[3vw] transition-transform duration-700 ease-in-out ${inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                    {/* When Section */}
                    <div className="w-full shadow-md md:shadow-0 p-10 bg-white z-30 rounded-3xl flex flex-col items-start">
                        <div className="text-[6vw] md:text-[2vw] font-extrabold text-black">When</div>
                        <div className="inline-flex relative text-[6vw] md:text-[2vw] font-extrabold text-gray-800 gap-[3vw] md:gap-[1vw] place-items-center justify-evenly mt-4">
                            <FaLocationDot size={30} />
                            {currentProject.location}
                            <div className="absolute text-[3vw] md:text-[1vw] font-extrabold text-[#5775fa] top-[7vw] md:top-[2.3vw] right-0">
                                {currentProject.date}
                            </div>
                        </div>
                        <div className="text-[4vw] md:text-[1.2vw] thin pt-8 md:w-10/12 md:mx-auto text-left md:text-center">
                            {currentProject.description}
                        </div>
                    </div>

                    {/* How Section */}
                    <div className="w-full shadow-md md:shadow-0 p-10 bg-white rounded-3xl">
                        <div className="text-[6vw] md:text-[2vw] font-extrabold text-black">How</div>
                        <div className="text-left md:text-center md:w-10/12 mx-auto pt-[3vw] thin text-[4vw] md:text-[1.2vw]">
                            The app was built using the following technologies:
                        </div>
                        <div className="pt-[1vw] mt-[6vw] md:my-[3vw] text-[3vw] md:text-base text-gray-700 flex justify-between md:justify-evenly">
                            {currentProject.techStack.map((tech, index) => {
                                const IconComponent = techIcons[tech];
                                return (
                                    <div key={index} className="grid content-center text-center gap-3">
                                        {IconComponent && (
                                            <>
                                                <div className="hidden mx-auto  md:block">
                                                    <IconComponent size={50} />
                                                </div>
                                                <div className="md:hidden mx-auto block">
                                                    <IconComponent size={40} />
                                                </div>
                                            </>
                                        )}
                                        <div>{tech}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Side - What Section */}
                <div className={`md:w-4/12 shadow-md md:shadow-0 p-10 bg-white z-30 rounded-3xl transition-transform duration-700 ease-in-out ${inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <div className="text-[6vw] md:text-[2vw] font-extrabold text-black">What</div>
                    <div className="grid my-[2vw] h-full justify-evenly text-center pb-10">
                        {currentProject.whatSection.map((feature, index) => (
                            <div key={index} className="grid  place-items-center mt-4">
                                {/* Icon */}
                                <div className="text-[4vw] md:text-[1.5vw] text-gray-800">
                                    {feature.icon}
                                </div>
                                {/* Title */}
                                <div className="text-center text-[4vw] md:text-[1.5vw] font-bold text-gray-800">
                                    {feature.title}
                                </div>
                                {/* Description */}
                                <div
                                    className="text-center text-[3vw] md:text-[1vw] thin mt-2"
                                    dangerouslySetInnerHTML={{ __html: feature.desc }}
                                />
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSections;
