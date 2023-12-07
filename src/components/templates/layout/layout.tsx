import Link from 'next/link';
import { Props } from './layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col px-0 pb-0 selection:bg-primary-500 selection:text-white sm:pb-8 lg:px-8">
      <nav className="sticky top-0 z-20 mx-auto mb-3 w-full max-w-[42rem] bg-white sm:mb-5 sm:pt-4 lg:static lg:max-w-[99rem] lg:pt-8">
        <div className="text-gradient mb-2 flex flex-row items-center justify-between px-3 pt-2 sm:mb-4 sm:pt-0 lg:px-4">
          <Link
            href="/2023/days"
            className="mr-1 flex flex-col items-start whitespace-nowrap bg-clip-text text-xl font-medium tracking-tight hover:bg-secondary-600 sm:text-3xl lg:flex-row lg:items-center"
          >
            <h1>Josh Farrant</h1>
            <span className="mx-3 hidden text-4xl font-thin lg:inline-block">
              /
            </span>
            <h2 className="bg-clip-text text-sm font-light hover:bg-secondary-600 sm:text-xl lg:text-3xl">
              Advent of Code <span className="hidden sm:inline">2023</span>
            </h2>
          </Link>
          <div className="text-md flex flex-row flex-wrap items-end space-x-3 font-semibold tracking-tight sm:space-x-5 sm:text-lg">
            <Link className="bg-clip-text hover:bg-primary-400" href="/about">
              What is this?
            </Link>
            <Link
              className="bg-clip-text hover:bg-primary-400"
              href="/2023/days"
            >
              All days
            </Link>
          </div>
        </div>
        <div className="max-w-screen h-1 max-w-full rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 opacity-80"></div>
      </nav>
      <main className="max-w-screen flex max-h-full flex-1 flex-col items-center px-2 lg:px-0">
        {children}
      </main>
      <footer className="pt-8">
        <div className="max-w-screen h-0.5 max-w-full rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 opacity-50"></div>
        <ul className="text-gradient mx-auto flex w-full max-w-[42rem] items-center justify-end space-x-3 px-3 py-4 font-semibold sm:px-4 lg:max-w-[99rem]">
          <li>
            <a
              className="bg-clip-text hover:bg-primary-400"
              href="https://github.com/joshfarrant/advent-of-code-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="bg-clip-text hover:bg-primary-400"
              href="https://mastodon.social/@farrant"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mastodon
            </a>
          </li>
          <li>
            <a
              className="bg-clip-text hover:bg-primary-400"
              href="https://farrant.me/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
