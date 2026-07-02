"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { Modal } from "./Modal";
import { SuccessState } from "./SuccessState";

export function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowSuccess(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <Reveal>
        <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Interest / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Tell us what you're interested in — workshops, mentorship, events..."
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Join Blockchain Uniport
            <Send className="h-4 w-4" />
          </button>
        </form>
      </Reveal>

      <Modal open={showSuccess} onClose={() => setShowSuccess(false)}>
        <SuccessState
          title="You've Successfully Joined!"
          message="Thank you for joining Blockchain Uniport. We'll reach out soon with details about workshops, events, and community opportunities."
          onClose={() => setShowSuccess(false)}
          actionLabel="Explore Community"
          actionHref="/community"
        />
      </Modal>
    </>
  );
}
