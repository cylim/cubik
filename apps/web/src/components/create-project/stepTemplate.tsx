import React from 'react';

import { Button, Text } from '@cubik/ui';

type Props = {
  currentStep?: number;
  children: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  title?: string;
  description?: string;
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
    <div className="h-full border border-blue-500 justify-between flex flex-col">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-4">
          {title && (
            <Text className="h3" color={'primary'}>
              {title}
            </Text>
          )}
          {description && (
            <Text className="b3" color={'secondary'}>
              {description}
            </Text>
          )}
        </div>
        {children}
      </div>
      <div className="mt-14 flex w-full items-center justify-between">
        {onPrevious && (
          <Button
            onClick={onPrevious}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
        )}
        {onNext && (
          <Button
            onClick={onNext}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepTemplate;
