import React from 'react';

import { cn } from '../../../lib/utils';
import { Text } from '../../ui/text/text';


interface SegmentContainerProps {
  children: React.ReactNode;
  size: 'l3' | 'l2' | 'l1';
}
interface SegmentItemsProps {
  children: React.ReactNode;
  onClick: () => void;
<<<<<<< HEAD


export const SegmentContainer = ({ children }: SegmentContainerProps) => {
=======
  isActive: boolean;
}
export const SegmentContainer = ({
  children,
  size = 'l2',
}: SegmentContainerProps) => {
>>>>>>> fca93e81 (fix: segment)
  return (
    <div
      className={cn(
        size,
        'bg-[var(--segment-control-surface-inactive)] w-full p-1 gap-1 flex justify-center items-center rounded-lg',
      )}
    >
      {children}
    </div>
  );
};

<<<<<<< HEAD

export const SegmentItems = ({ children, onClick }: SegmentItemsProps) => {
=======
export const SegmentItems = ({
  children,
  onClick,
  isActive,
}: SegmentItemsProps) => {
>>>>>>> fca93e81 (fix: segment)
  return (
    <div
      onClick={onClick}
      className={cn(
        'px-4 py-1 w-full cursor-pointer text-center rounded-lg shadow-[0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)]',
        isActive
          ? 'bg-[var(--segment-control-surface-active)]'
          : 'bg-[var(--segment-control-surface-inactive)]',
      )}
    >
      <Text className="" color="primary">
        {children}
      </Text>
    </div>
  );


};
