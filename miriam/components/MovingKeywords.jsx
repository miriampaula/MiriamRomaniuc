"use client";

import { useState, useEffect } from "react";

const MovingKeywords = ({ keywords = [] }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); // Trigger fade-in
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mt-[8vh] mb-[5vw] md:mb-0 overflow-hidden max-w-[52%] md:max-w-[90%] md:h-[50px] md:mt-10 bg-[#fafcff]">
      <div className="keywords-container flex">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={`inline-flex pl-2 md:pl-0 items-center text-[3vw] md:text-[1.2vw] text-gray-900 transition-all duration-1000 delay-${index * 200} ${
              visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <span className="ml-[4vw] text-[3.5vw] md:text-[1vw]">{keyword.icon}</span>
            <span className="ml-[1vw]">{keyword.word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingKeywords;
