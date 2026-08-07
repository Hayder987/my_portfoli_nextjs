"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  live: string;

  frontend: string;

  backend: string;
}

export default function ProjectButtons({
  live,
  frontend,
  backend,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button className={"bg-transparent"}>
        <Link
     href={live}
          target="_blank"
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
      hover:bg-transparent
      "
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      Live Demo
    </Link>
      </Button>

      <Button
        variant="outline"
      >
        <Link
          href={frontend}
          target="_blank"
          className="flex items-center"
        >
          <FaGithub className="mr-2 h-4 w-4" />

          Frontend
        </Link>
      </Button>

      <Button
        variant="outline"
      >
        <Link
          href={backend}
          target="_blank"
          className="flex items-center"
        >
          <FaGithub className="mr-2 h-4 w-4" />

          Backend
        </Link>
      </Button>
    </div>
  );
}