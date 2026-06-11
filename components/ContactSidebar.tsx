import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/site";

export function ContactSidebar() {
  const telegram = SOCIAL_LINKS.find((s) => s.label === "Telegram");
  const email = SOCIAL_LINKS.find((s) => s.label === "Email");

  return (
    <aside className="glass-card space-y-6 p-8">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Get in touch</h2>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
          Have questions about joining, workshops, or partnerships? Reach out
          directly or join our Telegram community.
        </p>
      </div>

      {email && (
        <Link
          href={email.href}
          className="flex items-center gap-3 text-foreground/80 transition hover:text-accent"
        >
          <Mail className="h-5 w-5 text-primary" />
          <span className="text-sm">{email.handle}</span>
        </Link>
      )}

      {telegram && (
        <Link
          href={telegram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          <MessageCircle className="h-4 w-4" />
          Join Telegram
        </Link>
      )}

      <ul className="space-y-2 border-t border-white/10 pt-6">
        {SOCIAL_LINKS.map((social) => (
          <li key={social.label}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/65 hover:text-accent transition"
            >
              {social.label}: {social.handle}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
