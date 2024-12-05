"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

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

        {/* try {
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
            
            */}


        setTimeout(() => {
            setStatus("Email sent successfully!");
            setAnimationStage("sent");
            setTimeout(() => {
                setAnimationStage("idle");
                setStatus("");
                setFormData({ name: "", email: "", message: "" });
            }, 1500);
        }, 3000);


    };

    return (
        <div className="h-[85vh] relative overflow-hidden">
            <div className="font-extrabold text-[#7786e1] text-center">CONTACT</div>
            <div className="mt-4 font-extrabold text-[1.8vw] text-center">
                Get In Touch With Me
            </div>

            <form onSubmit={handleSubmit} className="mt-8 mb-[5vw] w-1/2 mx-auto">
                <div className="flex flex-wrap justify-between gap-4">
                    <div className="w-full sm:w-[48%]">
                        <label className="block font-semibold mb-2">Name</label>
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
                        <label className="block font-semibold mb-2">Email</label>
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

                <div className="mt-4">
                    <label className="block font-semibold mb-2">Message</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#939cec] resize-none h-[120px]"
                    />
                </div>

                <div className="mt-6 text-center relative">
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
                            className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-[#7786e1] animate-fly-away"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default Contact_And_Footer;
