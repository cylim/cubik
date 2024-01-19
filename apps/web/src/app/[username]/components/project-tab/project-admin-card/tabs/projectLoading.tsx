import React from 'react';

import { Skeleton, TextSkeleton } from '@cubik/ui';

const ProjectLoading = () => {
  return (
    <div className="mx-auto mt-[8rem] flex w-full max-w-7xl flex-col gap-4">
      <div className={'flex items-center justify-between p-[4px]'}>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
          <div className="min-h-100% flex w-full flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-full">
              <Skeleton className={'w-full rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoading;
