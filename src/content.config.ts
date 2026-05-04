import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import Level from "@data/Level";
import Book from "@data/Book";

const levels = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/levels" }),
  schema: ({ image }) => Level(image),
});

const referenceBooks = defineCollection({
  loader: file("./src/data/referenceBooks.json"),
  schema: Book,
});

export const collections = { levels, referenceBooks };
