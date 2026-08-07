"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  logo: StaticImageData;
  className: string;
}

export default function TechBadge({
  name,
  logo,
  className,
}: TechBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`glass absolute z-30 flex h-16 w-16 items-center justify-center rounded-2xl ${className}`}
    >
      <Image
        src={logo}
        alt={name}
        width={34}
        height={34}
        className="object-contain"
      />
    </motion.div>
  );
}