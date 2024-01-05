import React, { useState } from 'react';
import { toast } from 'sonner';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Avatar } from '../../ui/Avatar/Avatar';
import { Text } from '../text/text';

interface Props {
  startUpload: (files: File[], input?: undefined) => any;
  isUploading: boolean;
  errorMessage: string | undefined;
  images: string[];
  progress: number;
  onRemove: (url: string) => void;
}
export const MultiImageUploader = ({
  isUploading,
  progress,
  onRemove,
  images,
  startUpload,
}: Props) => {
  const [drag, setDragging] = useState(false);
  const [_file, setFile] = useState<File[]>([]);

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
      const currentFile = e.dataTransfer.files[0];
      processFile(currentFile);
      setFile((prev) => [...prev, currentFile]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const currentFile = e.target.files[0];
      processFile(currentFile);
      setFile((prev) => [...prev, currentFile]);
    }
  };

  const processFile = (file: File) => {
    if (_file.length === 5) {
      return toast.error('You can only upload 5 images');
    }
    startUpload([file]);
  };

  return (
    <>
      {!isUploading ? (
        <div
          className={cn(
            `border border-[var(--form-uploader-border-default)] flex justify-center items-center  border-dashed flex-col gap-3 p-3 rounded-xl w-full min-h-56`,
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
      ) : (
        <div
          className={`border border-[var(--form-uploader-border-default)] flex justify-center items-center flex-col gap-3 p-3 rounded-xl w-full min-h-56`}
        >
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
          <div className="flex justify-center flex-col gap-3 w-full">
            <Text className="l2 flex gap-1" color={'primary'}>
              <label className="text-[var(--form-uploader-text-uploading)] line-clamp-1">
                Uploading {_file[_file.length || 0]?.name}
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
        </div>
      )}
      <div className="flex justify-between gap-3 items-center overflow-x-scroll">
        {new Array(5).fill(0).map((_, index) => {
          if (images[index]) {
            const img = images[index];
            return (
              <div
                className="hover:opacity-50 cursor-pointer"
                onClick={() => onRemove(img)}
                key={index + '-image'}
              >
                <Avatar
                  size={'lg'}
                  variant={'square'}
                  src={images[index]}
                  alt="random"
                />
              </div>
            );
          }
          return (
            <div
              key={index + '-image'}
              className="border border-[var(--form-uploader-border-default)] border-dashed rounded-lg"
            >
              <div
                className={cn(
                  'p-5 w-max rounded flex',
                  'bg-[var(--form-uploader-img-default)]',
                )}
              >
                <Icon
                  name={'upload'}
                  className="stroke-[var(--form-uploader-icon-default)]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};