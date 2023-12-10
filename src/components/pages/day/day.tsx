import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';

import { Code } from '@/components/molecules/code';
import { Layout } from '@/components/templates/layout';

import { Props } from './day.types';

export const Day = ({
  day,
  title,
  notesHtml,
  part1Solution,
  part2Solution,
}: Props) => {
  return (
    <>
      <NextSeo
        title={`Day ${day}`}
        description={`My solution to day ${day} of Advent of Code 2023.`}
        canonical={`https://advent-of-code.farrant.me/2023/days/${day}`}
      />
      <Layout>
        <div className="mt-4 grid h-full grid-cols-1 sm:mt-6 lg:grid-cols-[minmax(25rem,_42rem)_minmax(25rem,_53rem)] lg:gap-6 xl:gap-8 2xl:gap-16">
          <div className="max-w-full justify-self-center border-b-4 border-dotted border-primary-500 pb-4 lg:justify-self-auto lg:border-0 lg:pb-0">
            <h2 className="mb-2 space-x-2 text-2xl tracking-tight text-gray-900 sm:space-x-4 sm:text-4xl">
              <span className="font-light">Day {day}</span>
              <span className="text-gradient font-bold">{title}</span>
            </h2>
            <a
              href={`https://adventofcode.com/2023/day/${day}`}
              className="mt-2 flex max-w-2xl items-center text-xl font-semibold text-gray-900 decoration-secondary-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gradient">
                View puzzle description on Advent of Code
              </span>
              <ArrowTopRightOnSquareIcon className="mt-0.5' ml-1 h-5 w-5 text-secondary-500" />
            </a>
            <div
              className="prose prose-gray my-4 prose-headings:bg-gradient-to-br prose-headings:from-primary-400 prose-headings:to-secondary-600 prose-headings:bg-clip-text prose-headings:font-bold prose-headings:text-transparent prose-em:bg-gradient-to-br prose-em:from-primary-400 prose-em:to-secondary-600 prose-em:bg-clip-text prose-em:font-semibold prose-em:not-italic prose-em:text-transparent"
              dangerouslySetInnerHTML={{ __html: notesHtml }}
            />
          </div>
          <div className="static top-4 lg:sticky lg:max-h-[calc(100vh-2rem)] lg:overflow-y-hidden">
            <Tab.Group
              as="div"
              className="mt-8 flex h-full flex-col self-start drop-shadow-md lg:mt-0"
            >
              <Tab.List className="ml-3 space-x-4 sm:ml-6">
                {['Part 1 Solution', 'Part 2 Solution'].map(part => (
                  <Tab
                    as={Fragment}
                    key={part}
                    data-cabin-event={`View ${part}`}
                  >
                    {({ selected }) => (
                      <button
                        className={clsx(
                          selected
                            ? 'border-primary-500 bg-primary-500 text-gray-100'
                            : 'border-primary-200 bg-primary-100 text-primary-800 hover:border-primary-500 hover:bg-primary-100 hover:text-primary-500',
                          'relative top-1 min-w-0 rounded-t-lg border-4 px-1 py-2 text-center text-xs font-bold outline-none ring-purple-500 ring-offset-2 focus-visible:ring sm:px-3 sm:text-sm',
                        )}
                      >
                        {part}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <div className="relative z-10 overflow-y-hidden rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-2">
                <Tab.Panels className="max-h-full overflow-y-auto rounded-xl bg-gray-800 px-4 py-5 sm:p-5">
                  <Tab.Panel>
                    <Code code={part1Solution} />
                  </Tab.Panel>
                  <Tab.Panel>
                    <Code code={part2Solution} />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </Layout>
    </>
  );
};
