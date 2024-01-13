import React from 'react';
import { tokens } from '@/constants/industry';
import { OrganizationSponsorFormData } from '@/types/sponsor';
import { useUploadThing } from '@/utils/uploadthing';
import { Controller, useFieldArray, UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import {
  Button,
  Checkbox,
  HelperText,
  Icon,
  ImageUploader,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  InputRightElement,
  SearchSelect,
  Switch,
  Text,
} from '@cubik/ui';

interface IOrgSponsorFormProps {
  organizationSponsorForm: UseFormReturn<
    OrganizationSponsorFormData,
    any,
    undefined
  >;
  submitEventData: (data: OrganizationSponsorFormData) => void;
  progress: number;
  setProgress: (value: number) => void;
}

const OrganizationSponsorForm = ({
  organizationSponsorForm,
  submitEventData,
  progress,
  setProgress,
}: IOrgSponsorFormProps) => {
  const { control } = organizationSponsorForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'upfrontPay',
  });
  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        // setProgress(progressEvent);
        setProgress(progressEvent);
      },
      onUploadError: (error) => {
        organizationSponsorForm.setError('logo', {
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
          organizationSponsorForm.setValue('logo', file[0].url);
        } else {
          organizationSponsorForm.setError('logo', {
            type: 'manual',
            message: "Couldn't upload file",
          });
          toast.error(`Upload Error: ${file}`);
        }
      },
    },
  );
  return (
    <form
      className="flex w-full flex-col gap-[40px]"
      onSubmit={organizationSponsorForm.handleSubmit(submitEventData)}
    >
      <div>
        <div>
          <Text className="h5" color={'primary'}>
            Sponsorship Details
          </Text>
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          <div className="mt-[16px] flex w-full flex-col gap-3">
            <InputLabel id="totalCommitted" isRequired>
              Sponsorship Amount
            </InputLabel>

            <InputFieldContainer
              variant="sm"
              isError={
                organizationSponsorForm.formState.errors.totalCommitted
                  ? true
                  : false
              }
            >
              <InputLeftElement withBorder={false}>$</InputLeftElement>
              <InputField
                name="name"
                placeholder="100,000"
                onChange={(e) => {
                  organizationSponsorForm.setValue(
                    'totalCommitted',
                    Number(e.currentTarget.value),
                  );
                }}
                defaultValue={
                  organizationSponsorForm.formState.defaultValues
                    ?.totalCommitted
                }
              />
            </InputFieldContainer>
            {organizationSponsorForm.formState.errors.totalCommitted && (
              <HelperText variant={'error'} fontSize={'sm'}>
                {
                  organizationSponsorForm.formState.errors.totalCommitted
                    .message
                }
              </HelperText>
            )}
          </div>

          <div className="mt-[16px] flex w-full flex-col gap-3">
            <InputLabel id="upfrontPay" isRequired>
              Amount Paying Upfront
            </InputLabel>
            <ul>
              {fields.map((item, index) => {
                return (
                  <li key={item.id}>
                    <div className="flex gap-3">
                      <InputFieldContainer variant="sm">
                        <InputField
                          name="amount"
                          placeholder="100,000"
                          onChange={(e) => {
                            organizationSponsorForm.setValue(
                              `upfrontPay.${index}.amount`,
                              Number(e.currentTarget.value),
                            );
                          }}
                        />
                        <InputRightElement>
                          <Controller
                            render={({ field }) => (
                              <SearchSelect
                                placeholder="token"
                                onChange={(e) => {
                                  if (!e) return;
                                  organizationSponsorForm.setValue(
                                    `upfrontPay.${index}.token`,
                                    e as any,
                                  );
                                }}
                                value={
                                  organizationSponsorForm.watch(
                                    `upfrontPay.${index}.token`,
                                  ) as any
                                }
                                options={tokens as any}
                              />
                            )}
                            name={`upfrontPay.${index}.token`}
                            control={control}
                          />
                        </InputRightElement>
                      </InputFieldContainer>
                      <button type="button" onClick={() => remove(index)}>
                        <Icon
                          name="delete"
                          height={18}
                          width={18}
                          color="red"
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => {
                append({ token: '', amount: 0 });
              }}
              className="rounded-lg border border-dashed border-[var(--color-border-secondary)] px-3 py-2"
            >
              <Text className="l4" color={'secondary'}>
                Add Another Asset
              </Text>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Text className="h5" color={'primary'}>
            Organisation Details
          </Text>
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          <div className="mt-[16px] flex w-full  justify-between gap-3">
            <InputLabel id="public">
              Make my Organisation Sponsorship Public
            </InputLabel>
            <Switch
              onChange={(e) => {
                console.log(e);
                organizationSponsorForm.setValue('isSponsorshipPublic', e);
              }}
              size="sm"
              checked
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <InputLabel id="name" isRequired>
              Name
            </InputLabel>

            <InputFieldContainer
              variant="sm"
              isError={
                organizationSponsorForm.formState.errors.name ? true : false
              }
            >
              <InputField
                name="name"
                placeholder="Name of the Sponsoring Organization"
                onChange={(e) => {
                  organizationSponsorForm.setValue(
                    'name',
                    e.currentTarget.value,
                  );
                }}
                defaultValue={
                  organizationSponsorForm.formState.defaultValues?.name
                }
              />
            </InputFieldContainer>
            {organizationSponsorForm.formState.errors.name && (
              <HelperText variant={'error'} fontSize={'sm'}>
                {organizationSponsorForm.formState.errors.name.message}
              </HelperText>
            )}
          </div>
          <div className="flex w-full flex-col gap-3">
            <InputLabel id="name" isRequired>
              Upload Logo
            </InputLabel>
            <ImageUploader
              progress={progress || 0}
              logo={organizationSponsorForm.watch('logo')}
              errorMessage={
                organizationSponsorForm.formState.errors.logo?.message
              }
              isUploading={isUploading}
              startUpload={startUpload}
            />
          </div>
          <div className="flex gap-2">
            <Checkbox
              checked={organizationSponsorForm.watch('selfCustody')}
              onCheckedChange={(e) => {
                if (e) {
                  organizationSponsorForm.setValue('selfCustody', true);
                } else {
                  organizationSponsorForm.setValue('selfCustody', false);
                }
              }}
            />
            <div className="gap-[6px]">
              <Text color={'primary'} className="l1">
                Self Custody Grants Funds
              </Text>
              <Text color={'secondary'} className="l2">
                You can self custody the grants match pool funds you sponsor in
                a multisig which you can access through the admin dashboard.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button size={'xl'} className="w-full" type="submit">
          Proceed to Payment
        </Button>
      </div>
    </form>
  );
};

export default OrganizationSponsorForm;
