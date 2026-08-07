"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  className?: string;
}

export default function AnimatedBorder({
  className,
}: AnimatedBorderProps) {
  return (
    <>
      {/* Animated Border */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0",
          className
        )}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-full rounded-[inherit] bg-conic from-primary via-yellow-400 via-yellow-400 to-primary"
        />
      </motion.div>

      {/* Inner Background */}

      <div className="pointer-events-none absolute inset-px rounded-[inherit] bg-background" />

      {/* Shine */}

      <motion.div
        initial={{
          x: "-130%",
        }}
        whileHover={{
          x: "130%",
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-white/15 blur-xl"
      />

      {/* Glow */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-primary/10 blur-2xl"
      />
    </>
  );
}