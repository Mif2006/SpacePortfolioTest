"use client";

import React from "react";
import Skill_data_provider from "../sub/Skill_data_provider";
import {
  Skill_data,
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill3,
} from "@/constants";
import SkillText from "../sub/SkillText";

function SkillSection() {
  return (
    <section
      className="flex flex-col gap-3 items-center justify-center h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      {/* Your other content goes here */}

      <div className="flex flex-row gap-5 items-center justify-around mt-4 flex-wrap">
        {Skill_data.map((image, index) => (
          <Skill_data_provider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className=" flex flex-row gap-5 items-center justify-around mt-4 flex-wrap">
        {Frontend_skill.map((image, index) => (
          <Skill_data_provider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className=" flex flex-row gap-5 items-center justify-around mt-4 flex-wrap">
        {Backend_skill.map((image, index) => (
          <Skill_data_provider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className=" flex flex-row gap-5 items-center justify-around mt-4 flex-wrap">
        {Full_stack.map((image, index) => (
          <Skill_data_provider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full flex gap-5 flex-row items-center justify-around mt-4 flex-wrap">
        {Other_skill3.map((image, index) => (
          <Skill_data_provider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute flex flex-col items-center justify-center">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex flex-col bg-cover items-center justify-center">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
