import React, { useState } from 'react';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Text } from '../text/text';

// interface _Props {
//   startUpload: (files: File[], input?: undefined) => any;
//   isUploading: boolean;
//   errorMessage: string | undefined;
//   logo: string;
//   progress: number;
// }
export const MultiImageUploader = () => {
  const [drag, setDragging] = useState(false);
  const [, setFile] = useState<File[]>([]);

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
    console.log(file);
    // startUpload([file]);
  };
  return (
    <>
      <div
        className={cn(
          `border border-[var(--form-uploader-border-default)] flex justify-center items-center flex-col gap-3 p-3 rounded-xl w-full min-h-56`,
          drag && 'border-[var(--form-uploader-border-hover)]',
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
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

        <div className="flex justify-center items-center flex-col gap-3">
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
      </div>
    </>
  );
};
