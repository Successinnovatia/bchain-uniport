import { LeadershipProfile } from "@/components/LeadershipProfile";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsGrid } from "@/components/StatsGrid";
import { ValuesGrid } from "@/components/ValuesGrid";
import { VisionMission } from "@/components/VisionMission";
import { COFOUNDER, COMMUNITY, FOUNDER } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "About",
  "Learn about Blockchain Uniport — our story, values, and mission at the University of Port Harcourt.",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Our Community"
        description="Blockchain Uniport is a youth-focused blockchain community rooted at the University of Port Harcourt."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4 text-lg text-foreground/75 leading-relaxed">
            {COMMUNITY.story.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/50 pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Community at a Glance"
          />
          <StatsGrid />
        </div>
      </section>

      <VisionMission />

      <section id="leadership" className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Founders"
            description="The team behind Blockchain Uniport's mission to empower young people with blockchain knowledge."
          />
          <LeadershipProfile leader={FOUNDER} priority />
          <div className="mt-20">
            <LeadershipProfile leader={COFOUNDER} reversed />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/50">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            description="The principles that shape every workshop, event, and conversation."
          />
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
