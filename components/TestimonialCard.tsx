"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  image: string;
  delay?: number;
};

export function TestimonialCard({
  quote,
  author,
  role,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <Reveal delay={delay}>
      <blockquote className="glass-card flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <cite className="not-italic font-semibold text-foreground">
              {author}
            </cite>
            <p className="text-sm text-foreground/60">{role}</p>
          </div>
        </div>
        <p className="flex-1 text-foreground/85 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
    </Reveal>
  );
}
