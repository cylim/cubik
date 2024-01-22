'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

import { SelectOptionsType } from '@cubik/common-types';
import { getValidToken } from '@cubik/common/tokens/getValidTokenList';
import {
  Button,
  FlipNumber,
  HelperText,
  Icon,
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

// Import necessary UI components

const SponsorshipDetails = ({
  TokenOptions,
}: {
  TokenOptions: SelectOptionsType[];
}) => {
  const isSmallerDevice = useMediaQuery('(max-width: 768px)');
  const [randomNumber, setRandomNumber] = useState(10);

  const {
    control,
    setValue,
    getValues,
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'upfrontPay',
  });

  return (
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
            <InputField placeholder="10,000" {...register('totalCommitted')} />
          </InputFieldContainer>
          <HelperText variant={'error'} show={!!errors.totalCommitted}>
            {errors.totalCommitted && errors.totalCommitted.message}
          </HelperText>
        </InputContainer>

        {/* select upfront payment */}
        <InputContainer>
          <InputLabel infoText="Choose to pay your entire pledge amount now, or make an initial contribution to start. You can select to pay in different tokens of your choice for the payment">
            Upfront Contribution Amount
          </InputLabel>
          <ul className="flex w-full flex-col">
            <AnimatePresence initial={false}>
              {fields.map((item, index) => {
                console.log('rendered file item and string', item, index);
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
                        <Controller
                          name={`upfrontPay.${index}.amount`}
                          render={({ field }) => (
                            <InputField
                              placeholder="10,000"
                              // {...register(`upfrontPay.${index}.amount`)}
                              onChange={(e) => {
                                setValue(
                                  `upfrontPay.${index}.amount`,
                                  Number(e.currentTarget.value),
                                );
                              }}
                            />
                          )}
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
                          name={`upfrontPay.${index}.token`}
                          control={control}
                          render={({ field }) => (
                            <Select
                              placeholder="Token"
                              size="md"
                              onChange={(e) => {
                                if (!e) return;
                                console.log('new item selected - ', e);
                                setValue(`upfrontPay.${index}.token`, e as any);
                              }}
                              isMulti={false}
                              isSearchable={false}
                              defaultValue={TokenOptions[0]}
                              options={TokenOptions}
                              //  value={watch(`upfrontPay.${index}.token`) as any}
                            />
                          )}
                        />
                      </div>
                      <Button
                        type="button"
                        variant={'unStyled'}
                        onClick={() => {
                          // there is some issue it should remove both token and amount
                          // remove the token with the index selected and the amount as well
                          console.log('1- Fields:', fields);
                          console.log('2- Removed index: ', index);
                          remove(index);
                          console.log('3- Fields:', fields);
                          //console.log('4- Values: ', getValues('upfrontPay'));
                          console.log('-----------------------------------');
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
                          errors.upfrontPay && errors.upfrontPay[index]?.amount
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
            onClick={() => {
              console.log('appending new value -  fields: ', fields);
              append({ token: TokenOptions[0].value, amount: 0 });
            }}
            className="w-full rounded-lg border border-dashed border-[var(--color-border-secondary)] p-3"
          >
            <Text className="l1 md:l2" color={'tertiary'}>
              Add Another Asset
            </Text>
          </button>
        </InputContainer>
        <div className="mt-[16px] flex w-full  justify-between gap-3">
          <InputLabel id="public">Display our sponsorship publicly</InputLabel>
          <Switch
            onChange={(e) => {
              setValue('isSponsorshipPublic', e);
            }}
            size="md"
            checked={watch('isSponsorshipPublic')}
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorshipDetails;
