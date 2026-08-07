"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config";

export default function HeroStats() {
  const stats = [
    {
      value: siteConfig.hero.experience,
      label: "Years Experience",
    },
    {
      value: siteConfig.hero.projects,
      label: "Projects",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 pt-6">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          whileHover={{
            y: -6,
          }}
          className="space-y-2"
        >
          <h3 className="gradient-text text-4xl font-black">
            {stat.value}
          </h3>

          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}