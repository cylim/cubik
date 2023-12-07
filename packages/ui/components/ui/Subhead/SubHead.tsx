import React from 'react';

import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

interface Props {
  heading: string;
  iconName?: keyof typeof iconLibrary;
  children?: React.ReactNode;
  className?: string;
}
export const SubHead = ({ heading, children, className }: Props) => {
  return (
    <>
      <div className={cn('flex justify-between items-center', className)}>
        <Text color="primary" className={'h4 md:h4'}>
          {heading}
        </Text>
        {children}
      </div>
    </>
  );
};
