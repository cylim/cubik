'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { EventFormSwitch } from '@/app/create/event/eventFormSwitch';
import FundingRoundForm from '@/app/create/event/FundingRoundForm';
import { EventFormData } from '@/types/events';
import { useForm } from 'react-hook-form';

import { Text } from '@cubik/ui';

export type eventType = 'funding' | 'RPGF' | 'hackathon';

const EventFormPage = () => {
  const searchParams = useSearchParams();
  const [eventFormType, setEventFormType] = useState<eventType>('funding');

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
        <EventFormSwitch change={setEventFormType} isActive={eventFormType} />
      </div>
      <FundingRoundForm
        createEventForm={createEventForm}
        submitEventData={submitEventData}
      />
    </div>
  );
};

export default EventFormPage;
