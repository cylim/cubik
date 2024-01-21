import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Avatar } from '../../ui/Avatar/Avatar';
import { Text } from '../../ui/text/text';

interface Props {
  startUpload: (files: File[], input?: undefined) => any;
  isUploading: boolean;
  errorMessage: string | undefined;
  setError?: any;
  logo?: string;
  progress: number;
}

export const fileSizeInMB = (sizeInBytes: number) =>
  (sizeInBytes / 1000000).toFixed(3);

const TextWrapper = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => (
  <div className="flex w-full justify-center flex-col gap-2">{children}</div>
);
export const ImageUploader = ({
  startUpload,
  isUploading,
  errorMessage,
  setError,
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
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
      setFile([e.target.files[0]]);
    }
  };

  const processFile = (file: File) => {
    startUpload([file]);
  };

  const Title = () => {
    return (
      <AnimatePresence initial={false}>
        {!logo && !errorMessage && !isUploading && !drag && (
          <motion.div
            key="dragging state"
            className="w-full flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }} // Changed y value for initial
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Text className="l1 md:l2" color={'primary'}>
              Drop, Paste here or{' '}
              <label className="text-[--form-uploader-link-default] cursor-pointer">
                Browse
                <input
                  type="file"
                  multiple={true}
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </Text>
          </motion.div>
        )}
        {!logo && !errorMessage && !isUploading && drag && (
          <motion.div
            key="default state"
            className="w-full flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Text className="l2" color={'primary'}>
              Drop your images here
            </Text>
          </motion.div>
        )}
        {isUploading && (
          <motion.div
            key="default state"
            className="w-full flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Text
              className="l2 flex gap-1 overflow-clip  max-w-[80%] w-fit line-clamp-1"
              color={'primary'}
            >
              <label className="text-[var(--form-uploader-text-uploading)] line-clamp-1">
                Uploading {file[0]?.name}
              </label>
            </Text>
            <Text
              className="l3 line-clamp-1 min-w-[8rem] w-fit"
              color="secondary"
            >
              {file[0] &&
                `${fileSizeInMB(
                  file[0].size * (progress / 100),
                )} MB / ${fileSizeInMB(file[0].size)} MB`}
            </Text>
          </motion.div>
        )}
        {logo && !isUploading && !errorMessage && !drag && (
          <motion.div
            key="default state"
            className="w-full flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Text className="l2 flex gap-1 line-clamp-1" color={'primary'}>
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
          </motion.div>
        )}
        {logo && !isUploading && !errorMessage && drag && (
          <motion.div
            key="default state"
            className="w-full h-full flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Text className="l2" color={'primary'}>
              Drop your images here
            </Text>
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            key="default state"
            className="w-full h-full flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const Description = React.memo(() => {
    console.log('description rerendering');
    return (
      <AnimatePresence initial={false}>
        {!logo && !errorMessage && !isUploading && (
          <motion.div
            key="recommended size description"
            className="w-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text className="l3-light text-[var(--form-helper-default)]">
              Recommended size: 240*250 | JPG, PNG, GIF. Max size: 2MB
            </Text>
          </motion.div>
        )}
        {logo && !isUploading && !errorMessage && (
          <motion.div
            key="filename state"
            className="w-full h-full flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text className="l3-light line-clamp-1 text-[var(--form-helper-default)]">
              {file[0]?.name || `${logo.slice(0, 45)}......`}
            </Text>
          </motion.div>
        )}
        {isUploading && <></>}
        {errorMessage && (
          <motion.div
            key="error message state"
            className="absolute top-0 left-0 w-full h-full flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text className="l3-light text-[var(--form-helper-error)]">
              Recommended size: 240*250 | JPG, PNG, GIF. Max size: 2MB
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    );
  });

  return (
    <div
      className={cn(
        `border transition-all border-dashed border-[var(--form-uploader-border-default)] flex justify-start gap-3 p-3 rounded-lg w-full`,
        drag &&
          'bg-[--color-surface-positive-transparent] border-[--color-border-positive-emphasis]',
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Default state */}
      {!logo && !errorMessage && !isUploading && !drag && (
        <div
          className={
            'p-4 rounded flex items-center justify-center bg-[var(--form-uploader-img-default)]'
          }
        >
          <Icon
            name={drag ? 'spinner' : 'upload'}
            color={
              drag
                ? 'var(--form-uploader-icon-dropping)'
                : 'var(--form-uploader-icon-default)'
            }
            strokeWidth={2}
            width={22}
            height={22}
          />
        </div>
      )}
      {/* dragging */}
      {!logo && !errorMessage && !isUploading && drag && (
        <div
          className={
            'p-4 w-[54x]rounded flex items-center justify-center bg-[var(--form-uploader-img-default)]'
          }
        >
          <Icon
            name={drag ? 'spinner' : 'upload'}
            color={
              drag
                ? 'var(--form-uploader-icon-dropping)'
                : 'var(--form-uploader-icon-default)'
            }
            strokeWidth={2}
            width={22}
            height={22}
          />
        </div>
      )}
      {/* Success */}
      {logo && !isUploading && !errorMessage && (
        <div className={cn('w-max rounded flex')}>
          <Avatar size={'md'} src={logo} alt="name" />
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
            name={progress === 100 ? 'checkTickCircleFilled' : 'spinner'}
            color="var(--form-uploader-icon-uploading)"
            className={progress === 100 ? '' : 'animate-spin'}
            strokeWidth={2}
            width={22}
            height={22}
          />
        </div>
      )}
      {/* Error State */}
      {errorMessage && (
        <div
          className={cn(
            'p-4 !w-[54x] border border-red-500 rounded flex',
            'bg-[var(--form-uploader-img-error)]',
          )}
        >
          <Icon
            name={'upload'}
            className="stroke-[var(--form-uploader-icon-error)]"
          />
        </div>
      )}
      <TextWrapper>
        <Title />
        <Description />
        {isUploading && (
          <div className="flex w-full flex-row gap-2 items-center">
            <div className="bg-[var(--form-uploader-img-uploading)] h-3 w-full rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-0 bg-[var(--form-uploader-icon-uploading)] h-3"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <Text className="l2" color="secondary">
              {progress}%
            </Text>
          </div>
        )}
      </TextWrapper>
    </div>
  );
};
