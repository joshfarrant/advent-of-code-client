import { z } from 'zod';

export const DaySchema = z.object({
  day: z.number(),
  title: z.string(),
  file: z.string(),
});
export type Day = z.infer<typeof DaySchema>;

export const IndexDataSchema = z.object({
  meta: z.object({
    createdAt: z.number(),
  }),
  data: z.array(DaySchema),
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
