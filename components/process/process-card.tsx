"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

import useMouseParallax from "@/components/animations/use-mouse-parallax";

interface ProcessCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ProcessCard({
  id,
  title,
  description,
  icon: Icon,
  index,
}: ProcessCardProps) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } =
    useMouseParallax();

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="h-full"
    >
      <Card
        role="article"
        aria-label={`${title} development process step`}
        className="group relative h-full overflow-hidden rounded-3xl border bg-background/60 p-7 backdrop-blur-xl will-change-transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative z-10">
          {/* Icon + Step */}
          <div className="flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-8 w-8" />
            </div>

            <span className="text-5xl font-black text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
              {id}
            </span>
          </div>

          {/* Content */}
          <h3 className="mt-8 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">{description}</p>

          {/* Step Indicator */}
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
            <span>Step {id}</span>

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </div>

          {/* Hover Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Bottom Gradient */}
          <motion.div
            initial={{
              width: "0%",
            }}
            whileHover={{
              width: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary via-orange-400 to-yellow-400"
          />
        </div>
      </Card>
    </motion.div>
  );
}
