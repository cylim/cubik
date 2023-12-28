import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step2 = ({ setStep }: Props) => {
  return (
    <>
      <div>
        <Text className="b4-light" color={'tertiary'}>
          2/5
        </Text>
        <Text className="h5 py-1" color={'primary'}>
          How Does it look
        </Text>
        <Text className="b4-light" color={'secondary'}>
          lets make your project look nice
        </Text>
        <div className="flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(1)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(3)}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
