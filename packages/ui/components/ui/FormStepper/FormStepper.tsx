import React from 'react';
import { motion } from 'framer-motion';

// Define the props interface
interface StepBarProps {
  currentStep: number;
  totalSteps?: number;
  stepsToShow?: number;
}

const FormStepper: React.FC<StepBarProps> = ({
  currentStep,
  totalSteps = 8,
  stepsToShow = 5,
}) => {
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

export { FormStepper };
