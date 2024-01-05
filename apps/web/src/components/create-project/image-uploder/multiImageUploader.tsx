import React from 'react';
import { ProjectFormData } from '@/components/create-project';
import { useUploadThing } from '@/utils/uploadthing';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { MultiImageUploader as MIU } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
}
export const MultiImageUploader = ({ projectForm }: Props) => {
  const [progress, setProgress] = React.useState<number>(0);
  const [error, setError] = React.useState<Error | null>(null);
  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onUploadProgress: (progressEvent) => {
      setProgress(progressEvent);
    },
    onUploadError: (error) => {
      setError(error);
      toast.error(`Upload Error: ${error.message}`);
    },
    onUploadBegin: (file) => {
      //   setLoadingState('Uploading');
      toast.info(`Upload Begin: ${file}`);
    },
    onClientUploadComplete: (file) => {
      if (file) {
        projectForm.setValue('slides', [
          ...projectForm.watch('slides'),
          file[0].url,
        ]);
      } else {
        setError({
          message: 'Upload Error',
          name: 'Upload Error',
        });
        toast.error(`Upload Error: ${file}`);
      }
    },
  });
  const onRemove = (url: string) => {
    projectForm.setValue(
      'slides',
      projectForm.watch('slides').filter((slide) => slide !== url),
    );
  };
  return (
    <>
      <MIU
        onRemove={onRemove}
        errorMessage={error?.message}
        isUploading={isUploading}
        progress={progress}
        images={projectForm.watch('slides')}
        startUpload={startUpload}
      />
    </>
  );
};
