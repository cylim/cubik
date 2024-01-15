import { ProjectFormData } from '@/components/create-project/createProject';
import StepTemplate from '@/components/create-project/stepTemplate';
import { Industries } from '@/constants/industry';
import { useState } from 'React';
import { UseFormReturn } from 'react-hook-form';

import {
  Button,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  SearchSelect,
  Text,
} from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}
export const Step1 = ({ setStep, projectForm, forceSave }: Props) => {
  // on next function
  const onNext = () => {
    setStep(2);
    forceSave();
  };

  // om previous function
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
        <div className="flex flex-col gap-8">
          <InputContainer>
            <InputLabel
              maxCounterValue={32}
              counterValue={projectForm.watch('name').length || 0}
              isRequired
            >
              Name of the project
            </InputLabel>
            <InputFieldContainer
              isError={projectForm.formState.errors.name ? true : false}
              variant="md"
            >
              <InputField
                maxLength={32}
                onChange={(e) => {
                  projectForm.setValue('name', e.currentTarget.value);
                }}
                value={projectForm.watch('name')}
                placeholder="Project Name"
              />
            </InputFieldContainer>
          </InputContainer>
          <InputContainer>
            <InputLabel
              maxCounterValue={80}
              counterValue={projectForm.watch('tagline').length || 0}
              isRequired
            >
              Tagline
            </InputLabel>
            <InputFieldContainer
              isError={projectForm.formState.errors.tagline ? true : false}
              variant="md"
            >
              <InputField
                maxLength={80}
                onChange={(e) => {
                  projectForm.setValue('tagline', e.currentTarget.value);
                }}
                value={projectForm.watch('tagline')}
                placeholder="Concise and descriptive tagline for the project"
              />
            </InputFieldContainer>
          </InputContainer>
        </div>
      </StepTemplate>
    </>
  );
};
