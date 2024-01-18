import React from 'react';
import { IndividualSponsorFormData } from '@/types/sponsor';
import { Controller, useFieldArray, UseFormReturn } from 'react-hook-form';

import { getValidToken } from '@cubik/common/tokens/getValidTokenList';
import {
  Button,
  Checkbox,
  HelperText,
  Icon,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLeftElement,
  InputRightElement,
  SearchSelect,
  Text,
} from '@cubik/ui';

interface IOrgSponsorFormProps {
  individualSponsorForm: UseFormReturn<
    IndividualSponsorFormData,
    any,
    undefined
  >;
  submitEventData: (data: IndividualSponsorFormData) => void;
}

const IndividualSponsorForm = ({
  individualSponsorForm,
  submitEventData,
}: IOrgSponsorFormProps) => {
  const { control } = individualSponsorForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'upfrontPay',
  });
  const tokenList = getValidToken();
  return (
    <form
      className="flex w-full flex-col gap-[40px]"
      onSubmit={individualSponsorForm.handleSubmit(submitEventData)}
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
                individualSponsorForm.formState.errors.totalCommitted
                  ? true
                  : false
              }
            >
              <InputLeftElement withBorder={false}>$</InputLeftElement>
              <InputField
                name="totalCommitted"
                placeholder="100,000"
                onChange={(e) => {
                  individualSponsorForm.setValue(
                    'totalCommitted',
                    Number(e.currentTarget.value),
                  );
                }}
                defaultValue={
                  individualSponsorForm.formState.defaultValues?.totalCommitted
                }
              />
            </InputFieldContainer>
            {individualSponsorForm.formState.errors.totalCommitted && (
              <HelperText variant={'error'}>
                {individualSponsorForm.formState.errors.totalCommitted.message}
              </HelperText>
            )}
          </div>

          <div className="mt-[16px] flex w-full flex-col gap-3">
            <InputLabel id="upfrontPay" isRequired>
              Amount Paying Upfront
            </InputLabel>
            <ul className="flex flex-col gap-2">
              {fields.map((item, index) => {
                return (
                  <li key={item.id}>
                    <div className="flex gap-3">
                      <InputFieldContainer variant="md">
                        <InputField
                          name="amount"
                          placeholder="100,000"
                          onChange={(e) => {
                            individualSponsorForm.setValue(
                              `upfrontPay.${index}.amount`,
                              Number(e.currentTarget.value),
                            );
                          }}
                        />
                        <InputRightElement>
                          <Controller
                            render={({ field }) => (
                              <SearchSelect
                                withoutBorder={true}
                                placeholder="token"
                                onChange={(e) => {
                                  if (!e) return;
                                  individualSponsorForm.setValue(
                                    `upfrontPay.${index}.token`,
                                    e as any,
                                  );
                                }}
                                value={
                                  individualSponsorForm.watch(
                                    `upfrontPay.${index}.token`,
                                  ) as any
                                }
                                options={
                                  tokenList.map((token) => ({
                                    label: token.symbol,
                                    value: token.address,
                                  })) as any
                                }
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

          <div className="flex gap-2">
            <Checkbox
              checked={individualSponsorForm.watch('selfCustody')}
              onCheckedChange={(e) => {
                if (e) {
                  individualSponsorForm.setValue('selfCustody', true);
                } else {
                  individualSponsorForm.setValue('selfCustody', false);
                }
              }}
            />
            <div className="gap-[6px]">
              <Text color={'primary'} className="l1">
                Self Custody Grants Funds
              </Text>
              <Text color={'secondary'} className="l2">
                You can self custody the grants match pool funds you sponsor in
                a multisig and get admin access.
              </Text>
            </div>
          </div>

          <div className="flex gap-2">
            <Checkbox
              checked={individualSponsorForm.watch('isSponsorshipPublic')}
              onCheckedChange={(e) => {
                if (e) {
                  individualSponsorForm.setValue('isSponsorshipPublic', true);
                } else {
                  individualSponsorForm.setValue('isSponsorshipPublic', false);
                }
              }}
            />
            <div className="gap-[6px]">
              <Text color={'primary'} className="l1">
                Make my individual Sponsorship Public
              </Text>
              <Text color={'secondary'} className="l2">
                Your name will be visible on the grants detail page, if you
                don&apos;t want to make this information public unselect this
                option.
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

export default IndividualSponsorForm;
