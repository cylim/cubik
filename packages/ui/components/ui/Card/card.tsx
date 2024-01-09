import React, { createContext, ReactNode, useContext } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';

import { cn } from '../../../lib/utils';

// Card context to manage size variants
export type CardContextType = {
  size: 'sm' | 'md' | 'lg';
};

export const CardContext = createContext<CardContextType>({
  size: 'md',
});

// Variants for card components
const cardVariants = cva('rounded-[12px] overflow-hidden', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardHeaderVariants = cva(
  'bg-[var(--card-surface-primary)] p-[16px] md:p-[24px]',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const cardBodyVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardFooterVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Card Wrapper Component
interface CardProps {
  children: ReactNode;
  className?: string;
  size: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ children, size }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      //  transition={{ duration: 10 }}
    >
      <CardContext.Provider value={{ size }}>
        <motion.div
          layout
          className={cn(cardVariants({ size }), 'bg-[var(--card-bg-primary)]')}
        >
          {children}
        </motion.div>
      </CardContext.Provider>
    </motion.div>
  );
};

// Card Header Component
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  const { size } = useContext(CardContext);
  return (
    <div className={cn(cardHeaderVariants({ size }), className)}>
      {children}
    </div>
  );
};

// Card Body Component
interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  const { size } = useContext(CardContext);
  return (
    <div className={cn(cardBodyVariants({ size }), className)}>{children}</div>
  );
};

// Card Footer Component
interface CardFooterProps {
  children: ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  const { size } = useContext(CardContext);
  return <div className={cn(cardFooterVariants({ size }))}>{children}</div>;
};

export { Card, CardHeader, CardBody, CardFooter };
