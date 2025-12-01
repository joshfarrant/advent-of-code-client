import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Days } from '@/components/pages/days';
import { getIndexData } from '@/utils/data';

type Props = {
  days: { day: number; title: string }[];
};

export const getStaticProps = (async context => {
  const indexData = await getIndexData();

  const days = indexData.data.map(day => ({
    day: day.day,
    title: day.title,
  }));

  return { props: { days } };
}) satisfies GetStaticProps<Props>;

export default function Page({
  days,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Days days={days} />;
}
