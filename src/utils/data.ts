import {
  IndexData,
  IndexDataSchema,
  PuzzleSchema,
  PuzzleWithHtml,
} from '@/types/puzzle';
import { mdToHtml } from './markdown';

export const getIndexData = async (): Promise<IndexData> => {
  const indexData = await import('@/json/index.json');
  IndexDataSchema.parse(indexData);
  return indexData;
};

export const getPuzzleData = async (day: string): Promise<PuzzleWithHtml> => {
  const puzzleData = await import(`@/json/${day}.json`);
  PuzzleSchema.parse(puzzleData);

  const [descriptionHtml, notesHtml] = await Promise.all([
    mdToHtml(puzzleData.puzzle.description),
    mdToHtml(puzzleData.notes),
  ]);

  return {
    ...puzzleData,
    html: { description: descriptionHtml, notes: notesHtml },
  };
};
