"use client";

import { motion } from "framer-motion";
import Logo from "../common/Logo";


export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Logo />

      <p className="mt-6 max-w-md leading-8 text-muted-foreground">
        Passionate Full Stack Developer focused on building modern,
        responsive and scalable web applications with exceptional user
        experiences.
      </p>
    </motion.div>
  );
}