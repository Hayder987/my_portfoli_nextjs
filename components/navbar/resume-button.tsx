"use client";

import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ResumeButtonProps {
  href?: string;
}

export default function ResumeButton({
  href = "/resume.pdf",
}: ResumeButtonProps) {
  return (
    <Button
      size="sm"
      className="group rounded-full px-5 bg-linear-to-r
      from-primary
      via-secondary
      to-accent py-4"
    >
      <Link
        href={href}
        target="_blank"
        className="flex justify-center items-center "
        download
      >
        <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />

        Download Resume
      </Link>
    </Button>
  );
}