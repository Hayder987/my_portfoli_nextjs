"use client";

import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
}

export default function Reveal({
  children,
  variants,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}