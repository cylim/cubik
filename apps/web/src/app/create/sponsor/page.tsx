'use client';

import React, { useState } from 'react';
import FormContainer from '@/app/components/FormContainer';
import IndividualSponsorForm from '@/app/create/sponsor/IndividualSponsorForm';
import OrganizationSponsorForm from '@/app/create/sponsor/OrganizationSponsorForm';
import {
  SponsorFormSwitch,
  sponsorType,
} from '@/app/create/sponsor/sponsorFormSwitch';
import {
  IndividualSponsorFormData,
  OrganizationSponsorFormData,
} from '@/types/sponsor';
import { useForm } from 'react-hook-form';

const SponsorFormPage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [sponsorFormType, setSponsorFormType] =
    useState<sponsorType>('organization');

  const organizationSponsorForm = useForm<OrganizationSponsorFormData>({
    defaultValues: {
      name: '',
      totalCommitted: 0,
      upfrontPay: [{ token: '', amount: 0 }],
      paidToken: '',
      selfCustody: false,
      logo: '',
      isSponsorshipPublic: true,
    },
  });

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
      title="Become a Sponsor"
      subtitle="Become a sponsor of the ongoing grant round"
    >
      <SponsorFormSwitch
        change={setSponsorFormType}
        isActive={sponsorFormType}
      />

      {sponsorFormType === 'organization' && (
        <OrganizationSponsorForm
          organizationSponsorForm={organizationSponsorForm}
          submitEventData={submitOrgSponsorData}
          progress={progress}
          setProgress={setProgress}
        />
      )}
      {sponsorFormType === 'individual' && (
        <IndividualSponsorForm
          individualSponsorForm={individualSponsorForm}
          submitEventData={submitIndividualData}
        />
      )}
    </FormContainer>
  );
};

export default SponsorFormPage;
