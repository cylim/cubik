import React, { useEffect, useState } from 'react';
import { OrganizationSponsorFormData } from '@/types/sponsor';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { FormProvider, ResolverOptions, useForm } from 'react-hook-form';
import { z } from 'zod';

import { SelectOptionsType } from '@cubik/common-types';
import { getValidToken } from '@cubik/common/tokens/getValidTokenList';

import GrantManagersInformation from './grantManagersInformation';
import OrganizationDetails from './organizationDetails';
import { OrganizationSponsorFormSchemaResolver } from './schemaResolver';
import SponsorshipDetails from './sponsorshipDetails';
import SubmitButton from './submitButton';

const OrganizationSponsorForm = () => {
  const tokenList = getValidToken();
  const TokenOptions: SelectOptionsType[] = tokenList.map((token) => ({
    label: token.symbol,
    value: token.address,
    icon: token.logoURI,
  }));

  const methods = useForm<OrganizationSponsorFormData>({
    resolver: OrganizationSponsorFormSchemaResolver,
    defaultValues: {
      upfrontPay: [{ token: TokenOptions[0].value, amount: 0 }],
      wantsSelfCustody: false,
      isSponsorshipPublic: false,
    },
  });

  const OnSubmit = (data: OrganizationSponsorFormData) => {
    console.log('form is submitted - ', data);
  };

  return (
    <FormProvider {...methods}>
      <motion.form
        layoutId="sponsorship form"
        className=" flex w-full flex-col justify-start"
        onSubmit={methods.handleSubmit(OnSubmit)}
      >
        <SponsorshipDetails TokenOptions={TokenOptions} />
        <OrganizationDetails />
        <GrantManagersInformation />
        <SubmitButton />

        <DevTool control={methods.control} />
      </motion.form>
    </FormProvider>
  );
};

export { OrganizationSponsorForm };
