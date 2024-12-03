"use client"

import React, { useEffect, useRef, useState } from "react";
import GradientCircle2 from "@/components/GradientCircle2";
import GradientCircle3 from "@/components/GradientCircle3";
import ResizableInput from "@/components/ResizableInput";

const Contact_And_Footer = () => {


    const [textInView, setTextInView] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTextInView(true);
                }
            },
            { threshold: 0.1 } // Trigger when 50% of the text is visible
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div ref={textRef}
            className={`h-[85vh]  ${textInView ? "animate-fade-up opacity-100" : "opacity-0"}  overflow-hidden relative`}>

    <div className="font-extrabold text-[#7786e1] text-center">CONTACT</div>
    <div className="mt-4 font-extrabold text-[1.8vw] text-center">Get In Touch With Me</div>

    <div className="mt-8 mb-[5vw] w-1/2 mx-auto">
      <div className="flex z-30  flex-wrap justify-between gap-4">
        {/* Name Field */}
        <div className="w-full sm:w-[48%]">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
          />
        </div>

        {/* Email Field */}
        <div className="w-full sm:w-[48%]">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
          />
        </div>
      </div>

      {/* Message Field */}
      <ResizableInput />

      {/* Submit Button */}
      <div className="mt-6 z-30 text-center">
        <button className="px-8 py-3 rounded-full bg-[#7786e1] transition-all ease-in-out duration-300 text-white font-bold hover:bg-[#5c57c4] focus:outline-none focus:ring-4 focus:ring-[#939cec]">
          Send Message
        </button>
      </div>




      <div className="opacity-70 -z-10"><div className="absolute w-[50vw] h-[80vh] blur-3xl left-[-2vw] rotate-180 rounded-full bottom-[-30vw] z-5 pointer-events-none overflow-visible">
        <GradientCircle2 />
      </div>


        <div className="absolute bg-[#7786e1] w-[50vw] h-[80vh] blur-3xl left-[30vw] rounded-full bottom-[-33vw] z-5 pointer-events-none overflow-hidden">
          .
        </div>

        <div className="absolute w-[50vw] h-[80vh] blur-3xl right-[-10vw] rounded-full bottom-[-30vw] z-5 pointer-events-none overflow-hidden">
          <GradientCircle3 /></div>

      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-extrabold text-white text-[1vw]">
        Developed and designed with love {" "} ✨ {" "}  <span className="fun3"> Miriam Romaniuc</span>
      </div>



    </div>
  </div>
  )
}

export default Contact_And_Footer