import { Props } from './days.types';
import { Layout } from '@/components/templates/layout';
import Link from 'next/link';
import clsx from 'clsx';
// import { LockClosedIcon } from '@heroicons/react/24/outline';
import { StarIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const emptyDays = Array.from({ length: 25 });

export const Days = ({ days }: Props) => {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-[42rem] lg:max-w-[99rem]">
        <ul className="grid gap-8 py-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
          {emptyDays.map((_, i) => {
            const dayNumber = i + 1;
            const hasDay = days.findIndex(d => d.day === dayNumber) > -1;

            return (
              <li
                key={i}
                className={clsx(
                  hasDay
                    ? 'cursor-pointer bg-gradient-to-br from-primary-400 to-secondary-600'
                    : 'cursor-not-allowed bg-gradient-to-br from-primary-100 to-secondary-200',
                  'flex items-center justify-center shadow rounded-md relative aspect-square focus-within:bg-blue-500',
                )}
              >
                {hasDay ? (
                  <Link
                    href={`/2023/days/${dayNumber}`}
                    className="text-8xl font-black text-gradient-light opacity-80 text-center"
                    tabIndex={0}
                  >
                    {dayNumber.toString().padStart(2, '0')}
                  </Link>
                ) : (
                  <span className="text-8xl font-black text-gradient opacity-80 text-center">
                    {dayNumber.toString().padStart(2, '0')}
                  </span>
                )}
                {hasDay ? (
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <StarIcon className="h-6 w-6 text-yellow-300" />
                    <StarIcon className="h-6 w-6 text-yellow-300" />
                  </div>
                ) : (
                  <LockClosedIcon className="h-6 w-6 text-primary-600 absolute bottom-2 right-2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};
