import { useEffect, useRef, useState } from 'react';
import { syncProject } from '@/components/create-project/helper/syncProject';
import { Step1 } from '@/components/create-project/step1';
import { Step2 } from '@/components/create-project/step2';
import { Step3 } from '@/components/create-project/step3';
import { Step4 } from '@/components/create-project/step4';
import { useAutosave } from '@/hooks/useAutoSave';
import axios, { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';

import { Project_Backup } from '@cubik/common';
import { Prisma } from '@cubik/database';
import { ApiResponseType } from '@cubik/database/api';
import {
  Avatar,
  Icon,
  Modal,
  Spinner,
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
export const CreateProjectModal = ({ onClose, open }: Props) => {
  const [step, setStep] = useState<number>(1);
  const [loadedProject, setLoadedProject] = useState<ProjectData | null>(null);
  const [isLoadingProject, setIsLoadingProject] = useState<boolean>(false);
  const lastUpdateRef = useRef<number>(Date.now());
  const [formState, setFormState] = useState<any>(null);

  const createProjectForm = useForm<ProjectFormData>({
    defaultValues: {
      category: [],
      isOpenSource: false,
      logo: Project_Backup,
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

        const projectId = localStorage.getItem('latest-draft-project');
        if (!projectId) {
          return onClose();
        }

        const data = (await axios.get(
          `/api/project/loadProject?project=${projectId}&draft=true&create=true`,
        )) as AxiosResponse<ApiResponseType, any>;

        const projectData = data.data.result as ProjectData;

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
        createProjectForm.setValue(
          'isOpenSource',
          projectData.isOpenSource || false,
        );
        const team: Option[] = projectData.team.map((e) => {
          return {
            inputId: e.user.id,
            label: e.user.username,
            value: e.user.id,
          };
        });
        createProjectForm.setValue('team', team);

        setLoadedProject(projectData);
      } catch (error) {
        console.log(error);
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
      const projectId = localStorage.getItem('latest-draft-project');
      if (!projectId) {
        return onClose();
      }
      if (!loadedProject) return;
      const syp = await syncProject(createProjectForm.getValues(), projectId);
    },
    15000,
    [formState],
    lastUpdateRef.current + 30000 > Date.now() ? true : false,
  );

  return (
    <Modal dialogSize="xl" onClose={onClose} open={open}>
      <div className="pointer-events-auto flex h-[90vh] w-full justify-start overflow-hidden rounded-2xl bg-[var(--modal-body-surface)]">
        {!isLoadingProject ? (
          <div className="w-full overflow-y-auto bg-[var(--card-bg-primary)] px-7 md:w-[55%]  md:px-14">
            <div className="py-4 md:py-8 ">
              <Text className="h5 text-[var(--modal-header-heading)]">
                New Project
              </Text>
            </div>
            <div className="px-4 py-5 md:px-7 md:py-11">
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
        ) : (
          <div className="flex w-full items-center justify-center px-7 md:w-[55%] md:px-14">
            <Spinner color="#000000" />
          </div>
        )}

        <div className="relative hidden w-[45%] px-14 py-8 md:block ">
          <div className="flex w-full justify-end">
            <div className="cursor-pointer" onClick={onClose}>
              <Icon name="cross" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 ml-24 w-full">
            <div className="flex min-h-48 w-full flex-col gap-8 rounded-t-xl border-[0.66px] border-[var(--color-border-primary-base)] bg-[var(--card-bg-primary)] pl-14 pt-14">
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
    </Modal>
  );
};
