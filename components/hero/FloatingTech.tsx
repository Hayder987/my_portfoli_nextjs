"use client";


import { heroTech } from "@/config/heroTech";
import TechCard from "./TechCard";

export default function FloatingTech() {
  return (
    <>
      {heroTech.map((tech) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          logo={tech.logo}
          className={tech.className}
          delay={tech.delay}
        />
      ))}
    </>
  );
}