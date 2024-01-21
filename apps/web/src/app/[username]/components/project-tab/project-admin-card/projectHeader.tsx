'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';
import EditProjectModal from '@/app/[username]/components/project-tab/project-admin-card/editProjectModal';
import { deleteDraftProject } from '@/app/[username]/components/project-tab/project-admin-card/helper/deleteDraftProject';

import {
  AvatarLabelGroup,
  Button,
  DrawerMenu,
  DrawerMenuItem,
  DrawerMenuList,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  PingIcon,
  Spinner,
  SubMenu,
  SubMenuButton,
  SubMenuList,
  Text,
  toast,
  ViewOnExplorer,
} from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

const ProjectHeader = ({
  project,
  isAdmin,
  isVerified,
}: {
  project: ProjectProps;
  isAdmin: boolean;
  isVerified: boolean;
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

  if (isAdmin) {
    return (
      <div className="flex flex-row items-center justify-between gap-4">
        <AvatarLabelGroup
          avatarSrc={project?.logo}
          title={project?.name}
          //  description={project?.shortDescription}
          size={'xl'}
          className="w-full"
        >
          <div className="flex flex-col gap-1">
            <Link href={project.slug as string}>
              <Text
                className="h5-light underline-offset-3 transition duration-300 hover:underline"
                color="primary"
              >
                {project?.name}
              </Text>
            </Link>
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
        {project.isDraft ? (
          <>
            {' '}
            <Link href={'/create/project?id=' + project.id}>
              <Button variant={'secondary'} size="md">
                Continue Editing
              </Button>
            </Link>
            <Button
              onClick={() => {
                toast.promise(deleteDraftProject(project.id), {
                  loading: 'Deleting Draft...',
                  success: 'Draft deleted successfully!',
                  error: 'Error deleting draft',
                  icon: <Spinner />,
                });
              }}
              variant={'danger'}
              size="md"
            >
              Delete Draft
            </Button>
          </>
        ) : (
          <div className="flex flex-row gap-2">
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
                <DrawerMenu open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                  <DrawerMenuList>
                    <DrawerMenuItem text="Apply For Grant" leftIcon="cube" />
                    <DrawerMenuItem
                      text="Project Settings"
                      leftIcon="settings"
                    />
                    <DrawerMenuItem text="View Vault" leftIcon="squads" />
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
                  <div className={`px-2 ${isVerified ? 'block' : 'hidden'}`}>
                    <div className="flex w-full flex-row justify-between gap-2 rounded-lg bg-[var(--menu-header-surface-highlighted)] px-3 py-2 align-bottom">
                      <Text
                        className="l2 line-clamp-1 max-w-[9rem] overflow-hidden"
                        color="secondary"
                      >
                        {`https://cubik.so/projects/${project.slug}`}
                      </Text>
                      <Icon
                        name="copy"
                        color="var(--menu-header-fg)"
                        height={18}
                        width={18}
                      />
                    </div>
                  </div>
                  <MenuDivider
                    className={`${isVerified ? 'block' : 'hidden'}`}
                  />
                  <MenuItem text="Apply For Grant" leftIcon="cube" />
                  <MenuItem
                    text="Project Settings"
                    leftIcon="settings"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                  <MenuDivider />
                  <MenuItem text="View Vault" leftIcon="squads" />
                  <SubMenu>
                    <SubMenuButton
                      className={`${isVerified ? 'block' : 'hidden'}`}
                      leftIcon="share"
                    >
                      Share Project
                    </SubMenuButton>
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
                    <ViewOnExplorer address="random" type="account" />
                  </SubMenu>
                  <MenuItem
                    text="Download Data"
                    className={`${isVerified ? 'block' : 'hidden'}`}
                    leftIcon="download"
                  />
                </MenuList>
              </Menu>
            )}
          </div>
        )}
        <EditProjectModal open={open} setOpen={setOpen} project={project} />
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center justify-between">
      <AvatarLabelGroup
        avatarSrc={project?.logo}
        title={project?.name}
        description={project?.shortDescription}
        size={'xl'}
      />
      {/* <Button leftIconName="threeDots" variant={'secondary'} size="xl" /> */}
    </div>
  );
};

export default ProjectHeader;
