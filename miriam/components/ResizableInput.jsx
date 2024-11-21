"use client"
import { useState, useRef, useEffect } from "react";

function ExpandingTextarea() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  // Adjust height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mt-6">
      <label className="block font-semibold mb-2">Message</label>
      <textarea
        ref={textareaRef}
        placeholder="Your Message"
        value={inputValue}
        onChange={handleChange}
        rows={1} // Minimum row count to give it an input-like feel
        className="w-full p-3 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-hidden"
        style={{
          minHeight: "40px", // Adjust to control minimum height
          lineHeight: "1.5rem" // Adjust to match input line height
        }}
      />
    </div>
  );
}

export default ExpandingTextarea;
