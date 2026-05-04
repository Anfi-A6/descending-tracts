import { z } from "astro/zod";

const Book = z.object({
  authorName: z.string(),
  authorLastName: z.string(),
  year: z.number(),
  title: z.string(),
});

export default Book;
