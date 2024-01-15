import { ProjectFormData } from '@/components/create-project/createProject';
import { MultiImageUploader } from '@/components/create-project/image-uploder/multiImageUploader';
import StepTemplate from '@/components/create-project/stepTemplate';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step4 = ({ setStep, projectForm, forceSave }: Props) => {
  const onNext = () => {
    setStep(5);
    forceSave();
  };
  const onPrev = () => {
    setStep(3);
  };

  return (
    <>
      <StepTemplate
        currentStep={5}
        onNext={onNext}
        onPrevious={onPrev}
        title={'Gallery Showcase'}
        description={
          'Curate a selection of images that best illustrate your project. Its like a exhibition for your digital masterpieces.'
        }
      >
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Gallery
          </Text>
          <MultiImageUploader projectForm={projectForm} />
        </div>
      </StepTemplate>
    </>
  );
};
