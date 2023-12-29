import React from 'react';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';

import {
  AvatarLabelGroup,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  PingIcon,
  SubMenu,
  SubMenuButton,
  SubMenuList,
  Text,
} from '@cubik/ui';

const ProjectHeader = ({
  project,
  isAdmin,
}: {
  project: ProjectProps;
  isAdmin: boolean;
}) => {
  const isLiveInRound = false;
  return isAdmin ? (
    <div className="flex flex-row items-center justify-between gap-4">
      <AvatarLabelGroup
        avatarSrc={project?.logo}
        title={project?.name}
        //  description={project?.shortDescription}
        size={'xl'}
        className="w-full"
      >
        <div className="flex flex-col gap-1">
          <Text className="h5-light" color="primary">
            {project?.name}
          </Text>
          {isLiveInRound ? (
            <div className="flex flex-row items-center gap-3">
              <PingIcon />
              <Text className="l1" color="positive">
                Live in round
              </Text>
            </div>
          ) : (
            <Text className="l1-light" color="secondary">
              {'superteam.earn'}
            </Text>
          )}
        </div>
      </AvatarLabelGroup>
      <div className="flex flex-row gap-2">
        <Button variant={'secondary'} size="xl" className="hidden md:flex">
          View Details
        </Button>
        <Menu>
          <MenuButton>
            <Button
              leftIconName="threeDots"
              variant={'secondary'}
              size="xl"
              className="h-[48px] w-[48px]"
            />
          </MenuButton>
          <MenuList>
            <MenuItem text="Apply For Grant" leftIcon="cube" />
            <MenuItem text="Project Settings" leftIcon="settings" />
            <MenuDivider />
            <MenuItem text="View Vault" leftIcon="bank" />
            <SubMenu>
              <SubMenuButton leftIcon="share">Share Project</SubMenuButton>
              <SubMenuList>
                <MenuItem text="Download"></MenuItem>
                <MenuItem text="Create a Copy"></MenuItem>
                <MenuItem text="Mark as Draft"></MenuItem>
                <MenuItem text="Delete"></MenuItem>
              </SubMenuList>
            </SubMenu>
            <SubMenu>
              <SubMenuButton leftIcon="compass">View On Explorer</SubMenuButton>
              <SubMenuList>
                <MenuItem text="Solana Explorer" leftIcon="solanaExplorer" />
                <MenuItem text="Solana FM" leftIcon="solanaFM" />
                <MenuItem text="Solscan" leftIcon="solscan" />
                <MenuItem text="xRay" leftIcon="xRay" />
              </SubMenuList>
            </SubMenu>
            <MenuItem text="Download Data" leftIcon="download" />
          </MenuList>
        </Menu>
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center justify-between">
      <AvatarLabelGroup
        avatarSrc={project?.logo}
        title={project?.name}
        description={project?.shortDescription}
        size={'xl'}
      />
      <Button leftIconName="threeDots" variant={'secondary'} size="xl" />
    </div>
  );
};

export default ProjectHeader;
