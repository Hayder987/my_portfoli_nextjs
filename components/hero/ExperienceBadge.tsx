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
        left-0
        bottom-6
        lg:-left-8
        lg:-bottom-8
        z-30
        rounded-2xl
        px-5
        py-4
      "
    >
      <h3 className="gradient-text  text-3xl font-black">
        1.5+
      </h3>

      <p className="text-sm text-muted-foreground">
        Years Experience
      </p>
    </motion.div>
  );
}
