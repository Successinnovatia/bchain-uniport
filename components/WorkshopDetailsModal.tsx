"use client";

import { Calendar, MapPin } from "lucide-react";
import type { WorkshopItem } from "@/data/site";
import { Modal } from "./Modal";

type WorkshopDetailsModalProps = {
  workshop: WorkshopItem | null;
  open: boolean;
  onClose: () => void;
};

export function WorkshopDetailsModal({
  workshop,
  open,
  onClose,
}: WorkshopDetailsModalProps) {
  if (!workshop) return null;

  return (
    <Modal open={open} onClose={onClose} title={workshop.title}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold capitalize text-accent">
            {workshop.type}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-foreground/70">
            Past Event
          </span>
        </div>
        <p className="flex items-center gap-2 text-sm text-accent">
          <Calendar className="h-4 w-4" />
          {workshop.date}
        </p>
        <p className="flex items-center gap-2 text-sm text-foreground/70">
          <MapPin className="h-4 w-4 shrink-0" />
          {workshop.location}
        </p>
        <p className="text-foreground/80 leading-relaxed">{workshop.description}</p>
        <button type="button" onClick={onClose} className="btn-secondary w-full">
          Close
        </button>
      </div>
    </Modal>
  );
}
