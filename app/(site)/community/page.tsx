import { ImageGallery } from "@/components/ImageGallery";
import { PageHeader } from "@/components/PageHeader";
import { PartnersStrip } from "@/components/PartnersStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialConnect } from "@/components/SocialConnect";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "Community",
  "Join the Blockchain Uniport community — member stories, event photos, and social channels.",
);

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Our Community"
        description="Stories, photos, and connections from students building the future of blockchain at Uniport."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Member Stories"
            title="Testimonials"
            description="Hear from students who have grown with Blockchain Uniport."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.author} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/50">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Community Moments"
            description="Snapshots from workshops, meetups, and campus events."
          />
          <ImageGallery />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Collaborators"
            title="Partners"
            description="Organizations and projects we collaborate with."
          />
          <PartnersStrip />
        </div>
      </section>

      <section className="section-padding bg-surface/50 pt-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Stay Connected"
            title="Follow Us"
            description="Join the conversation across our social channels."
          />
          <SocialConnect />
        </div>
      </section>
    </>
  );
}
