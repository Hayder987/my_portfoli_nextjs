"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { navigation } from "@/config";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-2 rounded-full border bg-background/60 p-2 backdrop-blur-xl">
        {navigation.map((item) => {
          const isActive = active === item.href;

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>

              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                  className="absolute inset-0 rounded-full bg-primary/10"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}