import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GradientButton({
  href,
  children,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-linear-to-r
      from-primary
      via-secondary
      to-accent
      px-6
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_35px_rgba(109,94,247,.45)]
      active:scale-95
      "
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}