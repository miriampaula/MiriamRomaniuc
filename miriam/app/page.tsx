"use client";

import { BiMessageRounded } from "react-icons/bi";
import ProjectsSection from "@/components/ProjectsSection";
import BigButton from "@/components/BigButton";
import Contact_And_Footer from "@/components/Contact_And_Footer";
import MainSection from "@/components/MainSection";

export default function Home() {
  function sendMessage() {
    // Replace with your recipient email, subject, and body
    const email = "miriamromaniuc@gmail.com"; // Recipient email address
    const subject = "Let's Talk"; // Email subject
    const body = "Hi there,\n\nI would like to discuss a project with you!"; // Email body
    
    // Construct the mailto URL
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mail app
    window.location.href = mailto;
  }

  return (
    <div className="relative mt-[3vw] parent-container">
      <div className="absolute animate-fade-down top-5 right-20">
        <BigButton message="Let's Talk" icon={BiMessageRounded} onClick={sendMessage} />
      </div>
      <MainSection />
      <ProjectsSection />
      <Contact_And_Footer />
    </div>
  );
}
