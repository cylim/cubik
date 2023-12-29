import React from 'react';
import Image from 'next/image';
import TabLayout from '@/components/common/tabs/TabLayout';
import { formatDistanceToNow } from 'date-fns';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Divider,
  Icon,
  Text,
} from '@cubik/ui';
import { ProjectSocials, Slides } from '@/types/project';
import Link from 'next/link';

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
        industry: true,
        createdAt: true,
        updatedAt: true,
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
      slides: project?.slides as unknown as Slides,
      longDescription: project?.longDescription,
      twitterHandle: project?.twitterHandle,
      githubLink: project?.githubLink,
      discordLink: project?.discordLink,
      telegramLink: project?.telegramLink,
      industry: project?.industry,
      events: [],
      createdAt: project?.createdAt,
      updatedAt: project?.updatedAt,
    };
    return [layoutData, null];
  } catch (error) {
    console.log(error);
    return [null, error as Error];
  }
};

const ImagesCarousel = ({ slides }: {
  slides: Slides
}) => {
  console.log('slides - ', slides);
  return (
    <div className="flex w-full flex-col gap-4 md:min-w-[65%] ">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides?.slide.map((slide, index) => (
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

const InteractionSidebar = ({ socials, industry, createdAt, updatedAt }: {
  socials: ProjectSocials, industry: string[], createdAt: Date, updatedAt: Date
}) => {
  console.log(industry)
  const lastModified = formatDistanceToNow(updatedAt);

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
          {industry?.map((tag, idx) => {
            return (
              <div key={idx} className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3">
                <Text className="l1 md:l2" color={'primary'}>
                  {tag}
                </Text>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Social
        </Text>
        <div className=" flex flex-row flex-wrap gap-3 md:gap-4">
          {/* <div className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
            <Icon
              name="figma"
              stroke="var(--color-fg-primary-depth)"
              className="w-[18px] md:w-[20px]"
            />
          </div> */}
          {socials?.github &&
            <Link
              href={socials.github}
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
              <Icon
                name="github"
                stroke="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]"
              />
            </Link>
          }
          {socials?.discord &&
            <Link
              href={socials.discord}
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" stroke="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]" viewBox="0,0,256,256">
                <g transform=""><g fill="none" fill-rule="nonzero" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                  <path transform="scale(5.12,5.12)" d="M48,34c0,0.17578 -0.04687,0.34375 -0.13281,0.49609c-2.90625,5.10938 -10.83984,6.44531 -12.64844,6.50391c-0.00781,0 -0.01953,0 -0.03125,0c-0.32031,0 -0.62109,-0.15234 -0.80859,-0.41016l-1.82812,-2.51562c4.93359,-1.27344 7.45313,-3.4375 7.59766,-3.56641c0.41406,-0.36328 0.45313,-0.99219 0.08984,-1.40625c-0.36719,-0.41797 -0.99609,-0.45312 -1.41016,-0.09375c-0.04687,0.03906 -4.6875,3.99219 -13.82812,3.99219c-9.125,0 -13.76562,-3.9375 -13.82422,-3.99219c-0.41406,-0.36328 -1.04687,-0.32422 -1.41016,0.08984c-0.36719,0.41406 -0.32812,1.04688 0.08594,1.41016c0.14453,0.12891 2.66406,2.29297 7.59766,3.56641l-1.82812,2.51563c-0.1875,0.25781 -0.48828,0.41016 -0.80859,0.41016c-0.01172,0 -0.02344,0 -0.03125,0c-1.80859,-0.05859 -9.74219,-1.39453 -12.64844,-6.50391c-0.08594,-0.15234 -0.13281,-0.32031 -0.13281,-0.49609c0,-9.84766 4.21484,-21.23828 6.32031,-23.1875c4.03516,-3.24609 10.33203,-3.78906 10.60156,-3.80859c0.42188,-0.04297 0.81641,0.19922 0.99219,0.58594c0.01172,0.02734 0.14844,0.33984 0.30078,0.83594c-2.63281,0.44141 -5.86719,1.33984 -8.79297,3.15234c-0.46875,0.29297 -0.61328,0.90625 -0.32031,1.37891c0.28906,0.46875 0.90625,0.61328 1.375,0.32031c5.02734,-3.12109 11.3125,-3.27734 12.52344,-3.27734c1.21094,0 7.49219,0.15625 12.52344,3.27734c0.16406,0.10156 0.34766,0.15234 0.52734,0.15234c0.33594,0 0.66016,-0.16797 0.85156,-0.47656c0.28906,-0.46875 0.14453,-1.08594 -0.32422,-1.375c-2.92578,-1.81641 -6.16016,-2.71094 -8.79297,-3.15625c0.15234,-0.49219 0.28906,-0.80859 0.30469,-0.83203c0.17188,-0.38672 0.57031,-0.62109 0.98828,-0.58594c0.26953,0.01953 6.56641,0.5625 10.54688,3.76563c2.16016,1.99219 6.375,13.38281 6.375,23.23047z" id="strokeMainSVG" fill="#ffffff" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"></path><g transform="scale(5.12,5.12)" fill="#000000" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g></g>
              </svg>
            </Link>
          }
          {socials?.telegram &&
            <Link
              href={socials.telegram}
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" stroke="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]" viewBox="0,0,256,256">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                  <path transform="scale(5.12,5.12)" d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23z" id="strokeMainSVG" fill="#ffffff" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"></path><g transform="scale(5.12,5.12)" fill="#000000" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z"></path></g></g>
              </svg>
            </Link>
          }
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-2">
        <Text className="l2-light" color="tertiary">
          {`Last Modified: ${lastModified} ago`}
        </Text>
        <Text className="l2-light" color="tertiary">
          Created: {createdAt.toLocaleDateString()}
        </Text>
      </div>
    </div>
  );
};

export const ProjectDetailsTab = async ({ slug }: { slug: string }) => {
  const fetchedProjectDetails = await fetchProjectDetails(slug);
  const project = fetchProjectDetails;
  if (!fetchProjectDetails) {
    return 'Loading...';
  }

  console.log('fetchedProjectDetails - ', fetchedProjectDetails[0]);

  return (
    <TabLayout>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <ImagesCarousel
            // @ts-ignore
            slides={fetchedProjectDetails[0].slides} />
          <InteractionSidebar socials={{
            // @ts-ignore
            github: fetchedProjectDetails[0].githubLink,
            // @ts-ignore
            telegram: fetchedProjectDetails[0].telegramLink,
            // @ts-ignore
            discord: fetchedProjectDetails[0].discordLink,
          }}
            industry={
              // @ts-ignore
              fetchedProjectDetails[0].industry
            }
            createdAt={
              // @ts-ignore
              fetchedProjectDetails[0].createdAt
            }
            updatedAt={
              // @ts-ignore
              fetchedProjectDetails[0].updatedAt
            }
          />
        </div>
      </div>
    </TabLayout>
  );
};
