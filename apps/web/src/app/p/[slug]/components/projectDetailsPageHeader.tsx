'use client';

import React, { useEffect } from 'react';
import { ProjectHeadersType } from '@/app/p/[slug]/layout';
import { useProjectEventStore } from '@/app/p/[slug]/store';
import { toast } from 'sonner';

import { Project_Backup } from '@cubik/common';
import { calculateEventStatus } from '@cubik/common/helper/eventStatus';
import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@cubik/ui';

interface Props {
  project: ProjectHeadersType;
}
export const ProjectDetailsPageHeader = ({ project }: Props) => {
  const { event, setEvent } = useProjectEventStore();

  useEffect(() => {
    const handleEvent = async () => {
      if (!event && project.projectJoinEvent.length > 0) {
        const selectedProjectJoin = project.projectJoinEvent
          .filter(
            (e) =>
              e.event.isActive &&
              calculateEventStatus(e.event.eventStatus) !== 'ENDED',
          )
          .find((e) => calculateEventStatus(e.event.eventStatus) === 'VOTING');
        console.log(
          project.projectJoinEvent.map((e) => {
            console.log(
              e.event.isActive,
              calculateEventStatus(e.event.eventStatus),
            );
          }),
        );
        if (!selectedProjectJoin) {
          return setEvent(null);
        }

        setEvent({
          eventId: selectedProjectJoin?.event.id,
          name: selectedProjectJoin?.event.name,
          type: selectedProjectJoin?.event.type,
          joinId: selectedProjectJoin?.id,
        });
        toast.info(`Switched to ${selectedProjectJoin.event.name}`);
      }
    };
    handleEvent();
  }, [project.projectJoinEvent, event]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-4 md:gap-10 md:py-12">
      {/* this will convert into a breadcrumb component and will not show when this is a modal */}
      <div className="flex flex-row gap-2">
        <Text className="l2" color="secondary">
          Projects
        </Text>
        <Text className="l2" color="secondary">
          /
        </Text>
        <Text className="l2" color="primary">
          {project?.name || ''}
        </Text>
      </div>
      <div>
        <Avatar
          src={project?.logo || Project_Backup}
          size="2xl"
          alt={project?.name || 'Unknown Project'}
        />
      </div>
      <div className="align-start md:align-end flex flex-col gap-3">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <Text className="h3 md:h4" color="primary">
              {project?.name}
            </Text>
            <Text className="b3-light md:b3-light" color="secondary">
              {project?.shortDescription}
            </Text>
          </div>
          <div className="flex w-full flex-row gap-3 md:w-fit">
            <Button
              rightIconName="bookmark"
              variant="outline"
              className="min-w-[48px]"
              size={'xl'}
            />
            <Button
              variant="primary"
              className="w-full min-w-[160px] md:w-fit"
              size="xl"
            >
              Contribute
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-end">
          <Menu>
            <MenuButton>
              <div className="flex flex-row-reverse items-center justify-end gap-1 md:flex-row">
                <Text color={'secondary'} className="l2">
                  {event?.name || 'Tip the Project'}
                </Text>
                <Icon
                  name={'chevronDown'}
                  color="var(--color-fg-primary-depth)"
                  width={18}
                  height={18}
                />
              </div>
            </MenuButton>
            <MenuList>
              {project?.projectJoinEvent.map(
                (projectJoinEvent, idx: number) => {
                  return (
                    <MenuItem
                      key={idx}
                      text={projectJoinEvent.event.name!}
                      onClick={() => {
                        setEvent({
                          eventId: projectJoinEvent.event.id,
                          name: projectJoinEvent.event.name,
                          type: projectJoinEvent.event.type,
                          joinId: projectJoinEvent.id,
                        });
                        toast.info(
                          `Switched to ${projectJoinEvent.event.name}`,
                        );
                      }}
                    />
                  );
                },
              )}
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};
