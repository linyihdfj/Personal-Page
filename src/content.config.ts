import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const academic = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/academic" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { academic };
