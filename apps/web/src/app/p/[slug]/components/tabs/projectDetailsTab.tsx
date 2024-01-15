import React from 'react';
import Link from 'next/link';
import ProjectDescriptionAndImages from '@/app/p/[slug]/components/tabs/components/projectDescriptionAndImages';
import TabLayout from '@/components/common/tabs/TabLayout';
import { ProjectSocials } from '@/types/project';

import dayjs from '@cubik/dayjs';
import { Divider, Icon, StatsCard, Text } from '@cubik/ui';

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
      return null;
    }

    return {
      id: project?.id,
      name: project?.name,
      shortDescription: project?.shortDescription,
      logo: project?.logo,
      projectLink: project?.projectLink,
      slides: project?.slides as string[],
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
  } catch (error) {
    console.log(error);
    return null;
  }
};

const InteractionSidebar = ({
  socials,
  industry,
  createdAt,
  updatedAt,
}: {
  socials: ProjectSocials;
  industry: string[];
  createdAt: Date;
  updatedAt: Date;
}) => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Live Round Stats
        </Text>
        <div className="flex flex-col gap-4">
          <StatsCard
            title="Estimated Match"
            value={'$68000'}
            iconName="piggyBank"
            iconColor="var(--color-bg-positive-base)"
            iconBg="var(--color-surface-positive-transparent)"
          />
          <StatsCard
            title="Community Contributions"
            value={'$236'}
            iconName="vector"
            iconColor="var(--color-bg-caution-base)"
            iconBg="var(--color-surface-caution-transparent)"
          />
          <StatsCard
            title="Contributors"
            value={'43'}
            iconName="userLove"
            iconColor="var(--color-bg-innovative-base)"
            iconBg="var(--color-surface-innovative-transparent)"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="h5" color={'primary'}>
          Tags
        </Text>
        <div className=" flex flex-row flex-wrap gap-3 md:gap-4">
          {industry?.map((tag, idx) => {
            return (
              <div
                key={idx}
                className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3"
              >
                <Text className="l1 md:l2" color={'primary'}>
                  {tag}
                </Text>
              </div>
            );
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
          {socials?.github && (
            <Link
              href={socials.github}
              target="_blank"
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]"
            >
              <Icon
                name="github"
                color="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]"
              />
            </Link>
          )}
          {socials?.twitter && (
            <Link
              href={socials.twitter}
              target="_blank"
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]"
            >
              <Icon
                name="twitter"
                color="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]"
              />
            </Link>
          )}
          {socials?.discord && (
            <Link
              href={socials.discord}
              target="_blank"
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]"
            >
              <Icon
                name="discord"
                color="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]"
              />
            </Link>
          )}
          {socials?.telegram && (
            <Link
              href={socials.telegram}
              target="_blank"
              className="w-fit rounded-lg bg-[var(--body-surface)] px-4 py-3 text-[var(--color-fg-primary-depth)]"
            >
              <Icon
                name="telegram"
                color="var(--color-fg-primary-depth)"
                className="w-[18px] md:w-[20px]"
              />
            </Link>
          )}
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-2">
        <Text className="l2-light" color="tertiary">
          {`Last Modified: ${dayjs(updatedAt).fromNow()}`}
        </Text>
        <Text className="l2-light" color="tertiary">
          Created: {createdAt.toLocaleDateString()}
        </Text>
      </div>
    </div>
  );
};

export const ProjectDetailsTab = async ({ slug }: { slug: string }) => {
  const project = await fetchProjectDetails(slug);
  if (!project) {
    return 'Loading...';
  }

  return (
    <TabLayout>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex flex-col gap-20">
            <ProjectDescriptionAndImages project={project} />
            {/* <CommentSection user={user!} projectId={project.id} /> */}
          </div>
          <InteractionSidebar
            socials={{
              github: project.githubLink,
              telegram: project.telegramLink,
              discord: project.discordLink,
              twitter: project.twitterHandle,
            }}
            industry={project.industry as string[]}
            createdAt={project.createdAt}
            updatedAt={project.updatedAt}
          />
        </div>
      </div>
    </TabLayout>
  );
};
