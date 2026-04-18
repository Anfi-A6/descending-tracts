import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import Level from "@data/Level";

const levels = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/levels" }),
  schema: Level,
});

export const collections = { levels };
