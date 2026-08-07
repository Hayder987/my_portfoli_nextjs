"use client";

import { motion } from "framer-motion";


export default function FooterBottom() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mt-16 flex flex-col items-center justify-between gap-5 border-t pt-8 text-sm text-muted-foreground md:flex-row"
      >
        <p>
          © {new Date().getFullYear()} Hayder Ali.
          All rights reserved.
        </p>

        <div className="rounded-full border bg-background/60 px-4 py-2 backdrop-blur">
          Built with ❤️ using Next.js, TypeScript & Tailwind CSS
        </div>
      </motion.div>

    </>
  );
}