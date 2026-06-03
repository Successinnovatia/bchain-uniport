"use client";

import { Calendar, MapPin } from "lucide-react";
import { EVENTS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Events() {
  return (
    <section id="events" className="section-padding bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stay Updated"
          title="Upcoming Events"
          description="Workshops, panels, and hackathons — join us on campus and online."
        />

        <div className="space-y-4">
          {EVENTS.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.08}>
              <article className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between transition hover:border-primary/30">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-foreground/65">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {event.location}
                  </p>
                </div>
                <button type="button" className="btn-secondary shrink-0 self-start sm:self-center">
                  Register
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <button type="button" className="btn-primary">
            View All Events
          </button>
        </Reveal>
      </div>
    </section>
  );
}
