import { ProjectFormData } from '@/components/create-project/createProject';
import StepTemplate from '@/components/create-project/stepTemplate';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step6 = ({ setStep, projectForm, forceSave }: Props) => {
  const onNext = () => {
    setStep(7);
    forceSave();
  };
  const onPrev = () => {
    setStep(5);
  };

  return (
    <>
      <StepTemplate
        currentStep={6}
        onNext={onNext}
        onPrevious={onPrev}
        title={'Add Links'}
        description={
          'Add all the links and verify the ownership of the project you anon'
        }
      >
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Gallery
          </Text>
        </div>
      </StepTemplate>
    </>
  );
};
