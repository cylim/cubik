import React from 'react';

import { Text } from '../text/text';

interface Props {
  subheading?: string;
  heading: string;
  icon?: React.ReactNode;
  leftElement?: React.ReactNode;
}
export const SubHead = ({ heading, subheading, leftElement, icon }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-start flex-col">
          <div className="flex justify-start items-center gap-1">
            {icon}
            <Text className={'h2 text-[var(--color-fg-primary-depth)]'}>
              {heading}
            </Text>
          </div>
          {subheading && <p className={''}>{subheading}</p>}
        </div>
        {leftElement}
      </div>
    </>
  );
};
