"use client";

import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "./social-links";
import { contact } from "@/config/contact";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactCard() {
  return (
    <Card className="rounded-3xl border bg-background/70 backdrop-blur-xl">
      <CardContent className="p-8">
        <div className="flex items-center gap-3">
          <Mail className="text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">
              Email
            </p>

            <p className="font-medium">
              {contact.email}
            </p>
          </div> 
        </div>

        <div className="mt-8 flex items-center gap-3">
          <FaWhatsapp className="text-primary text-2xl" />

          <div>
            <p className="text-sm text-muted-foreground">
              WhatsApp
            </p>

            <p className="font-medium">
              {contact.whatsapp}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <MapPin className="text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">
              Location
            </p>

            <p className="font-medium">
              {contact.location}
            </p>
          </div>
        </div>

        <SocialLinks />
      </CardContent>
    </Card>
  );
}