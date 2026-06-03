"use client";

import Link from "next/link";
import { BookOpen, ExternalLink } from "lucide-react";
import { RESOURCES } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Resources() {
  return (
    <section id="resources" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Learn"
          title="Learning Resources"
          description="Curated guides and tracks to help you go from curious beginner to confident contributor."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 0.08}>
              <article className="glass-card flex h-full flex-col p-6 transition hover:border-accent/40">
                <div className="flex items-start justify-between gap-4">
                  <BookOpen className="h-8 w-8 shrink-0 text-accent" />
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-accent">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-foreground/70">{resource.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Coming soon
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link href="#contact" className="btn-primary">
            Explore Resources
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
