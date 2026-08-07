"use client";

import { aboutData } from "@/config/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      py-20
      sm:py-24
      lg:py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        h-72
        w-72
        rounded-full
        bg-orange-500/20
        blur-3xl
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >
          {/* Badge */}

          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-orange-500/30
            bg-orange-500/10
            px-4
            py-1.5
            text-sm
            font-medium
            text-orange-500
            "
          >
            {aboutData.badge}
          </span>

          <h2
            className="
            mt-6
            text-3xl
            font-bold
            tracking-tight

            sm:text-4xl

            lg:text-5xl
            "
          >
            {aboutData.title}
          </h2>

          <p
            className="
            mt-6
            text-base
            leading-7
            text-muted-foreground

            sm:text-lg
            sm:leading-8
            "
          >
            {aboutData.description}
          </p>
        </motion.div>

        {/* Stats */}

        <div
          className="
          mt-12

          grid
          grid-cols-1

          gap-5

          sm:grid-cols-3

          lg:mt-16
          "
        >
          {aboutData.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                group
                rounded-2xl
                border
                bg-background/60
                p-6

                text-center

                backdrop-blur-md

                transition-all

                hover:-translate-y-2

                hover:border-orange-500/40

                hover:shadow-xl

                sm:p-8

                "
            >
              <h3
                className="
                  bg-linear-to-r
                  from-orange-500
                  to-yellow-400

                  bg-clip-text

                  text-4xl

                  font-bold

                  text-transparent

                  sm:text-5xl

                  "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-3

                  text-sm

                  text-muted-foreground

                  sm:text-base
                  "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
