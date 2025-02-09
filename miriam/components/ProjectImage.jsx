"use client";

import { useEffect } from "react";
import Image from "next/image";

const ProjectImage = ({ imgSrc }) => {
  useEffect(() => {
    // Cleanup the overlay after the page loads
    const overlay = document.querySelector(".overlay-image");
    if (overlay) {
      overlay.style.transition = "opacity 0.3s ease-in-out";
      overlay.style.opacity = "0"; // Fade out the overlay

      setTimeout(() => {
        // Ensure parentNode and overlay still exist before attempting to remove
        if (overlay?.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 500); // Match the fade-out duration
    }
  }, []);

  return (
    <div className="absolute left-0 md:left-none max-w-[90vw] md:w-full md:top-20 right-0">
      <Image
        src={imgSrc}
        className="rounded-3xl w-[90%]"
        alt="proj"
        width={300}
        height={100}
      />
    </div>
  );
};

export default ProjectImage;
