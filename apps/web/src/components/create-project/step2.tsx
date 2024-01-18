import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';
import { CreateProjectStepProps } from '@/components/create-project/step1';
import StepTemplate from '@/components/create-project/stepTemplate';
import { Industries } from '@/constants/industry';
import { Controller, UseFormReturn } from 'react-hook-form';

import { InputLabel, SearchSelect } from '@cubik/ui';

interface Step2Props extends CreateProjectStepProps {
  control: any;
}

export const Step2 = ({
  setStep,
  forceSave,
  watch,
  errors,
  clearErrors,
  trigger,
  setValue,
  register,
  control,
}: Step2Props) => {
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
        title={'Choose Categories'}
        description={
          'These categories will be used to filter when someone wants to see projects in specific categories. Choose them carefully they can impact discoverability of your project.'
        }
      >
        <div className="flex flex-col gap-3">
          <InputLabel>Categories</InputLabel>

          <Controller
            name="industry"
            control={control}
            render={() => (
              <SearchSelect
                placeholder="Search Category here"
                isMulti={true}
                onChange={(e) => {
                  if (!e) return;
                  console.log('input value - ', e);
                  setValue('industry', e as any);
                }}
                value={watch('industry') as any}
                options={Industries as any}
              />
            )}
          />
        </div>
      </StepTemplate>
    </>
  );
};
