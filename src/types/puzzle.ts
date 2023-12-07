import { z } from 'zod';

export const IndexDataSchema = z.object({
  meta: z.object({
    createdAt: z.number(),
  }),
  data: z.array(
    z.object({
      day: z.number(),
      title: z.string(),
      file: z.string(),
    }),
  ),
});
export type IndexData = z.infer<typeof IndexDataSchema>;

export const PuzzleSchema = z.object({
  meta: z.object({
    createdAt: z.number(),
  }),
  puzzle: z.object({
    day: z.number(),
    title: z.string(),
    description: z.string(),
    input: z.string(),
  }),
  notes: z.string(),
  solutions: z.object({
    part1: z.string(),
    part2: z.string(),
  }),
});
export type Puzzle = z.infer<typeof PuzzleSchema>;

export type PuzzleWithHtml = Puzzle & {
  html: {
    description: string;
    notes: string;
  };
};

export type LightweightDay = {
  createdAt: number;
  day: number;
  title: string;
  descriptionHtml: string;
  notesHtml: string;
  part1Solution: string;
  part2Solution: string;
};
