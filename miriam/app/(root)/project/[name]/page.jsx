import Image from "next/image";
import { FaRecycle, FaChartBar, FaChartLine } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import ClientComponent from "@/components/SeeMoreButton";
import DescriptionSections from "@/components/DescriptionSections";
import ProjectImage from "@/components/ProjectImage";
import MovingKeywords from "@/components/MovingKeywords";
import ProjectSummary from "@/components/ProjectSummary";

const ProjectPage = async ({ params }) => {
    const { name } = await params;




    return (

        <div className="overflow-hidden p-[3vw] w-full h-full">

            <div className="w-11/12  mx-auto flex mt-[6vw] relative ">
                <div className="w-1/2 relative ">
                    <MovingKeywords />

                    <ProjectImage />

                </div>

                <div className="w-1/12"></div>

                <ProjectSummary name={name} />
            </div>


            <DescriptionSections />
        </div>

    );
};

export default ProjectPage;
