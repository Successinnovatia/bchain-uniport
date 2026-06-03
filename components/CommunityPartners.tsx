"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { PARTNERS, SOCIAL_LINKS, TESTIMONIALS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SOCIAL_ICONS: Record<string, typeof Twitter> = {
  "X (Twitter)": Twitter,
  Telegram: MessageCircle,
  Instagram: Instagram,
  Facebook: Facebook,
  Email: Mail,
  LinkedIn: Linkedin,
};

export function CommunityPartners() {
  return (
    <section id="community" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Community"
          title="Community & Partners"
          description="Hear from members and connect with us across social platforms."
        />

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <blockquote className="glass-card h-full p-6">
                <p className="text-foreground/85 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-white/10 pt-4">
                  <cite className="not-italic font-semibold text-foreground">
                    {t.author}
                  </cite>
                  <p className="text-sm text-foreground/60">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground/80">
            Partners & Collaborators
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5 text-sm font-medium text-foreground/50"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            Connect With Us
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label] ?? MessageCircle;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 px-5 py-3 transition hover:border-primary/40 hover:shadow-glow"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-foreground/60">{social.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {social.handle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
