"use client";

import BackgroundEffects from "@/components/effects/BackgroundEffects";

import FooterBrand from "./footer-brand";

import FooterNav from "./footer-nav";
import FooterSocial from "./footer-social";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t py-20">
      {/* <BackgroundEffects /> */}

      <div className="relative mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <FooterBrand />

          <FooterNav />

          <FooterSocial />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}