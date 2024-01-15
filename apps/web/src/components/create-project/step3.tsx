import { ProjectFormData } from '@/components/create-project/createProject';
import { LogoUploader } from '@/components/create-project/image-uploder/logoUploader';
import StepTemplate from '@/components/create-project/stepTemplate';
import { UseFormReturn } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step3 = ({ setStep, projectForm, forceSave }: Props) => {
  const onNext = () => {
    setStep(4);
    forceSave();
  };
  const onPrev = () => {
    setStep(2);
  };

  return (
    <>
      <StepTemplate
        currentStep={3}
        onNext={onNext}
        onPrevious={onPrev}
        title={'Show us how it looks 🫣'}
        description={
          'Time to add the logo, Make sure it is visible enough to be seen from space or at least on both light and dark backgrounds.'
        }
      >
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Upload Thumbnail
          </Text>
          <LogoUploader projectForm={projectForm} />
        </div>
      </StepTemplate>
    </>
  );
};
