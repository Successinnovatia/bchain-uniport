"use client";

import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "@/data/site";
import { Reveal } from "./Reveal";

export function PartnersStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {PARTNERS.map((partner) => (
          <Link
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/95 px-6 transition hover:border-primary/40 hover:shadow-glow"
            aria-label={`${partner.name} website`}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={140}
              height={48}
              className="h-10 w-auto max-w-full object-contain opacity-80 transition group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
