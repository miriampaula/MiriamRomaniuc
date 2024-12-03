import React from 'react';
import dynamic from 'next/dynamic';

const ParallaxSection = dynamic(() => import('@/components/ParallaxSection'), {
  ssr: false,
});

const MainSection = () => {
  return (
    <div className="w-full md:w-9/12 h-[80vh] pt-[5vw] mx-auto md:flex relative">
      {/* Left content area */}
      <div className="w-9/12 z-20">
        {/* Hi, I'm Miriam */}
        <div className="text-[3.8vw] fade-in-down">
          <div>Hi,</div>
          <div className="flex gap-4">
            <div>I'm</div>
            <div className="font-bold">Miriam</div>
          </div>
        </div>

        {/* Circle Buttons */}
        <div className="flex text-[0.7vw] gap-5 mt-5">
          {['Web Developer', 'Front-End Enthusiast', 'Full-Stack Capabilities'].map((text, index) => (
            <div
              key={index}
              className={`rounded-full bg-white/30 hover:font-extrabold hover:bg-white hover:border-purple-600/50 hover:px-7 transition-all ease-in-out duration-500 px-5 py-2 border border-black fade-in-left`}
              style={{ animationDelay: `${0.3 + index * 0.3}s` }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div
          className="mt-8 pr-24 text-[1vw] fade-in-down"
          style={{ animationDelay: '1.5s' }}
        >
          I bring designs to life, crafting seamless user experiences with a passion for making the web beautiful, inside and out.
        </div>
      </div>

      <ParallaxSection />
    </div>
  );
};

export default MainSection;
