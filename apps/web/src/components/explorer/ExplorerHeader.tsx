'use client';

import React from 'react';

import { SubHead, Text } from '@cubik/ui';

const ProjectSectionHeader = () => {
  const selectedFilter = 'Ongoing round';
  return (
    <>
      <SubHead heading="Projects" />
      {/* Projects Filters */}
      <div className="no-scrollbar flex max-w-[100vw] flex-row flex-nowrap items-center  justify-start gap-2 overflow-x-scroll">
        {[
          'Ongoing round',
          'All projects',
          'Infrastructure',
          'DAOs',
          'Dev Tool',
          'DeFi',
        ].map((name, id) => {
          return name === selectedFilter ? (
            <div
              key={id}
              className="cursor-pointer whitespace-nowrap rounded-full border border-[var(--color-border-info-base)] bg-[var(--color-surface-info-transparent)] px-4 py-2 text-[var(--color-fg-info-base)]"
            >
              <Text className="l1 md:l2">{name}</Text>
            </div>
          ) : (
            <div
              key={id}
              className="cursor-pointer whitespace-nowrap rounded-full border border-transparent bg-[var(--color-surface-primary-transparent)] px-4 py-2 text-[var(--color-fg-primary-base)] hover:bg-[var(--color-surface-info-transparent)] hover:text-[var(--color-fg-info-base)]"
            >
              <Text className="l1 md:l2">{name}</Text>
            </div>
          );
        })}
      </div>
    </>
  );
};
const CollectionSectionHeader = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <SubHead heading="Collections" />
    </div>
  );
};

export { ProjectSectionHeader, CollectionSectionHeader };
