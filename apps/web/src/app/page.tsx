import { Metadata } from 'next';
import Link from 'next/link';
import {
  CollectionSectionHeader,
  ProjectSectionHeader,
} from '@/components/explorer/ExplorerHeader';
import { get } from '@vercel/edge-config';

import { prisma } from '@cubik/database';
import {
  Avatar,
  AvatarGroup,
  Background,
  CircularSkeleton,
  CollectionCard,
  Icon,
  InputField,
  InputFieldContainer,
  InputLeftElement,
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
  const isGrantRoundActive = false;
  return (
    <>
      {/* Body Container*/}
      <div className="flex min-h-screen w-full max-w-7xl flex-col items-center gap-10 md:mx-auto lg:flex-row lg:items-start">
        <div className="absolute left-0 top-0 w-full">
          <Background />
        </div>

        <div className="flex h-full w-full flex-col gap-8 px-4 py-8 md:px-6 lg:w-2/3">
          <ProjectSectionHeader />
          {/* Projects */}
          <div className="flex flex-col gap-6 md:gap-10">
            {projects.map((project) => {
              return (
                <ProjectCard
                  href={'/project'}
                  //Button={<SaveButton />}
                  description={project.shortDescription}
                  name={project.name}
                  logo={project.logo}
                  key={project.id}
                >
                  <div className="flex flex-col gap-2">
                    <Text className="h4 md:h5 line-clamp-1 " color={'primary'}>
                      {project.name}
                    </Text>
                    <Text
                      className="b3-light md:b4-light line-clamp-2 "
                      color="secondary"
                    >
                      {project.shortDescription}
                    </Text>
                    {isGrantRoundActive && (
                      <div className="flex flex-row items-center justify-start gap-4">
                        <div className="flex flex-row gap-2">
                          <AvatarGroup
                            shape="circle"
                            avatars={[
                              { src: project.logo, alt: project.name },
                              { src: project.logo, alt: project.name },
                              { src: project.logo, alt: project.name },
                            ]}
                            size={'xs'}
                          />
                          <Text className="b3-light md:b4-light">
                            333 Contributors
                          </Text>{' '}
                        </div>
                        <div className="h-1 w-1 rounded-full bg-[var(--color-fg-primary-subdued)]" />
                        <Text className="b3-light md:b4-light">
                          132 Matched
                        </Text>
                      </div>
                    )}
                  </div>
                </ProjectCard>
              );
            })}
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col gap-8 px-4 py-8 lg:w-2/3">
          <InputFieldContainer variant={'md'}>
            <InputLeftElement withBorder={false}>
              <Icon name="search" />
            </InputLeftElement>
            <InputField placeholder="Search" />
          </InputFieldContainer>
          <CollectionSectionHeader />
          <div className="flex flex-col gap-6">
            {projects.slice(0, 3).map((project) => {
              return (
                <CollectionCard
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
          {/* Collection */}
        </div>
      </div>
    </>
  );
}
