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
    <div className="relative transform scale-90 hidden w-1/2 px-14 py-8 md:block ">
      <div className="absolute flex items-center justify-center top-0 h-full left-0 ml-10 w-full">
        <div className="flex w-full h-fit min-h-48 flex-col gap-8 rounded-tl-xl rounded-bl-xl overflow-hidden border-[var(--color-border-primary-base)]  bg-gradient-to-r from-[var(--body-surface)] px-14 pt-14">
          {!(watch('logo') === Project_Backup) ? (
            <Avatar
              size={'xl'}
              variant={'square'}
              src={watch('logo') || Project_Backup}
              alt="random"
            />
          ) : (
            <div className="flex items-center justify-center border-[var(--card-border-primary)] rounded-md w-[72px] h-[72px] border bg-[var(--color-surface-primary-base)]">
              <Icon
                name="plus"
                width={20}
                height={20}
                color="var(--color-fg-primary-base)"
              />
            </div>
          )}

          <div className="flex gap-3 flex-col w-full">
            {watch('name') ? (
              <Text className="b2" color={'primary'}>
                {watch('name')}
              </Text>
            ) : (
              <div className="w-[40%] h-[28px] py-1">
                <div className="w-full h-full opacity-50 rounded-md bg-[var(--color-surface-primary-transparent)]" />
              </div>
            )}
            {watch('shortDescription') ? (
              <Text className="l2-light" color={'secondary'}>
                {watch('shortDescription')}
              </Text>
            ) : (
              <div className="w-[80%] h-[20px] py-1">
                <div className="w-full h-full opacity-50 rounded-md bg-[var(--color-surface-primary-transparent)]" />
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
