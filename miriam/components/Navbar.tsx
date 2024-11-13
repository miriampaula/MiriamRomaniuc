"use client"; // Ensure this component can access the `useEffect` hook

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // Adjust scroll distance as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out transform z-20 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
    >
      <div className="container flex justify-evenly  mx-auto p-4 bg-white shadow-lg shadow-gray-100">

        <div>About</div>      
        <div>Portofolio</div>      
        <div>Get in Touch</div>      
        </div>
    </nav>
  );
}
