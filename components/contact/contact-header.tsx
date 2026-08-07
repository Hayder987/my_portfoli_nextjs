"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
        Contact
      </span>

      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {"Let's"} Build Something Great Together
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
        Have an idea, project or opportunity? {"I'd"} love to hear from you.
      </p>
    </motion.div>
  );
}
