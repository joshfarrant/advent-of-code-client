import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import invariant from 'tiny-invariant';
import { Puzzle } from '@/types/puzzle';
import { Day } from '@/components/pages/day';
import { getIndexData, getPuzzleData } from '@/utils/data';

type Props = Puzzle;

export const getStaticPaths = (async () => {
  const indexData = await getIndexData();

  const days = indexData.data;

  const paths = days.map(day => ({ params: { day: day.day.toString() } }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async context => {
  const day = context.params?.day;
  invariant(typeof day === 'string');

  const { meta, puzzle, notes, solutions } = await getPuzzleData(day);
  return { props: { meta, puzzle, notes, solutions } };
}) satisfies GetStaticProps<Props>;

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return <Day {...props} />;
}
