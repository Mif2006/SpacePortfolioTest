import React from "react";
import HeroText from "../sub/HeroText";

interface Props {
  videoSrc: string;
}

function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col  ">
      <video
        autoPlay
        loop
        muted
        className=" rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroText />
    </div>
  );
}

export default Hero;
