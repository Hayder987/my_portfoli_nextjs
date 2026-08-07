"use client";

import { motion } from "framer-motion";

export default function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-500/20
        bg-emerald-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-emerald-400
      "
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </span>

      Available for Freelance
    </motion.div>
  );
}