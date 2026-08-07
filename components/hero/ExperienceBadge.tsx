"use client";

import { motion } from "framer-motion";

export default function ExperienceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="
        glass
        absolute
        -left-8
        bottom-12
        z-30
        rounded-2xl
        px-5
        py-4
      "
    >
      <h3 className="gradient-text text-3xl font-black">
        2+
      </h3>

      <p className="text-sm text-muted-foreground">
        Years Experience
      </p>
    </motion.div>
  );
}
