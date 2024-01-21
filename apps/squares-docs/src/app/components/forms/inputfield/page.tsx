'use client';

import React, { useState } from 'react';
import CodeComponent from '@/app/home-page-components/code-component';
import PageHOC from '@/app/home-page-components/components/pageHOC';
import DocsTabsHOC from '@/app/home-page-components/components/Tabs';

import {
  HelperText,
  Icon,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@cubik/ui';

const InputPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PageHOC
        pages={[
          { name: 'Component', href: '/components', current: false },
          {
            name: 'Input Filed',
            href: '/component/inputField',
            current: true,
          },
        ]}
        heading={'Input Field'}
        description="Input Field is used to initiate actions on a page or form."
      >
        <DocsTabsHOC>
          <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col gap-4 py-8">
              <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-bg-primary-base)] p-10">
                <div className="align-center flex flex-row flex-wrap justify-start gap-12">
                  <div className="mx-auto w-64">Input</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-8">
              <Text className="h4" color="primary">
                Examples
              </Text>
              <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-bg-primary-base)] p-10">
                <div className="flex flex-row flex-wrap items-center justify-between gap-12">
                  <div className="mx-auto w-72">
                    <InputContainer>
                      <InputLabel infoText="gm">Email Address</InputLabel>
                      <InputFieldContainer size="sm">
                        <InputField
                          name="Name"
                          placeholder="toly@solana.com"
                          onChange={() => {}}
                          defaultValue={''}
                        />
                      </InputFieldContainer>
                      <HelperText show={true}>We all gonna make it</HelperText>
                    </InputContainer>
                  </div>
                  <div className="mx-auto w-72">
                    <InputContainer>
                      <InputLabel isRequired>Username</InputLabel>
                      <InputFieldContainer isError={true} size="sm">
                        <InputField
                          name="Name"
                          placeholder="toly@solana.com"
                          onChange={() => {}}
                          defaultValue={'toly'}
                        />
                      </InputFieldContainer>
                      <HelperText variant={'error'} show={true}>
                        This username is already taken
                      </HelperText>
                    </InputContainer>
                  </div>
                  <div className="mx-auto w-72">
                    <InputFieldContainer size="md">
                      <InputLeftElement>$</InputLeftElement>
                      <InputField
                        name="Name"
                        placeholder="Enter Amount"
                        onChange={() => {}}
                      />
                    </InputFieldContainer>
                  </div>
                  <div className="mx-auto w-72">
                    <InputFieldContainer size="md">
                      <InputLeftElement>
                        <Icon
                          name="twitter"
                          width={18}
                          height={18}
                          strokeWidth={2.2}
                          color={'var(--color-fg-primary-depth)'}
                        />
                        <Text className="l1" color="primary">
                          https://x.com/
                        </Text>
                      </InputLeftElement>
                      <InputField
                        name="Name"
                        placeholder="@username"
                        className="ps-0"
                        onChange={() => {}}
                      />
                    </InputFieldContainer>
                  </div>
                  <div className="mx-auto w-72">
                    <InputFieldContainer size="md">
                      <InputField
                        name="Name"
                        placeholder="Enter Amount"
                        onChange={() => {}}
                      />
                      <InputRightElement>
                        <Icon
                          name="search"
                          width={18}
                          height={18}
                          strokeWidth={2.2}
                          color={'var(--color-fg-primary-depth)'}
                        />
                      </InputRightElement>
                    </InputFieldContainer>
                  </div>
                  <div className="mx-auto w-72">
                    <InputContainer>
                      <InputLabel>Password</InputLabel>
                      <InputFieldContainer size="sm">
                        <InputField
                          name="Password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Choose a password"
                          onChange={() => {}}
                        />
                        <InputRightElement className="pe-[1px]">
                          <div
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                            className="cursor-pointer rounded-md p-2 transition-all hover:bg-[var(--color-surface-primary-transparent)] active:scale-75"
                          >
                            {showPassword ? (
                              <Icon
                                name="eyeClose"
                                width={16}
                                height={16}
                                strokeWidth={2.2}
                                // add framer animation properties for svg animation
                                initial={{
                                  pathLength: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  pathLength: 1,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.4,
                                  type: 'spring',
                                  stiffness: 300,
                                  damping: 30,
                                }}
                                color={'var(--color-fg-primary-depth)'}
                              />
                            ) : (
                              <Icon
                                name="eyeOpen2"
                                width={16}
                                height={16}
                                strokeWidth={2.2}
                                initial={{
                                  pathLength: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  pathLength: 1,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.4,
                                  type: 'spring',
                                  stiffness: 300,
                                  damping: 30,
                                }}
                                color={'var(--color-fg-primary-depth)'}
                              />
                            )}
                          </div>
                        </InputRightElement>
                      </InputFieldContainer>
                    </InputContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-8">
              <Text className="h4" color="primary">
                Sizes
              </Text>
              <div className="rounded-md border border-[var(--color-border-primary-base)] bg-[var(--color-primary-surface-subdued)] p-10">
                <div className="align-center flex flex-row flex-wrap justify-start gap-12"></div>
              </div>
            </div>
          </div>
          <CodeComponent codeString='import { Button } from "@cubik/ui"' />
          <></>
        </DocsTabsHOC>
      </PageHOC>
    </>
  );
};

export default InputPage;
