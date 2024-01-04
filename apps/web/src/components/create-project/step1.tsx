import { ProjectFormData } from '@/components/create-project';
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
}
export const Step1 = ({ setStep, projectForm }: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <Text className="b4-light" color={'tertiary'}>
              1/5
            </Text>
            <Text className="h5" color={'primary'}>
              Tell us about your project
            </Text>
            <Text className="b4-light" color={'secondary'}>
              we&apos;ll need its name, tagline, and a few other details
            </Text>
          </div>
          <div className="flex flex-col gap-4">
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
                  maxLength={16}
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
            <InputContainer>
              <InputLabel>Contact Email</InputLabel>
              <InputFieldContainer
                isError={projectForm.formState.errors.email ? true : false}
                variant="md"
              >
                <InputField
                  onChange={(e) => {
                    projectForm.setValue('email', e.currentTarget.value);
                  }}
                  value={projectForm.watch('email')}
                  placeholder="Email where all important information will be shared"
                />
              </InputFieldContainer>
            </InputContainer>
          </div>
        </div>

        <div className="my-14 w-full border-t border-[var(--color-border-primary-base)]" />
        <div className="flex flex-col gap-8">
          <div>
            <Text className="h5" color={'primary'}>
              Add Categories ( up to 3 )
            </Text>
            <Text className="b4-light" color={'secondary'}>
              your category should define what the project is about, does or
              what specific problem it solves, rather than feature-related or
              technology tags.
            </Text>
          </div>
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
        </div>

        <div className="mt-14 flex w-full items-center justify-between">
          <Button
            disabled
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(2)}
            rightIconName="chevronRight"
            variant={'primary'}
            size={'md'}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
