"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

const SIZE = 56;
const STROKE = 4;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    return progress.on("change", (value) => {
      setOffset(CIRCUMFERENCE - value * CIRCUMFERENCE);
    });
  }, [progress]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="fixed bottom-6 right-6 z-999"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />

            <svg
              width={SIZE}
              height={SIZE}
              className="absolute inset-0 -rotate-90"
            >
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="currentColor"
                className="text-border"
                strokeWidth={STROKE}
              />

              <motion.circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
              />

              <defs>
                <linearGradient
                  id="progress-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" />

                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
            </svg>

            <Button
              size="icon"
              onClick={scrollTop}
              aria-label="Back to top"
              className="group relative h-14 w-14 rounded-full border border-white/10 bg-background/70 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
