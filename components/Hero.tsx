"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section className="page-top relative min-h-screen overflow-hidden pb-16 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 bg-grid-pattern bg-grid"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Rocket className="h-4 w-4" />
            {SITE.tagline}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Bridging Young People to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blockchain Knowledge
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            {SITE.description} Join workshops, events, and a community built for
            the future of technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Join the Community
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/workshops" className="btn-secondary">
              View Workshops
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative glass-card overflow-hidden p-2">
              <Image
                src="/images/mission-card.png"
                alt="Blockchain Uniport mission"
                width={600}
                height={600}
                className="w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
