import React, { useEffect, useState } from 'react';
import { OrganizationSponsorFormData } from '@/types/sponsor';
import { useUploadThing } from '@/utils/uploadthing';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Controller,
  ResolverOptions,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { formatAddress } from '@cubik/common';
import { SelectOptionsType } from '@cubik/common-types';
import { getSNSFromAddress } from '@cubik/common/solana/sns';
import { getValidToken } from '@cubik/common/tokens/getValidTokenList';
import { ApiResponseType } from '@cubik/database/api';
import {
  AsyncSelect,
  Button,
  FlipNumber,
  HelperText,
  Icon,
  ImageUploader,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  InputRightElement,
  Select,
  Switch,
  Text,
} from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

interface SearchResults {
  id: string;
  username: string;
  profilePicture: string;
  mainWallet: string;
}

interface IOrgSponsorFormProps {
  progress: number;
  setProgress: (value: number) => void;
}

const OrganizationSponsorForm = ({
  progress,
  setProgress,
}: IOrgSponsorFormProps) => {
  const isSmallerDevice = useMediaQuery('(max-width: 768px)');
  const [randomNumber, setRandomNumber] = useState(10);
  const [searchResult, setSearchResult] = useState<SearchResults[]>([]);
  const [search, setSearch] = useState<string>('');
  const tokenList = getValidToken();
  const TokenOptions: SelectOptionsType[] = tokenList.map((token) => ({
    label: token.symbol,
    value: token.address,
    icon: token.logoURI,
  }));

  const baseSchema = z.object({
    totalCommitted: z
      .number({
        invalid_type_error: 'Please enter a valid numeric value for the amount',
        required_error:
          'This field is mandatory. Enter your amount in USD to proceed.',
        description: 'Total Committed Amount',
      })
      .min(
        1000,
        'The amount must be at least $1,000 to meet the minimum requirement',
      ),
    upfrontPay: z.array(
      z.object({
        token: z
          .string({
            invalid_type_error: 'Please select a token from the list.',
            required_error:
              'A token selection is required to proceed with the upfront contribution',
            description: 'Token',
          })
          .min(1, 'Token is required'),
        amount: z
          .number({
            invalid_type_error:
              'Enter a numeric value for the upfront contribution amount for the selected token',
            required_error:
              'The upfront contribution amount is mandatory; please enter the value to continue',
            description: 'Amount',
          })
          .min(
            1,
            'An amount is required for the upfront contribution. Please enter a value.',
          ),
      }),
    ),
    name: z.string().optional(),
    logo: z.string().url().optional(),
    isSponsorshipPublic: z.boolean(),
    wantsSelfCustody: z.boolean().optional(),
    treasuryMangers: z
      .array(
        z.object({
          username: z.string(),
          id: z.string(),
          mainWallet: z.string(),
        }),
      )
      .optional(),
  });

  // Extended schema where `name` and `logo` are required
  const isPublicExtendedSchema = baseSchema.extend({
    name: z
      .string({
        invalid_type_error: 'Enter a valid Name',
        required_error: 'You can not skip this field',
        description: 'Name',
      })
      .min(1, 'Name is required when sponsorship is public')
      .max(50, 'Name can not be more than 50 characters'),
    logo: z
      .string()
      .url('Logo URL is invalid')
      .min(1, 'Logo is required when sponsorship is public'),
    wantsSelfCustody: z.boolean().optional(),
  });
  const isManagerExtendedSchema = isPublicExtendedSchema.extend({
    name: z
      .string({
        invalid_type_error: 'Enter a valid Name',
        required_error: 'You can not skip this field',
        description: 'Name',
      })
      .min(1, 'Name is required when sponsorship is public')
      .max(50, 'Name can not be more than 50 characters'),
    logo: z
      .string()
      .url('Logo URL is invalid')
      .min(1, 'Logo is required when sponsorship is public'),
  });

  // Custom resolver function to handle the schema switching logic
  const customResolver = async (
    values: { isSponsorshipPublic: any; wantsSelfCustody: any },
    context: any,
    options: ResolverOptions<any>,
  ) => {
    // if user has selected both isSponsorshipPublic and wantsSelfCustody then use isManagerExtendedSchema
    const schemaToUse = values.isSponsorshipPublic
      ? values.wantsSelfCustody
        ? isManagerExtendedSchema
        : isPublicExtendedSchema
      : baseSchema;
    return zodResolver(schemaToUse)(values, context, options);
  };

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    watch,
    register,
    formState: { errors },
  } = useForm<OrganizationSponsorFormData>({
    resolver: customResolver,
    defaultValues: {
      upfrontPay: [{ token: TokenOptions[0].value, amount: 0 }],
      isSponsorshipPublic: false,
      wantsSelfCustody: false,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 1000));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('1 - use effect called');
    const handleSearch = async () => {
      if (!search || search.length < 3) return;
      const res = (await axios.get(
        `/api/project/searchTeammate?username=${search}`,
      )) as AxiosResponse<ApiResponseType, any>;
      const data = res.data.result as SearchResults[];
      console.log('2 - data fetched - ', data);
      setSearchResult(data);
    };
    handleSearch();
  }, [search]);

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

  const OnSubmit = (data: OrganizationSponsorFormData) => {
    console.log('data - ', data);
    console.log(data);
  };

  return (
    <motion.form
      layoutId="sponsorship form"
      className=" flex w-full flex-col justify-start"
      onSubmit={handleSubmit(OnSubmit)}
    >
      <div className="mb-[24px] flex w-full flex-col gap-4 md:mb-[40px] md:gap-8">
        <Text className="h4 md:h5 w-full" color={'primary'}>
          Sponsorship Details
        </Text>
        <div className="flex w-full flex-col gap-8">
          <InputContainer>
            <InputLabel
              id="totalCommitted"
              infoText="This is the amount you want to add to the funding pool, payable now or later. If publicized, the amount will be shown to everyone. A minimum initial payment of 20% is required initially"
            >
              Pledged Partnership Amount
            </InputLabel>
            <InputFieldContainer
              size="sm"
              isError={errors.totalCommitted ? true : false}
            >
              <InputLeftElement>$</InputLeftElement>
              <InputField
                name="name"
                placeholder="10,000"
                onChange={(e) => {
                  setValue('totalCommitted', Number(e.currentTarget.value));
                }}
              />
            </InputFieldContainer>
            <HelperText variant={'error'} show={!!errors.totalCommitted}>
              {errors.totalCommitted && errors.totalCommitted.message}
            </HelperText>
          </InputContainer>
          <InputContainer>
            <InputLabel infoText="Choose to pay your entire pledge amount now, or make an initial contribution to start. You can select to pay in different tokens of your choice for the payment">
              Upfront Contribution Amount
            </InputLabel>
            <ul className="flex w-full flex-col">
              <AnimatePresence initial={false}>
                {fields.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.15 },
                        height: { duration: 0.3 },
                        type: 'spring',
                        bounce: 0.15,
                        duration: 0.3,
                      }}
                    >
                      <div className="flex gap-2 py-1">
                        <InputFieldContainer
                          size="md"
                          isError={
                            !!(
                              errors.upfrontPay &&
                              errors.upfrontPay[index]?.amount
                            )
                          }
                        >
                          <InputField
                            placeholder="10,000"
                            {...register(`upfrontPay.${index}.amount`)}
                            // onChange={(e) => {
                            //   setValue(
                            //     `upfrontPay.${index}.amount`,
                            //     Number(e.currentTarget.value),
                            //   );
                            // }}
                          />
                          <InputRightElement>
                            <motion.div layout transition={{ duration: 0.3 }}>
                              <Text
                                className="b2-heavy md:l2-heavy flex flex-row items-center gap-0"
                                color="tertiary"
                              >
                                <span className="pb-[1px]">$</span>
                                <FlipNumber
                                  number={randomNumber}
                                  height={isSmallerDevice ? 14 : 14}
                                  width={isSmallerDevice ? 9 : 9}
                                />
                              </Text>
                            </motion.div>
                          </InputRightElement>
                        </InputFieldContainer>
                        <div className="w-full max-w-32">
                          <Controller
                            render={() => (
                              <Select
                                placeholder="Token"
                                size="md"
                                onChange={(e) => {
                                  if (!e) return;
                                  setValue(
                                    `upfrontPay.${index}.token`,
                                    e as any,
                                  );
                                }}
                                isMulti={false}
                                isSearchable={false}
                                defaultValue={TokenOptions[0]}
                                options={TokenOptions}
                              />
                            )}
                            name={`upfrontPay.${index}.token`}
                            control={control}
                          />
                        </div>
                        <Button
                          variant={'unStyled'}
                          onClick={(e) => {
                            e.preventDefault();
                            remove(index);
                          }}
                          className="w-10 bg-[var(--color-surface-negative-transparent)]"
                        >
                          <Icon
                            name="deleteDustbin2Filled"
                            height={24}
                            width={24}
                            color="var(--color-fg-negative-base)"
                          />
                        </Button>
                      </div>

                      <HelperText
                        className="py-2"
                        show={
                          !!(
                            errors.upfrontPay &&
                            errors.upfrontPay[index]?.amount
                          )
                        }
                        variant={'error'}
                      >
                        {errors.upfrontPay &&
                          errors.upfrontPay[index]?.amount &&
                          errors.upfrontPay[index].amount?.message}
                      </HelperText>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
            {/* this handles edge case when there is no token selected by user */}
            {fields.length === 0 && (
              <Text color="negative" className="l2">
                A minimum initial payment of 20% is required initially
              </Text>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                append({ token: '', amount: 0 });
              }}
              className="w-full rounded-lg border border-dashed border-[var(--color-border-secondary)] p-3"
            >
              <Text className="l1 md:l2" color={'tertiary'}>
                Add Another Asset
              </Text>
            </button>
          </InputContainer>
          <div className="mt-[16px] flex w-full  justify-between gap-3">
            <InputLabel id="public">
              Display our sponsorship publicly
            </InputLabel>
            <Switch
              onChange={(e) => {
                console.log(e);
                setValue('isSponsorshipPublic', e);
              }}
              size="md"
              checked={watch('isSponsorshipPublic')}
            />
          </div>
        </div>
      </div>
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
      <AnimatePresence initial={false}>
        {!!watch('wantsSelfCustody') && !!watch('isSponsorshipPublic') && (
          <motion.div
            layout
            key="grant managers information"
            //className="border border-red-500"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.15 },
              height: { duration: 0.3 },
              type: 'spring',
              bounce: 0.15,
              duration: 0.15,
            }}
          >
            <div className="flex w-full flex-col gap-8 pt-[24px] md:pt-[40px]">
              <InputContainer>
                <InputLabel
                  id="name"
                  infoText="This is the official name of your organization that will be used for sponsorship recognition."
                >
                  Name
                </InputLabel>
                <Controller
                  name="treasuryMangers"
                  control={control}
                  render={({ field }) => (
                    <AsyncSelect
                      loadOptions={async (inputValue) => {
                        if (!inputValue) return;
                        const res = (await axios.get(
                          `/api/project/searchTeammate?username=${inputValue}`,
                        )) as AxiosResponse<ApiResponseType, any>;
                        const data = res.data.result as SearchResults[];
                        return data.map((item) => {
                          return {
                            label: item.username,
                            value: item.id,
                            icon: item.profilePicture,
                          };
                        });
                      }}
                      size="md"
                      placeholder="Search Username"
                      onChange={(e) => {
                        if (!e) return;
                        setValue('treasuryMangers', e as any);
                      }}
                      onInputChange={(e) => {
                        console.log('on search change - ', e);
                        setSearch(e);
                      }}
                      isMulti={false}
                      isSearchable={true}
                      options={[]}
                    />
                  )}
                />
                <HelperText show={!!errors.name} variant={'error'}>
                  {errors.name && errors.name.message}
                </HelperText>
              </InputContainer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-6 w-full pt-6 md:mt-12 md:pt-12">
        <Button size={'xl'} className="w-full" type="submit">
          Proceed to Payment
        </Button>
      </div>
      {/* use form hook devtool */}
      <DevTool control={control} />
    </motion.form>
  );
};

export default OrganizationSponsorForm;
