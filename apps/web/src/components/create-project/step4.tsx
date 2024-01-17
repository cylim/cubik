import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';
import { MultiImageUploader } from '@/components/create-project/image-uploder/multiImageUploader';
import StepTemplate from '@/components/create-project/stepTemplate';
import { IProjectData } from '@/types/project';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import { Button, Text } from '@cubik/ui';

interface Props {
  setValue: UseFormSetValue<IProjectData>;
  watch: UseFormWatch<IProjectData>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setError: UseFormSetError<IProjectData>;
  errors: FieldErrors<IProjectData>;
  forceSave: () => Promise<void>;
  control: Control<IProjectData, any>;
}
export const Step4 = ({
  setStep,
  setValue,
  watch,
  setError,
  errors,
  forceSave,
  control,
}: Props) => {
  const onNext = () => {
    setStep(5);
    console.log('on next click');
    //forceSave();
  };
  const onPrev = () => {
    setStep(3);
  };

  return (
    <>
      <StepTemplate
        currentStep={4}
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
          <Controller
            control={control}
            name="slides"
            render={() => (
              <MultiImageUploader
                setValue={setValue}
                setError={setError}
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
