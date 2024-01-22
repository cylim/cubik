'use client';

import React, { useState } from 'react';
import { IProjectData } from '@/types/project';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, FormStepper } from '@cubik/ui';

import ProjectCreationDisplay from './projectCreationDisplay';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';
import { Step5 } from './step5';
import { Step6 } from './step6';
import { Step7 } from './step7';
import { Step8 } from './step8';
import { Success } from './success';

interface Props {
  id: string;
}

export interface Option {
  label?: string;
  value?: string;
  inputId: string;
}

export const CreateProject = ({ id }: Props) => {
  const [step, setStep] = useState<number>(1);
  const methods = useForm<IProjectData>({
    resolver: zodResolver(
      z.object({
        id: z.string(),
        name: z
          .string()
          .min(3, { message: "Project name can't be empty" })
          .max(36, {
            message: "Project name can't be more than 36 characters",
          }),
        discordLink: z.string(),
        githubLink: z.string(),
        email: z.string().email({ message: 'Invalid email address' }),
        shortDescription: z
          .string()
          .min(1, { message: "Project tagline can't be empty" }),
        logo: z.string().url({ message: 'Invalid logo url' }),
        longDescription: z.string(),
        slides: z.array(z.string()).max(4),
        projectLink: z.string().url({ message: 'Invalid website url' }),
        industry: z.string(),
        status: z.string(),
        telegramLink: z.string().url({ message: 'Invalid telegram url' }),
        isOpenSource: z.boolean(),
        twitterHandle: z.string().url({ message: 'Invalid twitter url' }),
        team: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
          }),
        ),
      }),
    ),
  });

  const forceSave = async () => {};

  return (
    <FormProvider {...methods}>
      <div className="pointer-events-auto mx-auto flex h-[840px] w-full max-w-screen-xl justify-start py-16 md:gap-24 md:px-12">
        <div className="h-full md:w-1/2 ">
          <AnimatePresence>
            <motion.form
              onSubmit={methods.handleSubmit(() => {})}
              className="h-full md:px-12 "
            >
              <FormStepper totalSteps={8} stepsToShow={5} currentStep={step} />
              {step === 1 && <Step1 forceSave={forceSave} setStep={setStep} />}
              {step === 2 && <Step2 forceSave={forceSave} setStep={setStep} />}
              {step === 3 && <Step3 forceSave={forceSave} setStep={setStep} />}
              {step === 4 && <Step4 setStep={setStep} forceSave={forceSave} />}
              {step === 5 && <Step5 setStep={setStep} forceSave={forceSave} />}
              {step === 6 && <Step6 setStep={setStep} forceSave={forceSave} />}
              {step === 7 && <Step7 setStep={setStep} forceSave={forceSave} />}
              {step === 8 && <Step8 setStep={setStep} forceSave={forceSave} />}
              {step === 10 && <Success />}
            </motion.form>
          </AnimatePresence>
        </div>

        <ProjectCreationDisplay watch={methods.watch} />
      </div>
      {/* use form hook devtool */}
      <DevTool control={methods.control} />
    </FormProvider>
  );
};
