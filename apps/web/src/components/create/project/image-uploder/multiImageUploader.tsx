import React from 'react';
import { IProjectData } from '@/types/project';
import { useUploadThing } from '@/utils/uploadthing';
import {
  FieldErrors,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { toast } from 'sonner';

import { MultiImageUploader as MIU } from '@cubik/ui';

interface Props {
  setValue: UseFormSetValue<IProjectData>;
  watch: UseFormWatch<IProjectData>;
  setError: UseFormSetError<IProjectData>;
  errors: FieldErrors<IProjectData>;
}
export const MultiImageUploader = ({
  setValue,
  watch,
  errors,
  setError,
}: Props) => {
  const [progress, setProgress] = React.useState<number>(0);

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onUploadProgress: (progressEvent) => {
      setProgress(progressEvent);
    },
    onUploadError: (error) => {
      setError('slides', { message: error.message });
      toast.error(`Upload Error: ${error.message}`);
    },
    onUploadBegin: (file) => {
      //   setLoadingState('Uploading');
      // toast.info(`Upload Begin: ${file}`);
    },
    onClientUploadComplete: (file) => {
      if (file) {
        setValue('slides', [...(watch('slides') || []), file[0].url]);
      } else {
        setError('slides', { message: 'Upload Error' });
        toast.error(`Upload Error: ${file}`);
      }
    },
  });
  const onRemove = (url: string) => {
    setValue(
      'slides',
      watch('slides').filter((slide) => slide !== url),
    );
  };
  return (
    <>
      <MIU
        name={'slides'}
        onRemove={onRemove}
        errorMessage={errors.slides ? errors.slides.message : undefined}
        isUploading={isUploading}
        progress={progress}
        setError={setError}
        images={watch('slides')?.length > 0 ? watch('slides') : []}
        startUpload={startUpload}
      />
    </>
  );
};
