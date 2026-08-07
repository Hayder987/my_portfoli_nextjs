"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "@/config";

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-3 pt-2">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <motion.div
            key={social.name}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              className="
                glass
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                hover:border-primary
                hover:text-primary
              "
            >
              <Icon size={20} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}