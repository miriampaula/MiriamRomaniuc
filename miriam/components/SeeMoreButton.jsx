"use client";

import { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import BigButton from "@/components/BigButton";

const ClientComponent = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleScroll = () => {
        setIsClicked(true); // Set clicked state
        setTimeout(() => setIsClicked(false), 300); // Reset after 300ms

        const target = document.getElementById("scroll-target");
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetPosition - 100,
                behavior: "smooth",
            });

            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative lg:mt-0 mt-[4vh] lg:w-4/12 md:hidden lg:block mx-auto min-w-[100px] flex items-center justify-center">
            <div className="relative z-30">
                <BigButton 
                    message={"See More"} 
                    icon={IoArrowUpOutline} 
                    onClick={handleScroll} 
                    className={`${isClicked ? "scale-90 opacity-70" : "scale-100 opacity-100"} transition-all duration-300`}
                />
            </div>
        </div>
    );
};

export default ClientComponent;
