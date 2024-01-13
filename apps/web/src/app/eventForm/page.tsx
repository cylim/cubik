'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { EventFormSwitch } from '@/app/eventForm/eventFormSwitch';
import { tokens } from '@/constants/industry';
import { useForm } from 'react-hook-form';

import {
  Button,
  Checkbox,
  HelperText,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputRightElement,
  SearchSelect,
  Text,
  Textarea,
} from '@cubik/ui';

const EventFormPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  let path = pathname;

  interface EventFormData {
    name: string;
    matchedPool: GLfloat;
    description: string;
    approvedProjectsOnly: boolean;
    token: string;
  }

  const createEventForm = useForm<EventFormData>({
    defaultValues: {
      name: '',
      matchedPool: 0,
      description: '',
      approvedProjectsOnly: false,
      token: 'string',
    },
  });
  return (
    <div className="mx-auto my-20 flex max-w-2xl flex-col items-center  justify-center gap-[56px]">
      <div className="flex flex-col items-center gap-[14px]">
        <Text className="h3" color={'primary'}>
          Create Event
        </Text>
        <Text className="b3" color={'secondary'}>
          Create a New Community Event and help projects
        </Text>
      </div>
      <div>
        <EventFormSwitch event={searchParams?.event} />
      </div>
      <div className="flex w-full flex-col gap-[40px]">
        <div>
          <Text className="h5" color={'primary'}>
            About Event
          </Text>
          <div className="flex w-full flex-col gap-[24px]">
            <div className="mt-[16px] flex w-full flex-col gap-3">
              <InputLabel id="name" isRequired>
                Event Name
              </InputLabel>

              <InputFieldContainer
                variant="sm"
                isError={createEventForm.formState.errors.name ? true : false}
              >
                <InputField
                  name="name"
                  placeholder="Solana Grants Round"
                  onChange={(e) => {
                    createEventForm.setValue('name', e.currentTarget.value);
                  }}
                  defaultValue={createEventForm.formState.defaultValues?.name}
                />
              </InputFieldContainer>
              {createEventForm.formState.errors.name && (
                <HelperText variant={'error'} fontSize={'sm'}>
                  {createEventForm.formState.errors.name.message}
                </HelperText>
              )}
            </div>

            <div className="flex w-full flex-col gap-3">
              <InputLabel id="name" isRequired>
                Matching Pool
              </InputLabel>

              <InputFieldContainer
                variant="sm"
                isError={createEventForm.formState.errors.name ? true : false}
              >
                <InputField
                  name="name"
                  placeholder="100,000"
                  onChange={(e) => {
                    createEventForm.setValue('name', e.currentTarget.value);
                  }}
                  defaultValue={createEventForm.formState.defaultValues?.name}
                />
                <InputRightElement>
                  <SearchSelect
                    placeholder="Search Category here"
                    isMulti={true}
                    onChange={(e) => {
                      if (!e) return;
                      createEventForm.setValue('token', e as any);
                    }}
                    value={createEventForm.watch('token') as any}
                    options={tokens as any}
                  />
                </InputRightElement>
              </InputFieldContainer>
              {createEventForm.formState.errors.name && (
                <HelperText variant={'error'} fontSize={'sm'}>
                  {createEventForm.formState.errors.name.message}
                </HelperText>
              )}
            </div>

            <div className="flex w-full flex-col gap-3">
              <InputLabel id="shortDescription" isRequired>
                Description
              </InputLabel>
              <Textarea
                size="md"
                resizable
                placeholder="tagline"
                defaultValue={
                  createEventForm.formState.defaultValues?.description
                }
                onChange={(e) => {
                  createEventForm.setValue(
                    'description',
                    e.currentTarget.value,
                  );
                }}
                {...(createEventForm.formState.errors.description
                  ? { state: 'error' }
                  : { state: 'default' })}
              />
              {createEventForm.formState.errors.description && (
                <HelperText variant={'error'} fontSize={'sm'}>
                  {createEventForm.formState.errors.description.message}
                </HelperText>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Checkbox
            checked={createEventForm.watch('approvedProjectsOnly')}
            onCheckedChange={(e) => {
              if (e) {
                createEventForm.setValue('approvedProjectsOnly', true);
              } else {
                createEventForm.setValue('approvedProjectsOnly', false);
              }
            }}
          />
          <div className="gap-[6px]">
            <Text color={'primary'} className="l1">
              Require Registration Approval
            </Text>
            <Text color={'secondary'} className="l2">
              If selected, only approved projects will participate
            </Text>
          </div>
        </div>
        <div>
          <Button size={'xl'} className="w-full">
            Create Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventFormPage;
