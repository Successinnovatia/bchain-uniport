"use client";

import { motion } from "framer-motion";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="page-top relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-grid-pattern bg-grid"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}
