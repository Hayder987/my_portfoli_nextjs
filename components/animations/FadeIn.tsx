"use client";

import Reveal from "./Reveal";
import { fadeUp } from "./variants";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn({
  children,
  className,
}: FadeInProps) {
  return (
    <Reveal className={className} variants={fadeUp}>
      {children}
    </Reveal>
  );
}