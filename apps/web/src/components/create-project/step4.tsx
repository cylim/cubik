import { useState } from 'react';
import { ProjectFormData } from '@/components/create-project';
import { UseFormReturn } from 'react-hook-form';

import { DescriptionEditor, PreviewEditor } from '@cubik/editor';
import { Button, SegmentContainer, SegmentItem, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Step4 = ({ setStep, projectForm }: Props) => {
  const [preview, setPreview] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-1">
          <Text className="b4-light" color={'tertiary'}>
            4/5
          </Text>
          <Text className="h5" color={'primary'}>
            Detailed Description
          </Text>
          <Text className="b4-light" color={'secondary'}>
            Add Detailed description about the project
          </Text>
        </div>

        <div className="pointer-events-auto flex w-full flex-col gap-3">
          <div className="w-max">
            <SegmentContainer size="md">
              <SegmentItem
                isActive={!preview}
                onClick={() => {
                  setPreview(false);
                }}
              >
                Edit
              </SegmentItem>
              <SegmentItem
                isActive={preview}
                onClick={() => {
                  setPreview(true);
                }}
              >
                Preview
              </SegmentItem>
            </SegmentContainer>
          </div>
          {preview ? (
            <PreviewEditor content={projectForm.watch('description')} />
          ) : (
            <DescriptionEditor
              content={projectForm.watch('description')}
              onUpdate={(e) => {
                projectForm.setValue('description', e);
              }}
            />
          )}
        </div>

        <div className="mt-14 flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(3)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button rightIconName="chevronRight" variant={'primary'} size={'md'}>
            Submit Project
          </Button>
        </div>
      </div>
    </>
  );
};
