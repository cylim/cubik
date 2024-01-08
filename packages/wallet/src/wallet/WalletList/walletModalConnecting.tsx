import { useEffect } from 'react';
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

import { Button, Icon, Text } from '@cubik/ui';

import { useCubikWallet, useCubikWalletContext } from '../context/CubikContext';
import {
  MODAL_STATUS,
  useUserModalUIContext,
} from '../context/WalletUIContext';

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

  const iconColor =
    modalState === MODAL_STATUS.ERROR_CONNECTING
      ? 'var(--color-fg-negative-base)'
      : 'var(--color-fg-info-base)';
  const iconName =
    modalState === MODAL_STATUS.ERROR_CONNECTING
      ? 'dangerSkullDuoSolid'
      : 'walletPlusDuoSolid';

  useEffect(() => {
    console.log('modal state changed', modalState);
  }, [modalState]);

  const onRetry = async () => {
    try {
      setModalState(MODAL_STATUS.CONNECTING);
      select(adapter.name);
      await adapter.connect();
      toast.success('Wallet Connected');
    } catch (e) {
      const error = e as Error;
      setModalState(MODAL_STATUS.ERROR_CONNECTING);
      if (error.message) {
        setIsWalletError({
          error,
          message: error.message,
          name: error.name,
        });
        return null;
      } else {
        const newError = new Error('User rejected the request');
        setModalState(MODAL_STATUS.ERROR_CONNECTING);
        setIsWalletError({
          error: newError,
          message: 'User rejected the request',
          name: 'Error',
        });
      }
    }
  };
  const onClickHandler = () => {
    if (modalState === MODAL_STATUS.ERROR_CONNECTING) {
      onRetry();
    } else if (modalState === MODAL_STATUS.CONNECTING) {
      return;
    }
  };

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
      isLoading={modalState === MODAL_STATUS.CONNECTING}
      onClick={onClickHandler}
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
          {modalState === MODAL_STATUS.ERROR_CONNECTING && (
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
          modalState === MODAL_STATUS.ERROR_CONNECTING
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
        key={modalState}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex flex-col justify-center items-center text-center w-full max-w-[330px] gap-2"
      >
        {slides[modalState === MODAL_STATUS.ERROR_CONNECTING ? 1 : 0]}
      </motion.div>
      <div className="w-full flex items-center gap-2 flex-col">
        {modalState === MODAL_STATUS.ERROR_CONNECTING
          ? renderButton('Retry', 'error')
          : renderButton('Connecting', 'connecting')}
        {/* <AnimatePresence>
          {isErrorConnecting ? ( */}
        <Button
          onClick={() => setModalState(MODAL_STATUS.WALLET_CONNECT)}
          size="md"
          variant="tertiary"
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
