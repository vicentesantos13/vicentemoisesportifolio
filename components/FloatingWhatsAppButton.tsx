"use client";

import { profile } from "@/data/profile";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";



export function FloatingWhatsAppButton() {
  return (
    <Link
      href={profile.wpp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar comigo no WhatsApp"
      className="
        fixed bottom-4 right-4 z-50
        inline-flex items-center justify-center
        h-14 w-14 md:h-16 md:w-16
        rounded-full bg-[#25D366] text-white
        shadow-lg hover:shadow-xl
        hover:bg-[#20b357]
        transition
      "
    >
      <SiWhatsapp className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </Link>
  );
}
