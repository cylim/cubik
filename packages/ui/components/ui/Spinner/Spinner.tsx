import React from 'react';
import { ClassValue } from 'clsx';

import { cn } from '../../../lib/utils';

interface Props {
  onClick?: () => void;
  color?: ClassValue;
}
export const Spinner = ({ color, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        color ? color : 'border-white',
        'inline-block h-5 w-5 animate-spin rounded-full border-2  border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
      )}
      role="status"
    />
  );
};
