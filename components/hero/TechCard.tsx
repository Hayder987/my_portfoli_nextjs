"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TechCardProps {
  name: string;
  logo: StaticImageData;
  className: string;
  delay: number;
}

export default function TechCard({
  name,
  logo,
  className,
  delay,
}: TechCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0.3,
        scale: 1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        delay,
      }}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      className={`
        absolute
        z-30
        hidden
        md:flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-card/70
        px-4
        py-3
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:border-primary/50
        hover:bg-card/90
        ${className}
      `}
    >
      <Image
        src={logo}
        alt={name}
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />

      <span className="whitespace-nowrap text-sm font-semibold">
        {name}
      </span>
    </motion.div>
  );
}