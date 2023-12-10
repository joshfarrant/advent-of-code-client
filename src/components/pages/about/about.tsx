import { NextSeo } from 'next-seo';

import { Layout } from '@/components/templates/layout';

export const About = () => {
  return (
    <>
      <NextSeo
        title="About"
        description="What is this website anyway?"
        canonical="https://advent-of-code.farrant.me/about"
      />
      <Layout>
        <div className="flex w-full max-w-[42rem] flex-col items-center justify-center px-2 lg:max-w-[99rem]">
          <h2 className="text-gradient mb-8 mt-8 text-8xl font-black sm:mt-16">
            About
          </h2>
          <div className="prose-lg prose-gray max-w-2xl text-center sm:prose-xl">
            <p>
              This is a little site I created to share my solutions to the{' '}
              <a
                href="https://adventofcode.com/2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient  font-semibold"
              >
                Advent of Code 2023
              </a>{' '}
              puzzles, and hopefully help me commit to completing all 25 days.
            </p>

            <p>
              Each day shows both parts of the puzzle, as well my solutions to
              each one. My solutions are written in TypeScript, and are
              available on{' '}
              <a
                href="https://github.com/joshfarrant/advent-of-code-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient whitespace-nowrap font-semibold"
              >
                GitHub
              </a>
              .
            </p>

            <p>
              You can find me at{' '}
              <a
                href="https://farrant.me/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient whitespace-nowrap font-semibold"
              >
                farrant.me
              </a>
              , or on Mastodon at{' '}
              <a
                href="https://mastodon.social/@farrant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient whitespace-nowrap font-semibold"
              >
                @farrant@mastodon.social
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
