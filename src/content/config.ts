import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
        isPublish: z.boolean(),
        isDraft: z.boolean(),
        tags: z.array(z.string()),
        series: z.string(),
        image: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: z.string()
  }),
});

export const collections = { posts: postsCollection };