'use client';

import Link from 'next/link';
import { ProjectStatsCards } from '@/app/p/[slug]/components/tabs/components/projectDetailsTab/projectStatsCards';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import { ProjectSocials } from '@/types/project';

import dayjs from '@cubik/dayjs';
import { Divider, Icon, Text } from '@cubik/ui';

interface Props {
  socials: ProjectSocials;
  industry: string[];
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}
export const ProjectDetailsSidebar = ({
  socials,
  industry,
  createdAt,
  updatedAt,
  slug,
}: Props) => {
  const { event } = useProjectEventStore();
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 md:gap-8">
      {event && <ProjectStatsCards eventId={event?.eventId} slug={slug} />}
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
