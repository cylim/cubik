import React, { useState } from 'react';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Avatar } from '../../ui/Avatar/Avatar';
import { Text } from '../../ui/text/text';

interface Props {
  startUpload: (files: File[], input?: undefined) => any;
  isUploading: boolean;
  errorMessage: string | undefined;
  logo: string;
  progress: number;
}
export const ImageUploader = ({
  startUpload,
  isUploading,
  errorMessage,
  logo,
  progress,
}: Props) => {
  console.log('logo', logo);
  const [drag, setDragging] = useState(false);
  const [file, setFile] = useState<File[]>([]);

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
      setFile([e.dataTransfer.files[0]]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
      setFile([e.target.files[0]]);
    }
  };

  const processFile = (file: File) => {
    startUpload([file]);
  };

  return (
    <div
      className={cn(
        `border border-[var(--form-uploader-border-default)] flex justify-start gap-3 p-3 rounded-xl w-full`,
        drag && 'border-[var(--form-uploader-border-hover)]',
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Success */}
      {logo && !isUploading && !errorMessage && (
        <div className={cn('w-max rounded flex')}>
          <Avatar size={'lg'} src={logo} alt="name" />
        </div>
      )}
      {/* Uploading state */}
      {isUploading && (
        <div
          className={cn(
            'p-4 w-max rounded flex',
            'bg-[var(--form-uploader-img-uploading)]',
          )}
        >
          <Icon
            name={'spinner'}
            className="stroke-[var(--form-uploader-icon-uploading)] animate-spin"
            height={18}
            width={18}
          />
        </div>
      )}
      {/* Default state */}
      {!logo && !errorMessage && !isUploading && (
        <div
          className={cn(
            'p-4 w-max rounded flex',
            'bg-[var(--form-uploader-img-default)]',
          )}
        >
          <Icon
            name={'upload'}
            className="stroke-[var(--form-uploader-icon-default)]"
          />
        </div>
      )}
      {/* Error State */}
      {errorMessage && (
        <div
          className={cn(
            'p-4 w-max rounded flex',
            'bg-[var(--form-uploader-img-error)]',
          )}
        >
          <Icon
            name={'upload'}
            className="stroke-[var(--form-uploader-icon-error)]"
          />
        </div>
      )}

      {/* Default  */}
      {!logo && !errorMessage && !isUploading && (
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

      {/* Sucess state */}
      {logo && !errorMessage && !isUploading && (
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
            {file[0]?.name || `${logo.slice(0, 45)}......`}
          </Text>
        </div>
      )}
      {/* Error state */}
      {errorMessage && (
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
      {/* Uploading state */}
      {isUploading && (
        <div className="flex justify-center flex-col gap-3 w-full">
          <Text className="l2 flex gap-1" color={'primary'}>
            <label className="text-[var(--form-uploader-text-uploading)] line-clamp-1">
              Uploading {file[0].name}
            </label>
          </Text>
          <div className="bg-[var(--form-uploader-img-uploading)] h-3 w-full rounded-lg overflow-hidden">
            <div
              style={{
                width: `${progress}%`,
              }}
              className="bg-[var(--form-uploader-icon-uploading)] h-3"
            />
          </div>
        </div>
      )}
    </div>
  );
};
