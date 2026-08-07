"use client";

import BackgroundEffects from "@/components/effects/BackgroundEffects";

import ContactHeader from "@/components/contact/contact-header";
import ContactCard from "@/components/contact/contact-card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <BackgroundEffects />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <ContactHeader />

        <ContactCard />
      </div>
    </section>
  );
}