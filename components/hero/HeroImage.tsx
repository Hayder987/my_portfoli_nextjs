"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ExperienceBadge from "./ExperienceBadge";
import OnlineBadge from "./OnlineBadge";
import profileImg from "../../public/img/bannerPhotomy.png"

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto hidden lg:flex"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-20
          h-120
          w-120
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/20
          blur-[120px]
        "
      />

      {/* Animated Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          border
          border-dashed
          border-primary/30
        "
      />

      {/* Glass Circle */}

      <div
        className="
          glass
          relative
          flex
          h-130
          w-130
          items-end
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/10
        "
      >
        <Image
          src={profileImg}
          alt="Hayder Ali"
          width={500}
          height={700}
          priority
          className="
            h-auto
            w-105
            object-contain
            drop-shadow-[0_35px_60px_rgba(0,0,0,.45)]
          "
        />
      </div>

      <OnlineBadge />

      <ExperienceBadge />
    </motion.div>
  );
}
