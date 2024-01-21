/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { toast } from 'sonner';

import { generateUserBackupImage } from '@cubik/common';
import {
  Avatar,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  HelperText,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  Spinner,
  Text,
} from '@cubik/ui';

import { searchUsername } from '../helpers/searchUsername';
import { useCubikWallet } from '../wallet';
import { UserCreateForm, UserCreateSteps } from './index';

interface Props {
  userCreateState: UserCreateSteps;
  setUserCreateState: React.Dispatch<React.SetStateAction<UserCreateSteps>>;
  userForm: UseFormReturn<UserCreateForm, any, undefined>;
}

export const CreateUsername = ({ userForm, setUserCreateState }: Props) => {
  const [nfts, setNfts] = useState([]);
  const [loadingNfts, setLoadingNfts] = useState(false);
  const { publicKey } = useCubikWallet();
  useEffect(() => {
    const search = async () => {
      if (userForm.watch('username').length < 3) {
        return;
      }
      const res = await searchUsername(userForm.watch('username'));
      userForm.clearErrors('username');
      if (userForm.watch('username').length > 32) {
        userForm.setError('username', {
          message: 'Username must be less than 32 characters',
        });
      }

      if (res.usernameAvailable === false) {
        userForm.setError('username', {
          message: 'Username is not available',
        });
      }
    };
    const getUserNfts = async () => {
      if (nfts.length > 0) return;
      setLoadingNfts(true);
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_BACKEND
          }/user/nft?address=${publicKey?.toBase58()}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const nfts = await response.json();
        setNfts(nfts.result);
        setLoadingNfts(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    search();
    getUserNfts();
  }, [userForm.watch('username')]);

  return (
    <>
      <form
        className="flex flex-col gap-8"
        style={{
          padding: '32px',
        }}
        onSubmit={userForm.handleSubmit(() => {
          if (userForm.formState.errors.username) {
            return toast.error(userForm.formState.errors.username.message);
          }
          setUserCreateState('verify-email');
        })}
      >
        <div className="flex gap-3 flex-col">
          <Text className="h4" color={'primary'}>
            Welcome to Cubik
          </Text>
          <Text className="b3-light text-[var(--color-fg-primary-subdued)]">
            Complete your profile. You can always edit this info later in the
            settings of your app
          </Text>
        </div>
        <div className="pointer-events-auto flex justify-start place-items-end gap-4 w-full">
          <div className="h-full flex justify-center items-center">
            <Avatar
              variant={'circle'}
              size={'xl'}
              src={userForm.watch('avatar')}
              alt={userForm.watch('username')}
              iconName="cross"
              iconClick={() =>
                userForm.setValue('avatar', generateUserBackupImage())
              }
            />
          </div>
          <div className="w-full">
            <InputContainer>
              <InputLabel id="username">Choose a name</InputLabel>
              <InputFieldContainer
                isError={userForm.formState.errors.username ? true : false}
                variant="sm"
              >
                <InputField
                  placeholder="@toly"
                  onChange={(e) => {
                    userForm.setValue('username', e.currentTarget.value);
                  }}
                />
              </InputFieldContainer>
              {userForm.formState.errors.username && (
                <HelperText variant={'error'}>
                  {userForm.formState.errors.username.message}
                </HelperText>
              )}
            </InputContainer>
          </div>
        </div>
        <div>
          <InputContainer>
            <InputLabel id="username">Choose a NFT</InputLabel>
            {loadingNfts ? (
              <Spinner />
            ) : (
              <Carousel
                opts={{
                  align: 'start',
                }}
                className="h-fit max-h-72 w-full basis-0"
              >
                <CarouselContent>
                  {nfts.map((nft: any, index) => (
                    <CarouselItem key={index} className="h-fit pl-4 basis-0">
                      <div className="h-fit w-full">
                        {/* // using this because we don't want to get helius cdn in nextjs links */}
                        <img
                          src={nft?.image?.cdn_uri}
                          alt=""
                          height={50}
                          width={50}
                          onClick={() =>
                            userForm.setValue('avatar', nft?.image?.cdn_uri)
                          }
                          style={{
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </InputContainer>
        </div>
        {/* <div className="flex gap-2 flex-col">
          <Text color={'primary'} className="l1-light">
            You are a
          </Text>
          <div className="flex justify-start pointer-events-auto items-center md:flex-row">
            <div className="flex justify-center items-center">
              <Checkbox
                checked={userForm.watch('userType') === 'Contributor'}
                defaultChecked
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'Contributor');
                }}
              />
              <Text color={'primary'} className="l2-light">
                Contributor
              </Text>
            </div>
            <div className="flex justify-center items-center">
              <Checkbox
                checked={userForm.watch('userType') === 'ProjectOwner'}
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'ProjectOwner');
                }}
              />
              <Text color={'primary'} className="l2-light">
                Project Creator
              </Text>
            </div>
            <div className="flex justify-center items-center">
              <Checkbox
                onCheckedChange={(e) => {
                  if (e === true) userForm.setValue('userType', 'Sponsor');
                }}
                checked={userForm.watch('userType') === 'Sponsor'}
              />
              <Text color={'primary'} className="l2-light">
                Event Sponsor
              </Text>
            </div>
          </div>
        </div> */}
        <div className="flex gap-3 flex-col">
          <Button
            variant={'primary'}
            size={'md'}
            className="w-full"
            rightIconName="arrowRight"
            type="submit"
          >
            Lets go
          </Button>
          <Button
            onClick={() => setUserCreateState('verify-email')}
            variant={'tertiary'}
            size={'md'}
            className="w-full"
          >
            Skip for now
          </Button>
        </div>
      </form>
    </>
  );
};
