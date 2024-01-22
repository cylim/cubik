import { CreateProjectStepProps } from '@/components/create/project/step1';
import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import { useFormContext } from 'react-hook-form';

import { Text } from '@cubik/ui';

export const Step7 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    setValue,
    watch,
    control,
    setError,
    formState: { errors },
  } = useFormContext<IProjectData>();
  const onNext = () => {
    setStep(8);
    forceSave();
  };
  const onPrev = () => {
    setStep(6);
  };
  return (
    <>
      <StepTemplate
        currentStep={7}
        onNext={onNext}
        onPrevious={onPrev}
        title={'Verify Ownership'}
        description={
          'Verify the GitHub repository of the project by connecting the GitHub organisation or personal account on which the project is hosted. '
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
