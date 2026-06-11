import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
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
