"use client";

import { COMMUNITY } from "@/data/site";
import { Reveal } from "./Reveal";

type StatsGridProps = {
  limit?: number;
};

export function StatsGrid({ limit }: StatsGridProps) {
  const stats = limit ? COMMUNITY.stats.slice(0, limit) : COMMUNITY.stats;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground/65">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
