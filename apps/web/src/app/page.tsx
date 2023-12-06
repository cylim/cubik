import { Metadata } from 'next';
import Link from 'next/link';
import ProjectHeader from '@/components/explorer/ProjectHeader';
import { get } from '@vercel/edge-config';

import { prisma } from '@cubik/database';
import {
  Avatar,
  CircularSkeleton,
  Icon,
  ProjectCard,
  SaveButton,
  Skeleton,
  SubHead,
  Text,
  TextSkeleton,
} from '@cubik/ui';

export const metadata: Metadata = {
  title: 'Cubik',
  metadataBase: new URL('https://res.cloudinary.com'),
  description: 'Fund Public Goods Through Community Voting On Solana',
  openGraph: {
    images: ['/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png'],
  },
  twitter: {
    title: 'Cubik',
    card: 'summary_large_image',
    images: ['/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png'],
  },
};
const getProjects = async () => {
  const isEventActive = await get('isEventActive');
  if (isEventActive) {
    return [];
  }
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
        shortDescription: true,
      },
      take: 30,
    });
    return projects;
  } catch (error) {
    return [];
  }
};

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

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {/* Body Container*/}
      <div className="flex min-h-screen w-full flex-col items-center md:mx-auto lg:flex-row  lg:items-start 2xl:max-w-7xl">
        {/* Projects Section */}
        <div className="flex h-full w-full flex-col gap-8 px-4 py-8 lg:w-2/3">
          <ProjectHeader />
          {/* Projects */}
          <div className="flex flex-col gap-6 lg:px-14">
            {projects.map((project) => {
              return (
                <ProjectCard
                  href={'/project'}
                  //Button={<SaveButton />}
                  description={project.shortDescription}
                  name={project.name}
                  logo={project.logo}
                  key={project.id}
                />
              );
            })}
          </div>
        </div>

        {/* <div className=":fixed block h-full w-full border-l border-[var(--color-neutral-900)] px-4  py-3 lg:right-0 lg:top-24 lg:w-1/3 lg:px-10 lg:py-8 xl:px-20 2xl:block ">
          <SubHead
            heading="Collection"
            icon={<Icon name="grid" className="fill-none stroke-white" />}
            leftElement={
              <Link
                href={'/'}
                className="text-[12px] font-medium leading-4 text-blue-500"
              >
                View More
              </Link>
            }
          />
        </div> */}
      </div>
    </>
  );
}
