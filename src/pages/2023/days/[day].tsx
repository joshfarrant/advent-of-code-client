import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import invariant from 'tiny-invariant';
import { LightweightDay } from '@/types/puzzle';
import { Day } from '@/components/pages/day';
import { getIndexData, getPuzzleData } from '@/utils/data';

export const getStaticPaths = (async () => {
  const indexData = await getIndexData();

  const paths = indexData.data.map(({ day }) => ({
    params: { day: day.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async context => {
  const day = context.params?.day;
  invariant(typeof day === 'string');

  const { meta, puzzle, notes, solutions, html } = await getPuzzleData(day);
  return {
    props: {
      createdAt: meta.createdAt,
      day: puzzle.day,
      title: puzzle.title,
      notesHtml: html.notes,
      part1Solution: solutions.part1,
      part2Solution: solutions.part2,
    },
  };
}) satisfies GetStaticProps<LightweightDay>;

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return <Day {...props} />;
}
