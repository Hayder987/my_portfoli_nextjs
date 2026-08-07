"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MouseParallax({ children }: Props) {
  const rotateX = useMotionValue(0);

  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.innerWidth < 1024) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    rotateY.set((x / rect.width - 0.5) * 18);

    rotateX.set(-(y / rect.height - 0.5) * 18);
  }

  return (
    <motion.div
      style={{
        rotateX: smoothX,

        rotateY: smoothY,

        transformPerspective: 1200,
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rotateX.set(0);

        rotateY.set(0);
      }}
      className="
relative
"
    >
      {children}
    </motion.div>
  );
}
