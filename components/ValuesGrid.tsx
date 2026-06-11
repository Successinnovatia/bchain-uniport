"use client";

import { COMMUNITY } from "@/data/site";
import { Reveal } from "./Reveal";

export function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {COMMUNITY.values.map((value, i) => (
        <Reveal key={value.title} delay={i * 0.08}>
          <article className="glass-card h-full p-6">
            <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
            <p className="mt-2 text-foreground/70 leading-relaxed">
              {value.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
