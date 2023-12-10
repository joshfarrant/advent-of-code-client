import { LockClosedIcon, StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Layout } from '@/components/templates/layout';

import { Props } from './days.types';

const emptyDays = Array.from({ length: 25 });

export const Days = ({ days }: Props) => {
  return (
    <>
      <NextSeo
        title="Advent Calendar"
        description="View my solutions to Advent of Code 2023 puzzles."
        canonical="https://advent-of-code.farrant.me/2023/days"
      />
      <Layout>
        <div className="flex w-full max-w-[42rem] flex-col lg:max-w-[99rem]">
          <p className="mt-2 max-w-2xl text-xl text-gray-900">
            Pick a day to view my solutions to an{' '}
            <a
              href="https://adventofcode.com/2023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-semibold"
            >
              Advent of Code 2023
            </a>{' '}
            puzzle.
          </p>

          <ul className="grid grid-cols-2 gap-8 pb-8 pt-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
            {emptyDays.map((_, i) => {
              const dayNumber = i + 1;
              const hasDay = days.findIndex(d => d.day === dayNumber) > -1;

              return (
                <li
                  key={i}
                  className={clsx(
                    hasDay
                      ? 'cursor-pointer bg-gradient-to-br from-primary-400 to-secondary-600 hover:scale-105 hover:shadow-xl'
                      : 'cursor-not-allowed bg-gradient-to-br from-primary-100 to-secondary-200',
                    'relative flex aspect-square items-center justify-center rounded-md shadow transition-all focus-within:bg-blue-500',
                  )}
                >
                  {hasDay ? (
                    <Link
                      href={`/2023/days/${dayNumber}`}
                      className="text-gradient-light h-full w-full opacity-80"
                      tabIndex={0}
                    >
                      <div className="flex h-full w-full items-center justify-center text-center text-8xl font-black">
                        {dayNumber.toString().padStart(2, '0')}
                      </div>
                    </Link>
                  ) : (
                    <div className="text-gradient text-center text-8xl font-black opacity-80">
                      {dayNumber.toString().padStart(2, '0')}
                    </div>
                  )}
                  {hasDay ? (
                    <div className="absolute bottom-2 left-2 flex gap-2">
                      <StarIcon className="h-6 w-6 text-yellow-300" />
                      <StarIcon className="h-6 w-6 text-yellow-300" />
                    </div>
                  ) : (
                    <LockClosedIcon className="absolute bottom-2 right-2 h-6 w-6 text-primary-600" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    </>
  );
};
