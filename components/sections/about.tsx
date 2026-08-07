"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/config/about";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import CountUp from "react-countup";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28">
      <BackgroundEffects />

      {/* Decorative Blur */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
            {aboutData.badge}
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {aboutData.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutData.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
                {/* Top Accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-primary to-orange-400 transition-all duration-500 group-hover:w-full" />

                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <h3 className="bg-linear-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-5xl font-bold text-transparent">
                  <CountUp
                    end={Number(item.value)}
                    duration={3}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-4 text-base font-medium text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border bg-primary p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">
            Passionate About Building Modern Web Applications
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-300">
            I enjoy transforming ideas into fast, scalable and user-friendly
            digital products. From intuitive frontend experiences to robust
            backend systems, I focus on writing clean, maintainable code and
            delivering solutions that create real value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
