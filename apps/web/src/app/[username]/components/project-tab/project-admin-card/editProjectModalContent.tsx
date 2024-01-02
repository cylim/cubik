import React from 'react';
import { ProjectFormData } from '@/types/project';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import {
  Button,
  InputField,
  InputFieldContainer,
  InputLabel,
  Text,
} from '@cubik/ui';

const EditProjectModalContent = ({ projectId }: { projectId: string }) => {
  const editProjectForm = useForm<ProjectFormData>({
    defaultValues: async () =>
      (await axios.get(`/api/project/loadProject?project=${projectId}`)).data
        .result,
  });

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-scroll">
      <div className=" flex h-full w-[85%] flex-col gap-20 pt-10">
        <div>
          <div className="flex items-center justify-between">
            <Text className="h5" color={'primary'}>
              Project Details
            </Text>
            <Button>Save</Button>
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

            {/* rest of the code here */}
          </div>
        </div>

        <div>
          <Text className="h5" color={'primary'}>
            Links and Socials
          </Text>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModalContent;
