import React, { useState } from 'react';
import { ProjectFormData } from '@/types/project';
import { utils } from '@coral-xyz/anchor';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { createProjectEditMessage } from '@cubik/auth';
import {
  Button,
  Icon,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  Text,
  Textarea,
} from '@cubik/ui';
import { useCubikWallet } from '@cubik/wallet';
import { generateSession } from '@cubik/wallet/src/authentication/generateSession';
import { EditProjectDetails } from '@cubik/wallet/src/helpers/editProjectDetails';

const EditProjectModalContent = ({ projectId }: { projectId: string }) => {
  const { connected, publicKey, disconnect, signMessage } = useCubikWallet();
  console.log('signMessage', signMessage, publicKey, connected);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const editProjectForm = useForm<ProjectFormData>({
    defaultValues: async () =>
      (await axios.get(`/api/project/loadProject?project=${projectId}`)).data
        .result,
  });

  const submitProjectData = async (data: { name: string }) => {
    try {
      console.log(data);
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
        data,
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

          <div className="mt-11 flex flex-col gap-8">
            <div className="w-full">
              <InputLabel id="email" isRequired>
                Project Name
              </InputLabel>

              <InputFieldContainer variant="sm">
                <InputField
                  name="name"
                  placeholder="name of project"
                  onChange={(e) => {
                    editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
            </div>

            <div className="w-full">
              <InputLabel id="email" isRequired>
                Contact Email
              </InputLabel>

              <InputFieldContainer variant="sm">
                <InputField
                  name="email"
                  placeholder="email"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
            </div>

            <div className="w-full">
              <InputLabel id="email">Tagline</InputLabel>
              <Textarea
                size="md"
                state="default"
                resizable
                placeholder="Placeholder"
              />

              {/* <InputFieldContainer variant="sm">
                <InputField
                  name="email"
                  placeholder="email"
                  onChange={(e) => {
                    editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer> */}
            </div>

            {/* rest of the code here */}
          </div>
        </div>

        <div className=" flex flex-col gap-8">
          <Text className="h5" color={'primary'}>
            Links and Socials
          </Text>
          <div className="w-full">
            <InputLabel id="email" isRequired>
              Project URL
            </InputLabel>

            <InputFieldContainer variant="sm">
              <InputField
                name="projectURL"
                placeholder="https://unified.jup.ag"
                onChange={(e) => {
                  // editProjectForm.setValue('name', e.currentTarget.value);
                }}
                // defaultValue={editProjectForm.formState.defaultValues?.name}
              />
            </InputFieldContainer>
          </div>

          <div className="w-full">
            <InputLabel id="email" isRequired>
              Socials
            </InputLabel>

            <div className="flex flex-col gap-2">
              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="X" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>

              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="github" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>

              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="discord" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="telegram" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="youtube" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
              <InputFieldContainer variant="sm">
                <InputLeftElement withBorder={true}>
                  <Icon name="linkSlant" />
                </InputLeftElement>
                <InputField
                  name="projectURL"
                  placeholder="https://unified.jup.ag"
                  onChange={(e) => {
                    // editProjectForm.setValue('name', e.currentTarget.value);
                  }}
                  // defaultValue={editProjectForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProjectModalContent;
