import * as React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { iconLibrary } from './iconLibrary';

export type IconName = keyof typeof iconLibrary;

type Props = {
  name: IconName;
  height?: number;
  width?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
};

export const Icon = ({
  name,
  height = 24,
  width = 24,
  strokeWidth = 2,
  color,
  className,
  initial,
  animate,
  transition,
}: Props) => {
  const renderedPaths = iconLibrary[name]?.paths.map(
    (
      value: { d: string; opacity?: number; fill?: boolean; stroke?: boolean },
      index: number,
    ) => (
      <motion.path
        key={index}
        d={value.d}
        fill={value.fill ? color : 'transparent'}
        stroke={value.stroke ? color : 'transparent'}
        opacity={value.opacity ? value.opacity : 1}
        initial={initial}
        animate={animate}
        transition={transition}
      />
    ),
  );

  return (
    <motion.svg
      viewBox={`0 0 ${height} ${width}`}
      className={clsx(' text-white', className)}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      clipRule={'evenodd'}
      fillRule={'evenodd'}
      fill="none"
      width={width}
      height={height}
    >
      {renderedPaths}
    </motion.svg>
  );
};
