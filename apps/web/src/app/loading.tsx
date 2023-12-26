import React from 'react';
import ProjectHeader from '@/components/explorer/ExplorerHeader';

import { CircularSkeleton, Skeleton, SubHead, TextSkeleton } from '@cubik/ui';

const ProjectCardSkeleton = ({
  size,
  shape,
}: {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'square' | 'circle';
}) => {
  return (
    <>
      <div className={'flex items-center justify-between p-[4px]'}>
        <div className="flex w-full items-center gap-4">
          <CircularSkeleton size={size} shape={shape} />
          <div className="min-h-100% flex min-w-[16rem] flex-col justify-center gap-4 md:min-w-[24rem]">
            <div className="w-[50%]">
              <Skeleton className={'w-1/2 rounded-full'} opacity={50} />
            </div>
            <TextSkeleton lines={2} opacity={25} />
          </div>
        </div>
      </div>
    </>
  );
};

const HomeLoading = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center lg:flex-row lg:items-start 2xl:mx-auto 2xl:max-w-7xl">
      <div className="flex h-full w-full flex-col gap-8 px-4 py-8 lg:w-2/3">
        <ProjectHeader />
        <div className="flex flex-col gap-6 lg:px-14">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectCardSkeleton key={index} size={'xl'} shape={'square'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
