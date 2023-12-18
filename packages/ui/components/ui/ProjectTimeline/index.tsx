import React from 'react';

import dayjs, { ListOfMonths } from '@cubik/dayjs';

import { PingIcon } from '../PingIcon/pingIcon';
import { Text } from '../text/text';

interface Props {
  date: Date;
  type: 'Registration' | 'Voting' | 'Ended' | 'PreRegistration' | 'Pause';
  subElement: React.ReactNode;
}
export const ProjectTimelineCard = ({ date, type, subElement }: Props) => {
  return (
    <div className="flex justify-start gap-2 md:gap-4">
      <div className="border-[1.25px] rounded-md md:rounded-xl w-[41px] md:w-[57px] overflow-hidden flex justify-center items-center flex-col border-[var(--color-border-primary-subdued)]">
        <div className="h-[20px] md:h-[28.5px] w-full flex justify-center items-center">
          <Text className="l3 uppercase" color="secondary">
            {
              ListOfMonths[
                dayjs(date, {
                  format: 'MMMM',
                }).get('M')
              ]
            }
          </Text>
        </div>
        <div className="flex justify-center items-center bg-[var(--color-border-primary-subdued)] py-[2px] w-full">
          <Text className="h5" color="secondary">
            {dayjs(date).get('D')}
          </Text>
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
            <div className="flex justify-center items-center gap-[10px]">
              <PingIcon />
              <Text className="h6" color={'primary'}>
                Voting Live
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
