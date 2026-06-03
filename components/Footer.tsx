import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${SITE.name} logo`}
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-foreground/65 leading-relaxed">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
              Social
            </p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.slice(0, 4).map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-accent transition"
                  >
                    {social.handle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-foreground/50">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
