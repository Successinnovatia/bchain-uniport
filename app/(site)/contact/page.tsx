import { ContactForm } from "@/components/ContactForm";
import { ContactSidebar } from "@/components/ContactSidebar";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Get in touch with Blockchain Uniport — join the community, ask questions, or explore partnerships.",
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Join Blockchain Uniport"
        description="Fill out the form below and we'll get back to you about workshops, events, and community opportunities."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </section>
    </>
  );
}
