"use client";

import { useEffect, useState } from "react";
import SeeMoreButton from "./SeeMoreButton";
import Details from "./Details";
const ProjectSummary = ({ name }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100); // Slightly delayed fade-in
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`w-5/12 relative`}>
            <div
                className={`text-[3vw] text-gray-800 text-right relative transition-transform duration-700 ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                    }`}
            >                ROUTE OPTIMIZER

                <div className="text-[5.5vw] cursive text-[#89c0ff] opacity-20 absolute top-[-4vw] left-5">
                    {name}
                </div>
            </div>
            <div className={`grid mt-[3vw] gap-[4vw]`}>

                <div className={`  transition-transform duration-700  ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ml-auto thin text-[1.2vw] w-10/12 text-right`}>
                    An app designed to
                    <span className="font-semibold">{" "}optimize waste collection routes{" "}
                    </span> by using real-time data and
                    advanced algorithms to cut costs, reduce pollution, and ensure timely
                    pickups. A subscription model enables waste management companies to operate
                    more efficiently while enhancing service for

                    <span className="font-semibold">            {" "}                municipalities and residents.{" "}
                    </span>
                </div>

                {visible && (
                    <div className="delay-500">
                        <Details />
                    </div>
                )}


                <div
                    className={`transition-transform duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <SeeMoreButton />
                </div>

            </div>
        </div>
    );
};

export default ProjectSummary;
