import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';
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
  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <Text className="b4-light" color={'tertiary'}>
              3/5
            </Text>
            <Text className="h5" color={'primary'}>
              Project Creators
            </Text>
            <Text className="b4-light" color={'secondary'}>
              you can add your team or anyone you worked with on this project
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Add Creators
          </Text>

          <TeamSelector projectForm={projectForm} />
        </div>

        <div className="flex w-full flex-col gap-8">
          <div>
            <Text className="h5" color={'primary'}>
              Links and Verification
            </Text>
            <Text className="b4-light" color={'secondary'}>
              Help use easily verify the ownership of the project by connecting
              twitter and github repository of the project
            </Text>
          </div>
          {/* <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <Text className="l1" color={'primary'}>
                Github
              </Text>
              <Button leftIconName="github" className="w-[228px]">
                Connect Github
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Text className="l1" color={'primary'}>
                X.com
              </Text>
              <Button leftIconName="twitter" className="w-[228px]">
                Connect X.com
              </Button>
            </div>
          </div> */}
          <div className="flex w-full flex-col gap-3">
            <InputContainer>
              <InputLabel>Github</InputLabel>
              <InputFieldContainer
                isError={projectForm.formState.errors.github ? true : false}
                size="md"
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
            <InputContainer>
              <InputLabel>X.come</InputLabel>
              <InputFieldContainer
                isError={projectForm.formState.errors.twitter ? true : false}
                size="md"
              >
                <InputField
                  onChange={(e) => {
                    projectForm.setValue('twitter', e.currentTarget.value);
                  }}
                  value={projectForm.watch('twitter')}
                  placeholder="https://x.com"
                />
              </InputFieldContainer>
            </InputContainer>
          </div>
        </div>

        <div className="flex items-center justify-start gap-3">
          <Checkbox
            checked={projectForm.watch('isOpenSource')}
            onCheckedChange={(e) => {
              if (e) {
                projectForm.setValue('isOpenSource', true);
              } else {
                projectForm.setValue('isOpenSource', false);
              }
            }}
          />
          <Text className="l1" color={'primary'}>
            The Project is Open Source
          </Text>
        </div>
        <div className="flex w-full items-center justify-between">
          <Button
            onClick={() => {
              setStep(2);
              forceSave();
            }}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(4)}
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
