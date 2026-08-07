import Link from "next/link";

import { cn } from "@/lib/utils";

import LogoMark from "./LogoMark";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({
  className,
  showText = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3",
        className
      )}
    >
      <LogoMark
        className="
          h-11
          w-11
          transition-transform
          duration-300
          group-hover:rotate-3
          group-hover:scale-105
        "
      />

      {showText && (
        <div className="leading-tight">
          <h2 className="font-heading text-lg font-bold tracking-tight">
            Hayder Ali
          </h2>

          <p className="text-xs text-muted-foreground">
            Full Stack Developer
          </p>
        </div>
      )}
    </Link>
  );
}