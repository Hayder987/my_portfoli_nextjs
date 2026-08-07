"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 80 }, (_, index) => ({
  id: index,

  left: (index * 97) % 100,

  duration: 12 + (index % 8),

  delay: index * 0.25,

  drift: index % 2 === 0 ? 50 : -50,
}));

export default function Particles() {
  return (
    <>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: [0, 0.5, 0],

            y: -900,

            x: [0, particle.drift, 0],
          }}
          transition={{
            duration: particle.duration,

            repeat: Infinity,

            delay: particle.delay,

            ease: "linear",
          }}
          className="
absolute

h-2
w-2

rounded-full

bg-primary/40
"
          style={{
            left: `${particle.left}%`,

            bottom: "-40px",
          }}
        />
      ))}
    </>
  );
}
