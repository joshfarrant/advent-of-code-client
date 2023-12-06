import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Day } from '@/types/puzzle';
import { getIndexData } from '@/utils/data';

type Props = {
  days: Day[];
};

export const getStaticProps = (async context => {
  const indexData = await getIndexData();

  const days = indexData.data;

  return { props: { days } };
}) satisfies GetStaticProps<Props>;

export default function Page({
  days,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Days</h1>
      <ul>
        {days.map(day => (
          <li key={day.day}>
            <a href={`/2023/days/${day.day}`}>{day.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
