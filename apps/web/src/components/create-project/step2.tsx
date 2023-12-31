import { ProjectFormData } from '@/components/create-project';
import { useUploadThing } from '@/utils/uploadthing';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { Button, ImageUploader, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Step = ({ setStep, projectForm }: Props) => {
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        // setProgress(progressEvent);
        projectForm.setValue('progress', progressEvent);
      },
      onUploadError: (error) => {
        projectForm.setError('logo', {
          type: 'manual',
          message: error.message,
        });
        toast.error(`Upload Error: ${error.message}`);
      },
      onUploadBegin: (file) => {
        //   setLoadingState('Uploading');
        //   toast.info(`Upload Begin: ${file}`);
      },
      onClientUploadComplete: (file) => {
        if (file) {
          console.log(file);
          projectForm.setValue('logo', file[0].url);
        } else {
          projectForm.setError('logo', {
            type: 'manual',
            message: "Couldn't upload file",
          });
          toast.error(`Upload Error: ${file}`);
        }
      },
    },
  );

  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col">
          <Text className="b4-light" color={'tertiary'}>
            2/5
          </Text>
          <Text className="h5 py-1" color={'primary'}>
            How Does it look
          </Text>
          <Text className="b4-light" color={'secondary'}>
            lets make your project look nice
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l2">
            Thumbnail
          </Text>
          <ImageUploader
            progress={projectForm.watch('progress') || 0}
            logo={projectForm.watch('logo')}
            errorMessage={projectForm.formState.errors.logo?.message}
            isUploading={isUploading}
            startUpload={startUpload}
          />
        </div>
        <div className=" flex w-full items-center justify-between">
          <Button
            onClick={() => setStep(1)}
            leftIconName="chevronLeft"
            variant={'outline'}
            size={'md'}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(3)}
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

export { Step as Step2 };
