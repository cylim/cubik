import { ProjectFormData } from '@/components/create-project/createProject';
import StepTemplate from '@/components/create-project/stepTemplate';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step5 = ({ setStep, projectForm, forceSave }: Props) => {
  const onNext = () => {
    setStep(6);
    forceSave();
  };
  const onPrev = () => {
    setStep(4);
  };

  return (
    <>
      <StepTemplate
        currentStep={5}
        onNext={onNext}
        onPrevious={onPrev}
        title={"Who's Who in Your Crew"}
        description={
          'It takes a village to raise a project. Spotlight every villager, big or small.'
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
