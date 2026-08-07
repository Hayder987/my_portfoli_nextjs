import nextJs from "../logo/nextjs.svg"
import react from "../logo/react_light.svg"
import typescript from "../logo/react_light.svg"
import nodejs from "../logo/nodejs.svg"
import express from "../logo/expressjs.svg"
import mongoDB from "../logo/mongodb-icon-light.svg"
import prisma from "../logo/react_light.svg"

export const heroTech = [
  {
    name: "Next.js",
    logo: {nextJs},
    className: "-left-8 top-12",
  },
  {
    name: "React",
    logo: {react},
    className: "-right-6 top-20",
  },
  {
    name: "TypeScript",
    logo: {typescript},
    className: "-left-10 bottom-24",
  },
  {
    name: "Node.js",
    logo: {nodejs},
    className: "-right-8 bottom-14",
  },
  {
    name: "Express.js",
    logo: {express},
    className: "left-10 -top-8",
  },
  {
    name: "MongoDB",
    logo: {mongoDB},
    className: "right-10 -top-8",
  },
  {
    name: "Prisma",
    logo: {prisma},
    className: "left-1/2 -bottom-8 -translate-x-1/2",
  },
] as const;