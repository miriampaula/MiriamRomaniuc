"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import GradientCircle2 from "@/components/GradientCircle2";
import GradientCircle3 from "@/components/GradientCircle3";

const Contact_And_Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [animationStage, setAnimationStage] = useState("idle"); // "idle", "sending", "sent"
    const [showPlane, setShowPlane] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAnimationStage("sending");
        setStatus("Sending...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("Email sent successfully!");
                setAnimationStage("sent");
                setTimeout(() => {
                    setAnimationStage("idle");
                    setStatus("");
                    setFormData({ name: "", email: "", message: "" });
                }, 1500);
            } else {
                setStatus("Failed to send email. Please try again.");
                setAnimationStage("idle");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("An error occurred. Please try again later.");
            setAnimationStage("idle");
        }




        setTimeout(() => {
            setStatus("Email sent successfully!");
            setAnimationStage("sent");
            setTimeout(() => {
                setAnimationStage("idle");
                setStatus("");
                setFormData({ name: "", email: "", message: "" });
            }, 1500);
        }, 4000);


    };

    return (
        <div className="relative md:mt-[10vw] overflow-hidden">
            <div className="md:text-[3vw] lg:text-base text-[6vw] font-extrabold text-[#7786e1] text-center">CONTACT</div>
            <div className="mt-4  font-semibold md:font-extrabold text-[3.5vw] md:text-[1.8vw] text-center">
                Get In Touch With Me
            </div>

            <form onSubmit={handleSubmit} className="mt-8 md:text-base text-[3vw] pb-[10vw] w-[80vw] lg:w-1/2 mx-auto">
                <div className="flex flex-wrap justify-between gap-4">
                    <div className="w-full sm:w-[48%]">
                        <label className="block font-semibold mb-1 ml-1 md:mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
                        />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <label className="block font-semibold mb-1 ml-1 md:mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec]"
                        />
                    </div>
                </div>

                <div className=" mt-4">
                    <label className="block font-semibold mb-1 ml-1 md:mb-2">Message</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec] resize-none h-[120px]"
                    />
                </div>

                <div className="mt-[10vh] md:mt-6 md:text-base text-[4vw] text-center relative">
                    <button
                        type="submit"
                        className={`px-5 py-5 mx-auto flex justify-evenly rounded-full bg-[#7786e1] transition-all ease-in-out duration-1000 text-white font-bold hover:bg-[#5c57c4] hover:px-8 gap-5 place-items-center focus:outline-none focus:ring-4 focus:ring-[#939cec] relative overflow-hidden ${animationStage === 'sent' && 'bg-[#3fd5a3]'} ${animationStage === "sending" ? "opacity-50 animate-shrink-grow" : ""}`}
                        disabled={animationStage === "sending"}
                        onMouseEnter={() => setShowPlane(true)}
                        onMouseLeave={() => setShowPlane(false)}
                    >
                        {animationStage === "idle" && (
                            <>
                                {showPlane && (
                                    <FaPaperPlane size={20} />
                                )}
                                Send Message
                            </>
                        )}
                        {animationStage === "sending" && "Sending..."}
                        {animationStage === "sent" && "Message Sent!"}
                    </button>



                    {animationStage === "sending" && (
                        <FaPaperPlane
                            className="
                         absolute 
                         top-6 left-1/2 
                         transform -translate-x-1/2 -translate-y-1/2 
                         text-2xl text-[#7786e1] 
                        animate-advanced-flight  
                       "
                        />
                    )}
                </div>
            </form>





            <div className="saturate-200 h-[40vw] md:h-[10vw]  sm:saturate-100  -z-10">
                <div className="absolute w-[50vw] bottom-0 h-[20vw] md:h-[8vw] blur-3xl left-[-2vw] rotate-180 rounded-full z-5 pointer-events-none overflow-visible">
                    <GradientCircle2 />
                </div>
                <div className="absolute bg-[#7786e1] bottom-0 w-[50vw] h-[20vw] md:h-[7vw] blur-3xl left-[30vw] rounded-full  z-5 pointer-events-none overflow-hidden">
                    .
                </div>
                <div className="absolute w-[50vw] bottom-0 h-[20vw] md:h-[9vw] blur-3xl  right-[-10vw] rounded-full  z-5 pointer-events-none overflow-hidden">
                    <GradientCircle3 /></div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center px-4 z-30 font-extrabold text-white text-[3vw] md:text-[15px] lg:text-[1vw]">
                <span className="text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
                    Developed and designed with love ✨ <span className="fun3">Miriam Romaniuc</span>
                </span>
            </div>




        </div>
    );
};

export default Contact_And_Footer;
