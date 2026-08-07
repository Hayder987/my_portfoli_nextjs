"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socials } from "@/config";

export default function FooterSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold">
        Connect
      </h3>

      <div className="mt-6 space-y-3">
        {socials.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={item.href}
                target="_blank"
                className="group flex items-center justify-between rounded-2xl border bg-background/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}