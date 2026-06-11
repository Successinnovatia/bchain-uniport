"use client";

import Image from "next/image";
import { GALLERY } from "@/data/site";
import { Reveal } from "./Reveal";

export function ImageGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {GALLERY.map((photo, i) => (
        <Reveal key={photo.src} delay={i * 0.08}>
          <figure className="group glass-card overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            {photo.caption && (
              <figcaption className="p-3 text-sm font-medium text-foreground/70">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
