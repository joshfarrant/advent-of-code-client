import { IndexDataSchema, PuzzleSchema } from '@/types/puzzle';

export const getIndexData = async () => {
  const indexData = await import('@/json/index.json');
  IndexDataSchema.parse(indexData);
  return indexData;
};

export const getPuzzleData = async (day: string) => {
  const puzzleData = await import(`@/json/${day}.json`);
  PuzzleSchema.parse(puzzleData);
  return puzzleData;
};
