import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

export const socials = [
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
    name: "Facebook",
    href: "https://www.facebook.com/rakibul.hasan.4290",
    icon: FaFacebook,
  },
  {
    name: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
] as const;