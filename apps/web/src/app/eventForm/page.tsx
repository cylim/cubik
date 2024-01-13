'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { EventFormSwitch } from '@/app/eventForm/eventFormSwitch';
import FundingRoundForm from '@/app/eventForm/FundingRoundForm';
import { EventFormData } from '@/types/events';
import { useForm } from 'react-hook-form';

import { Text } from '@cubik/ui';

const EventFormPage = () => {
  const searchParams = useSearchParams();

  const createEventForm = useForm<EventFormData>({
    defaultValues: {
      name: '',
      matchedPool: 0,
      description: '',
      approvedProjectsOnly: false,
      token: 'string',
    },
  });

  const submitEventData = (data: EventFormData) => {
    console.log(data);
  };

  return (
    <div className="mx-auto my-20 flex max-w-2xl flex-col items-center  justify-center gap-[56px]">
      <div className="flex flex-col items-center gap-[14px]">
        <Text className="h3" color={'primary'}>
          Create Event
        </Text>
        <Text className="b3" color={'secondary'}>
          Create a New Community Event and help projects
        </Text>
      </div>
      <div>
        <EventFormSwitch event={searchParams?.event} />
      </div>
      <FundingRoundForm
        createEventForm={createEventForm}
        submitEventData={submitEventData}
      />
    </div>
  );
};

export default EventFormPage;
