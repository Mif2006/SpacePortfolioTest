"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { textVariant } from "@/utils/motion";

// Define variants for sliding animations
function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

function HeroText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full z-[20] h-full flex flex-row items-center justify-between px-20 mt-40 "
    >
      <div className="w-full h-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="px-[15px] relative py-1 shadow-lg shadow-[#2A0E61]/50  bg-slate-3
          00/30 backdrop-blur-md flex flex-row items-center max-w-[300px] rounded-full border border-[#7042f88b]  border-opacity-90"
        >
          <div className="absolute inset-0 bg-gradient-to-b z-[0] from-transparent via-transparent to-white opacity-10 rounded-full" />
          <SparklesIcon className="h-6 w-6 text-lg  text-[#b49bff] mr-2" />
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9cff] to-[#9cb2ff] text-sm">
            Join Full Stack Software Engineer
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-auto h-auto mt-6 gap-6 flex flex-col text-6xl font-bold text-white max-w-[600px] "
        >
          <span className="text-white">
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>
          </span>{" "}
          Project experience
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          All the best and most modern resources at your fingertips. Access
          online
          <a className="text-blue-500"> Website</a>,
          <a className="text-blue-500"> Mobile</a>,
          <a className="text-blue-500"> Software</a>, coding examples, tutorials
          and much more. All in one place
        </motion.p>
        <motion.a
          href="#Section_4"
          variants={slideInFromLeft(1)}
          className=" py-2 max-w-[200px] shadow-lg   shadow-[#2A0E61]/50  bg-slate-3
          00/30 backdrop-blur-md  button-primary text-center   text-white cursor-pointer hover:scale-105 active:scale-90 transition-all duration-150 rounded-lg"
        >
          Start learning Now!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex flex-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          width={650}
          height={650}
          alt="work icons"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroText;
