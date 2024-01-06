'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Icon, Text } from '@cubik/ui';

import { useCubikWalletContext } from '../wallet';

interface Props {
  onClose: () => void;
  isLoading: boolean;
  handleVerify: () => void;
  address: string;
}

const slides: React.ReactNode[] = [
  // verify verifyModalState  - default verifyModalState
  <>
    <Text className="h3 md:h4" color={'primary'}>
      Verify Wallet
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      Sign a message in your connected wallet to confirm ownership of the
      wallet.
    </Text>
  </>,
  // loading verifyModalState
  <>
    {' '}
    <Text className="h3 md:h4" color={'primary'}>
      Requested Sign
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      Click on the sign button in the wallet popup or open the wallet and accept
    </Text>
  </>,
  // error verifyModalState
  <>
    {' '}
    <Text className="h3 md:h4" color={'primary'}>
      Connection Failed
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      You have rejected the connection request or it has failed due to some
      reason. Please try again!
    </Text>
  </>,
];
const textFlipAnimation = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export const VerifyWallet = ({
  onClose,
  isLoading,
  handleVerify,
  address,
}: Props) => {
  const [verifyModalState, setVerifyModalState] = useState<
    'default' | 'loading' | 'error'
  >('default');
  const { error } = useCubikWalletContext();

  // Use useEffect to handle side-effects, not directly in the render flow.
  useEffect(() => {
    if (isLoading) {
      setVerifyModalState('loading');
    } else if (error) {
      setVerifyModalState('error');
    } else {
      setVerifyModalState('default');
    }
  }, [isLoading, error]); // Removed verifyModalState from dependency array to prevent re-render loop.

  // Define the icon and button title based on the verifyModalState.
  const icon = {
    default: {
      bg: 'bg-[var(--color-surface-innovative-transparent)]',
      color: 'var(--color-fg-innovative-base)',
      name: 'smartContractDuoSolid',
    },
    loading: {
      bg: 'bg-[var(--color-surface-info-transparent)]',
      color: 'var(--color-fg-info-base)',
      name: 'smartContractDuoSolid',
    },
    error: {
      bg: 'bg-[var(--color-surface-negative-transparent)]',
      color: 'var(--color-fg-negative-base)',
      name: 'dangerSkullDuoSolid',
    },
  }[verifyModalState];

  const buttonTitle = {
    default: 'Sign & Confirm',
    loading: 'Signing...',
    error: 'Retry',
  }[verifyModalState];

  const onClickHandler = () => {
    if (verifyModalState !== 'loading') {
      handleVerify();
      setVerifyModalState('loading');
    }
  };

  // Define renderButton inside the component to access verifyModalState.
  const renderButton = (text: string) => (
    <Button
      className={'w-full'}
      size={'lg'}
      variant={'secondary'}
      onClick={onClickHandler}
    >
      <AnimatePresence>
        <motion.span
          key={text}
          variants={textFlipAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.1 }}
          style={{ display: 'inline-block' }} // Necessary to apply transform to inline elements like span
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </Button>
  );

  return (
    <div className="p-6 md:p-8 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-8">
      <div className="border border-red-500 flex items-center justify-center pt-[20rem] h-[500px]">
        <AnimatePresence>
          <motion.div
            key={verifyModalState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute mx-auto w-fit rounded-full ${icon.bg} p-4`}
          >
            <Icon
              name={icon.name}
              width={44}
              height={44}
              strokeWidth={3.5}
              color={icon.color}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        key={verifyModalState}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex flex-col justify-center items-center text-center w-full max-w-[330px] gap-2"
      >
        {
          slides[
            verifyModalState === 'default'
              ? 0
              : verifyModalState === 'loading'
              ? 1
              : 2
          ]
        }
      </motion.div>
      <div className="w-full flex items-center gap-2 flex-col">
        {renderButton(buttonTitle)}
        <Button onClick={onClose} size="md" variant="link">
          Go Back
        </Button>
      </div>
    </div>
  );
};
