import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { cn } from '../../../lib/utils';

interface Props extends React.HTMLProps<HTMLInputElement> {
  helperText?: React.ReactNode;
  InputLabel?: React.ReactNode;
  isError?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isHttps?: boolean;
  inputVariant?: 'md' | 'sm';
  className?: string;
}
export const InputContainer = (props: Props) => {
  const id = uuidv4();
  return (
    // <motion.div
    //   layoutId={id}
    //   initial={'none'}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{
    //     //opacity: { duration: 0.15 },
    //     //height: { duration: 0.3 },
    //     // type: 'spring',
    //     //  bounce: 0.15,
    //     duration: 20,
    //   }}
    // >
    <div
      className={cn(
        'flex justify-center w-full flex-col items-start gap-2 md:gap-3 focus:ring-blue-[--color-surface-info-transparent]',
        props.className,
      )}
    >
      {props.children}
    </div>
    // </motion.div>
  );
};
