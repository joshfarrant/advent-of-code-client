import { Tab } from '@headlessui/react';
import { Props } from './day.types';
import { Code } from '@/components/molecules/code';
import { Layout } from '@/components/templates/layout';
import { Fragment } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export const Day = ({
  createdAt,
  day,
  title,
  descriptionHtml,
  notesHtml,
  part1Solution,
  part2Solution,
}: Props) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 mt-4 sm:mt-6 h-full lg:gap-6 lg:grid-cols-[minmax(25rem,_42rem)_minmax(25rem,_53rem)] xl:gap-8 2xl:gap-16">
        <div className="max-w-full justify-self-center lg:justify-self-auto pb-4 lg:pb-0 border-b-4 lg:border-0 border-primary-500 border-dotted">
          <h2 className="mb-2 text-2xl sm:text-4xl space-x-2 sm:space-x-4 text-gray-900 tracking-tight">
            <span className="font-light">Day {day}</span>
            <span className="font-bold text-gradient">{title}</span>
          </h2>
          <div
            className="prose prose-zinc my-4 prose-em:not-italic prose-em:font-semibold prose-em:text-transparent prose-em:bg-clip-text prose-em:bg-gradient-to-br prose-em:from-primary-400 prose-em:to-secondary-600 prose-headings:font-bold prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-br prose-headings:from-primary-400 prose-headings:to-secondary-600"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>
        <div className="static lg:sticky top-4 lg:overflow-y-hidden lg:max-h-[calc(100vh-2rem)]">
          <Tab.Group
            as="div"
            className="flex flex-col h-full drop-shadow-md self-start mt-8 lg:mt-0"
          >
            <Tab.List className="space-x-4 ml-3 sm:ml-6">
              {['Part 1', 'Part 2', 'Notes'].map((part, i) => (
                <Tab as={Fragment} key={part}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        selected
                          ? 'text-gray-100 bg-primary-500 border-primary-500'
                          : 'text-primary-800 bg-primary-100 border-primary-200 hover:text-primary-500 hover:border-primary-500 hover:bg-primary-100',
                        'min-w-0 border-4 py-2 px-3 rounded-t-lg text-center text-sm relative top-1 font-bold outline-none ring-offset-2 ring-purple-500 focus-visible:ring',
                      )}
                    >
                      {part}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <div className="overflow-y-hidden rounded-xl p-2 relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500">
              <Tab.Panels className="overflow-y-auto max-h-full rounded-xl px-4 py-5 sm:p-5 bg-gray-800">
                <Tab.Panel>
                  <Code code={part1Solution} />
                </Tab.Panel>
                <Tab.Panel>
                  <Code code={part2Solution} />
                </Tab.Panel>
                <Tab.Panel>
                  <div
                    className="prose prose-invert prose-zinc my-4 prose-em:not-italic prose-em:font-semibold prose-em:text-transparent prose-em:bg-clip-text prose-em:bg-gradient-to-br prose-em:from-primary-400 prose-em:to-secondary-600"
                    dangerouslySetInnerHTML={{ __html: notesHtml }}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};
