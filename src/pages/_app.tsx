import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        titleTemplate="%s | Josh Farrant"
        canonical="https://advent-of-code.farrant.me/2025/days"
        themeColor="#f472b6"
        openGraph={{
          type: 'website',
          siteName: 'Farrant.me',
          url: 'https://advent-of-code.farrant.me/2025/days',
          title: 'Josh Farrant — Advent of Code 2025',
          description: 'View my solutions to Advent of Code 2025 puzzles.',
          images: [
            {
              url: 'https://advent-of-code.farrant.me/img/preview.png',
              width: 664,
              height: 445,
              alt: 'Advent calendar showing doors 1 to 6, each of which has two gold stars in the corner.',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@farpixel',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
