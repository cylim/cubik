'use client';

import React, { useEffect, useState } from 'react';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';
import EditProjectModalContent from '@/app/[username]/components/project-tab/project-admin-card/editProjectModalContent';

import {
  AvatarLabelGroup,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerMenu,
  DrawerMenuItem,
  DrawerMenuList,
  DrawerOverlay,
  DrawerPortal,
  HelperText,
  Icon,
  InputLabel,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  PingIcon,
  SubMenu,
  SubMenuButton,
  SubMenuList,
  Text,
  Textarea,
  VerticalTab,
  VerticalTabList,
  VerticalTabPanel,
  VerticalTabPanels,
  VerticalTabs,
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
      <Modal dialogSize="xl" onClose={() => setOpen(false)} open={open}>
        <div className="h-[60vh] w-full ">
          <Icon
            name="cross"
            className="pointer-events-auto absolute right-8 top-3 cursor-pointer"
            onClick={() => setOpen(false)}
          />

          <VerticalTabs defaultValue={'general'} size="sm" className="">
            <VerticalTabList>
              <>
                <Text className="h5 px-2 py-3" color="primary">
                  Settings
                </Text>
              </>
              <VerticalTab value={'general'} leftIconName="globe">
                General
              </VerticalTab>
              <VerticalTab value={'security'} leftIconName="userSecurity">
                Security
              </VerticalTab>
              <VerticalTab value={'multisig'} leftIconName="safe">
                Multisig
              </VerticalTab>
              <VerticalTab
                value={'notifications'}
                leftIconName="notificationBell"
              >
                Notifications
              </VerticalTab>
            </VerticalTabList>
            <VerticalTabPanels className="">
              <VerticalTabPanel value={'general'} className="rounded-r-2xl">
                <EditProjectModalContent projectId={project.id} />
              </VerticalTabPanel>
              <VerticalTabPanel value={'security'} className="rounded-r-2xl">
                <div className="flex h-full flex-col items-center justify-center overflow-y-scroll">
                  <div className=" flex h-full w-[85%] flex-col gap-20 pt-10">
                    <div>
                      <Text className="h5" color={'primary'}>
                        Team and Access
                      </Text>
                      <div className="mt-11 flex flex-col gap-8">
                        <div className="flex">
                          <AvatarLabelGroup
                            size="xs"
                            title="irfan"
                            avatarShape="circle"
                            avatarSrc={''}
                          />
                          <Button>Owner</Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Text className="h5" color={'primary'}>
                        Danger Zone
                      </Text>
                      <div className="mt-11 flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                          <div>
                            <InputLabel id="archive">
                              Archive Project
                            </InputLabel>
                            <HelperText variant={'default'} fontSize={'md'}>
                              Archive the project and make it private
                            </HelperText>
                          </div>
                          <Button size={'md'} variant="secondary">
                            Archieve
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <InputLabel id="archive">
                              Transfer Ownership
                            </InputLabel>
                            <HelperText variant={'default'} fontSize={'md'}>
                              Transferring this project to other account can
                              loose access to the existing Vault and all the
                              related data
                            </HelperText>
                          </div>
                          <Button size={'md'} variant="danger">
                            Transfer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </VerticalTabPanel>
              <VerticalTabPanel value={'multisig'} className="rounded-r-2xl">
                <Text className="l2" color={'primary'}>
                  three!
                </Text>
              </VerticalTabPanel>
              <VerticalTabPanel
                value={'notifications'}
                className="rounded-r-2xl"
              >
                <Text className="l2" color={'primary'}>
                  three!
                </Text>
              </VerticalTabPanel>
            </VerticalTabPanels>
          </VerticalTabs>
        </div>
      </Modal>
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
