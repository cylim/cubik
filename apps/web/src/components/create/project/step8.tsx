import { useState } from 'react';
import { CreateProjectStepProps } from '@/components/create/project/step1';
import StepTemplate from '@/components/create/project/stepTemplate';
import { IProjectData } from '@/types/project';
import { useFormContext } from 'react-hook-form';

import { DescriptionEditor, PreviewEditor } from '@cubik/editor';
import { SegmentContainer, SegmentItem, Text } from '@cubik/ui';

export const Step8 = ({ setStep, forceSave }: CreateProjectStepProps) => {
  const {
    setValue,
    watch,
    control,
    setError,
    formState: { errors },
  } = useFormContext<IProjectData>();
  const [preview, setPreview] = useState<boolean>(false);

  const onNext = () => {
    //setStep(8);
    //forceSave();
  };
  const onPrev = () => {
    setStep(7);
  };
  return (
    <>
      <StepTemplate
        currentStep={8}
        onNext={onNext}
        onPrevious={onPrev}
        title={'We are almost done'}
        description={
          'The last step is to add a detailed description about the project, which describes in details what your project does'
        }
      >
        <div className="flex flex-col gap-4">
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
              <PreviewEditor content={watch('longDescription')} />
            ) : (
              <DescriptionEditor
                name="longDescription"
                control={control}
                content={watch('longDescription')}
                onUpdate={(e) => {
                  setValue('longDescription', e);
                }}
              />
            )}
          </div>
        </div>
      </StepTemplate>
    </>
  );
};
