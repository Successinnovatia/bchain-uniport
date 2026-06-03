"use client";

import {
  CalendarDays,
  Code2,
  Handshake,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import { PROGRAMS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICON_MAP: Record<(typeof PROGRAMS)[number]["icon"], LucideIcon> = {
  workshop: Presentation,
  events: CalendarDays,
  mentorship: Handshake,
  community: Code2,
};

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Programs & Opportunities"
          description="Learn, connect, and build with structured programs designed for students at every level."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((program, i) => {
            const Icon = ICON_MAP[program.icon];
            return (
              <Reveal key={program.title} delay={i * 0.08}>
                <article className="group glass-card h-full p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">
                    {program.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
