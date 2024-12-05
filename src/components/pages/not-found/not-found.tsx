import Link from 'next/link';

import { Layout } from '@/components/templates/layout';

// const lyrics = [
//   "Back in black, I hit the sack, I've been too long, I'm glad to be back.",
//   'I want you back, I want you back, I want you back for good.',
//   'Back to life, back to reality.',
//   'We are never ever ever getting back together.',
//   'Life is a lemon and I want my money back.',
//   "Don't look back in anger, I heard you say.",
//   "I'm bringing sexy back.",
//   'Back in the USSR.',
//   'Get back to where you once belonged.',
// ];

export const NotFound = () => {
  return (
    <Layout>
      <div className="flex w-full max-w-[42rem] flex-col items-center justify-center lg:max-w-[99rem]">
        <h2 className="text-gradient mt-16 text-8xl font-black">404</h2>
        <Link
          href="/2024/days"
          className="mt-8 rounded-xl border-4 border-primary-300 bg-gradient-to-br from-primary-400 to-secondary-600 px-6 py-4 text-4xl font-black text-white"
        >
          I want you back
        </Link>
      </div>
    </Layout>
  );
};
