"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import MouseParallax from "@/components/effects/MouseParallax";

import profileImg from "@/public/img/bannerPhotomy.png";

import ExperienceBadge from "./ExperienceBadge";
import FloatingTech from "./FloatingTech";
import OnlineBadge from "./OnlineBadge";

export default function HeroImage() {
  return (
    <MouseParallax>
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
        className="relative mx-auto flex flex-col lg:flex-row"
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -z-20
            h-80
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/20
            blur-[120px]

            md:h-105
            md:w-105

            xl:h-130
            xl:w-130
          "
        />

        {/* Animated Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
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
            items-end
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/10

            h-80
            w-80

            md:h-105
            md:w-105

            lg:h-120
            lg:w-120

            xl:h-140
            xl:w-140
          "
        >
          <Image
            src={profileImg}
            alt="Hayder Ali"
            priority
            className="
              h-auto
              object-contain

              w-62.5

              md:w-[320px]

              lg:w-95

              xl:w-107.5

              drop-shadow-[0_40px_70px_rgba(0,0,0,.45)]

              transition-transform
              duration-500
            "
          />
        </div>

        {/* Floating Cards */}

        <FloatingTech />

        {/* Status */}

        <OnlineBadge />

        {/* Experience */}

        <ExperienceBadge />
      </motion.div>
    </MouseParallax>
  );
}