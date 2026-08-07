import rentBanner from "../public/img/rentBanner.png"

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
] as const;

