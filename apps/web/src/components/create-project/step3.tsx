import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Button, Checkbox, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step3 = ({ setStep }: Props) => {
  return (
    <>
      <div>
        <Text className="b4-light" color={'tertiary'}>
          3/5
        </Text>
        <Text className="h5 py-1" color={'primary'}>
          Project Creators
        </Text>
        <Text className="b4-light" color={'secondary'}>
          you can add your team or anyone you worked with on this project
        </Text>
        <div className="my-14 flex w-full flex-col gap-8">
          <div>
            <Text className="h5" color={'primary'}>
              Links and Verification
            </Text>
            <Text className="b4-light" color={'secondary'}>
              Help use easily verify the ownership of the project by connecting
              twitter and github repository of the project
            </Text>
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <Text>Github</Text>
              <Button leftIconName="github" className="w-[228px]">
                Connect Github
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Text>X.com</Text>
              <Button leftIconName="twitter" className="w-[228px]">
                Connect X.com
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-14 flex items-center justify-start gap-3">
          <Checkbox />
          <Text className="l1" color={'primary'}>
            The Project is Open Source
          </Text>
        </div>
        <div className="flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(2)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(4)}
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
