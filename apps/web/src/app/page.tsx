import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CollectionSectionHeader,
  ProjectSectionHeader,
} from '@/components/explorer/ExplorerHeader';
import { get } from '@vercel/edge-config';
import { v4 as uuidV4 } from 'uuid';

import { prisma } from '@cubik/database';
import {
  Avatar,
  AvatarGroup,
  Background,
  Button,
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
        slug: true,
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
      <div className="flex min-h-screen w-full flex-col items-center gap-10 md:mx-auto lg:flex-col lg:items-start">
        <div className="absolute left-0 top-0 w-full">
          <Background />
        </div>
        <div className="w-full py-10 dark:bg-[var(--body-surface)]">
          <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-0 md:px-6">
            <div className="md:px-0- flex flex-col gap-8 p-2 py-5 md:w-[880px] md:py-12">
              <div className="flex flex-col gap-4">
                <Text className="h3" color="primary">
                  Support public goods on Solana
                </Text>
                <Text className="b3 w-[80%]" color="secondary">
                  Cubik Is where leading Solana initiatives are born, validated
                  and funded.{' '}
                </Text>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="!px-4" variant={'primary'}>
                  Get Started
                </Button>
                <Link href={`/create/project?id=${uuidV4()}`}>
                  <Button size="lg" variant={'secondary'}>
                    Submit a Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full">
              <Image
                className="width-[800px] absolute bottom-0 right-0 h-auto translate-x-[-10%] translate-y-[50%] scale-125"
                src={
                  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/58581356-0efd-42e4-8a04-8477953fdc00/public'
                }
                alt={'hero image cubik'}
                width={1400}
                height={1400}
              />
            </div>
          </div>
        </div>
        <div className="flex min-h-screen w-full max-w-7xl flex-col items-center gap-10 md:mx-auto lg:flex-row lg:items-start">
          <div className="flex size-full flex-col gap-8 px-4 py-8 md:px-6 lg:w-2/3">
            <ProjectSectionHeader />
            {/* Projects */}
            <div className="flex flex-col gap-4 md:gap-8">
              {projects.map((project) => {
                return (
                  <ProjectCard
                    href={`/p/${project.slug}`}
                    //Button={<SaveButton />}
                    description={project.shortDescription}
                    name={project.name}
                    logo={project.logo}
                    key={project.id}
                  >
                    <div className="flex flex-col gap-2">
                      <Text
                        className="h4 md:h5 line-clamp-1 "
                        color={'primary'}
                      >
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
                          <div className="size-1 rounded-full bg-[var(--color-fg-primary-subdued)]" />
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
          <div className="flex size-full flex-1 flex-col gap-8 px-4 py-8 lg:w-2/3">
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
                    href={`/p/${project.slug}`}
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
      </div>
    </>
  );
}
