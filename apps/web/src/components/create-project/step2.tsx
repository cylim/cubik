import { ProjectFormData } from '@/components/create-project/createProject';
import StepTemplate from '@/components/create-project/stepTemplate';
import { Industries } from '@/constants/industry';
import { UseFormReturn } from 'react-hook-form';

import { InputLabel, SearchSelect } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  forceSave: () => Promise<void>;
}

export const Step2 = ({ setStep, projectForm, forceSave }: Props) => {
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
          <SearchSelect
            placeholder="Search Category here"
            isMulti={true}
            onChange={(e) => {
              if (!e) return;
              projectForm.setValue('category', e as any);
            }}
            value={projectForm.watch('category') as any}
            options={Industries as any}
          />
        </div>
      </StepTemplate>
    </>
  );
};
