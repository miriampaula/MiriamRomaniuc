"use client";

import { useState, useEffect } from "react";
import { FaRecycle, FaChartBar, FaChartLine } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";

const MovingKeywords = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); // Trigger fade-in
    return () => clearTimeout(timeout);
  }, []);

  const keywords = [
    { icon: <FaRecycle />, word: "Recycling" },
    { icon: <BsGlobe />, word: "Sustainability" },
    { icon: <FaRegLightbulb />, word: "Innovation" },
    { icon: <FaChartBar />, word: "Data-Driven" },
    { icon: <HiOutlineTruck />, word: "Logistics" },
    { icon: <FaChartLine />, word: "Efficiency" },
  ];

  return (
    <div className="relative overflow-hidden w-[90%] h-[50px] mt-2 bg-[#fafbff]">
      <div className="keywords-container flex">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={`inline-flex items-center text-[1.2vw] text-gray-900 transition-all duration-1000 delay-${index * 200} ${
              visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <span className="ml-[4vw] text-[1vw]">{keyword.icon}</span>
            <span className="ml-[1vw] ">{keyword.word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingKeywords;
