import {
  Code2,
  Database,
  ServerCog,
  Cloud,
} from "lucide-react";

export const services = [
  {
    title: "Frontend Development",
    description:
      "Modern responsive web applications using React, Next.js and TypeScript.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "REST APIs, Authentication, Database Design and scalable backend architecture.",
    icon: ServerCog,
  },
  {
    title: "Database Design",
    description:
      "PostgreSQL, Prisma ORM and optimized relational database architecture.",
    icon: Database,
  },
  {
    title: "Deployment",
    description:
      "Deploy production-ready applications using Vercel, Render and modern cloud platforms.",
    icon: Cloud,
  },
] as const;