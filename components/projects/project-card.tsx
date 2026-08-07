"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/config";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ProjectButtons from "./project-buttons";

export default function ProjectCard() {
  return (
    <div className="mt-16 space-y-10">
      {projects.map((project, index) => {
        const reverse = index % 2 !== 0;

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden rounded-3xl border bg-background/70 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl">
              <div
                className={`grid lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <div className="relative overflow-hidden">
                  <div className="relative aspect-16/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                    {project.featured && (
                      <Badge className="absolute right-5 top-5 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Full Stack Project
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}

                  <ProjectButtons
                    live={project.live}
                    frontend={project.github.frontend}
                    backend={project.github.backend}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
