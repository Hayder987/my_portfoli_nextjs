"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { allSkillsData } from "@/config";
import BackgroundEffects from "../effects/BackgroundEffects";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
            My Skills
          </span>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 text-muted-foreground sm:text-lg">
            A collection of tools and technologies I use to build modern web
            applications.
          </p>
        </motion.div>

        {/* First Marquee */}

        <div className="mt-14">
          <Marquee speed={45} pauseOnHover gradient gradientWidth={60}>
            {[...allSkillsData, ...allSkillsData].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group mx-3 flex min-w-37.5 flex-col items-center justify-center rounded-2xl border bg-background/60 p-5 backdrop-blur transition-all hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl sm:min-w-42.5 sm:p-6"
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={55}
                  height={55}
                  className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
                />

                <h3 className="mt-4 text-sm font-semibold sm:text-base">
                  {skill.name}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee */}

        <div className="mt-6">
          <Marquee
            speed={35}
            direction="right"
            pauseOnHover
            gradient
            gradientWidth={60}
          >
            {[...allSkillsData, ...allSkillsData]
              .reverse()
              .map((skill, index) => (
                <div
                  key={`${skill.name}-reverse-${index}`}
                  className="group mx-3 flex min-w-37.5 flex-col items-center justify-center rounded-2xl border bg-background/60 p-5 backdrop-blur transition-all hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl sm:min-w-42.5 sm:p-6"
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={55}
                    height={55}
                    className="h-12 w-12 object-contain"
                  />

                  <h3 className="mt-4 text-sm font-semibold sm:text-base">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
