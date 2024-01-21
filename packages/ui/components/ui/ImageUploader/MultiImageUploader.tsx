import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Avatar } from '../../ui/Avatar/Avatar';
import { Text } from '../text/text';

//import { fileSizeInMB } from './ImageUploader';

const CircularProgressBar = ({ progress }: { progress: number }) => {
  const radius = 20;
  const strokeWidth = 6;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const viewBoxSize = radius * 2 + strokeWidth;
  const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      width={viewBoxSize}
      height={viewBoxSize}
      viewBox={viewBox}
      className="circular-progress-bar"
    >
      <circle
        stroke="#C9C9C950"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
      />
      <motion.circle
        stroke="#3FF47E"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ rotate: -90, transformOrigin: 'center center' }}
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        animate={{ strokeDashoffset: offset }} // This line is necessary to animate the stroke offset
        initial={{ strokeDashoffset: circumference }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
};

interface Props {
  startUpload: (files: File[], input?: undefined) => any;
  name: string;
  isUploading: boolean;
  errorMessage: string | undefined;
  images: string[];
  setError: UseFormSetError<any>;
  progress: number;
  onRemove: (url: string) => void;
}
export const MultiImageUploader = ({
  isUploading,
  name,
  progress,
  onRemove,
  errorMessage,
  images,
  setError,
  startUpload,
}: Props) => {
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
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const currentFile = e.dataTransfer.files[i];
      processFile(currentFile);
      setFile((prev) => [...prev, currentFile]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        if (e.target.files && e.target.files[i]) {
          const currentFile = e.target.files[i];
          processFile(currentFile);
          setFile((prev) => [...prev, currentFile]);
        }
      }
    } else {
      if (setError) {
        setError(name, { message: 'No file selected' });
        toast.error('There was some error');
      }
    }
  };

  const processFile = (file: File) => {
    const newFileArray = [...images, file];
    if (newFileArray.length > 4) {
      setError(name, { message: 'You can only upload 4 images' });
      return toast.error('You can only upload 4 images');
    }
    startUpload([file]);
  };

  return (
    <div className={cn('flex flex-col gap-4')}>
      <div
        className={cn(
          `border border-[var(--form-uploader-border-default)] border-dashed rounded-xl`,
          drag &&
            'bg-[--color-surface-positive-transparent] border-[--color-border-positive-emphasis]',
        )}
      >
        {!isUploading ? (
          <motion.div
            className={cn(
              'flex justify-center flex-col items-center gap-3 p-3 w-full min-h-56',
            )}
            onDragOver={(e) => {
              if (errorMessage) return;
              if (images.length >= 4) {
                setError(name, { message: 'You can only upload 4 images' });
                return;
              }
              handleDragOver(e);
            }}
            onDragLeave={handleDragLeave}
            onDrop={(e) => {
              handleDrop(e);
            }}
          >
            <div
              className={cn(
                'p-4 w-max rounded flex',
                'bg-[var(--form-uploader-img-default)]',
                drag && 'bg-[--color-surface-positive-transparent]',
              )}
            >
              <Icon
                // svg animation states here
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeInOut',
                }}
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
            <div className="w-full h-6 relative overflow-hidden flex justify-center items-center flex-col gap-3">
              <AnimatePresence>
                {!drag ? (
                  <motion.div
                    key="default state"
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }} // Changed y value for exit
                    transition={{ duration: 0.2 }} // Increased duration for smoother transition
                  >
                    <Text className="l2" color={'primary'}>
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
                ) : (
                  <motion.div
                    key="dragging state"
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-3"
                    initial={{ opacity: 0, y: -10 }} // Changed y value for initial
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }} // Increased duration for smoother transition
                  >
                    <Text className="l2" color={'primary'}>
                      Drop your images here
                    </Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Text className="l3-light text-[var(--form-helper-default)]">
              Recommended size: 240*250 | JPG, PNG, GIF. Max size: 2MB
            </Text>
          </motion.div>
        ) : errorMessage ? (
          <motion.div
            className={cn(
              'flex justify-center flex-col items-center gap-3 p-3 w-full min-h-56',
            )}
          >
            <div
              className={cn(
                'p-4 w-max rounded flex',
                'bg-[var(--form-uploader-img-default)]',
              )}
            >
              <Icon
                // svg animation states here
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeInOut',
                }}
                name={'photoCancel'}
                color={'var(--form-uploader-icon-default)'}
                strokeWidth={2}
                width={22}
                height={22}
              />
            </div>
            <div className="w-full h-6 relative overflow-hidden flex justify-center items-center flex-col gap-3">
              <AnimatePresence>
                <motion.div
                  key="default state"
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }} // Changed y value for exit
                  transition={{ duration: 0.2 }} // Increased duration for smoother transition
                >
                  <Text className="l2" color={'negative'}>
                    A maximum of 4 images can be Uploaded
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
              </AnimatePresence>
            </div>
            <Text className="l3-light text-[var(--form-helper-default)]">
              Remove existing image to upload new
            </Text>
          </motion.div>
        ) : (
          <div
            className={`border border-[var(--color-border-positive-base)] bg-[--color-surface-positive-transparent] flex justify-center items-center flex-col gap-3 p-3 w-full min-h-56`}
          >
            <CircularProgressBar progress={progress} />
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text className="l2" color={'primary'}>
                  Uploading...
                </Text>
                <Text className="l3" color={'secondary'}>
                  {progress}%
                </Text>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      {/* this is the display area */}
      <div className="flex justify-between items-center overflow-x-scroll no-scrollbar">
        {images &&
          new Array(4).fill(0).map((_, index) => {
            if (images[index]) {
              const img = images[index];
              return (
                <div
                  className="border h-full border-[var(--form-uploader-border-default)] border-dashed rounded-lg p-4"
                  key={index + '-image'}
                >
                  <div
                    className="hover:opacity-50 cursor-pointer"
                    onClick={() => onRemove(img)}
                  >
                    <Avatar
                      size={'lg'}
                      variant={'square'}
                      src={images[index]}
                      alt="random"
                    />
                  </div>
                </div>
              );
            }
            return (
              <div
                key={index + '-image'}
                className="h-full border border-[var(--form-uploader-border-default)] border-dashed rounded-lg p-4"
              >
                <div
                  className={
                    'p-6 w-max rounded flex bg-[var(--form-uploader-img-default)]'
                  }
                >
                  <Icon
                    name={'upload'}
                    className="stroke-[var(--form-uploader-icon-default)]"
                    height={18}
                    width={18}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
