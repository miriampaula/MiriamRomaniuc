// components/ParallaxSection.js
'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import GradientCircle from '@/components/GradientCircle';
import BigButton from '@/components/BigButton';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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

    return (
        <div>
            <div
                className="w-5/12 relative flex justify-center items-center"
                style={{
                    transform: `translateY(${-scrollY * 0.3}px)`,
                }}
            >
                <div className="w-[40vw] animate-fade-in blur-3xl overflow-hidden h-[600px] rounded-full top-0 left-[-250px] absolute">
                    <GradientCircle />
                </div>
            </div>

            <div
                style={{
                    transform: `translateY(${-scrollY * 0.3}px)`,
                }}
                className="absolute top-1/2 left-3/4"
            >
                <div className="animate-fade-up">
                    <Image src={"/imgs/miriam.png"} alt="miriam" width={250} height={250}  priority/>
                    {/* The underline */}
                    <div className="relative">
                        <div
                            className="absolute right-0 h-[1px] bg-black"
                            style={{
                                width: "60vw",
                            }}
                        ></div>
                    </div>

                    <div className="w-full place-items-center text-gray-700 flex justify-between pt-10">
                        <div className="hover:text-[#7786e1] transition-all ease-in-out duration-300 hover:cursor-pointer">
                            <FaGithub size={30} />
                        </div>
                        <div className="hover:text-[#7786e1] transition-all ease-in-out duration-300 hover:cursor-pointer">
                            <FaLinkedin size={30} />
                        </div>
                        <div className="relative">
                            <BigButton message={"Resume"} icon={MdOutlineFileDownload} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default ParallaxSection;
