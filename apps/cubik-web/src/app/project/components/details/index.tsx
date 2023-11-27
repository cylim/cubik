import React from 'react';
import type { ProjectPageDetailsType } from '@/types/project';
import { Box, Container, VStack } from '@/utils/chakra';

import { prisma } from '@cubik/database';

import { Comments } from './comments';
import { Description } from './description';
import { RoundStats } from './RoundStats';
import { Socials } from './Socials';
import { ProjectTags } from './tags';

const getDetails = async (
  slug: string,
): Promise<[ProjectPageDetailsType | null, Error | null]> => {
  try {
    const res = await prisma.project.findFirst({
      where: {
        slug: slug,
      },
      select: {
        id: true,
        name: true,
        industry: true,
        longDescription: true,
        discordLink: true,
        twitterHandle: true,
        telegramLink: true,
        githubLink: true,
        slides: true,
        projectLink: true,
      },
    });
    return [res, null];
  } catch (error) {
    console.log(error);
    return [null, error as Error];
  }
};

interface Props {
  slug: string;
}

export const DetailSection = async ({ slug }: Props) => {
  const [details, error] = await getDetails(slug);
  if (error) {
    console.log(error);
    return <>error</>;
  }

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-10 lg:flex-row">
        <div className="flex w-full flex-col items-start">
          <div className="flex flex-col items-start gap-5">
            <div className="text-xl font-bold text-white">
              About {details?.name}
            </div>
            <Description longDescription={details?.longDescription || ''} />

            <div className="h-[0.125rem] w-full bg-[#1E1E1E]" />
            <Comments />
          </div>
        </div>

        <div className="flex w-full max-w-full flex-col items-start gap-8 text-white lg:max-w-sm">
          <ProjectTags tags={details?.industry || ''} />
          <RoundStats />
          <Socials
            projectLink={details?.projectLink}
            discordLink={details?.discordLink}
            telegramLink={details?.telegramLink}
            twitterHandle={details?.twitterHandle}
            githubLink={details?.githubLink}
          />
        </div>
      </div>
    </>
  );
};
