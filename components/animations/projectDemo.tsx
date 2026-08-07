"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/config";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
            Projects
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            A collection of my recent full-stack applications.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="mt-12 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="overflow-hidden border bg-background/60 backdrop-blur-lg">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}

                  <div className="relative aspect-video overflow-hidden lg:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}

                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold">{project.title}</h3>

                      {project.featured && (
                        <Badge className="bg-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Buttons */}

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>

                      <Button variant="outline" className={"flex items-center"}>
                        <a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FaGithub className="mr-2 h-4 w-4" />
                          Frontend
                        </a>
                      </Button>

                      <Button variant="outline">
                        <a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FaGithub className="mr-2 h-4 w-4" />
                          Backend
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
