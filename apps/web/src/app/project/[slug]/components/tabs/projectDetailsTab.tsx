import React from 'react';
import Image from 'next/image';
import TabLayout from '@/components/common/tabs/TabLayout';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Divider,
  Icon,
  Text,
} from '@cubik/ui';

const fetchProjectDetails = async (slug: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        //   isActive: true,
        isArchive: false,
        slug: slug,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        logo: true,
        slides: true,
        longDescription: true,
        projectLink: true,
        twitterHandle: true,
        githubLink: true,
        discordLink: true,
        telegramLink: true,
      },
    });
    if (!project) {
      return [null, null];
    }

    const layoutData = {
      id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      slides: project?.slides,
      longDescription: project?.longDescription,
      twitterHandle: project?.twitterHandle,
      githubLink: project?.githubLink,
      discordLink: project?.discordLink,
      telegramLink: project?.telegramLink,
      events: [],
    };
    return [layoutData, null];
  } catch (error) {
    console.log(error);
    return [null, error as Error];
  }
};

const ImagesCarousel = () => {
  return (
    <div className="flex w-full flex-col gap-4 md:min-w-[65%] ">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {[
            'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9164f145-2a43-4350-0216-bd1f252de600/public',
            'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/bf730760-52e4-481b-c79b-6a17ac3a2b00/public',
            'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7dadf2d6-a82d-4cec-d60e-45454886cd00/public',
            'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/1157531c-c362-4ff9-7832-7b71c8e0fa00/public',
          ].map((slide, index) => (
            <CarouselItem key={index} className=" pl-4 sm:basis-[70%]">
              <div className="h-fit w-full">
                <Image
                  src={slide}
                  alt={'carousel image'}
                  objectFit="contain"
                  className="h-auto w-full rounded-lg"
                  width={1400}
                  height={1400}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

const InteractionSidebar = () => {
  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      {/* <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Live Round Stats
        </Text>
        <div className="flex flex-col"></div>
      </div> */}
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Tags
        </Text>
        <div className=" flex flex-row flex-wrap gap-3 md:gap-4">
          <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3">
            <Text className="l1 md:l2" color={'primary'}>
              NFTs
            </Text>
          </div>
          <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3">
            <Text className="l1 md:l2" color={'primary'}>
              Solana Infrastructure
            </Text>
          </div>
          <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3">
            <Text className="l1 md:l2" color={'primary'}>
              Perpetuals
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Social
        </Text>
        <div className=" flex flex-row flex-wrap gap-3 md:gap-4">
          <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
            <Icon
              name="figma"
              stroke="var(--color-fg-primary-depth)"
              className="w-[18px] md:w-[20px]"
            />
          </div>
          <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
            <Icon
              name="github"
              stroke="var(--color-fg-primary-depth)"
              className="w-[18px] md:w-[20px]"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-2">
        <Text className="l2-light" color="tertiary">
          Last Modified: 23 Days ago
        </Text>
        <Text className="l2-light" color="tertiary">
          Created: 12/03/2023
        </Text>
      </div>
    </div>
  );
};

export const ProjectDetailsTab = async ({ slug }: { slug: string }) => {
  const fetchedProjectDetails = await fetchProjectDetails(slug);
  const project = fetchProjectDetails;
  if (!fetchProjectDetails) return 'Loading...';

  return (
    <TabLayout>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <ImagesCarousel />
          <InteractionSidebar />
        </div>
      </div>
    </TabLayout>
  );
};
