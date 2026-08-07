import nextJs from "../logo/nextjs.svg";
import react from "../logo/react_light.svg";
import typescript from "../logo/typescript.svg";
import nodejs from "../logo/nodejs.svg";
import prisma from "../logo/prisma_dark.svg";
import postgres from "../logo/postgresqll.svg";

export const heroTech = [
  {
    name: "Next.js",
    logo: nextJs,
    className:
      "left-2 top-6 md:left-0 md:top-10 xl:-left-8 xl:top-14",
    delay: 0,
  },
  {
    name: "React",
    logo: react,
    className:
      "right-2 top-12 md:right-0 md:top-24 xl:-right-8 xl:top-24",
    delay: 0.2,
  },
  {
    name: "Postgres",
    logo: postgres,
    className:
      "right-2 top-12 md:right-0 md:top-24 xl:-right-8 xl:top-24",
    delay: 0.4,
  },
  {
    name: "Prisma",
    logo: prisma,
    className:
      "left-1/2 -top-3 -translate-x-1/2 md:-top-5 xl:-top-8",
    delay: 0.6,
  },
  {
    name: "Node.js",
    logo: nodejs,
    className:
      "right-2 bottom-20 md:right-0 md:bottom-24 xl:-right-8 xl:bottom-20",
    delay: 0.8,
  },
  {
    name: "TypeScript",
    logo: typescript,
    className:
      "left-2 bottom-20 md:left-0 md:bottom-24 xl:-left-8 xl:bottom-20",
    delay: 1.0,
  },
] as const;