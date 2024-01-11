import React from 'react';
import { IProjectData } from '@/types/project';
import { useUploadThing } from '@/utils/uploadthing';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { MultiImageUploader } from '@cubik/ui';

interface IEditProjectImagesProps {
  editProjectForm: UseFormReturn<IProjectData, any, undefined>;
}

const ProjectImages = ({ editProjectForm }: IEditProjectImagesProps) => {
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
        editProjectForm.setValue('slides', [
          ...editProjectForm.watch('slides'),
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
    editProjectForm.setValue(
      'slides',
      editProjectForm.watch('slides').filter((slide) => slide !== url),
    );
  };

  return (
    <div>
      <MultiImageUploader
        onRemove={onRemove}
        errorMessage={error?.message}
        isUploading={isUploading}
        progress={progress}
        images={editProjectForm.watch('slides')}
        startUpload={startUpload}
      />
    </div>
  );
};

export default ProjectImages;
