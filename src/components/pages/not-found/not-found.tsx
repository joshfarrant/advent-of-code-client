import { Layout } from '@/components/templates/layout';
import Link from 'next/link';

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
      <div className="flex flex-col justify-center items-center w-full max-w-[42rem] lg:max-w-[99rem]">
        <h2 className="mt-16 text-8xl font-black text-gradient">404</h2>
        <Link
          href="/2023/days"
          className="text-4xl font-black text-white mt-8 px-6 py-4 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-600 border-4 border-primary-300"
        >
          I want you back
        </Link>
      </div>
    </Layout>
  );
};
