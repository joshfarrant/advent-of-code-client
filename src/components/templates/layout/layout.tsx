import Link from 'next/link';
import { Props } from './layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className="px-0 pb-0 selection:bg-primary-500 selection:text-white sm:pb-8 lg:px-8">
      <nav className="sticky top-0 z-20 mx-auto mb-3 w-full max-w-[42rem] bg-white sm:mb-5 sm:pt-4 lg:static lg:max-w-[99rem] lg:pt-8">
        <div className="text-gradient mb-2 flex flex-row items-center justify-between px-3 pt-2 sm:mb-4 sm:pt-0 lg:px-4">
          <div className="mr-8 flex flex-col items-start text-xl tracking-tight sm:text-3xl lg:flex-row lg:items-center">
            <h1>
              <Link
                href="/2023/days"
                className="bg-clip-text font-medium hover:bg-secondary-600"
              >
                Josh Farrant
              </Link>
            </h1>
            <span className="mx-3 hidden text-4xl font-thin lg:inline-block">
              /
            </span>

            <h2>
              <a
                href="https://https://adventofcode.com/2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md bg-clip-text font-light hover:bg-secondary-600 sm:text-xl md:text-3xl"
              >
                Advent of Code <span className="hidden sm:inline">2023</span>
              </a>
            </h2>
          </div>
          <div className="text-md flex flex-row space-x-3 font-semibold tracking-tight sm:space-x-5 sm:text-lg">
            <Link
              className="bg-clip-text hover:bg-primary-400"
              href="/2023/days"
            >
              All days
            </Link>
            <Link className="bg-clip-text hover:bg-primary-400" href="/about">
              About
            </Link>
            <a
              className="bg-clip-text hover:bg-primary-400"
              href="https://farrant.me/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="max-w-screen h-1 max-w-full rounded-full bg-gradient-to-br from-primary-400 to-secondary-600"></div>
      </nav>
      <main className="max-w-screen flex max-h-full flex-col items-center px-2 lg:px-0">
        {children}
      </main>
    </div>
  );
};
