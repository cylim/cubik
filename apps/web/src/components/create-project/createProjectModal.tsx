import React, { useState } from 'react';
import { Step1 } from '@/components/create-project/step1';
import { Step2 } from '@/components/create-project/step2';
import { Step3 } from '@/components/create-project/step3';
import { Step4 } from '@/components/create-project/step4';
import { useForm } from 'react-hook-form';

import { Project_Backup } from '@cubik/common';
import {
  Avatar,
  Icon,
  Modal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@cubik/ui';

interface Props {
  open: boolean;
  onClose: () => void;
}
export interface ProjectFormData {
  name: string;
  tagline: string;
  email: string;
  category: string[];
  logo: string;
  description: string;
  slides: string[];
  team: string[];
  github: string;
  website: string;
  twitter: string;
  isOpenSource: boolean;
}
export const CreateProjectModal = ({ onClose, open }: Props) => {
  const [step, setStep] = useState<number>(1);
  const createProjectForm = useForm<ProjectFormData>({
    defaultValues: {
      name: '',
      tagline: '',
      email: '',
      category: [],
      logo: Project_Backup,
      description: '',
      slides: [],
      team: [],
      github: '',
      website: '',
      twitter: '',
      isOpenSource: false,
    },
  });
  return (
    <Modal dialogSize="xl" onClose={onClose} open={open}>
      <div className="pointer-events-auto flex min-h-[90vh] w-full justify-start overflow-hidden rounded-2xl bg-[var(--modal-body-surface)]">
        <div className="w-[55%]  bg-[var(--card-bg-primary)] px-14">
          <div className="py-8">
            <Text className="h5 text-[var(--modal-header-heading)]">
              New Project
            </Text>
          </div>
          <div className="px-7 py-11">
            {step === 1 && (
              <Step1 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 2 && (
              <Step2 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 3 && (
              <Step3 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 4 && (
              <Step4 setStep={setStep} projectForm={createProjectForm} />
            )}
          </div>
        </div>
        <div className="relative w-[45%] px-14 py-8 ">
          <div className="flex w-full justify-end">
            <div className="cursor-pointer" onClick={onClose}>
              <Icon name="cross" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 ml-24 w-full">
            <div className="min-h-48 flex w-full flex-col gap-8 rounded-t-xl border-[0.66px] border-[var(--color-border-primary-base)] bg-[var(--card-bg-primary)] pl-14 pt-14">
              <Avatar
                size={'xl'}
                variant={'square'}
                src={createProjectForm.watch('logo')}
                alt="random"
              />

              <div className="flex flex-col">
                <Text className="b2" color={'primary'}>
                  {createProjectForm.watch('name')
                    ? createProjectForm.watch('name')
                    : 'Name of the Project'}
                </Text>
                <Text className="l3-light" color={'primary'}>
                  {createProjectForm.watch('tagline')
                    ? createProjectForm.watch('tagline')
                    : 'Concise and descriptive tagline of your project'}
                </Text>
              </div>
              <div>
                <Tabs size="sm" defaultValue={0}>
                  <TabList className="mx-auto">
                    <Tab value={0}>About</Tab>
                    <Tab value={1}>Contributions</Tab>
                  </TabList>
                  <TabPanels className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    <TabPanel value={0}>
                      <div className="h-96" />
                      <div className="h-20" />
                    </TabPanel>
                    <TabPanel value={1}>
                      <div className="h-96" />
                      <div className="h-20" />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
