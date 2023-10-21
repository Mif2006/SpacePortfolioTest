import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import SkillSection from "@/components/main/SkillSection";
import StarsCanvas from "@/components/main/StarBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full h-full">
      
      <div className="flex flex-col gap-20">
        <Hero />
        <SkillSection />
        <Encryption />
        
      </div>
    </main>
  );
}
