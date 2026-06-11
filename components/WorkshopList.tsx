"use client";

import { useState } from "react";
import { WORKSHOPS } from "@/data/site";
import { WorkshopCard } from "./WorkshopCard";

type Filter = "all" | "upcoming" | "past";

export function WorkshopList() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = WORKSHOPS.filter((w) => {
    if (filter === "all") return true;
    return w.status === filter;
  });

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "upcoming", label: "Upcoming" },
    { key: "past", label: "Past" },
  ];

  return (
    <div className="section-padding pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                filter === tab.key
                  ? "bg-primary text-white shadow-glow"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-foreground/60">
            No workshops found for this filter.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((workshop, i) => (
              <WorkshopCard key={workshop.slug} workshop={workshop} delay={i * 0.06} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
