'use client';

import React, { useState } from 'react';
import { useUploadThing } from '@/utils/uploadthing';
import { AnimatePresence, motion, progress } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

import {
  HelperText,
  ImageUploader,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  Switch,
  Text,
  toast,
} from '@cubik/ui';

// Import necessary UI components

const OrganizationDetails = () => {
  const [progress, setProgress] = useState(false);
  const {
    register,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useFormContext();

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    'imageUploader',
    {
      onUploadProgress: (progressEvent) => {
        // setProgress(progressEvent);
        setProgress(progressEvent);
      },
      onUploadError: (error) => {
        setError('logo', {
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
          setValue('logo', file[0].url);
        } else {
          setError('logo', {
            type: 'manual',
            message: "Couldn't upload file",
          });
          toast.error(`Upload Error: ${file}`);
        }
      },
    },
  );

  // Render fields related to organization details
  return (
    <AnimatePresence initial={false}>
      {!!watch('isSponsorshipPublic') && (
        <motion.div
          layout
          layoutId="organization information"
          //className="border w-full border-green-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            opacity: { duration: 0.3 },
            height: { duration: 0.15 },
            type: 'spring',
            bounce: 0.15,
            duration: 0.15,
          }}
        >
          <div className="flex flex-col gap-8">
            <div>
              <Text className="h5" color={'primary'}>
                Organization Details
              </Text>
            </div>
            <div className="flex w-full flex-col gap-8">
              <InputContainer>
                <InputLabel
                  id="name"
                  infoText="This is the official name of your organization that will be used for sponsorship recognition."
                >
                  Name
                </InputLabel>
                <InputFieldContainer
                  size="md"
                  isError={errors.name ? true : false}
                >
                  <InputField
                    name="name"
                    type="text"
                    placeholder="Enter your organization's name"
                    onChange={(e) => {
                      setValue('name', e.currentTarget.value);
                    }}
                  />
                </InputFieldContainer>
                <HelperText show={!!errors.name} variant={'error'}>
                  {errors.name && errors.name.message}
                </HelperText>
              </InputContainer>
              <InputContainer>
                <InputLabel
                  id="name"
                  infoText='Upload your organization"s logo for public display. Recommended format: JPG, PNG, GIF. Max size: 2MB'
                >
                  Logo
                </InputLabel>
                <ImageUploader
                  progress={progress || 0}
                  logo={watch('logo')}
                  errorMessage={errors.logo?.message}
                  isUploading={isUploading}
                  startUpload={startUpload}
                />
              </InputContainer>
              <div className="mt-[16px] flex w-full  justify-between gap-3">
                <InputLabel id="public">Self Custody Grant Funds</InputLabel>
                <Switch
                  onChange={(e) => {
                    console.log(e);
                    setValue('wantsSelfCustody', e);
                  }}
                  size="md"
                  // this should only be checked if user has selected isSponsorshipPublic
                  checked={
                    watch('wantsSelfCustody') && watch('isSponsorshipPublic')
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrganizationDetails;
