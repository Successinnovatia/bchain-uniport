"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/data/site";
import { Reveal } from "./Reveal";

const SOCIAL_ICONS: Record<string, typeof Twitter> = {
  "X (Twitter)": Twitter,
  Telegram: MessageCircle,
  Instagram: Instagram,
  Facebook: Facebook,
  Email: Mail,
};

export function SocialConnect() {
  return (
    <Reveal>
      <div className="flex flex-wrap justify-center gap-4">
        {SOCIAL_LINKS.map((social) => {
          const Icon = SOCIAL_ICONS[social.label] ?? MessageCircle;
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 px-5 py-3 transition hover:border-primary/40 hover:shadow-glow"
            >
              <Icon className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground/60">{social.label}</p>
                <p className="text-sm font-medium text-foreground">
                  {social.handle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Reveal>
  );
}
