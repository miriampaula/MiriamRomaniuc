"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const ProjectImage = ({ imgSrc }) => {

  useEffect(() => {
    // Cleanup the overlay after the page loads
    const overlay = document.querySelector(".overlay-image");
    if (overlay) {
      overlay.style.transition = "opacity 0.3s ease-in-out";
      overlay.style.opacity = "0"; // Fade out the overlay

      // Remove the overlay after the fade-out
      setTimeout(() => {
        overlay.parentNode.removeChild(overlay);
      }, 300); // Match the fade-out duration
    }
  }, []);

  return (
    <div className="absolute  w-full top-24 right-0">
      <Image
        src={"/imgs/proj1.jpg"}
        className="rounded-3xl  w-[90%]"
        alt="proj"
        width={300}
        height={100}
      />
    </div>
  );
};

export default ProjectImage;



{/* 
<div ref={imageContainerRef} className="absolute image-container w-full top-24 right-0">
<Image
    src={"/imgs/proj1.jpg"}
    className=" project-page-image rounded-3xl w-[90%]"
    alt="proj"
    width={300}
    height={100}
/>
</div>

*/}
