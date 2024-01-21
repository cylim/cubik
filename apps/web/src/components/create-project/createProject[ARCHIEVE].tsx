'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import StepTemplate from '@/components/create-project/stepTemplate';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';
import { z } from 'zod';

import { Project_Backup } from '@cubik/common';
import { Prisma } from '@cubik/database';
import { ApiResponseType } from '@cubik/database/api';
import {
  Avatar,
  Icon,
  Skeleton,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@cubik/ui';

import { useAutosave } from '../../hooks/useAutoSave';
import { syncProject } from './helper/syncProject';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';
import { Step5 } from './step5';
import { Step6 } from './step6';
import { Step7 } from './step7';
import { Success } from './success';

interface Props {
  id: string;
}
type ProjectData = Prisma.ProjectGetPayload<{
  select: {
    id: true;
    name: true;
    discordLink: true;
    githubLink: true;
    email: true;
    shortDescription: true;
    logo: true;
    longDescription: true;
    slides: true;
    projectLink: true;
    industry: true;
    status: true;
    telegramLink: true;
    isOpenSource: true;
    twitterHandle: true;
    team: {
      select: {
        id: true;
        user: {
          select: {
            id: true;
            username: true;
            profilePicture: true;
          };
        };
      };
    };
  };
}>;
export interface Option {
  label?: string;
  value?: string;
  inputId: string;
}
export interface ProjectFormData {
  name: string;
  tagline: string;
  email: string;
  category: Option[];
  logo: string;
  description: string;
  slides: string[];
  team: Option[];
  github: string;
  website: string;
  twitter: string;
  isOpenSource: boolean;
}

const StepBar = ({ currentStep }: { currentStep: number }) => {
  const totalSteps = 8;
  const stepsToShow = 5; // Number of steps to show at a time
  const halfSteps = Math.floor(stepsToShow / 2);
  const stepVariants = (step: number) => {
    const distance = Math.abs(currentStep - step);
    let width = 6; // Default width for inactive steps
    let opacity = 0.3; // Default opacity for inactive steps

    if (distance === 0) {
      width = 22; // Active step
      opacity = 1;
    } else if (distance === 1) {
      width = 14; // Steps adjacent to the active step
      opacity = 0.8;
    } else if (distance === 2) {
      width = 8; // Steps adjacent to the active step
      opacity = 0.5;
    }

    return {
      active: {
        width: width,
        opacity: opacity,
        backgroundColor: 'var(--color-fg-info-base)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
      inactive: {
        width: width,
        opacity: opacity,
        backgroundColor: 'var(--color-surface-primary-transparent)',
        transition: { duration: 0.5 },
      },
    };
  };

  const shouldRenderStep = (step: number) => {
    const startStep = Math.max(1, currentStep - halfSteps);
    const endStep = Math.min(totalSteps, currentStep + halfSteps);

    return step >= startStep && step <= endStep;
  };
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
          (step) =>
            shouldRenderStep(step) && (
              <motion.div
                key={step}
                className="h-[6px] rounded-full"
                variants={stepVariants(step)}
                initial="inactive"
                animate={currentStep === step ? 'active' : 'inactive'}
                layout
              />
            ),
        )}
      </div>
    </div>
  );
};
export const CreateProject = ({ id }: Props) => {
  const [step, setStep] = useState<number>(1);
  const [loadedProject, setLoadedProject] = useState<ProjectData | null>(null);
  const [isLoadingProject, setIsLoadingProject] = useState<boolean>(false);
  const lastUpdateRef = useRef<number>(Date.now());
  const [formState, setFormState] = useState<any>(null);
  const router = useRouter();
  const createProjectForm = useForm<ProjectFormData>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(3, { message: "Project name can't be empty" }),
        tagline: z
          .string()
          .min(1, { message: "Project tagline can't be empty" }),
        email: z.string().email({ message: 'Invalid email address' }),
        category: z.array(z.string()),
        logo: z.string(),
        description: z.string(),
        slides: z.array(z.string()),
        team: z.array(z.string()),
        github: z.string().url({ message: 'Invalid github url' }),
        website: z.string().url({ message: 'Invalid website url' }),
        twitter: z.string().url({ message: 'Invalid twitter url' }),
        isOpenSource: z.boolean(),
      }),
    ),
    defaultValues: {
      category: [],
      isOpenSource: false,
      logo: '',
      description: '',
      email: '',
      github: '',
      name: '',
      slides: [],
      tagline: '',
      team: [],
      twitter: '',
      website: '',
    },
  });

  // this loads the project data from the database for first time
  useEffect(() => {
    const loadProjectData = async () => {
      try {
        // if the modal is not open or the project is already loaded, return to avoid loop of fetch calls
        if (!open || loadedProject) return;
        setIsLoadingProject(true);

        const data = (await axios.get(
          `/api/project/loadProject?project=${id}&draft=true&create=true`,
        )) as AxiosResponse<ApiResponseType, any>;

        const projectData = data.data.result as ProjectData;
        if (!projectData) {
          throw new Error('No project found');
        }
        // manually set the values because react-hook-form is default values are not updating
        createProjectForm.setValue('name', projectData.name);
        createProjectForm.setValue('tagline', projectData.shortDescription);
        createProjectForm.setValue('email', projectData.email);
        createProjectForm.setValue('logo', projectData.logo);
        createProjectForm.setValue('description', projectData.longDescription);
        createProjectForm.setValue(
          'slides',
          (projectData.slides as string[]) || [],
        );
        createProjectForm.setValue('github', projectData.githubLink);
        createProjectForm.setValue('website', projectData.projectLink);
        createProjectForm.setValue('twitter', projectData.twitterHandle);
        const category = (projectData.industry as string[]).map((e) => {
          return {
            inputId: uuidV4(),
            label: e,
            value: e,
          };
        });
        createProjectForm.setValue('category', category || []);
        createProjectForm.setValue(
          'isOpenSource',
          projectData.isOpenSource || false,
        );
        const team: Option[] =
          projectData?.team.map((e) => {
            return {
              inputId: e.user.id,
              label: e.user.username,
              value: e.user.id,
            };
          }) || [];
        createProjectForm.setValue('team', team);

        setLoadedProject(projectData);
      } catch (error) {
        console.log(error);
        localStorage.removeItem('latest-draft-project');
        //todo:  router.push('/create/project');
        return;
      } finally {
        setIsLoadingProject(false);
      }
    };
    loadProjectData();
  }, [open, loadedProject]);
  useEffect(() => {
    const subscription = createProjectForm.watch((value) => {
      setFormState(value as any); // Update the state with the latest form value
      lastUpdateRef.current = Date.now(); // Update the last update time
    });
    return () => subscription.unsubscribe(); // Cleanup
  }, [createProjectForm.watch()]);

  useAutosave(
    async () => {
      if (!loadedProject) return;
      await syncProject(createProjectForm.getValues(), id);
    },
    15000,
    [formState],
    lastUpdateRef.current + 30000 > Date.now() ? true : false,
  );
  const forceSave = async () => {
    if (!loadedProject) return;
    await syncProject(createProjectForm.getValues(), id);
  };

  return (
    <div className=" pointer-events-auto mx-auto flex h-[840px] w-full max-w-screen-xl justify-start py-16 md:gap-24 md:px-12">
      <div className="h-full md:w-1/2 ">
        <AnimatePresence>
          {!isLoadingProject ? (
            <motion.div className="h-full md:px-12 ">
              <StepBar currentStep={step} />
              {step === 1 && (
                <Step1
                  forceSave={forceSave}
                  setStep={setStep}
                  projectForm={createProjectForm}
                />
              )}
              {step === 2 && (
                <Step2
                  forceSave={forceSave}
                  setStep={setStep}
                  projectForm={createProjectForm}
                />
              )}
              {step === 3 && (
                <Step3
                  forceSave={forceSave}
                  setStep={setStep}
                  projectForm={createProjectForm}
                />
              )}
              {step === 4 && (
                <Step4
                  setStep={setStep}
                  projectForm={createProjectForm}
                  forceSave={forceSave}
                />
              )}
              {step === 5 && (
                <Step5
                  setStep={setStep}
                  projectForm={createProjectForm}
                  forceSave={forceSave}
                />
              )}
              {step === 6 && (
                <Step6
                  setStep={setStep}
                  projectForm={createProjectForm}
                  forceSave={forceSave}
                />
              )}
              {step === 7 && (
                <Step7
                  setStep={setStep}
                  projectForm={createProjectForm}
                  forceSave={forceSave}
                />
              )}
              {step === 10 && <Success />}
            </motion.div>
          ) : (
            <motion.div className="h-full md:px-12 ">
              <StepBar currentStep={step} />
              <StepTemplate
                currentStep={1}
                onNext={() => {}}
                title={'Hey @irffan 👋🏻'}
                description={
                  'Lets get started with creating your Project. Tell us about it, we will need its name and a unique tagline that represents your project'
                }
              >
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <div className="h-[28px] w-[30%] py-1">
                      <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                    </div>
                    <div className="h-[28px] w-[80%] py-1">
                      <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                    </div>
                  </div>{' '}
                  <div className="flex flex-col gap-4">
                    <div className="h-[28px] w-[60%] py-1">
                      <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                    </div>
                    <div className="h-[28px] w-[80%] py-1">
                      <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                    </div>
                  </div>
                </div>
              </StepTemplate>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative hidden w-1/2 scale-90 px-14 py-8 md:block">
        <div className="absolute left-0 top-0 ml-10 flex size-full items-center justify-center">
          <div className="flex h-fit min-h-48 w-full flex-col gap-8 overflow-hidden rounded-l-xl border-[var(--color-border-primary-base)] bg-gradient-to-r  from-[var(--body-surface)] px-14 pt-14">
            {!(createProjectForm.watch('logo') === Project_Backup) ? (
              <Avatar
                size={'xl'}
                variant={'square'}
                src={createProjectForm.watch('logo') || Project_Backup}
                alt="random"
              />
            ) : (
              <div className="flex size-[72px] items-center justify-center rounded-md border border-[var(--card-border-primary)] bg-[var(--color-surface-primary-base)]">
                <Icon
                  name="plus"
                  width={20}
                  height={20}
                  color="var(--color-fg-primary-base)"
                />
              </div>
            )}

            <div className="flex w-full flex-col gap-3">
              {createProjectForm.watch('name') ? (
                <Text className="b2" color={'primary'}>
                  {createProjectForm.watch('name')}
                </Text>
              ) : (
                <div className="h-[28px] w-[40%] py-1">
                  <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                </div>
              )}
              {createProjectForm.watch('tagline') ? (
                <Text className="l2-light" color={'secondary'}>
                  {createProjectForm.watch('tagline')}
                </Text>
              ) : (
                <div className="h-[20px] w-[80%] py-1">
                  <div className="size-full rounded-md bg-[var(--color-surface-primary-transparent)] opacity-50" />
                </div>
              )}
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
                  </TabPanel>
                  <TabPanel value={1}>
                    <div className="h-96" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
