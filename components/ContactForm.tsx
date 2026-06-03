"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Get Involved"
          title="Join Blockchain Uniport"
          description="Fill out the form below and we'll get back to you about workshops, events, and community opportunities."
        />

        <Reveal>
          {submitted ? (
            <div className="glass-card p-8 text-center">
              <p className="text-lg font-semibold text-foreground">
                Thank you for your interest!
              </p>
              <p className="mt-2 text-foreground/70">
                We&apos;ll be in touch soon. You can also reach us at{" "}
                <a
                  href="mailto:blockchainuniport@gmail.com"
                  className="text-accent hover:underline"
                >
                  blockchainuniport@gmail.com
                </a>
              </p>
            </div>
          ) : (
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
                  placeholder="you@student.uniport.edu.ng"
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
          )}
        </Reveal>
      </div>
    </section>
  );
}
