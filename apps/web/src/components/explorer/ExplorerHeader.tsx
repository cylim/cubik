'use client';

import React from 'react';

import { SubHead, Text } from '@cubik/ui';

const ProjectSectionHeader = () => {
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
          return (
            <div
              key={id}
              className="whitespace-nowrap rounded-full bg-[var(--color-surface-cool-transparent)] px-4 py-2 text-[var(--body-fg-primary)]"
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
