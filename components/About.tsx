"use client";

import { GraduationCap, Globe, Users } from "lucide-react";
import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Student-first education",
    text: "Beginner-friendly learning paths designed for campus life and busy schedules.",
  },
  {
    icon: Users,
    title: "Strong community",
    text: "Connect with peers, mentors, and builders who share your curiosity about Web3.",
  },
  {
    icon: Globe,
    title: "Future-ready skills",
    text: "Blockchain is reshaping finance, identity, and digital ownership — start early.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Us"
          title={`Who is ${SITE.name}?`}
          description="We are the University of Port Harcourt's student blockchain community — dedicated to making cryptocurrencies and blockchain technology accessible, practical, and exciting for every student."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="glass-card h-full p-6 transition hover:border-primary/30 hover:shadow-glow">
                <item.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="glass-card border-primary/20 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-foreground">
              Why this matters for students
            </h3>
            <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed text-lg">
              Technology moves fast. Students who understand blockchain early gain
              an edge in careers, entrepreneurship, and innovation. Blockchain Uniport
              creates a safe, supportive space to learn, experiment, and grow — no
              prior experience required.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
