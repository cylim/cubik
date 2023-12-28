import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step1 = ({}: Props) => {
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
      </div>
    </>
  );
};
