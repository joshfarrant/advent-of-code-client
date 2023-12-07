import Link from 'next/link';
import { Props } from './layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className="py-0 sm:pb-8 px-0 lg:px-8 selection:bg-primary-500 selection:text-white">
      <nav className="z-20 sticky lg:static sm:pt-4 lg:pt-8 top-0 bg-white w-full max-w-[42rem] lg:max-w-[99rem] mx-auto mb-3 sm:mb-5">
        <div className="flex flex-row justify-between items-center pt-2 sm:pt-0 mb-2 sm:mb-4 px-3 lg:px-4 text-gradient">
          <div className="flex flex-col lg:flex-row items-start lg:items-center sm:text-3xl mr-8 text-xl tracking-tight">
            <h1>
              <Link
                href="/2023/days"
                className="font-medium hover:bg-secondary-600 bg-clip-text"
              >
                Josh Farrant
              </Link>
            </h1>
            <span className="hidden lg:inline-block mx-3 font-thin text-4xl">
              /
            </span>
            <h2>
              <a
                href="https://https://adventofcode.com/2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md sm:text-xl font-light opacity-90 hover:bg-secondary-600 bg-clip-text"
              >
                Advent of Code <span className="hidden sm:inline">2023</span>
              </a>
            </h2>
          </div>
          <div className="flex flex-row font-semibold text-md sm:text-lg space-x-3 sm:space-x-5 tracking-tight">
            <Link
              className="hover:bg-primary-400 bg-clip-text"
              href="/2023/days"
            >
              All days
            </Link>
            <Link className="hover:bg-primary-400 bg-clip-text" href="/about">
              About
            </Link>
            <a
              className="hover:bg-primary-400 bg-clip-text"
              href="https://farrant.me/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="max-w-full max-w-screen h-1 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600"></div>
      </nav>
      <main className="px-2 lg:px-0 max-w-screen max-h-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};
