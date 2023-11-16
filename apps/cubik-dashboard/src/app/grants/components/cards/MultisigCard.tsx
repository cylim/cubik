import React, { ReactNode } from 'react';
import { type ClassValue } from 'clsx';

import { cn } from '@cubik/ui/lib/utils';

interface Props {
  children: ReactNode;
  className?: ClassValue;
  borderbottom?: boolean;
}
export const MultisigCard = ({ children }: Props) => {
  return (
    <div className="w-full rounded-[12px] border border-[#333] bg-[#1F1F1F]">
      {children}
    </div>
  );
};

export const MultisigCardHeader = ({
  children,
  className,
  borderbottom,
}: Props) => {
  return (
    <div
      className={cn(
        borderbottom ? 'border-b border-[#333]' : '',
        'p-5',
        className,
      )}
    >
      {children}
    </div>
  );
};
