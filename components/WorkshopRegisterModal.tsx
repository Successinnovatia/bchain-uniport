"use client";

import { FormEvent, useState } from "react";
import { Calendar, MapPin, Send } from "lucide-react";
import type { WorkshopItem } from "@/data/site";
import { Modal } from "./Modal";
import { SuccessState } from "./SuccessState";

type WorkshopRegisterModalProps = {
  workshop: WorkshopItem | null;
  open: boolean;
  onClose: () => void;
};

export function WorkshopRegisterModal({
  workshop,
  open,
  onClose,
}: WorkshopRegisterModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!workshop) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={submitted ? undefined : `Register — ${workshop.title}`}
    >
      {submitted ? (
        <SuccessState
          title="Registration Successful!"
          message={`You're registered for "${workshop.title}" on ${workshop.date}. We'll send event details to your email soon.`}
          onClose={handleClose}
          actionLabel="View More Workshops"
          actionHref="/workshops"
        />
      ) : (
        <>
          <div className="mb-5 space-y-2 rounded-xl bg-white/5 p-4 text-sm">
            <p className="flex items-center gap-2 text-accent">
              <Calendar className="h-4 w-4" />
              {workshop.date}
            </p>
            <p className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-4 w-4 shrink-0" />
              {workshop.location}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="reg-name" className="mb-2 block text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                id="reg-name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="reg-email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="reg-email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="you@student.uniport.edu.ng"
              />
            </div>

            <div>
              <label htmlFor="reg-dept" className="mb-2 block text-sm font-medium text-foreground">
                Department (optional)
              </label>
              <input
                id="reg-dept"
                name="department"
                type="text"
                className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="e.g. Computer Science"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Confirm Registration
              <Send className="h-4 w-4" />
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
