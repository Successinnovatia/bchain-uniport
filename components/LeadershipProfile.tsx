"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Twitter } from "lucide-react";
import type { Leader } from "@/data/site";
import { Reveal } from "./Reveal";

type LeadershipProfileProps = {
  leader: Leader;
  reversed?: boolean;
  priority?: boolean;
};

export function LeadershipProfile({
  leader,
  reversed = false,
  priority = false,
}: LeadershipProfileProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <div
        className={`grid gap-12 lg:grid-cols-5 lg:items-start ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <Reveal className={`lg:col-span-2 ${reversed ? "lg:[direction:ltr]" : ""}`}>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <Image
                src={leader.image}
                alt={leader.name}
                width={480}
                height={560}
                className="aspect-[4/5] w-full object-cover object-top"
                priority={priority}
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-accent lg:text-left">
              {leader.role}
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className={`lg:col-span-3 ${reversed ? "lg:[direction:ltr]" : ""}`}
        >
          <h2 className="text-3xl font-bold text-foreground">{leader.name}</h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-6 text-lg italic text-foreground/80">
            &ldquo;{leader.quote}&rdquo;
          </blockquote>
          <div className="mt-8 space-y-4 text-foreground/75 leading-relaxed">
            {leader.bio.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={leader.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:border-primary/40"
            >
              <Twitter className="h-4 w-4 text-primary" />
              Twitter
            </Link>
            <Link
              href={leader.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition hover:border-primary/40"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </Link>
            <Link
              href={leader.social.email}
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
