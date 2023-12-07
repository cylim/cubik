import React from 'react';

import { Text } from '../../ui/text/text';


interface SegmentContainerProps {
  children: React.ReactNode;
}
interface SegmentItemsProps {
  children: React.ReactNode;
  onClick: () => void;


export const SegmentContainer = ({ children }: SegmentContainerProps) => {
  return (
    <div className="bg-red-400 w-max p-1 gap-1 flex justify-center items-center rounded-lg">
      {children}
    </div>
  );
};


export const SegmentItems = ({ children, onClick }: SegmentItemsProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-[var(--segment_control-surface-active)] p-1 rounded-lg"
    >
      <Text className="l1" color="primary">
        {children}
      </Text>
    </div>
  );


};
