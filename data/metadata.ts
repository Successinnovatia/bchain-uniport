import type { Metadata } from "next";
import { SITE } from "./site";

export function pageMetadata(
  title: string,
  description?: string,
): Metadata {
  return {
    title: `${title} | ${SITE.name}`,
    description: description ?? SITE.description,
  };
}
