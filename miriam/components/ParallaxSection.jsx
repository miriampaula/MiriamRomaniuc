import React, { useState, useEffect } from 'react';
import Image from "next/image";
import GradientCircle from '@/components/GradientCircle';
import BigButton from '@/components/BigButton';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs"; // Import arrow icon

const ParallaxSection = React.memo(() => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to scroll smoothly to the Portfolio section
    const scrollToPortfolio = () => {
        document.getElementById("portfolio-section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <div className=''>
            {/* Parallax Image Section */}
            <div
                className="md:w-5/12  w-full relative flex justify-center items-center"
                style={{
                    transform: `translateY(${-scrollY * 0.3}px)`,
                }}
            >
                <div className="md:w-[40vw] saturate-200 md:saturate-150 w-[60vw] animate-fade-in blur-3xl overflow-hidden md:h-[80vh] max-h-[400px] h-[40vh] rounded-full top-[10vh] md:top-[30vh] lg:top-[20vh]  left-[35vw] md:left-[-250px] absolute">
                    <GradientCircle />
                </div>
            </div>

            {/* Image, Social Links, and Resume */}
            <div
                style={{
                    transform: `translateY(${-scrollY * 0.3}px)`,
                }}
                className="absolute top-[52vh] md:top-[30vw] lg:top-[20vw] md:left-3/4"
            >
                <div className="animate-fade-up">
                    {/* Profile Image */}
                    <div className="w-[40vw] ml-[40vw] md:ml-0  h-[20vh] md:w-[18vw] md:h-[36vh] relative">
                        <Image
                            src={"/imgs/miriam.png"}
                            alt="miriam"
                            priority
                            fill
                            className="object-contain object-bottom "
                        />
                    </div>

                    {/* Underline */}
                    <div className="relative">
                        <div className="absolute right-0 h-[1px] bg-black" style={{ width: "60vw" }}></div>
                    </div>

                    {/* Social Links & Resume */}
                    <div className="md:w-full place-items-end md:place-items-center text-gray-700 flex gap-[5vw] md:gap-2 lg:gap-0 justify-end md:justify-evenly lg:justify-between pt-10">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/miriampaula"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2d2d31] transition-all ease-in-out duration-300 hover:cursor-pointer"
                        >
                            <FaGithub size={30} />
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/miriam-romaniuc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#7786e1] transition-all ease-in-out duration-300 hover:cursor-pointer"
                        >
                            <FaLinkedin size={30} />
                        </a>

                        {/* Resume Download Button */}
                        {/* Resume Download Button */}
<a
    href="/Romaniuc_Miriam_CV.pdf"
    download="Romaniuc_Miriam_CV.pdf"
    className="relative"
>
    <BigButton message={"Resume"} icon={MdOutlineFileDownload} />
</a>

                    </div>
                </div>
            </div>

            {/* Bouncing Down Arrow */}
            <div className="absolute bottom-[-15vh] w-full flex justify-center md:hidden animate-bounce">
                <button
                    onClick={scrollToPortfolio}
                    className="text-black hover:text-purple-600 transition duration-300"
                >
                    <BsChevronDown size={30} />
                </button>
            </div>
        </div>
    );
});

export default ParallaxSection;
