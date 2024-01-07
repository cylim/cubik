import { CircularSkeleton, Skeleton, TextSkeleton } from "@cubik/ui";

export const ProjectCardSkeleton = ({
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