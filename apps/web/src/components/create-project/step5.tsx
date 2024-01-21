import StepTemplate from '@/components/create-project/stepTemplate';
import { IProjectData } from '@/types/project';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import {
  Button,
  HelperText,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
  watch: UseFormWatch<IProjectData>;
  register: UseFormRegister<IProjectData>;
  errors: FieldErrors<IProjectData>;
}
export const Step5 = ({
  setStep,
  errors,
  watch,
  register,
  forceSave,
}: Props) => {
  const onNext = () => {
    setStep(6);
    // forceSave();
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
        <div className="flex flex-col">
          <InputContainer className="pb-8">
            <InputLabel>Add Team Members</InputLabel>
            <InputFieldContainer isError={errors.team ? true : false} size="sm">
              <InputField
                maxLength={32}
                placeholder="Search username"
                {...register('team')}
              />
            </InputFieldContainer>
            <HelperText variant={'error'} show={errors.team ? true : false}>
              {errors.team?.message}
            </HelperText>
          </InputContainer>
        </div>
      </StepTemplate>
    </>
  );
};
