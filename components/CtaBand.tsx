"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to join the community?",
  description = "Connect with students and young people, attend workshops, and grow your blockchain knowledge.",
}: CtaBandProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-50" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-foreground/70">
                {description}
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Join Blockchain Uniport
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
