'use client';

import React, { useState } from 'react';
import { IProjectData } from '@/types/project';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@cubik/ui';

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

const StepBar = ({ currentStep }: { currentStep: number }) => {
  const totalSteps = 8;
  const stepsToShow = 5; // Number of steps to show at a time
  const halfSteps = Math.floor(stepsToShow / 2);
  const stepVariants = (step: number) => {
    const distance = Math.abs(currentStep - step);
    let width = 6; // Default width for inactive steps
    let opacity = 0.3; // Default opacity for inactive steps

    if (distance === 0) {
      width = 22; // Active step
      opacity = 1;
    } else if (distance === 1) {
      width = 14; // Steps adjacent to the active step
      opacity = 0.8;
    } else if (distance === 2) {
      width = 8; // Steps adjacent to the active step
      opacity = 0.5;
    }

    return {
      active: {
        width: width,
        opacity: opacity,
        backgroundColor: 'var(--color-fg-info-base)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
      inactive: {
        width: width,
        opacity: opacity,
        backgroundColor: 'var(--color-surface-primary-transparent)',
        transition: { duration: 0.5 },
      },
    };
  };

  const shouldRenderStep = (step: number) => {
    const startStep = Math.max(1, currentStep - halfSteps);
    const endStep = Math.min(totalSteps, currentStep + halfSteps);

    return step >= startStep && step <= endStep;
  };
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
          (step) =>
            shouldRenderStep(step) && (
              <motion.div
                key={step}
                className="h-[6px] rounded-full"
                variants={stepVariants(step)}
                initial="inactive"
                animate={currentStep === step ? 'active' : 'inactive'}
                layout
              />
            ),
        )}
      </div>
    </div>
  );
};

export const CreateProject = ({ id }: Props) => {
  console.log('🔄 Project create page rerendered');
  const [step, setStep] = useState<number>(1);
  const {
    watch,
    getValues,
    setValue,
    trigger,
    clearErrors,
    register,
    control,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<IProjectData>({
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
    <>
      <div className=" pointer-events-auto mx-auto flex h-[840px] w-full max-w-screen-xl justify-start py-16 md:gap-24 md:px-12">
        <div className="h-full md:w-1/2 ">
          <Button onClick={() => clearErrors()}>reset errors</Button>
          <AnimatePresence>
            <motion.form
              onSubmit={handleSubmit(() => {})}
              className="h-full md:px-12 "
            >
              <StepBar currentStep={step} />
              {step === 1 && (
                <Step1
                  forceSave={forceSave}
                  setStep={setStep}
                  watch={watch}
                  setValue={setValue}
                  errors={errors}
                  clearErrors={clearErrors}
                  trigger={trigger}
                  register={register}
                />
              )}
              {step === 2 && (
                <Step2
                  forceSave={forceSave}
                  setStep={setStep}
                  watch={watch}
                  setValue={setValue}
                  errors={errors}
                  clearErrors={clearErrors}
                  trigger={trigger}
                  register={register}
                  control={control}
                />
              )}
              {step === 3 && (
                <Step3
                  forceSave={forceSave}
                  setStep={setStep}
                  watch={watch}
                  setValue={setValue}
                  errors={errors}
                  clearErrors={clearErrors}
                  trigger={trigger}
                  register={register}
                  setError={setError}
                  control={control}
                />
              )}
              {step === 4 && (
                <Step4
                  setStep={setStep}
                  forceSave={forceSave}
                  watch={watch}
                  setError={setError}
                  errors={errors}
                  setValue={setValue}
                  control={control}
                />
              )}
              {step === 5 && (
                <Step5
                  setStep={setStep}
                  forceSave={forceSave}
                  errors={errors}
                  watch={watch}
                  register={register}
                />
              )}
              {step === 6 && (
                <Step6
                  setStep={setStep}
                  forceSave={forceSave}
                  errors={errors}
                  watch={watch}
                  register={register}
                />
              )}
              {step === 7 && (
                <Step7
                  setStep={setStep}
                  forceSave={forceSave}
                  errors={errors}
                  watch={watch}
                  register={register}
                />
              )}
              {step === 8 && (
                <Step8
                  control={control}
                  setStep={setStep}
                  forceSave={forceSave}
                  errors={errors}
                  setValue={setValue}
                  watch={watch}
                  register={register}
                />
              )}
              {step === 10 && <Success />}
            </motion.form>
          </AnimatePresence>
        </div>

        <ProjectCreationDisplay watch={watch} />
      </div>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};
