import React from 'react';
import { IProjectData } from '@/types/project';
import { UseFormReturn } from 'react-hook-form';

import {
  HelperText,
  Icon,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  Text,
} from '@cubik/ui';

interface IEditProjectLinkProps {
  editProjectForm: UseFormReturn<IProjectData, any, undefined>;
}

const ProjectLinks = ({ editProjectForm }: IEditProjectLinkProps) => {
  return (
    <div className=" flex flex-col gap-8">
      <Text className="h5" color={'primary'}>
        Links and Socials
      </Text>
      <div className="flex w-full flex-col gap-2">
        <InputLabel id="projectLink" isRequired>
          Project URL
        </InputLabel>

        <InputFieldContainer variant="sm">
          <InputField
            name="projectURL"
            placeholder="https://unified.jup.ag"
            onChange={(e) => {
              editProjectForm.setValue('projectLink', e.currentTarget.value);
            }}
            defaultValue={editProjectForm.formState.defaultValues?.projectLink}
          />
        </InputFieldContainer>
      </div>

      <div className="flex w-full flex-col gap-2">
        <InputLabel id="socials">Socials</InputLabel>

        <div className="flex flex-col gap-2">
          <InputFieldContainer
            variant="sm"
            isError={
              editProjectForm.formState.errors.twitterHandle ? true : false
            }
          >
            <InputLeftElement withBorder={true}>
              <Icon
                name="X"
                height={16}
                width={16}
                className="stroke-[var(--form-input-fg-default)]"
              />
            </InputLeftElement>
            <InputField
              name="twitterHandle"
              placeholder="https://unified.jup.ag"
              onChange={(e) => {
                editProjectForm.setValue(
                  'twitterHandle',
                  e.currentTarget.value,
                );
              }}
              defaultValue={
                editProjectForm.formState.defaultValues?.twitterHandle
              }
            />
          </InputFieldContainer>
          {editProjectForm.formState.errors.twitterHandle && (
            <HelperText variant={'error'} fontSize={'sm'}>
              {editProjectForm.formState.errors.twitterHandle.message}
            </HelperText>
          )}

          <InputFieldContainer
            variant="sm"
            isError={editProjectForm.formState.errors.githubLink ? true : false}
          >
            <InputLeftElement withBorder={true}>
              <Icon name="github" height={16} width={16} />
            </InputLeftElement>
            <InputField
              name="githubLink"
              placeholder="https://unified.jup.ag"
              onChange={(e) => {
                editProjectForm.setValue('githubLink', e.currentTarget.value);
              }}
              defaultValue={editProjectForm.formState.defaultValues?.githubLink}
            />
          </InputFieldContainer>
          {editProjectForm.formState.errors.githubLink && (
            <HelperText variant={'error'} fontSize={'sm'}>
              {editProjectForm.formState.errors.githubLink.message}
            </HelperText>
          )}

          <InputFieldContainer
            variant="sm"
            isError={
              editProjectForm.formState.errors.discordLink ? true : false
            }
          >
            <InputLeftElement withBorder={true}>
              <Icon name="discord" height={16} width={16} />
            </InputLeftElement>
            <InputField
              name="discordLink"
              placeholder="https://unified.jup.ag"
              onChange={(e) => {
                editProjectForm.setValue('discordLink', e.currentTarget.value);
              }}
              defaultValue={
                editProjectForm.formState.defaultValues?.discordLink
              }
            />
          </InputFieldContainer>
          {editProjectForm.formState.errors.discordLink && (
            <HelperText variant={'error'} fontSize={'sm'}>
              {editProjectForm.formState.errors.discordLink.message}
            </HelperText>
          )}
          <InputFieldContainer
            variant="sm"
            isError={
              editProjectForm.formState.errors.telegramLink ? true : false
            }
          >
            <InputLeftElement withBorder={true}>
              <Icon name="telegram" height={16} width={16} />
            </InputLeftElement>
            <InputField
              name="telegramLink"
              placeholder="https://unified.jup.ag"
              onChange={(e) => {
                editProjectForm.setValue('telegramLink', e.currentTarget.value);
              }}
              defaultValue={
                editProjectForm.formState.defaultValues?.telegramLink
              }
            />
          </InputFieldContainer>
          {editProjectForm.formState.errors.telegramLink && (
            <HelperText variant={'error'} fontSize={'sm'}>
              {editProjectForm.formState.errors.telegramLink.message}
            </HelperText>
          )}

          {/* <InputFieldContainer variant="sm">
        <InputLeftElement withBorder={true}>
          <Icon name="linkSlant" height={16} width={16} />
        </InputLeftElement>
        <InputField
          name="projectLink"
          placeholder="https://unified.jup.ag"
          onChange={(e) => {
            editProjectForm.setValue(
              'projectLink',
              e.currentTarget.value,
            );
          }}
          defaultValue={
            editProjectForm.formState.defaultValues?.projectLink
          }
        />
      </InputFieldContainer> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
