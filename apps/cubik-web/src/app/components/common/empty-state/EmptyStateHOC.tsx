import React from 'react';
import type { JSX, ReactNode } from 'react';

export const EmptyStateHOC = ({
  heading,
  subHeading,
  children,
  CTA,
  margin,
}: {
  heading: string;
  subHeading: string;
  children?: ReactNode;
  CTA?: JSX.Element;
  margin?: string;
}) => {
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center justify-center rounded-xl p-24 ${
        margin ? 'my-' + margin : 'my-24'
      } gap-4 border border-dashed border-neutral-200`}
    >
      {children ? (
        <>{children}</>
      ) : (
        <div className="flex h-[12vh] w-[15vw] items-center justify-center md:w-[8vw]">
          <svg
            width="128"
            height="132"
            viewBox="0 0 128 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="128"
              height="132"
              rx="12"
              fill="#14665B"
              fillOpacity="0.24"
            />
            <rect
              x="16"
              y="16"
              width="24"
              height="8"
              rx="4"
              fill="#A8F0E6"
              fillOpacity="0.16"
            />
            <rect x="18" y="18" width="20" height="4" rx="2" fill="#A8F0E6" />
            <rect
              x="15.5"
              y="31.5"
              width="25"
              height="85"
              rx="4.5"
              fill="#14665B"
              fillOpacity="0.24"
              stroke="#A8F0E6"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <rect
              x="51.5"
              y="31.5"
              width="25"
              height="85"
              rx="4.5"
              fill="#14665B"
              fillOpacity="0.24"
              stroke="#A8F0E6"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <rect
              x="87.5"
              y="31.5"
              width="25"
              height="85"
              rx="4.5"
              fill="#14665B"
              fillOpacity="0.24"
              stroke="#A8F0E6"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      )}

      <div className="flex w-full flex-col gap-2">
        <div className="mx-auto max-w-[24rem] text-center text-2xl text-gray-700">
          {heading}
        </div>

        <div className="mx-auto max-w-[24rem] text-center text-gray-700">
          {subHeading}
        </div>
        {CTA ? CTA : <></>}
      </div>
    </div>
  );
};
