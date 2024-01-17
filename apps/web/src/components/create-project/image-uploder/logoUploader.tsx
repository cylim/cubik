import React, { useState } from 'react';
import { ProjectFormData } from '@/components/create-project/createProject[ARCHIEVE]';
import { IProjectData } from '@/types/project';
import { useUploadThing } from '@/utils/uploadthing';
import {
  FieldErrors,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import { Project_Backup } from '@cubik/common';
import { ImageUploader, toast } from '@cubik/ui';

interface Props {
  setValue: UseFormSetValue<IProjectData>;
  setError: UseFormSetError<IProjectData>;
  errors: FieldErrors<IProjectData>;
  watch: UseFormWatch<IProjectData>;
}
export const LogoUploader = ({ setError, setValue, errors, watch }: Props) => {
  const [progress, setProgress] = useState<number>(0);

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        setProgress(progressEvent);
      },
      onUploadError: (error) => {
        setError('logo', {
          type: 'manual',
          message: error.message,
        });
        toast.error(`Upload Error: ${error.message}`);
      },
      onUploadBegin: (file) => {
        //   toast.info(`Upload Begin: ${file}`);
      },
      onClientUploadComplete: (file) => {
        if (file) {
          console.log(file);
          setValue('logo', file[0].url);
        } else {
          setError('logo', {
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
      logo={watch('logo') === Project_Backup ? undefined : watch('logo')}
      errorMessage={errors.logo?.message}
      setError={setError}
      isUploading={isUploading}
      startUpload={startUpload}
    />
  );
};
