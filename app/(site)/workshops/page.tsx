import { PageHeader } from "@/components/PageHeader";
import { WorkshopList } from "@/components/WorkshopList";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "Workshops",
  "Explore upcoming and past blockchain workshops and campus events hosted by Blockchain Uniport.",
);

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn & Build"
        title="Workshops & Events"
        description="Hands-on sessions and campus events to help you learn blockchain technology from the ground up."
      />
      <WorkshopList />
    </>
  );
}
