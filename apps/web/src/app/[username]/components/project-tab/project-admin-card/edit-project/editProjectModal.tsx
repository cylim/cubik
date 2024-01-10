import React from 'react';
import { ProjectProps } from '@/app/[username]/components/project-tab/project-admin-card';
import EditProjectModalContent from '@/app/[username]/components/project-tab/project-admin-card/edit-project/editProjectModalContent';

import {
  AvatarLabelGroup,
  Button,
  HelperText,
  Icon,
  InputLabel,
  Modal,
  Text,
  VerticalTab,
  VerticalTabList,
  VerticalTabPanel,
  VerticalTabPanels,
  VerticalTabs,
} from '@cubik/ui';

interface IEditProjectModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  project: ProjectProps;
}

const EditProjectModal = ({ open, setOpen, project }: IEditProjectModal) => {
  return (
    <Modal dialogSize="xl" onClose={() => setOpen(false)} open={open}>
      <div className="h-[60vh] w-full ">
        <Icon
          name="cross"
          className="pointer-events-auto absolute right-8 top-3 cursor-pointer"
          onClick={() => setOpen(false)}
          height={16}
          width={16}
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
                          <InputLabel id="archive">Archive Project</InputLabel>
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
                            Transferring this project to other account can loose
                            access to the existing Vault and all the related
                            data
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
            <VerticalTabPanel value={'notifications'} className="rounded-r-2xl">
              <Text className="l2" color={'primary'}>
                three!
              </Text>
            </VerticalTabPanel>
          </VerticalTabPanels>
        </VerticalTabs>
      </div>
    </Modal>
  );
};

export default EditProjectModal;
