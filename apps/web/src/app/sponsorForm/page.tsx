'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import IndividualSponsorForm from '@/app/sponsorForm/IndividualSponsorForm';
import OrganizationSponsorForm from '@/app/sponsorForm/OrganizationSponsorForm';
import {
  SponsorFormSwitch,
  sponsorType,
} from '@/app/sponsorForm/sponsorFormSwitch';
import { EventFormData } from '@/types/events';
import {
  IndividualSponsorFormData,
  OrganizationSponsorFormData,
} from '@/types/sponsor';
import { useForm } from 'react-hook-form';

import { Text } from '@cubik/ui';

const SposorFormPage = () => {
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState<number>(0);
  const [sponsorFormType, setSponsorFormType] =
    useState<sponsorType>('organization');

  const organizationSponsorForm = useForm<OrganizationSponsorFormData>({
    defaultValues: {
      name: '',
      totalCommitted: 0,
      upfrontPay: 0,
      paidToken: '',
      selfCustody: false,
      logo: '',
      isSponsorshipPublic: true,
    },
  });

  const individualSponsorForm = useForm<IndividualSponsorFormData>({
    defaultValues: {
      totalCommitted: 0,
      upfrontPay: 0,
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
    <div className="mx-auto my-20 flex max-w-xl flex-col items-center  justify-center gap-[56px]">
      <div className="flex flex-col items-center gap-[14px]">
        <Text className="h3" color={'primary'}>
          Become a Sponsor
        </Text>
        <Text className="b3" color={'secondary'}>
          Become a sponsor of the ongoing grant round
        </Text>
      </div>
      <div>
        <SponsorFormSwitch
          change={setSponsorFormType}
          isActive={sponsorFormType}
        />
      </div>
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
    </div>
  );
};

export default SposorFormPage;
