"use client";

import { useEffect, useState } from "react";
import SeeMoreButton from "./SeeMoreButton";
import Details from "./Details";

const ProjectSummary = ({ name, summary }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="md:w-5/12 w-[80vw] top-[25vh] md:top-0 relative">
            <div
                className={`text-[6vw] md:text-[3vw] text-gray-800 text-right relative transition-transform duration-700 
                ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
            >
{name.toUpperCase()}

                <div className="text-[13vw] md:text-[5.5vw] cursive text-[#89c0ff] opacity-20 absolute top-[-4vw] left-5">
                    {name}
                </div>
            </div>

            <div className="grid mt-[5vh] md:mt-[3vw] gap-[4vw]">
                <div
                    className={`transition-transform duration-700 
                    ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} 
                    ml-auto thin text-[3vw] md:text-[1.6vw] lg:text-[1.2vw] md:w-10/12 text-right`}
                >
                    {summary}                
                    </div>

                <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
                    {visible && <Details name={name} />
                }
                </div>

                <div
                    className={`transition-transform duration-700 
                    ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <SeeMoreButton />
                </div>
            </div>
        </div>
    );
};

export default ProjectSummary;
