import { About } from "@/components/About";
import { CommunityPartners } from "@/components/CommunityPartners";
import { ContactForm } from "@/components/ContactForm";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Programs } from "@/components/Programs";
import { Resources } from "@/components/Resources";
import { VisionMission } from "@/components/VisionMission";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Programs />
        <Resources />
        <Events />
        <CommunityPartners />
        <ContactForm />
      </main>
      <Footer />

      <a
        href="https://t.me/BlockchainUniportCommunity"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
      >
        Join Telegram
      </a>
    </>
  );
}
