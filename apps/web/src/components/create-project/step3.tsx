import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';
import { LogoUploader } from '@/components/create-project/image-uploder/logoUploader';
import { CreateProjectStepProps } from '@/components/create-project/step1';
import StepTemplate from '@/components/create-project/stepTemplate';
import { IProjectData } from '@/types/project';
import {
  Control,
  Controller,
  UseFormReturn,
  UseFormSetError,
} from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Step2Props extends CreateProjectStepProps {
  setError: UseFormSetError<IProjectData>;
  control: Control<IProjectData, any>;
}
export const Step3 = ({
  setStep,
  forceSave,
  watch,
  errors,
  setError,
  clearErrors,
  trigger,
  setValue,
  register,
  control,
}: Step2Props) => {
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
          <Controller
            name="logo"
            control={control}
            render={() => (
              <LogoUploader
                setError={setError}
                setValue={setValue}
                errors={errors}
                watch={watch}
              />
            )}
          />
        </div>
      </StepTemplate>
    </>
  );
};
