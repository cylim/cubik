import React from 'react';

import { Button } from '@cubik/ui';

import { EmailCard } from './cards/EmailCard';
import { TableCard } from './table/TableCard';

export const RegistrationsSection = () => {
  const segments = [
    { color: 'bg-[var(--color-orange-500)]', width: 10 },
    { color: 'bg-[var(--color-blue-400)]', width: 10 },
    { color: 'bg-[var(--color-red-600)]', width: 10 },
  ];
  return (
    <>
      <div>
        <div className="my-5 flex items-center justify-between px-3 md:px-0 ">
          <h3 className="flex gap-2 text-2xl font-semibold text-black dark:text-white">
            Registration
            <span className="hidden md:block">Overview</span>
          </h3>
          <div className="flex gap-5">
            <Button
              className="flex items-center justify-center gap-2"
              size={'sm'}
              variant={'primary'}
            >
              <p className="hidden md:block">Set Capacity</p>
              <div>
                <svg
                  className="h-4 w-4 "
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33332 2.66671L12.6667 2.66671M12 9.22031C10.9629 7.81804 9.75147 6.5586 8.3962 5.47306C8.27994 5.37993 8.13997 5.33337 7.99999 5.33337M3.99999 9.22031C5.03703 7.81804 6.24851 6.5586 7.60378 5.47306C7.72004 5.37993 7.86001 5.33337 7.99999 5.33337M7.99999 5.33337L7.99999 13.3334"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Button>
            <Button type="button" variant={'danger'} size={'md'}>
              Close Registration
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-3 md:px-0">
          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-lg font-normal text-[var(--color-fg-info-secondary)]">
              <span className="text-2xl font-semibold">5</span> New Registration
            </h3>
            <h3 className="text-lg font-normal text-[var(--color-neutral-500)]">
              capacity <span className="text-2xl font-semibold">10</span>
            </h3>
          </div>
          <div className="flex h-6 w-full overflow-hidden rounded-lg bg-[var(--color-neutral-880)] ">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={`h-full ${segment.color}`}
                style={{ width: `${segment.width}%` }}
              ></div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row ">
            <EmailCard
              color="bg-[var(--color-orange-500)]"
              count={10}
              type="Accepted"
            />
            <EmailCard
              color="bg-[var(--color-blue-400)]"
              count={10}
              type="Received"
            />
            <EmailCard
              color="bg-[var(--color-red-600)]"
              count={10}
              type="Declined"
            />
          </div>
        </div>
        <div className="px-3 md:px-0">
          <div className="my-7 flex h-14 items-center justify-between">
            <p className="text-2xl font-semibold text-white">Project</p>
            <Button
              className="flex items-center justify-center gap-2"
              size={'md'}
              variant={'secondary'}
            >
              <p className="hidden md:block">Download List</p>
              <div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0833 11.6666H2.91666M3.49999 5.93225C4.4074 7.15923 5.46745 8.26124 6.6533 9.21109C6.75503 9.29257 6.87751 9.33331 6.99999 9.33331M10.5 5.93225C9.59258 7.15923 8.53253 8.26124 7.34668 9.21109C7.24495 9.29257 7.12247 9.33331 6.99999 9.33331M6.99999 9.33331V2.33331"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
        <TableCard />
      </div>
    </>
  );
};
