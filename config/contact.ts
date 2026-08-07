import {
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export const contact = {
  title: "Let's Build Something Great Together",

  description:
    "I'm currently open to internship, freelance and full-time opportunities. If you have a project or just want to say hello, feel free to reach out.",

  email: "hayderbd4290@gmail.com",
  whatsapp: "+8801771814597",

  location: "Bangladesh",

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Hayder987",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hayder-ali-bb9175349",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:hayderbd4290@gmail.com",
      icon: Mail,
    },
  ],
} as const;