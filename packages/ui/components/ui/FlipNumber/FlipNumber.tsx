import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import * as ReactFlipNumber from 'react-flip-numbers';

export const FlipNumber = ({
  number,
  color,
  width,
  height,
}: {
  number: Number | string;
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <ReactFlipNumber.default
      height={height || 14}
      width={width || 10}
      color={color || 'inherit'}
      perspective={700}
      duration={1.4}
      delay={0.4}
      numbers={number.toString()}
      play
    />
  );
};
