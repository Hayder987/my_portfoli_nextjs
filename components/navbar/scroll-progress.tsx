"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-primary via-orange-400 to-yellow-400"
    />
  );
}