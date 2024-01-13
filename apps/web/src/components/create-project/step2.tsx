import { ProjectFormData } from '@/components/create-project/createProject';
import { LogoUploader } from '@/components/create-project/image-uploder/logoUploader';
import { MultiImageUploader } from '@/components/create-project/image-uploder/multiImageUploader';
import StepTemplate from '@/components/create-project/stepTemplate';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step2 = ({ setStep, projectForm, forceSave }: Props) => {
  const onNext = () => {
    setStep(3);
    forceSave();
  };
  const onPrev = () => {
    setStep(1);
  };

  return (
    <>
      <StepTemplate
        currentStep={2}
        onNext={onNext}
        onPrevious={onPrev}
        title={' How Does it look'}
        description={'lets make your project look nice'}
      >
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Thumbnail
          </Text>
          <LogoUploader projectForm={projectForm} />
        </div>
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
