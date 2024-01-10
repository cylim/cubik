import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Icon, Text } from '@cubik/ui';

interface Props {
  error: Error | null;
  onRetry: () => void;
  isLoading: boolean;
}

const slides: React.ReactNode[] = [
  <>
    <Text className="h3 md:h4" color={'primary'}>
      Sign Transaction
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      Click on the confirm button to create user Profile
    </Text>
  </>,
  <>
    {' '}
    <Text className="h3 md:h4" color={'primary'}>
      Transaction Failed
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      There was some error in the transaction. Please try again!
    </Text>
  </>,
];

export const SignTx = ({ error, onRetry, isLoading }: Props) => {
  //   const [retry, setRetry] = useState<boolean>(false);

  const iconColor = error
    ? 'var(--color-fg-negative-base)'
    : 'var(--color-fg-info-base)';
  const iconName = error ? 'dangerSkullDuoSolid' : 'walletPlusDuoSolid';

  const textFlipAnimation = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  };

  const renderButton = (text: string, status: string) => (
    <Button
      className="w-full"
      size="xl"
      variant="secondary"
      isLoading={isLoading}
      onClick={onRetry}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          variants={textFlipAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }} // Smoother transition
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '8px',
          }}
        >
          {error && (
            <Icon
              name="retry"
              strokeWidth={3}
              animate={{ rotate: 90 }} // Full rotation
              transition={{ duration: 0.5, ease: 'linear' }} // Continuous rotation
              initial={{ rotate: 90 }}
              width={18}
              height={18}
              color="var(--color-fg-primary-depth)"
            />
          )}
          <Text className="l1-heavy">{text}</Text>
        </motion.span>
      </AnimatePresence>
    </Button>
  );
  return (
    <div className="p-6 md:p-8 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-8">
      <div
        className={`mx-auto w-fit rounded-full p-4 ${
          error
            ? 'bg-[var(--color-surface-negative-transparent)]'
            : 'bg-[var(--color-surface-info-transparent)]'
        }`}
      >
        <Icon
          name={iconName}
          width={44}
          height={44}
          strokeWidth={3.5}
          color={iconColor}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        />
      </div>
      <motion.div
        key={'signTxCreate_user'}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex flex-col justify-center items-center text-center w-full max-w-[330px] gap-2"
      >
        {slides[error ? 1 : 0]}
      </motion.div>
      <div className="w-full flex items-center gap-2 flex-col">
        {error
          ? renderButton('Retry', 'error')
          : renderButton('Confirm', 'confirming')}
      </div>
    </div>
  );
};
