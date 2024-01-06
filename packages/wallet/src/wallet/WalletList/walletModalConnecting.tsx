import { WalletAdapter } from '@solana/wallet-adapter-base';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

import { Button, Icon, Text } from '@cubik/ui';

import { useCubikWallet, useCubikWalletContext } from '../context/CubikContext';
import { useUserModalUIContext } from '../context/WalletUIContext';

const slides: React.ReactNode[] = [
  <>
    {' '}
    <Text className="h3 md:h4" color={'primary'}>
      Requesting Connection
    </Text>
    <Text
      className="px-4 md:l2-light l1-light max-w-[330px]"
      color={'secondary'}
    >
      Click on the connect wallet button in the wallet popup or open the wallet
    </Text>
  </>,
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

const WalletConnectStatus = ({ adapter }: { adapter: WalletAdapter }) => {
  const { select } = useCubikWallet();
  const { setIsWalletError } = useCubikWalletContext();
  const { modalState, setModalState } = useUserModalUIContext();

  const isErrorConnecting = modalState === 'error-connecting';
  const iconColor = isErrorConnecting
    ? 'var(--color-fg-negative-base)'
    : 'var(--color-fg-info-base)';
  const iconName = isErrorConnecting
    ? 'dangerSkullDuoSolid'
    : 'walletPlusDuoSolid';

  const onRetry = async () => {
    try {
      setModalState('connecting');
      select(adapter.name);
      await adapter.connect();
      toast.success('Wallet Connected');
    } catch (e) {
      const error = e as Error;
      setModalState('error-connecting');
      if (error.message) {
        setIsWalletError({
          error,
          message: error.message,
          name: error.name,
        });
        return null;
      } else {
        const newError = new Error('User rejected the request');
        setModalState('error-connecting');
        setIsWalletError({
          error: newError,
          message: 'User rejected the request',
          name: 'Error',
        });
      }
    }
  };
  const onClickHandler = () => {
    if (modalState === 'error-connecting') {
      onRetry();
    } else if (modalState === 'connecting') {
      return;
    }
  };

  const textFlipAnimation = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  };

  const renderButton = (
    text: string,
    status: string, // status is used to differentiate the button text state
  ) => (
    <Button
      className={'w-full'}
      size={'lg'}
      variant={'secondary'}
      // isLoading={loading}
      onClick={onClickHandler}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
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

  const iconBackgroundAnimation = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      backgroundColor: isErrorConnecting
        ? 'var(--color-surface-negative-transparent)'
        : 'var(--color-surface-info-transparent)',
    },
    exit: { opacity: 1 },
  };

  return (
    <div className="p-6 md:p-8 md:py-12 flex flex-col items-center justify-center gap-6 md:gap-8">
      <AnimatePresence>
        <motion.div
          key={modalState}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={iconBackgroundAnimation}
          className="mx-auto w-fit rounded-full p-4"
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
        </motion.div>
      </AnimatePresence>
      <motion.div
        key={modalState}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex flex-col justify-center items-center text-center w-full max-w-[330px] gap-2"
      >
        {slides[isErrorConnecting ? 1 : 0]}
      </motion.div>
      <div className="w-full flex items-center gap-2 flex-col">
        {isErrorConnecting
          ? renderButton('Retry', 'error')
          : renderButton('Connecting...', 'connecting')}
        {/* <AnimatePresence>
          {isErrorConnecting ? ( */}
        <Button
          onClick={() => setModalState('wallet-connect')}
          size="md"
          variant="link"
        >
          Connect another wallet
        </Button>
        {/* ) : (
            ''
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default WalletConnectStatus;
