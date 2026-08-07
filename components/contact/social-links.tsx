"use client";

import Link from "next/link";


import { Button } from "@/components/ui/button";
import { contact } from "@/config/contact";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {contact.socials.map((item) => {
        const Icon = item.icon;

        return (
          <Button
            key={item.name}
            variant="outline"
          >
            <Link
              href={item.href}
              target="_blank"
              className="flex items-center hover:text-primary"
            >
              <Icon className="mr-2 h-4 w-4" />

              {item.name}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}