"use client";
import { motion } from "framer-motion";

export default function ProjectHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
            Projects
          </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        Things {"I've"} Built
      </h2>

      <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
        A selection of projects showcasing modern full-stack development,
        scalable architecture and clean user experiences.
      </p>
    </motion.div>
  );
}