import React, { useState } from 'react';
import { Step1 } from '@/components/create-project/step1';
import { Step2 } from '@/components/create-project/step2';
import { Step3 } from '@/components/create-project/step3';
import { Step4 } from '@/components/create-project/step4';
import { useForm } from 'react-hook-form';

import { Icon, Modal, Text } from '@cubik/ui';

interface Props {
  open: boolean;
  onClose: () => void;
}
export interface ProjectFormData {
  name: string;
  tagline: string;
  email: string;
  category: string[];
  logo: string;
  description: string;
  slides: string[];
  team: string[];
  github: string;
  website: string;
  twitter: string;
  isOpenSource: boolean;
}
export const CreateProjectModal = ({ onClose, open }: Props) => {
  const [step, setStep] = useState<number>(1);
  const createProjectForm = useForm<ProjectFormData>({
    defaultValues: {
      name: '',
      tagline: '',
      email: '',
      category: [],
      logo: '',
      description: '',
      slides: [],
      team: [],
      github: '',
      website: '',
      twitter: '',
      isOpenSource: false,
    },
  });
  return (
    <Modal dialogSize="2xl" onClose={onClose} open={open}>
      <div className="pointer-events-auto flex min-h-[90vh] w-full justify-start overflow-hidden rounded-2xl bg-[var(--modal-body-surface)]">
        <div className="w-[60%]  bg-[var(--card-bg-primary)] px-14">
          <div className="py-8">
            <Text className="h5 text-[var(--modal-header-heading)]">
              New Project
            </Text>
          </div>
          <div className="py-11">
            {step === 1 && (
              <Step1 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 2 && (
              <Step2 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 3 && (
              <Step3 setStep={setStep} projectForm={createProjectForm} />
            )}
            {step === 4 && (
              <Step4 setStep={setStep} projectForm={createProjectForm} />
            )}
          </div>
        </div>
        <div className="w-[40%] px-14 py-8 ">
          <div className="flex w-full justify-end">
            <div className="cursor-pointer" onClick={onClose}>
              <Icon name="cross" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
