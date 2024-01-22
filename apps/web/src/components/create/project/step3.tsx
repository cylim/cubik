import { LogoUploader } from '@/components/create/project/image-uploder/logoUploader';
import { CreateProjectStepProps } from '@/components/create/project/step1';
import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

export const Step3 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    setValue,
    watch,
    control,
    setError,
    formState: { errors },
  } = useFormContext<IProjectData>();

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
