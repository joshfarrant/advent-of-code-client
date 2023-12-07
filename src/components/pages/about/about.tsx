import { Layout } from '@/components/templates/layout';

export const About = () => {
  return (
    <Layout>
      <div className="flex w-full max-w-[42rem] flex-col items-center justify-center lg:max-w-[99rem]">
        <h2 className="text-gradient mb-8 mt-16 text-8xl font-black">About</h2>
        <div className="prose-lg prose-zinc max-w-2xl text-center sm:prose-xl">
          <p>
            This is a little site I created to share my solutions to the Advent
            of Code 2023 challenges, and hopefully help me commit to completing
            all 25 days.
          </p>

          <p>
            Each day shows both parts of the challenge, as well my solutions to
            each one. My solutions are written in TypeScript, and are available
            at{' '}
            <a
              href="https://github.com/joshfarrant/advent-of-code-2023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-semibold"
            >
              github.com/joshfarrant/advent-of-code-2023
            </a>
            .
          </p>

          <p>
            You can find me at{' '}
            <a
              href="https://farrant.me/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-semibold"
            >
              farrant.me
            </a>
            , or on Mastodon at{' '}
            <a
              href="https://mastodon.social/@farrant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-semibold"
            >
              @farrant@mastodon.social
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};
