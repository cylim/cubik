import { CreateProjectStepProps } from '@/components/create/project/step1';
import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import { useFormContext } from 'react-hook-form';

import { Text } from '@cubik/ui';

export const Step6 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    setValue,
    watch,
    control,
    setError,
    formState: { errors },
  } = useFormContext<IProjectData>();
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
