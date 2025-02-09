import React from 'react';
import dynamic from 'next/dynamic';

const ParallaxSection = dynamic(() => import('@/components/ParallaxSection'), {
  ssr: false,
});

const MainSection = () => {
  return (
    <div className="w-[90vw]  md:w-9/12 h-[80vh] md:h-[70vh]  lg:h-[80vh] tablet-special-height pt-[5vw] mx-auto md:flex relative">
      {/* Left content area */}
      <div className="w-[80vw] md:mx-0 mx-auto mt-[10vh] md:mt-[6vh] md:w-9/12 z-20">
        {/* Hi, I'm Miriam */}
        <div className=" text-[10vw] md:text-[3.8vw]  fade-in-down">
          <div>Hi,</div>
          <div className="flex gap-4">
            <div>I'm</div>
            <div className="font-bold">Miriam</div>
          </div>
        </div>

        {/* Circle Buttons */}
        <div className="flex flex-wrap justify-start text-[2vw] md:text-[1.5vw]  lg:text-[0.7vw] gap-3  mt-2 md:mt-5">
          {['Web Developer', 'Front-End Enthusiast', 'Full-Stack Capabilities'].map((text, index) => (
            <div
              key={index}
              className="rounded-full hover:font-extrabold bg-white hover:border-purple-600/50 md:hover:px-7 transition-all ease-in-out duration-500 px-2  py-1 md:px-3 lg:px-5 md:py-2 lg:py-3  border border-black fade-in-left whitespace-nowrap"
              style={{ animationDelay: `${0.3 + index * 0.3}s` }}
            >
              {text}
            </div>
          ))}
        </div>


        {/* Additional Text */}
        <div
          className=" mt-4 md:mt-8 pr-[10vw] md:pr-24 text-[3vw] md:text-[1.6vw] lg:text-[1vw] fade-in-down"
          style={{ animationDelay: '1.5s' }}
        >
          I create designs, bring them to life, crafting seamless user experiences with a passion for making the web beautiful, inside and out.
        </div>
      </div>

      <ParallaxSection />


    </div>
  );
};

export default MainSection;
