"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/config/process";

import ProcessCard from "./process-card";

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
            My Workflow
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Development Process
          </h2>

          <p className="mt-5 text-muted-foreground sm:text-lg">
            A structured approach I follow to build scalable, modern and
            user-focused applications.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* Desktop Connector */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent xl:block" />

          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
