import React from 'react';

import { iconLibrary } from '../../../icons/iconLibrary';
import TitleWithIcon from '../Avatar/TitleWithIcon';
import { Text } from '../text/text';

interface Props {
  subheading?: string;
  heading: string;
  iconName?: keyof typeof iconLibrary;
  leftElement?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export const SubHead = ({
  heading,
  subheading,
  leftElement,
  iconName,
  size = 'md',
}: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-start flex-col">
          <TitleWithIcon text={heading} icon={iconName} size={size} />
          {subheading && (
            <Text className={'b4-light'} color="secondary">
              {subheading}
            </Text>
          )}
        </div>
        {leftElement}
      </div>
    </>
  );
};
