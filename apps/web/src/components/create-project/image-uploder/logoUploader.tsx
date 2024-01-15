import React, { useState } from 'react';
import { ProjectFormData } from '@/components/create-project/createProject';
import { useUploadThing } from '@/utils/uploadthing';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { Project_Backup } from '@cubik/common';
import { ImageUploader } from '@cubik/ui';

interface Props {
  projectForm: UseFormReturn<ProjectFormData, any, undefined>;
}
export const LogoUploader = ({ projectForm }: Props) => {
  const [progress, setProgress] = useState<number>(0);

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
    <ImageUploader
      progress={progress || 0}
      logo={
        projectForm.watch('logo') === Project_Backup
          ? undefined
          : projectForm.watch('logo')
      }
      errorMessage={projectForm.formState.errors.logo?.message}
      isUploading={isUploading}
      startUpload={startUpload}
    />
  );
};
