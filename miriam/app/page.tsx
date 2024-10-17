import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
<div className="absolute top-20 right-20">
<div className="rounded-full px-5 py-2  bg-white ">
            Let's Talk
          </div>
</div>

    <div className="w-9/12 h-[80vh] pt-40 mx-auto flex relative">
      {/* Left content area */}
      <div className="w-7/12 z-20">
        <div className="text-[50px]">Hi,</div>
        <div className="text-[50px] flex gap-4">
          <div>I'm</div>
          <div className="font-bold">Miriam</div>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="rounded-full px-5 py-2 border-2 border-black ">
            Web Developer
          </div>
          <div className="rounded-full px-5 py-2 border-2 border-black ">
            Front-End Enthusiast
          </div>
          <div className="rounded-full px-5 py-2 border-2 border-black ">
            Full-Stack Capabilities
          </div>
        </div>
        <div className="mt-8 text-lg">
          I bring designs to life, crafting seamless user experiences with a passion for making the web beautiful, inside and out.
        </div>
      </div>

      <div className="w-5/12  relative flex justify-center items-center">
        <div
          className="w-[600px] blur-3xl h-[600px] rounded-full top-0 left-[-200px] absolute"
          style={{
            background:
              "radial-gradient(circle, rgba(196,210,255,1) 0%, rgba(196,210,255,0.75) 40%, rgba(196,210,255,0.25) 70%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
      </div>

      {/* Image with underline */}
      <div className="absolute top-1/2 left-2/3">
        <Image src={"/imgs/miriam.png"} alt="miriam" width={300} height={300} />
        {/* The underline */}
        <div className="relative ">
          <div
            className="absolute right-0 h-[1px] bg-black"
            style={{
              width: "60vw", // Extends the line from the right edge of the page
            }}
          ></div>
        </div>
      </div>
      </div>
    </div>
  );
}
