"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { FOUNDER } from "@/data/site";
import { Reveal } from "./Reveal";

export function FounderProfile() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={480}
                height={560}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-accent lg:text-left">
              {FOUNDER.role}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-foreground">{FOUNDER.name}</h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-6 text-lg italic text-foreground/80">
            &ldquo;{FOUNDER.quote}&rdquo;
          </blockquote>
          <div className="mt-8 space-y-4 text-foreground/75 leading-relaxed">
            {FOUNDER.bio.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={FOUNDER.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:border-primary/40"
            >
              <Twitter className="h-4 w-4 text-primary" />
              Twitter
            </Link>
            <Link
              href={FOUNDER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:border-primary/40"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </Link>
            <Link
              href={FOUNDER.social.email}
              className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:border-primary/40"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
