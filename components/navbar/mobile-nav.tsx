"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation } from "@/config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../common/Logo";
import ResumeButton from "./resume-button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button size="icon" variant="outline" className="rounded-xl">
            <Menu className="h-5 w-5" />

            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-75 p-0">
          <SheetHeader className="border-b p-6">
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col p-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t p-5">
            <ResumeButton />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
