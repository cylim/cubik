import React from 'react';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';

import { Button } from '@cubik/ui';
import { AvatarLabelGroup } from '@cubik/ui/components/ui/Avatar/AvatarLabelGroup';

const ProjectHeader = ({
  project,
  isAdmin,
}: {
  project: ProjectProps;
  isAdmin: boolean;
}) => {
  return isAdmin ? (
    <div className="flex flex-row items-center justify-between gap-4">
      <AvatarLabelGroup
        avatarSrc={project.logo}
        title={project.name}
        description={project.shortDescription}
        size={'xl'}
        className="w-full"
      />
      <div className="flex flex-row gap-2">
        <Button variant={'secondary'} size="xl" className="hidden md:flex">
          View Details
        </Button>
        <Button leftIconName="threeDots" variant={'secondary'} size="xl" />
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center justify-between">
      <AvatarLabelGroup
        avatarSrc={project.logo}
        title={project.name}
        description={project.shortDescription}
        size={'xl'}
      />
      <Button leftIconName="threeDots" variant={'secondary'} size="xl" />
    </div>
  );
};

export default ProjectHeader;
