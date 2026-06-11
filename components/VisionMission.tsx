"use client";

import { Eye, Target } from "lucide-react";
import { MISSION_STATEMENT, VISION_STATEMENT } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function StatementCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Eye;
  title: string;
  body: string;
}) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <article className="glass-card h-full p-8 sm:p-10">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-foreground/85 leading-relaxed text-lg">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}

export function VisionMission() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Vision & Mission"
          description="The principles that guide everything we do for the student community."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <StatementCard
              icon={Eye}
              title="Vision Statement"
              body={VISION_STATEMENT}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <StatementCard
              icon={Target}
              title="Mission Statement"
              body={MISSION_STATEMENT}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
