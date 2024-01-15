import React, { useEffect, useRef, useState } from 'react';
import move from 'array-move';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { toast } from 'sonner';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { Avatar } from '../../ui/Avatar/Avatar';
import { Text } from '../text/text';
import { findIndex, Position } from './findIndex';

interface Offset {
  top: number;
  left: number;
}

interface Props {
  startUpload: (files: File[], input?: undefined) => any;
  isUploading: boolean;
  errorMessage: string | undefined;
  images: string[];
  progress: number;
  onRemove: (url: string) => void;
}

const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
};

interface DraggableItemProps {
  onRemove: (url: string) => void;
  moveItem: (i: number, dragOffset: number) => void;
  i: number;
  img: string;
  setPosition: (index: number, offset: Position) => void;
}

const DraggableItem = ({
  onRemove,
  moveItem,
  i,
  img,
  setPosition,
}: DraggableItemProps) => {
  const [isDragging, setDragging] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const dragOriginX = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      setPosition(i, {
        width: ref.current.offsetWidth,
        left: ref.current.offsetLeft,
      });
    }
  }, [i, setPosition]);

  return (
    <motion.li
      ref={ref}
      initial={false}
      animate={
        isDragging ? { zIndex: 1 } : { zIndex: 0, transition: { delay: 0.3 } }
      }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      drag="x"
      className="border border-[var(--form-uploader-border-default)] border-dashed rounded-lg p-2"
      dragOriginX={dragOriginX}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDrag={(e, { point }) => moveItem(i, point.x)}
    >
      <div
        className="hover:opacity-50 cursor-pointer"
        onClick={() => onRemove(img)}
      >
        <Avatar size={'md'} variant={'square'} src={img} alt="uploaded" />
      </div>
    </motion.li>
  );
};

export const MultiImageUploader = ({
  isUploading,
  progress,
  onRemove,
  images: initialImages, // Rename the prop to avoid conflict
  startUpload,
}: Props) => {
  const controls = useDragControls();
  const [drag, setDragging] = useState(false);
  const [_file, setFile] = useState<File[]>([]);
  const positionsRef = useRef<{ [key: number]: Offset }>({}).current;
  const [imageList, setImageList] = useState<string[]>(initialImages);

  const moveItem = (currentIndex: number, dragOffset: number) => {
    const targetIndex = findIndex(
      currentIndex,
      dragOffset,
      Object.values(positionsRef),
    );

    if (targetIndex !== -1 && targetIndex !== currentIndex) {
      // Rearrange the imageList array
      const newImageList = move(imageList, currentIndex, targetIndex);
      setImageList(newImageList);
    }
  };
  const setPosition = (index: number, offset: Offset) => {
    positionsRef[index] = offset;
  };

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
    const newFileArray = [...initialImages, file];

    if (newFileArray.length > 5) {
      return toast.error('You can only upload 5 images');
    }
    startUpload([file]);
  };

  return (
    <div className="flex w-fill border border-red-500 flex-col gap-4">
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
              className="!stroke-[var(--form-uploader-icon-default)]"
              height={18}
              width={18}
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
      <div className="flex justify-between items-center overflow-x-scroll no-scrollbar">
        {initialImages &&
          new Array(4).fill(0).map((_, index) => {
            if (initialImages[index]) {
              const img = initialImages[index];
              return (
                <DraggableItem
                  key={index}
                  moveItem={moveItem}
                  i={index}
                  img={img}
                  onRemove={onRemove}
                  setPosition={setPosition}
                />
              );
            }
            return (
              <div
                key={index + '-image'}
                className="border border-[var(--form-uploader-border-default)] border-dashed rounded-lg p-4"
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
