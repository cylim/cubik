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
export const Step7 = ({
  setStep,
  errors,
  watch,
  register,
  forceSave,
}: Props) => {
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
