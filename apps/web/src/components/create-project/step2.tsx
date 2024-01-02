import { ProjectFormData } from '@/components/create-project';
import { MultiImageUploader } from '@/components/create-project/image-uploder/multiImageUploader';
import { useUploadThing } from '@/utils/uploadthing';
import React from 'React';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { Button, ImageUploader, Text } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  multiImageUploaderProgress: number;
  setMultiImageUploaderProgress: React.Dispatch<React.SetStateAction<number>>;
}
export const Step2 = ({
  setStep,
  projectForm,
  progress,
  setProgress,
}: Props) => {
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        // setProgress(progressEvent);
        setProgress(progressEvent);
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
          <Text color={'primary'} className="l1">
            Thumbnail
          </Text>
          <ImageUploader
            progress={progress || 0}
            logo={projectForm.watch('logo')}
            errorMessage={projectForm.formState.errors.logo?.message}
            isUploading={isUploading}
            startUpload={startUpload}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Text color={'primary'} className="l1">
            Gallery
          </Text>
          <MultiImageUploader
          // progress={projectForm.watch('progress') || 0}
          // logo={projectForm.watch('logo')}
          // errorMessage={projectForm.formState.errors.logo?.message}
          // isUploading={isUploading}
          // startUpload={startUpload}
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
