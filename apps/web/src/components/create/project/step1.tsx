import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import { useFormContext } from 'react-hook-form';

import {
  HelperText,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
} from '@cubik/ui';

export interface CreateProjectStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}

export const Step1 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    trigger,
    register,
    watch,
    formState: { errors },
  } = useFormContext<IProjectData>();

  // on next function
  const onNext = async () => {
    const isNameValid = await trigger('name');
    const isDescriptionValid = await trigger('shortDescription');

    if (isNameValid && isDescriptionValid) {
      // forceSave(); // Uncomment this if you want to save the form state here
      setStep(2);
      console.log('going to step 2');
    }
  };

  return (
    <>
      <StepTemplate
        currentStep={1}
        onNext={onNext}
        title={'Hey @irffan 👋🏻'}
        description={
          'Lets get started with creating your Project. Tell us about it, we will need its name and a unique tagline that represents your project'
        }
      >
        <div className="flex flex-col">
          <InputContainer className="pb-8">
            <InputLabel
              maxCounterValue={32}
              counterValue={watch('name')?.length || 0}
              isRequired
            >
              Name of the project
            </InputLabel>
            <InputFieldContainer isError={errors.name ? true : false} size="md">
              <InputField
                maxLength={32}
                placeholder="Project Name"
                {...register('name')}
              />
            </InputFieldContainer>
            <HelperText variant={'error'} show={errors.name ? true : false}>
              {errors.name?.message}
            </HelperText>
          </InputContainer>
          <InputContainer>
            <InputLabel
              maxCounterValue={80}
              counterValue={watch('shortDescription')?.length || 0}
              isRequired
            >
              Tagline
            </InputLabel>
            <InputFieldContainer
              isError={errors.shortDescription ? true : false}
              size="md"
            >
              <InputField
                maxLength={80}
                placeholder="Concise and descriptive tagline for the project"
                {...register('shortDescription')}
              />
            </InputFieldContainer>
            <HelperText
              variant={'error'}
              show={errors.shortDescription ? true : false}
            >
              {errors.shortDescription?.message}
            </HelperText>
          </InputContainer>
        </div>
      </StepTemplate>
    </>
  );
};
