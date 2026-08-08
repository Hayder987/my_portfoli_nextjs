"use client";

import FadeIn from "@/components/animations/FadeIn";
import GradientButton from "@/components/common/GradientButton";
import { siteConfig } from "@/config";

import AvailabilityBadge from "./AvailabilityBadge";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      {/* Left Side */}

      <div className="space-y-8">
        <FadeIn>
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            👋 {siteConfig.hero.greeting}
          </span>
        </FadeIn>

        <FadeIn>
          <AvailabilityBadge />
        </FadeIn>

        <FadeIn>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
            <span className="block text-white">{siteConfig.hero.name}</span>

            <span className="gradient-text mt-2 block">
              {siteConfig.hero.role}
            </span>
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {siteConfig.hero.tagline}
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-4">
            <GradientButton href="#projects">View Projects</GradientButton>

            <Link
              href={siteConfig.resume}
              download
              className="inline-flex items-center justify-center
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:border-primary
                hover:bg-primary/10
              "
            >
              Download Resume
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <HeroStats />
        </FadeIn>

        <FadeIn>
          <HeroSocials />
        </FadeIn>
      </div>

      {/* Right Side */}

      <HeroImage />
    </div>
  );
}
