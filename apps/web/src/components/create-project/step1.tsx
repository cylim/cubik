import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step1 = ({ setStep }: Props) => {
  return (
    <>
      <div>
        <Text className="b4-light" color={'tertiary'}>
          1/5
        </Text>
        <Text className="h5 py-1" color={'primary'}>
          Tell us about your project
        </Text>
        <Text className="b4-light" color={'secondary'}>
          we&apos;ll need its name, tagline, and a few other details
        </Text>

        <div className="my-14 w-full border-t border-[var(--color-border-primary-base)]" />

        <Text className="h5" color={'primary'}>
          Add Categories ( up to 3 )
        </Text>
        <Text className="b4-light" color={'secondary'}>
          your category should define what the project is about, does or what
          specific problem it solves, rather than feature-related or technology
          tags.
        </Text>

        <div className="mt-14 flex w-full items-center justify-between">
          <Button
            disabled
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(2)}
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
