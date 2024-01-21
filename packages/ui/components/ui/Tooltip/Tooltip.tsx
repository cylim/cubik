import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidV4 } from 'uuid';

import { cn } from '../../../lib/utils';

const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
};

interface TooltipProps {
  children: React.ReactNode;
}

type TooltipContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const TooltipContext = React.createContext<TooltipContextType>({
  open: false, // default value for "open"
  setOpen: () => {}, // default empty function for "setOpen"
});

const Tooltip = ({ children }: TooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      <RadixTooltip.Provider delayDuration={100}>
        <RadixTooltip.Root open={open}>{children}</RadixTooltip.Root>
      </RadixTooltip.Provider>
    </TooltipContext.Provider>
  );
};

interface TooltipTriggerProps {
  children: React.ReactNode;
}
const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { setOpen, open } = useContext(TooltipContext);
  return (
    <RadixTooltip.Trigger asChild>
      <div
        className="cursor-pointer"
        //onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        // handle it on touch interfaces
        onTouchStart={() => setOpen(!open)}
        onTouchEnd={() => setOpen(false)}
      >
        {children}
      </div>
    </RadixTooltip.Trigger>
  );
};

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}
const TooltipContent = ({ children, className }: TooltipContentProps) => {
  const id = uuidV4();
  const { open } = useContext(TooltipContext);

  return (
    <AnimatePresence>
      {open && (
        <RadixTooltip.Portal forceMount>
          <RadixTooltip.Content asChild sideOffset={5}>
            <motion.div
              key={id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tooltipVariants}
              className={cn(
                'rounded-lg bg-[var(--color-bg-info)] text-white px-[12px] py-[8px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] max-w-[200px] md:max-w-xs',
                className,
              )}
            >
              {children}
              <RadixTooltip.Arrow className="fill-[var(--color-bg-info)]" />
            </motion.div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      )}
    </AnimatePresence>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent };
