import Image from "next/image";
import { FaRecycle, FaChartBar, FaChartLine } from "react-icons/fa";
import { IoArrowUpOutline } from "react-icons/io5";
import { HiOutlineTruck } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import GradientCircle2 from '@/components/GradientCircle2';
import GradientCircle3 from '@/components/GradientCircle3';
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandAzure } from "react-icons/tb";
import BigButton from "@/components/BigButton";
import { FaLocationDot } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";

const ProjectPage = async ({ params }) => {
    const { name } = await params;


    const keywords = [
        { icon: <FaRecycle />, word: "Recycling" },
        { icon: <BsGlobe />, word: "Sustainability" },
        { icon: <FaRegLightbulb />, word: "Innovation" },
        { icon: <FaChartBar />, word: "Data-Driven" },
        { icon: <HiOutlineTruck />, word: "Logistics" },
        { icon: <FaChartLine />, word: "Efficiency" },
    ];

    return (

        <div className="overflow-hidden p-[3vw] w-full h-full">

            <div className="w-11/12 mx-auto flex mt-[6vw] relative ">
                {/* Left Side */}
                <div className="w-1/2 relative">
                    {/* Keywords Section */}
                    <div className="relative overflow-hidden w-[90%] h-[50px] mt-2 bg-[#fafbff]">
                        {/* Rolling Keywords */}
                        <div className="keywords-container">
                            {keywords.map((keyword, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center text-[1.4vw] thin text-gray-700"
                                >
                                    <span className="ml-[4vw] text-[1vw]">{keyword.icon}</span>
                                    <span className="ml-[1vw] ">{keyword.word}</span>
                                </div>
                            ))}
                            {keywords.map((keyword, index) => (
                                <div
                                    key={`duplicate-${index}`}
                                    className="inline-flex items-center text-[1.4vw] thin text-gray-700"
                                >
                                    <span className="ml-[4vw] text-[1vw]">{keyword.icon}</span>
                                    <span className="ml-[1vw] ">{keyword.word}</span>
                                </div>
                            ))}
                        </div>
                        {/* Blur Overlay */}
                        <div className="blur-overlay pointer-events-none"></div>
                    </div>

                    {/* Image */}
                    <div className="absolute w-full top-24 right-0">
                        <Image
                            src={"/imgs/proj1.jpg"}
                            className="rounded-3xl w-[90%]"
                            alt="proj"
                            width={300}
                            height={100}
                        />
                    </div>
                </div>

                {/* Spacer */}
                <div className="w-1/12"></div>

                {/* Right Side */}
                <div className="w-5/12 relative">
                    <div className="text-[3vw] text-gray-800 text-right relative">
                        ROUTE OPTIMIZER


                        <div className="text-[5.5vw] cursive text-[#89c0ff] opacity-20 absolute top-[-4vw] left-5">
                            {name}
                        </div>

                    </div>
                    <div className="grid mt-[3vw] gap-[4vw]">
                        <div className="ml-auto thin text-[1.2vw] w-10/12 text-right">
                            An app designed to
                            <span className="font-semibold">{" "}optimize waste collection routes{" "}
                            </span> by using real-time data and
                            advanced algorithms to cut costs, reduce pollution, and ensure timely
                            pickups. A subscription model enables waste management companies to operate
                            more efficiently while enhancing service for

                            <span className="font-semibold">            {" "}                municipalities and residents.{" "}
                            </span>
                        </div>

                        <div className="flex justify-between text-[1vw]">
                            <div className="w-1/3 place-items-center">
                                <div className="">ROLE</div>
                                <div className="font-extrabold rounded-full mt-2 w-10/12 text-center mx-auto px-4 py-2 flex justify-evenly place-items-center gap-2 bg-[#9eaffc]">
                                    UI Dev
                                </div>
                            </div>
                            <div className="w-1/3 place-items-center">
                                <div className="">CONTEXT</div>
                                <div className="font-extrabold rounded-full mt-2 w-10/12 text-center mx-auto px-4 py-2 flex justify-evenly place-items-center gap-2 bg-[#9eaffc]">
                                    Hackathon
                                </div>
                            </div>
                            <div className="w-1/3 place-items-center">
                                <div className="">YEAR</div>
                                <div className="font-extrabold rounded-full mt-2 w-10/12 text-center mx-auto px-4 py-2 flex justify-evenly place-items-center gap-2 bg-[#9eaffc]">
                                    2023
                                </div>
                            </div>
                        </div>

                        {/* Gradient and Button Container */}
                        <div className="relative w-4/12 mx-auto min-w-[100px] flex items-center justify-center ">
                            <div className="absolute w-[60vw] h-[600px] opacity-30 blur-3xl right-[-40vw] rounded-full top-[-5vw] z-5 pointer-events-none overflow-hidden">
                                <GradientCircle2 />
                            </div>
                            <div className="relative z-30">
                                <BigButton message={"See More"} icon={IoArrowUpOutline} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full relative z-50 mt-[8vw]  ">

                <div className="absolute w-[80vw] border border-black h-[90vh] blur-3xl opacity-40  rounded-full top-1/3 left-[-10vw] pointer-events-none overflow-hidden">
                    <GradientCircle3 />
                </div>

                <div className="flex w-11/12 mx-auto gap-[3vw]">
                    <div className="w-8/12 relative z-30 grid gap-[3vw]">
                        <div className="w-full  p-[5%] bg-white z-30 rounded-3xl flex flex-col items-start">
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
                            <div className="text-[1.2vw] thin  pt-8 w-10/12 text-center self-center flex-1 items-center">
                                This project is the result of
                                <span className="text-[#5775fa]  font-semibold"> 3 intense contest days </span>
                                where we got the challenge to create
                                from concept to functional app a solution to one of the 30 challenges given to us, using,
                                obviously, AI.
                            </div>
                        </div>

                        <div className="w-full  p-10 bg-white    rounded-3xl">
                            <div className="text-[2vw] font-extrabold text-black " >How</div>
                            <div className="text-center  w-10/12  mx-auto pt-[3vw] thin text-[1.2vw]">The interface was built quickly using TailwindCSS, React, and NextJS, focusing on simplicity and usability.

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
                            <div className="w-full text-center font-extrabold mt-8 text-[1vw] text-[#9fd197]">~ Stack Used ~ </div>


                        </div>
                    </div>
                    <div className="w-4/12  p-10 bg-white z-30 rounded-3xl">
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
                                        {" "}responsive user interface,{" "}
                                    </span>
                                    integrating seamless interactions and ensuring performance optimization.
                                </div>
                            </div>

                            {/* UX/UI Design */}
                            <div>
                                <div className="inline-flex text-[1.5vw] font-bold text-gray-800 gap-[1vw] place-items-center justify-evenly mt-4">
                                    <MdDesignServices size={35} />
                                    {" "}  UX/UI Design{" "}
                                </div>
                                <div className="text-[1vw] thin">
                                    Created  <span className="font-extrabold text-[#88b9ff]">
                                        user-centric designs
                                    </span> with intuitive navigation, aligning the project with modern UI/UX best practices.
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
                                        {" "}     visual identity     {" "}                               </span>
                                    , including branding elements, and presented the project as a viable product to stakeholders.
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

                                    <span className="font-extrabold text-[#88b9ff]">
                                        {" "}narrative{" "}
                                    </span>
                                    highlighting the project's problem-solving capabilities, value proposition, and real-world applications.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProjectPage;
