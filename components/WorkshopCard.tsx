"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import type { WorkshopItem } from "@/data/site";
import { Reveal } from "./Reveal";
import { WorkshopDetailsModal } from "./WorkshopDetailsModal";
import { WorkshopRegisterModal } from "./WorkshopRegisterModal";

type WorkshopCardProps = {
  workshop: WorkshopItem;
  delay?: number;
};

export function WorkshopCard({ workshop, delay = 0 }: WorkshopCardProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isUpcoming = workshop.status === "upcoming";

  return (
    <>
      <Reveal delay={delay}>
        <article className="glass-card group flex h-full flex-col overflow-hidden transition hover:border-primary/30 hover:shadow-glow">
          <button
            type="button"
            onClick={() => (isUpcoming ? setRegisterOpen(true) : setDetailsOpen(true))}
            className="relative aspect-video w-full overflow-hidden text-left"
          >
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute left-3 top-3 flex gap-2">
              <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold capitalize text-foreground backdrop-blur">
                {workshop.type}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
                  isUpcoming
                    ? "bg-primary/90 text-white"
                    : "bg-white/20 text-foreground"
                }`}
              >
                {isUpcoming ? "Upcoming" : "Past"}
              </span>
            </div>
          </button>
          <div className="flex flex-1 flex-col p-6">
            <p className="flex items-center gap-2 text-sm font-medium text-accent">
              <Calendar className="h-4 w-4" />
              {workshop.date}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {workshop.title}
            </h3>
            <p className="mt-1 flex items-center gap-2 text-sm text-foreground/60">
              <MapPin className="h-4 w-4 shrink-0" />
              {workshop.location}
            </p>
            <p className="mt-3 flex-1 text-foreground/70 leading-relaxed">
              {workshop.description}
            </p>
            <button
              type="button"
              onClick={() => (isUpcoming ? setRegisterOpen(true) : setDetailsOpen(true))}
              className="btn-secondary mt-4 w-full sm:w-auto"
            >
              {isUpcoming ? "Register Interest" : "View Details"}
            </button>
          </div>
        </article>
      </Reveal>

      <WorkshopRegisterModal
        workshop={workshop}
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />
      <WorkshopDetailsModal
        workshop={workshop}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}
