import rentBanner from "../public/img/rentBanner.png"
import shojMart from "../public/img/shohojmart.png"

export const projects = [
  {
    id: 1,

    featured: true,

    title: "RentNest",

    slug: "rentnest",

    description:
      "A modern property rental platform with authentication, payments and dashboard.",

    image: rentBanner,

    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    github: {
      frontend: "https://github.com/Hayder987/RentNest_nextjs_frontend",
      backend: "https://github.com/Hayder987/B7A4_RentNest_Prisma_Backend",
    },

    live: "https://rent-nest-nextjs-frontend.vercel.app",
  },
   {
    id: 2,

    featured: true,

    title: "ShohojMart+",

    slug: "shohojmart",

    description:
      "A modern E-Commerce platform with authentication, payments and dashboard.",

    image: shojMart,

    technologies: [
      "React.js",
      "JavaScript ES6",
      "MongoDB",
      "FireBase",
      "Tailwind CSS",
    ],

    github: {
      frontend: "https://github.com/Hayder987/shohoj-mart",
      backend: "https://github.com/Hayder987/shohoj-mart-server",
    },

    live: "https://shohojmart-f8a93.web.app",
  },
] as const;

