import { ProjectFormData } from '@/components/create-project';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';

import { Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step3 = ({}: Props) => {
  return (
    <>
      <div>
        <Text className="b4-light" color={'tertiary'}>
          3/5
        </Text>
      </div>
    </>
  );
};
