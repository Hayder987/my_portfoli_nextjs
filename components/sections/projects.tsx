"use client";

import BackgroundEffects from "@/components/effects/BackgroundEffects";

import ProjectHeader from "@/components/projects/project-header";
import ProjectCard from "@/components/projects/project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <BackgroundEffects />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectHeader />

        <ProjectCard />
      </div>
    </section>
  );
}