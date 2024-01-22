'use client';

import React, { useState } from 'react';
import FormContainer from '@/app/components/FormContainer';
import IndividualSponsorForm from '@/app/create/sponsor/components/IndividualSponsorForm';
import OrganizationSponsorForm from '@/app/create/sponsor/components/organizationSponsorForm/dfdf';
import {
  SponsorFormSwitch,
  sponsorType,
} from '@/app/create/sponsor/components/sponsorFormSwitch';
//import { OrganizationSponsorForm } from '@/components/create/sponsor/organization';
import {
  IndividualSponsorFormData,
  OrganizationSponsorFormData,
} from '@/types/sponsor';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SponsorFormPage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [sponsorFormType, setSponsorFormType] =
    useState<sponsorType>('organization');

  const individualSponsorForm = useForm<IndividualSponsorFormData>({
    defaultValues: {
      totalCommitted: 0,
      upfrontPay: [{ token: '', amount: 0 }],
      paidToken: '',
      selfCustody: false,
      isSponsorshipPublic: true,
    },
  });

  const submitOrgSponsorData = (data: OrganizationSponsorFormData) => {
    console.log(data);
  };

  const submitIndividualData = (data: IndividualSponsorFormData) => {
    console.log(data);
  };

  return (
    <FormContainer
      title="Join as Grant Round Partner"
      subtitle="Collaborate in our mission to fund public goods by joining this grant round as a partner"
    >
      <SponsorFormSwitch
        change={setSponsorFormType}
        isActive={sponsorFormType}
      />

      {/* <AnimatePresence initial={false}> */}
      {sponsorFormType === 'organization' ? (
        // <motion.div
        //   key={'organization'}
        //   className=" w-full"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        //   transition={{
        //     duration: 0.1,
        //   }}
        // >
        <OrganizationSponsorForm
          progress={progress}
          setProgress={setProgress}
        />
      ) : (
        //<OrganizationSponsorForm />
        // <OrganizationSponsorForm />
        // <OrganizationSponsorForm />
        // </motion.div>
        // <motion.div
        //   key="individual"
        //   className=" w-full"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        //   transition={{ duration: 0.1 }}
        // >
        <IndividualSponsorForm
          individualSponsorForm={individualSponsorForm}
          submitEventData={submitIndividualData}
        />
        // </motion.div>
      )}
      {/* </AnimatePresence> */}
    </FormContainer>
  );
};

export default SponsorFormPage;
