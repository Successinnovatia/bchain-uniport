"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMMUNITY } from "@/data/site";
import { Reveal } from "./Reveal";

export function CommunityPreview() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass-card p-8 sm:p-10 lg:flex lg:items-center lg:gap-12">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Community
              </p>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                A community for young people passionate about blockchain education
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {COMMUNITY.story.split("\n\n")[0]}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 shrink-0 text-center lg:mt-0">
              <p className="text-5xl font-bold text-primary">Since</p>
              <p className="text-4xl font-bold text-foreground">
                {COMMUNITY.foundedYear}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
