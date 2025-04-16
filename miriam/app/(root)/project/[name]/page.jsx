"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRecycle, FaChartBar, FaChartLine } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiArtificialHive } from "react-icons/gi";
import { FaCheckDouble } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbSchool } from "react-icons/tb";
import BigButton from "@/components/BigButton";
import DescriptionSections from "@/components/DescriptionSections";
import ProjectImage from "@/components/ProjectImage";
import MovingKeywords from "@/components/MovingKeywords";
import ProjectSummary from "@/components/ProjectSummary";
import { LiaBookSolid } from "react-icons/lia";
import { SiFuturelearn } from "react-icons/si";
import { SiKnowledgebase } from "react-icons/si";
import { FaCalculator } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

// Define project data with keywords and icons
const projectData = {
    "routeoptimizer": {
        title: "Route Optimizer",
        summary: "An app designed to optimize waste collection routes by using real-time data and advanced amdorithms to cut costs, reduce pollution, and ensure timely pickups. A subscription model enables waste management companies to operate more efficiently while enhancing service for municipalities and residents.",
        keywords: [
            { icon: <FaRecycle />, word: "Recycling" },
            { icon: <BsGlobe />, word: "Sustainability" },
            { icon: <FaRegLightbulb />, word: "Innovation" },
            { icon: <FaChartBar />, word: "Data-Driven" },
            { icon: <HiOutlineTruck />, word: "Logistics" },
            { icon: <FaChartLine />, word: "Efficiency" },
        ],
    },
    "fakenewsdetector": {
        title: "Fake News Detector",
        summary: "A tool to verify online content quickly, using both a browser extension, available for youtube videos, where it marks the content that is trustworthy, neutral, or fake, and a web extension for highlighting text on any page, and figurinf its trustworthiness, and a dashboard-type app for both users and verifiers.",
        keywords: [
            { icon: <GiArtificialHive />, word: "AI" },
            { icon: <BsGlobe />, word: "Fact-Checking" },
            { icon: <FaCheckDouble />, word: "Machine Learning" },
            { icon: <VscWorkspaceTrusted />, word: "Trust" },
            { icon: <TbAutomaticGearbox />, word: "Automation" },
            { icon: <FaChartLine />, word: "Efficiency" },
        ],
    },
    "readingassistant": {
        title: "Reading Assistant",
        summary: "An app that learns from your favorite books, like fine-tuning a Large Language Model on your personal favourite redading, that is then able to reply questions about the plot of the book, its structure, the characters, themes found in the book, specific lines characters said, etc. ",
        keywords: [
            { icon: <GiArtificialHive />, word: "AI" },
            { icon: <TbSchool />, word: "Education" },
            { icon: <LiaBookSolid />, word: "Books" },
            { icon: <SiFuturelearn />, word: "Learning" },
            { icon: <FaChartLine />, word: "Comprehension" },
            { icon: <SiKnowledgebase />, word: "Knowledge" },
        ],
    },
    "financialtool": {
        title: "Financial Tool",
        summary: "An app that automates the analysis of an extensive financial report, streamlining the calculation and generation of key insights for accountants. This solution reduces the total task completion time from approximately five minutes to just ten seconds, significantly enhancing efficiency and accuracy.",
        keywords: [
            { icon: <FaChartLine />, word: "Analytics" },         // Represents financial analysis
            { icon: <FaCalculator />, word: "Automation" },       // Symbolizes financial calculations
            { icon: <BsBank />, word: "Accounting" },            // Represents banking and finance
            { icon: <HiOutlineClock />, word: "Efficiency" },    // Symbolizes time-saving
            { icon: <FaClipboardCheck />, word: "Compliance" },  // Represents reporting and accuracy
            { icon: <FaMoneyBillTrendUp />, word: "Insights" }   // Represents financial growth and insights
        ]
    }
};

const ProjectPage = () => {
    const router = useRouter();
    const params = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (params?.name) {
            const projectKey = params.name.toLowerCase();
            setProject(projectData[projectKey] || null);
        }
    }, [params]);

    return (
        <div className="overflow-hidden p-[3vw] w-full h-full relative">

            {/* Go Back Button */}
            <div className="absolute top-[8vw] right-[10vw] md:right-auto md:top-[5vw] md:left-[7vw] z-50">
                <BigButton
                    message="Go Back"
                    icon={IoArrowBackOutline}
                    onClick={() => router.push("/")}
                />
            </div>

            <div className="md:w-11/12 w-[80vw] h-[50vh] md:h-[30vh] lg:h-[60vh] mx-auto grid md:flex mt-[10vw] lg:mt-[10.5vh] relative">
                <div className="md:w-1/2 relative">
                    <MovingKeywords keywords={project?.keywords || []} />
                    {project && (
                        <ProjectImage imgSrc={`/imgs/${params.name}.jpg`} />
                    )}                </div>

                <div className="md:w-1/12 md:block hidden"></div>

                {project ? (
                    <ProjectSummary name={project.title} summary={project.summary} />
                ) : (
                    <div className="text-center w-full mt-10 text-transparent">
                        <h2 className="text-2xl font-bold">Project Not Found</h2>
                        <p>Sorry, we couldn't find this project.</p>
                    </div>
                )}
            </div>
            {project && (
                <DescriptionSections name={project.title} />
            )}
        </div>
    );
};

export default ProjectPage;
