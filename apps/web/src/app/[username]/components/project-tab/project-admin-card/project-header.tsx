'use client';

import React, { useEffect, useState } from 'react';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';
import EditProjectModal from '@/app/[username]/components/project-tab/project-admin-card/editProjectModal';

import {
  AvatarLabelGroup,
  Button,
  DrawerMenu,
  DrawerMenuItem,
  DrawerMenuList,
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
import { useMediaQuery } from '@cubik/ui/hooks';

const ProjectHeader = ({
  project,
  isAdmin,
}: {
  project: ProjectProps;
  isAdmin: boolean;
}) => {
  const isLiveInRound = false;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Close the drawer when resizing from mobile to desktop
    if (!isMobile && isDrawerOpen) {
      console.log('button clicked for menu', isDrawerOpen);
      setIsDrawerOpen(false);
    }
  }, [isMobile, isDrawerOpen]);
  const [open, setOpen] = useState<boolean>(false);

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
        {isMobile ? (
          <>
            {' '}
            <Button
              leftIconName="threeDots"
              onClick={() => {
                setIsDrawerOpen(true);
              }}
              variant={'secondary'}
              size="xl"
              className="h-[48px] w-[48px]"
            />
            {/* <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerPortal>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody>
                    <div className="min-h-[80vh]"> hello world </div>
                  </DrawerBody>
                </DrawerContent>
              </DrawerPortal>
            </Drawer> */}
            <DrawerMenu open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerMenuList>
                <DrawerMenuItem text="Apply For Grant" leftIcon="cube" />
                <DrawerMenuItem text="Project Settings" leftIcon="settings" />
                <DrawerMenuItem text="View Vault" leftIcon="bank" />
                <DrawerMenuItem text="Share Project" leftIcon="share" />
              </DrawerMenuList>
            </DrawerMenu>
          </>
        ) : (
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
              <MenuItem
                text="Project Settings"
                leftIcon="settings"
                onClick={() => {
                  setOpen(true);
                }}
              />
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
                <SubMenuButton leftIcon="compass">
                  View On Explorer
                </SubMenuButton>
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
        )}
      </div>
      <EditProjectModal open={open} setOpen={setOpen} project={project} />
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
