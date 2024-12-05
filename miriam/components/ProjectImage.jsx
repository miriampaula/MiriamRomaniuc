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
    <div className="absolute w-full top-24 right-0">
      <Image
        src={imgSrc || "/imgs/proj1.jpg"}
        className="rounded-3xl w-[90%]"
        alt="proj"
        width={300}
        height={100}
      />
    </div>
  );
};

export default ProjectImage;
