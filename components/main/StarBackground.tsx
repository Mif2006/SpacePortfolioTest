"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Background_Stars(props: any) {
  const [colour, setColour] = useState("#fff");
  const ref: any = useRef();
  const [sphere] = useState(() =>
    // @ts-ignore
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     // Generate a random number between 0 and 255 for each RGB component
  //     const r = Math.floor(Math.random() * 256);
  //     const g = Math.floor(Math.random() * 256);
  //     const b = Math.floor(Math.random() * 256);

  //     // Set the color in the form of a CSS RGB string
  //     setColour(`rgb(${r}, ${g}, ${b})`);
  //   }, 6000);

  //   return () => clearInterval(intervalID); // Clear interval on unmount
  // }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colour}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  const [starmode, setStarmode] = useState("active");
  return (
    <div className={`w-full h-auto fixed inset-0 z-[20]`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Background_Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
