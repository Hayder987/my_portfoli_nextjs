import type { Metadata } from "next";

export const siteConfig = {
  name: "Hayder Ali",
  title: "Hayder Ali | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express, PostgreSQL and modern web technologies.",

  url: "https://your-domain.com",

  creator: "Hayder Ali",

  keywords: [
    "Hayder Ali",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Full Stack Developer",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  creator: siteConfig.creator,

  authors: [
    {
      name: "Hayder Ali",
    },
  ],

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@hayder",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};