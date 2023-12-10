import { NextSeo } from 'next-seo';

import { NotFound } from '@/components/pages/not-found';

export default function Page() {
  return (
    <>
      <NextSeo
        title="404"
        description="Looks like you've lost your way, friend."
        canonical="https://advent-of-code.farrant.me/404"
      />
      <NotFound />
    </>
  );
}
