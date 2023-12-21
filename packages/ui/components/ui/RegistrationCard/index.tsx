import React from 'react';

import { Icon } from '../../../icons/icon';
import { Button } from '../Button';
import { Text } from '../text/text';

interface Props {
  open: boolean;
  subText?: string;
  text: 'Accepted' | 'Pending' | 'Rejected';
  toggle?: () => void;
  onClickSendEmail?: () => void;
  onClickEditTemplate?: () => void;
}
/**
 * @name RegistrationsCard
 * @description Registration Card for the dashboard.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.open - Indicates whether the card is open.
 * @param {string} [props.subText] - Optional subtext for the card.
 * @param {('Accepted' | 'Pending' | 'Rejected')} props.text - The registration status.
 * @param {() => void} [props.toggle] - Function to toggle the card.
 * @param {() => void} [props.onClickSendEmail] - Function to handle sending email.
 * @param {() => void} [props.onClickEditTemplate] - Function to handle editing templates.
 *
 * @returns {React.ReactNode} A React component representing the Registration Card.
 */
export const RegistrationsCard = ({
  open,
  text,
  subText,
  toggle,
  onClickEditTemplate,
  onClickSendEmail,
}: Props): React.ReactNode => {
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

          <Button onClick={toggle} variant={'outline'}>
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
                onClick={onClickSendEmail}
                rightIconName="menu2Bars"
              >
                Send Email
              </Button>
              <Button
                variant={'primary'}
                className="w-full"
                onClick={onClickEditTemplate}
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
