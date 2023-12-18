import React from 'react';

import dayjs, { ListOfMonths } from '@cubik/dayjs';

import { Icon } from '../../../icons/icon';
import { Text } from '../text/text';

interface Props {
  date: Date;
  type: 'Registration' | 'Voting' | 'Ended' | 'PreRegistration' | 'Pause';
  subElement: React.ReactNode;
}
export const ProjectTimelineCard = ({ date, type, subElement }: Props) => {
  return (
    <div className="flex justify-start gap-2 md:gap-4">
      <div className="border-[1.25px] rounded-md md:rounded-xl w-[41px] md:w-[57px] overflow-hidden flex justify-center items-center flex-col border-[var(--color-border-primary-base)]">
        <div className="bg-[var(--color-surface-primary-base)] h-[20px]  md:h-[28.5px] w-full flex justify-center items-center">
          <p className="text-[var(--color-fg-primary-base)] uppercase text-xxs md:text-xs font-medium">
            {
              ListOfMonths[
                dayjs(date, {
                  format: 'MMMM',
                }).get('M')
              ]
            }
          </p>
        </div>
        <div className="flex justify-center items-center  h-8">
          <p className="text-[14px]  md:h5 text-[var(--color-fg-primary-base)]  w-full">
            {dayjs(date).get('D')}
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-start gap-2">
        <div>
          {type === 'Registration' && (
            <Text className="h6" color={'primary'}>
              Registration Period
            </Text>
          )}
          {type === 'Voting' && (
            <div className="flex justify-center items-center">
              <Icon
                name="CircleDot"
                className="fill-[var(--color-green-700)]" // Need to fix icon for this
              />
              <Text className="h6" color={'primary'}>
                Voting
              </Text>
            </div>
          )}
          {type === 'Ended' && (
            <Text className="h6" color={'primary'}>
              Grant Round Ended
            </Text>
          )}
          {type === 'PreRegistration' && (
            <Text className="h6 text-[var(--color-bg-alert-base)]">
              Registration Not Started
            </Text>
          )}
          {type === 'Pause' && (
            <Text className="h6 text-[var(--color-fg-negative-base)]">
              Grant Round Paused
            </Text>
          )}
        </div>
        {subElement}
      </div>
    </div>
  );
};
