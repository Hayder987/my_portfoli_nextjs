"use client";

import { heroTech } from "@/config/heroTech";
import TechBadge from "./TechBadge";

export default function FloatingTech() {
  return (
    <>
      {heroTech.map((tech) => (
        <TechBadge
          key={tech.name}
          name={tech.name}
          logo={tech.logo}
          className={tech.className}
        />
      ))}
    </>
  );
}