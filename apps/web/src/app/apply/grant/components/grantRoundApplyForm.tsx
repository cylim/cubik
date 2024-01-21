'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResolverOptions, useForm } from 'react-hook-form';
import z from 'zod';

interface SearchResults {
  id: string;
}
const GrantRoundApplyForm = ({
  projectId,
  roundId,
}: {
  projectId?: string;
  roundId?: string;
}) => {
  const [projectsList, setProjectsList] = useState([]);
  const [grantRoundsList, setGrantRoundsList] = useState([]);
  // select grant round
  // select project
  const baseSchema = z.object({
    grantsRound: z
      .array(z.object({ id: z.string(), name: z.string() }))
      .nonempty({ message: 'Please select a grant round' }),
    project: z
      .array(z.object({ id: z.string(), name: z.string() }))
      .nonempty({ message: 'Please select a project' }),
  });

  // create a schema using zodResolver for use form hook
  const customResolver = async (
    values: any,
    context: any,
    options: ResolverOptions<any>,
  ) => {
    return zodResolver(baseSchema)(values, context, options);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: customResolver,
  });

  const OnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className="border border-red-500 w-full"
      onSubmit={handleSubmit(OnSubmit)}
    >
      Hello world
    </form>
  );
};

export default GrantRoundApplyForm;
