import { error } from 'console';
import React from 'react';
import { IProjectData } from '@/types/project';
import { useUploadThing } from '@/utils/uploadthing';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import {
  HelperText,
  ImageUploader,
  InputField,
  InputFieldContainer,
  InputLabel,
  Textarea,
} from '@cubik/ui';

interface IEditProjectFormProps {
  editProjectForm: UseFormReturn<IProjectData, any, undefined>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectDetailsForm = ({
  editProjectForm,
  progress,
  setProgress,
}: IEditProjectFormProps) => {
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        // setProgress(progressEvent);
        setProgress(progressEvent);
      },
      onUploadError: (error) => {
        editProjectForm.setError('logo', {
          type: 'manual',
          message: error.message,
        });
        toast.error(`Upload Error: ${error.message}`);
      },
      onUploadBegin: (file) => {
        //   setLoadingState('Uploading');
        //   toast.info(`Upload Begin: ${file}`);
      },
      onClientUploadComplete: (file) => {
        if (file) {
          console.log(file);
          editProjectForm.setValue('logo', file[0].url);
        } else {
          editProjectForm.setError('logo', {
            type: 'manual',
            message: "Couldn't upload file",
          });
          toast.error(`Upload Error: ${file}`);
        }
      },
    },
  );
  return (
    <div className="mt-11 flex flex-col gap-8">
      <ImageUploader
        progress={progress || 0}
        logo={editProjectForm.watch('logo')}
        errorMessage={editProjectForm.formState.errors.logo?.message}
        isUploading={isUploading}
        startUpload={startUpload}
      />
      <div className="flex w-full flex-col gap-2">
        <InputLabel id="name" isRequired>
          Project Name
        </InputLabel>

        <InputFieldContainer
          variant="sm"
          isError={editProjectForm.formState.errors.name ? true : false}
        >
          <InputField
            name="name"
            placeholder="name of project"
            onChange={(e) => {
              editProjectForm.setValue('name', e.currentTarget.value);
            }}
            defaultValue={editProjectForm.formState.defaultValues?.name}
          />
        </InputFieldContainer>
        {editProjectForm.formState.errors.name && (
          <HelperText variant={'error'}>
            {editProjectForm.formState.errors.name.message}
          </HelperText>
        )}
      </div>

      <div className="flex w-full flex-col gap-2">
        <InputLabel id="email" isRequired>
          Contact Email
        </InputLabel>
        <InputFieldContainer
          variant="sm"
          isError={editProjectForm.formState.errors.email ? true : false}
        >
          <InputField
            name="email"
            placeholder="email"
            onChange={(e) => {
              editProjectForm.setValue('email', e.currentTarget.value);
            }}
            defaultValue={editProjectForm.formState.defaultValues?.email}
          />
        </InputFieldContainer>
        {editProjectForm.formState.errors.email && (
          <HelperText variant={'error'}>
            {editProjectForm.formState.errors.email.message}
          </HelperText>
        )}
      </div>

      <div className="flex w-full flex-col gap-2">
        <InputLabel id="shortDescription" isRequired>
          Tagline
        </InputLabel>
        <Textarea
          size="md"
          resizable
          placeholder="tagline"
          defaultValue={
            editProjectForm.formState.defaultValues?.shortDescription
          }
          onChange={(e) => {
            editProjectForm.setValue('shortDescription', e.currentTarget.value);
          }}
          {...(editProjectForm.formState.errors.shortDescription
            ? { state: 'error' }
            : { state: 'default' })}
        />
        {editProjectForm.formState.errors.shortDescription && (
          <HelperText variant={'error'}>
            {editProjectForm.formState.errors.shortDescription.message}
          </HelperText>
        )}
      </div>

      {/* rest of the code here */}
    </div>
  );
};

export default ProjectDetailsForm;
