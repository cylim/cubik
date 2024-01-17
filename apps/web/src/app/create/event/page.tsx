'use client';

import React, { useState } from 'react';
import FormContainer from '@/app/components/FormContainer';
import { EventFormSwitch } from '@/app/create/event/eventFormSwitch';
import FundingRoundForm from '@/app/create/event/FundingRoundForm';
import { EventFormData } from '@/types/events';
import { useForm } from 'react-hook-form';

export type eventType = 'funding' | 'RPGF' | 'hackathon';

const EventFormPage = () => {
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
    <FormContainer
      title=" Create Event"
      subtitle="Create a New Community Event and help projects"
    >
      <div>
        <EventFormSwitch change={setEventFormType} isActive={eventFormType} />
      </div>
      <FundingRoundForm
        createEventForm={createEventForm}
        submitEventData={submitEventData}
      />
    </FormContainer>
  );
};

export default EventFormPage;
