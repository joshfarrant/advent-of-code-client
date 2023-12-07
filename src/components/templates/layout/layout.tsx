import Link from 'next/link';
import { Props } from './layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className="py-0 sm:pb-8 px-0 lg:px-8">
      <nav className="z-20 sticky lg:static sm:pt-4 lg:pt-8 top-0 bg-white w-full max-w-[42rem] lg:max-w-[99rem] mx-auto mb-3 sm:mb-5">
        <h1 className="flex flex-row justify-between items-center pt-2 sm:pt-0 mb-2 sm:mb-4 px-3 lg:px-4">
          <Link href="/2023/days">
            <span className="text-xl sm:text-3xl font-medium mr-8 text-gradient">
              Josh Farrant
            </span>
          </Link>
          <a
            href="https://https://adventofcode.com/2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gray-800 p-1 sm:px-2 sm:py-1 rounded-md sm:rounded-lg">
              <span className="text-md sm:text-xl font-mono tracking-tight text-gradient-green ">
                Advent of Code 2023
              </span>
            </div>
          </a>
        </h1>
        <div className="max-w-full max-w-screen h-1 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600"></div>
      </nav>
      <main className="px-2 lg:px-0 max-w-screen max-h-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};
