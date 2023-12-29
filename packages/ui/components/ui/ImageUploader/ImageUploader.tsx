import React, { useState } from 'react';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Text } from '../../ui/text/text';

interface Props {
  useUploadThing: any;
}
export const ImageUploader = ({}: Props) => {
  const [loadingState] = useState<'Idle' | 'Success' | 'Error' | 'Uploading'>(
    'Error',
  );
  // const [progress, setProgress] = useState<number>(0);
  const [, setDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    alert(file.name);
    // Add your logic to handle the file
  };

  // const { startUpload } = useUploadThing('imageUploader', {
  //   onClientUploadComplete: () => {
  //     setLoadingState('Success');
  //   },
  //   onUploadError: (error: Error) => {
  //     setLoadingState('Error');
  //   },
  //   onUploadProgress: (progress: number) => {
  //     //   setLoadingState('Uploading');
  //   },
  // });

  return (
    <div
      className={`border border-[var(--form-uploader-border-default)] flex justify-start gap-3 p-3 rounded-xl w-full`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {loadingState !== 'Success' ? (
        <div
          className={cn(
            'p-4 w-max rounded flex',
            loadingState === 'Idle' && 'bg-[var(--form-uploader-bg-default)]',
            loadingState === 'Error' && 'bg-[var(--form-uploader-img-error)]',
          )}
        >
          <Icon name="cross" />
        </div>
      ) : (
        <div className={cn('p-4 w-max rounded flex')}>{/* Avatar */}</div>
      )}
      {loadingState === 'Idle' && (
        <div className="flex justify-center flex-col gap-3">
          <Text className="l2" color={'primary'}>
            Drop, Paste here or{' '}
            <label className="text-[--form-uploader-link-default] cursor-pointer">
              Browse
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </Text>
          <Text className="l3-light text-[var(--form-helper-default)]">
            Recommended size: 240*250 | JPG, PNG, GIF. Max size: 2MB
          </Text>
        </div>
      )}
      {loadingState === 'Success' && (
        <div className="flex justify-center flex-col gap-3">
          <Text className="l2 flex gap-1" color={'primary'}>
            <label className="text-[--form-uploader-text-success]">
              Uploaded Successfully
            </label>
            <label className="text-[--form-uploader-link-success] cursor-pointer">
              Upload Another
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </Text>
          <Text className="l3-light text-[var(--form-helper-default)]">
            profilepicture.jpg
          </Text>
        </div>
      )}
      {loadingState === 'Error' && (
        <div className="flex justify-center flex-col gap-3">
          <Text className="l2 flex gap-1" color={'primary'}>
            <label className="text-[--form-uploader-text-error]">
              Image size limit is 2MB
            </label>
            <label className="text-[--form-uploader-link-success] cursor-pointer">
              Try Again
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </Text>
          <Text className="l3-light text-[var(--form-helper-default)]">
            Recommended size: 240*250 | JPG, PNG, GIF. Max size: 2MB
          </Text>
        </div>
      )}
    </div>
  );
};
