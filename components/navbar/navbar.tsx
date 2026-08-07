"use client";

import { motion } from "framer-motion";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import ResumeButton from "./resume-button";

import { useNavbar } from "./use-navbar";
import Logo from "../common/Logo";
import ScrollProgress from "./scroll-progress";

export default function Navbar() {
  const { isScrolled, isVisible } = useNavbar();

  return (
    <motion.header
      initial={false}
      animate={{
        y: isVisible ? 0 : -120,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-4 flex h-18 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled
            ? "border-border/60 bg-background/75 shadow-xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ResumeButton />
          </div>

          <MobileNav />
        </div>
      </div>

      <ScrollProgress />
    </motion.header>
  );
}
