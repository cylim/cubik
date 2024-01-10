import React, { useState } from 'react';
import { EditProjectDetails } from '@/app/[username]/components/helper/editProjectDetails';
import ProjectDetailsForm from '@/app/[username]/components/project-tab/project-admin-card/ProjectDetailsForm';
import ProjectImages from '@/app/[username]/components/project-tab/project-admin-card/ProjectImages';
import ProjectLinks from '@/app/[username]/components/project-tab/project-admin-card/ProjectLinks';
import { IProjectData } from '@/types/project';
import { utils } from '@coral-xyz/anchor';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { createProjectEditMessage } from '@cubik/auth';
import { Button, Text } from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';
import { generateSession } from '@cubik/wallet/src/authentication/generateSession';

const EditProjectModalContent = ({ projectId }: { projectId: string }) => {
  const { publicKey, signMessage } = useCubikWallet();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const editProjectForm = useForm<IProjectData>({
    defaultValues: async () =>
      (await axios.get(`/api/project/loadProject?project=${projectId}`)).data
        .result,
    resolver: zodResolver(
      z.object({
        logo: z.custom<File[]>(),
        name: z
          .string()
          .min(1, {
            message: "Project name can't be empty",
          })
          .max(36, {
            message: 'Must be at most 36 characters',
          }),
        email: z.string().email({ message: "Email can't be empty" }),
        shortDescription: z
          .string()
          .min(1, { message: "Tagline can't be empty" })
          .max(80, {
            message: 'Tagline can not be more than 80 characters',
          }),
        twitterHandle: z
          .string()
          .min(1, { message: "Twitter handle can't be empty" }),

        projectLink: z
          .string()
          .min(1, { message: "Project link can't be empty" }),
        githubLink: z
          .string()
          .min(1, { message: "Github link can't be empty" }),
        telegramLink: z.string(),
        discordLink: z.string(),
      }),
    ),
  });
  const submitProjectData = async (data: IProjectData) => {
    try {
      setIsLoading(true);
      if (!signMessage || !publicKey) {
        throw new Error('Sign message is undefined');
      }
      const nonce = Math.random().toString(36).substring(2, 15);
      const hash = await generateSession(nonce);
      const msg = createProjectEditMessage(hash);
      if (!msg) {
        throw new Error('Message is undefined');
      }
      const sigBuffer = await signMessage(msg);
      const signature = utils.bytes.bs58.encode(sigBuffer);
      const updatedProject = await EditProjectDetails(
        publicKey?.toBase58(),
        signature,
        nonce,
        {
          ...editProjectForm.formState.defaultValues,
          ...data,
          slides: editProjectForm.watch('slides'),
        },
      );
      if (updatedProject) {
        toast.success('Successfully edited project details');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="no-scrollbar flex h-full flex-col items-center justify-center overflow-y-scroll">
      <form
        onSubmit={editProjectForm.handleSubmit(submitProjectData)}
        className=" flex h-full w-[85%] flex-col gap-20 pt-10"
      >
        <div>
          <div className="flex items-center justify-between">
            <Text className="h5" color={'primary'}>
              Project Details
            </Text>
            <div className="flex gap-3">
              <Button
                type="reset"
                variant="outline"
                onClick={() => editProjectForm.reset()}
              >
                Cancel
              </Button>
              <Button type="submit" variant="success" isLoading={isLoading}>
                Save
              </Button>
            </div>
          </div>

          <ProjectDetailsForm
            editProjectForm={editProjectForm}
            progress={progress}
            setProgress={setProgress}
          />
        </div>

        <ProjectLinks editProjectForm={editProjectForm} />
        <ProjectImages editProjectForm={editProjectForm} />
      </form>
    </div>
  );
};

export default EditProjectModalContent;
