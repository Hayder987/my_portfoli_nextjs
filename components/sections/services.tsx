"use client";

import { motion } from "framer-motion";
import { services } from "@/config";
import BackgroundEffects from "../effects/BackgroundEffects";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-28">
      <BackgroundEffects />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr] xl:gap-20">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
              Services
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              What I Can Build
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              I develop modern, scalable and responsive web applications with a
              strong focus on performance, clean architecture and user
              experience.
            </p>
          </motion.div>

          {/* Right Side */}

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                >
                  <Card className="group h-full overflow-hidden rounded-2xl border bg-background/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-8 w-8" />
                      </div>

                      <h3 className="mt-7 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-4 leading-7 text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="mt-7 h-0.5 w-12 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
