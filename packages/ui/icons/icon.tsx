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
  onClick?: () => void;
  initial?: any;
  animate?: any;
  transition?: any;
  variants?: any;
};
export const Icon = ({
  name,
  height,
  width,
  strokeWidth = 1.5, // default strokeWidth if not provided
  color, // default color if not provided
  className,
  onClick,
  initial,
  animate,
  transition,
  variants,
}: Props) => {
  const icon = iconLibrary[name];
  const viewBox = icon?.viewBox;

  const renderedPaths = icon?.paths.map((value, index) => (
    <motion.path
      key={index}
      d={value.d}
      fill={value.fill ? color : 'none'} // default to 'none' if fill is not true
      stroke={value.stroke ? color : 'none'} // default to 'none' if stroke is not true
      opacity={value.opacity || 1}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  ));

  return (
    <motion.svg
      width={width}
      height={height}
      variants={variants}
      // this is a temporary solution we have to find a permanent fix for the viewBox property of svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={clsx('text-white', className)}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      color={color}
      strokeLinejoin="round"
      onClick={onClick}
      clipRule="evenodd"
      fillRule="evenodd"
    >
      {renderedPaths}
    </motion.svg>
  );
};
