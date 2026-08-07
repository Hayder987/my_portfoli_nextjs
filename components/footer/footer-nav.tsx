"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navigation } from "@/config";

export default function FooterNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-lg font-semibold">
        Navigation
      </h3>

      <ul className="mt-6 space-y-4">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="mr-2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-5" />

              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}