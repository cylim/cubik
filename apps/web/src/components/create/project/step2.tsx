import { CreateProjectStepProps } from '@/components/create/project/step1';
import StepTemplate from '@/components/create/project/stepTemplate';
import { Industries } from '@/constants/industry';
import { IProjectData } from '@/types/project';
import { Controller, useFormContext, UseFormReturn } from 'react-hook-form';

import { InputLabel, Select } from '@cubik/ui';

export const Step2 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext<IProjectData>();

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
        <div className="flex max-w-[442px] flex-col gap-3">
          <InputLabel>Categories</InputLabel>
          <Controller
            name="industry"
            control={control}
            render={() => (
              <Select
                placeholder="Search Category here"
                isMulti={true}
                isClearable={false}
                isSearchable={true}
                onChange={(e) => {
                  if (!e) return;
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
