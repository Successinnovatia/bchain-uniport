import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { CSSProperties } from "react";
import { BRAND_COLORS, SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVars = {
    "--primary": BRAND_COLORS.primary,
    "--secondary": BRAND_COLORS.secondary,
    "--accent": BRAND_COLORS.accent,
  } as CSSProperties;

  return (
    <html lang="en" className="dark" style={cssVars}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
