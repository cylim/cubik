"use client";
import React from 'react';
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
import { EventType } from '@cubik/database';
import { useProjectEventStore } from '@/app/project/[slug]/store';
import { toast } from 'sonner';

type EventSegment = {
  event: {
    id: string;
    type: EventType;
    name: string;
    projectJoinEvent: {
      id: string;
    }[];
  };
  eventId: string;
}
interface ProjectPropsType {
  name: string;
  shortDescription: string;
  logo: string;
  projectLink: string;
  events: EventSegment[];
}

const ProjectDetailsPageHeader = ({
  project,
}: {
  project: ProjectPropsType | any;
}) => {
  // console.log(project.events[0].event.id);
  const { event, setEvent } = useProjectEventStore();

  React.useEffect(() => {
    if (!event) {
      setEvent({
        eventId: project.events[0].eventId,
        name: project.events[0].event.name,
        type: project.events[0].event.type,
        joinId: project.events[0].event.id,
      });
      toast.info(`Switched to ${project.events[0].event.name}`)
    }
  }, [event, project.events, setEvent]);

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
          src={project?.logo || ''}
          size="2xl"
          alt={project?.name || ''}
        />
      </div>
      <div className="align-start md:align-end flex flex-col gap-3">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <Text className="h3 md:h4" color="primary">
              {project?.name || ''}
            </Text>
            <Text className="b3-light md:b3-light" color="secondary">
              {project?.shortDescription || ''}
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
                  Alpha Grants Round
                </Text>
                <Icon name={'chevronDown'} width={18} height={18} />
              </div>
            </MenuButton>
            <MenuList>
              {project?.events.map((event: EventSegment, idx: number) => {
                return (
                  <MenuItem
                    key={idx}
                    text={event.event.name!}
                    onClick={() => {
                      setEvent({
                        eventId: event.eventId,
                        name: event.event.name,
                        type: event.event.type,
                        joinId: event.event.projectJoinEvent[0].id,
                      });
                      toast.info(`Switched to ${event.event.name}`)
                    }}
                  />
                )
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPageHeader;
