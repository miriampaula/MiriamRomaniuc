import { useState } from "react";

export default function BigButton({ message, icon: Icon, onClick }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        if (onClick) onClick();
        // Reset the clicked state after the animation duration
        setTimeout(() => setIsClicked(false), 500); // Match duration with CSS animation
    };

    return (
        <div
            onClick={handleClick} // Attach the custom handleClick
            className={`flex text-[1vw] z-30 px-5 gap-3 border hover:border-transparent border-gray-500 transition-all ease-in-out duration-500 py-2 hover:px-8 hover:cursor-pointer mx-auto bg-white hover:bg-white/90 rounded-full place-items-center spinningBorder ${
                isClicked ? "animate-click" : ""
            }`}
        >
            {/* Dynamically render the passed icon */}
            {Icon && <Icon color="black" />}
            <span>{message}</span>
        </div>
    );
}
