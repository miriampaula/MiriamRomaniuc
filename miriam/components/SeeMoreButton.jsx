"use client";

import { IoArrowUpOutline } from "react-icons/io5";
import BigButton from "@/components/BigButton";

const ClientComponent = () => {
    const handleScroll = () => {
        const target = document.getElementById("scroll-target");
        if (target) {
            const targetPosition = target.offsetTop; // Get the position of the target element
            window.scrollTo({
                top: targetPosition - 50, // Scroll to 50px less
                behavior: "smooth", // Smooth scrolling
            });
        }
    };
    

    return (
        <div className="relative w-4/12 mx-auto min-w-[100px] flex items-center justify-center">
            <div className="relative z-30">
                <BigButton message={"See More"} icon={IoArrowUpOutline} onClick={handleScroll} />
            </div>
        </div>
    );
};

export default ClientComponent;
