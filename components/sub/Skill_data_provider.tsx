import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

function Skill_data_provider({ src, width, height, index }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes in view
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2; // Adjust this value for the desired delay between each image's animation.

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div
        className={`
          // Your CSS classes here
        `}
      >
        <Image src={src} alt="Skill Image" width={width} height={height} />
      </div>
    </motion.div>
  );
}

export default Skill_data_provider;
