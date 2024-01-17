import React from 'react';
import { motion } from 'framer-motion';

import { Button, Text } from '@cubik/ui';

type Props = {
  currentStep?: number;
  children: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  title?: string;
  description?: string;
};

const containerVariants = {
  hidden: {
    opacity: 0,
    //  scale: 0.99, // slightly smaller
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2, // delay based on the order of the element
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const StepTemplate = ({
  currentStep,
  children,
  onNext,
  onPrevious,
  title,
  description,
}: Props) => {
  return (
    <div className="flex h-full flex-col justify-between pt-5">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-4">
          {title && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={0} // order for animation
            >
              <Text className="h3" color={'primary'}>
                {title}
              </Text>
            </motion.div>
          )}
          {description && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={1} // order for animation
            >
              <Text className="b3" color={'secondary'}>
                {description}
              </Text>
            </motion.div>
          )}
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={2} // order for animation
        >
          {children}
        </motion.div>
      </div>
      <div
        className={`mt-14 flex w-full items-center ${
          !onPrevious ? 'justify-end' : 'justify-between'
        }`}
      >
        {onPrevious && (
          <Button
            onClick={onPrevious}
            leftIconName="chevronLeft"
            variant={'secondary'}
            size={'md'}
            className="px-6"
          >
            Previous
          </Button>
        )}
        {onNext && (
          <Button
            type="button"
            onClick={onNext}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
            className="px-6"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepTemplate;
