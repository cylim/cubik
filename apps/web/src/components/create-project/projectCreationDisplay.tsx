import React from 'react';
import { IProjectData } from '@/types/project';
import { UseFormWatch } from 'react-hook-form';

import { Project_Backup } from '@cubik/common';
import {
  Avatar,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@cubik/ui';

const ProjectCreationDisplay = ({
  watch,
}: {
  watch: UseFormWatch<IProjectData>;
}) => {
  return (
    <div className="relative hidden w-1/2 scale-90 px-14 py-8 md:block">
      <div className="absolute left-0 top-0 ml-10 flex size-full items-center justify-center">
        <div className="flex h-fit min-h-48 w-full flex-col gap-8 overflow-hidden rounded-l-xl border-[var(--color-border-primary-base)] bg-gradient-to-r  from-[var(--body-surface)] px-14 pt-14">
          {!(watch('logo') === Project_Backup) ? (
            <Avatar
              size={'xl'}
              variant={'square'}
              src={watch('logo') || Project_Backup}
              alt="random"
            />
          ) : (
            <div className="flex size-[72px] items-center justify-center rounded-md border border-[var(--card-border-primary)] bg-[var(--color-surface-primary-base)]">
              <Icon
                name="plus"
                width={20}
                height={20}
                color="var(--color-fg-primary-base)"
              />
            </div>
          )}

          <div className="flex w-full flex-col gap-3">
            {watch('name') ? (
              <Text className="b2" color={'primary'}>
                {watch('name')}
              </Text>
            ) : (
              <div className="h-[28px] w-[40%] py-1">
                <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
              </div>
            )}
            {watch('shortDescription') ? (
              <Text className="l2-light" color={'secondary'}>
                {watch('shortDescription')}
              </Text>
            ) : (
              <div className="h-[20px] w-[80%] py-1">
                <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
              </div>
            )}
          </div>
          <div>
            <Tabs size="sm" defaultValue={0}>
              <TabList className="mx-auto">
                <Tab value={0}>About</Tab>
                <Tab value={1}>Contributions</Tab>
              </TabList>
              <TabPanels className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <TabPanel value={0}>
                  <div className="h-96" />
                </TabPanel>
                <TabPanel value={1}>
                  <div className="h-96" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreationDisplay;
