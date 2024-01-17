import StepTemplate from '@/components/create-project/stepTemplate';
import { IProjectData } from '@/types/project';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import { Text } from '@cubik/ui';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
  watch: UseFormWatch<IProjectData>;
  register: UseFormRegister<IProjectData>;
  errors: FieldErrors<IProjectData>;
}
export const Step6 = ({
  setStep,
  errors,
  watch,
  register,
  forceSave,
}: Props) => {
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
