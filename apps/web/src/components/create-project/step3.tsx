import { ProjectFormData } from '@/components/create-project/createProject';
import StepTemplate from '@/components/create-project/stepTemplate';
import { TeamSelector } from '@/components/create-project/team-selector/teamSelector';
import { UseFormReturn } from 'react-hook-form';

import {
  Button,
  Checkbox,
  Icon,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

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
        currentStep={2}
        onNext={onNext}
        onPrevious={onPrev}
        title={'Choose Categories'}
        description={
          'These categories will be used to filter when someone wants to see projects in specific categories. Choose them carefully they can impact discoverability of your project.'
        }
      >
        <InputContainer>
          <InputLabel>Categories</InputLabel>
          <InputFieldContainer
            isError={projectForm.formState.errors.github ? true : false}
            variant="md"
          >
            <InputField
              onChange={(e) => {
                projectForm.setValue('github', e.currentTarget.value);
              }}
              value={projectForm.watch('github')}
              placeholder="https://github.com"
            />
          </InputFieldContainer>
        </InputContainer>
      </StepTemplate>
    </>
  );
};
