import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CommunityPreview } from "@/components/CommunityPreview";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsGrid } from "@/components/StatsGrid";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WorkshopCard } from "@/components/WorkshopCard";
import { TESTIMONIALS, WORKSHOPS } from "@/data/site";

export default function HomePage() {
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);
  const nextWorkshop = WORKSHOPS.find((w) => w.status === "upcoming");

  return (
    <>
      <Hero />
      <CommunityPreview />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Impact"
            title="Growing Together"
            description="A thriving community for students and young people at the University of Port Harcourt."
          />
          <StatsGrid />
        </div>
      </section>

      <section className="section-padding bg-surface/50">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Member Stories"
            title="What Our Community Says"
            description="Hear from students and young people who have grown with Blockchain Uniport."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={t.author} {...t} delay={i * 0.1} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              View all testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {nextWorkshop && (
        <section className="section-padding">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Up Next"
              title="Next Workshop"
              description="Don't miss our upcoming sessions — register your interest today."
            />
            <div className="mx-auto max-w-md">
              <WorkshopCard workshop={nextWorkshop} />
            </div>
            <div className="mt-8 text-center">
              <Link href="/workshops" className="btn-secondary">
                View All Workshops
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
