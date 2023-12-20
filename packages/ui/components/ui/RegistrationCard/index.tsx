import React from 'react';

import { Icon } from '../../../icons/icon';
import { Button } from '../Button';
import { Text } from '../text/text';

interface Props {
  open: boolean;
  subText?: string;
  text: 'Accepted' | 'Pending' | 'Rejected';
  // onOpen: () => void;
  //   onClose: () => void;
}
export const RegistrationsCard = ({ open, text, subText }: Props) => {
  return (
    <>
      <div className="min-w-[250px] w-full bg-[var(--card-surface-primary)] px-6 py-3 rounded-lg">
        <div className="flex justify-between w-full items-start">
          <div className="flex justify-start items-start gap-2">
            <div className="pt-[6px]">
              {text === 'Accepted' && (
                <div className="bg-[var(--color-fg-positive-base)] w-2 h-2 rounded-full" />
              )}
              {text === 'Pending' && (
                <div className="bg-[var(--color-fg-info-base)] w-2 h-2 rounded-full" />
              )}
              {text === 'Rejected' && (
                <div className="bg-[var(--color-fg-negative-base)] w-2 h-2 rounded-full" />
              )}
            </div>
            <div className="flex justify-start flex-col items-start gap-2">
              <Text color={'secondary'} className="l2">
                {text === 'Accepted' && 'Accepted'}
                {text === 'Rejected' && 'Registrations Rejected'}
                {text === 'Pending' && 'Registrations Pending'}
              </Text>
              <Text color={'primary'} className="h2">
                10
              </Text>
            </div>
          </div>

          <Button variant={'outline'}>
            {open ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />}
          </Button>
        </div>
        {open && (
          <div>
            <div className="py-3">
              <Text className="l2" color={'primary'}>
                {subText}
              </Text>
            </div>
            <div className="flex justify-between gap-5">
              {/* @todo: Fix icons */}
              <Button
                className="w-full"
                variant={'outline'}
                rightIconName="menu2Bars"
              >
                Send Email
              </Button>
              <Button
                variant={'primary'}
                className="w-full"
                rightIconName="piggyBank"
              >
                Edit Template
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
