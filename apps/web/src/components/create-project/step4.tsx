import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step4 = ({ setStep }: Props) => {
  return (
    <>
      <div>
        <Text className="b4-light" color={'tertiary'}>
          4/5
        </Text>
        <Text className="h5 py-1" color={'primary'}>
          Detailed Description
        </Text>
        <Text className="b4-light" color={'secondary'}>
          Add Detailed description about the project
        </Text>

        <div className="mt-14 flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(3)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button rightIconName="chevronRight" variant={'primary'} size={'md'}>
            Submit Project
          </Button>
        </div>
      </div>
    </>
  );
};
