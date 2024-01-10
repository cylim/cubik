import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { AvatarGroup, Divider, Icon, Text } from '@cubik/ui';

import { useCubikWalletContext } from '../context/CubikContext';
import {
  MODAL_STATUS,
  useUserModalUIContext,
} from '../context/WalletUIContext';
import { useWalletModalLogic } from '../hooks/useWalletModalLogic';
import { OnboardingFlow } from './Onboarding';
import { WalletIcon } from './WalletIcon';
import WalletConnectStatus from './walletModalConnecting';
import { CubikWalletModalFooter } from './walletModalFooter';

interface ICubikWalletModal {
  onClose: () => void;
  setShowHeader: (show: boolean) => void;
}

const CubikWalletModal: React.FC<ICubikWalletModal> = ({
  onClose,
  setShowHeader,
}) => {
  const { list, showMore, showOnboarding, isSmallDevice, setShowMore } =
    useWalletModalLogic();
  const { error, selectedAdapter, handleConnectClick } =
    useCubikWalletContext();

  const { setModalState } = useUserModalUIContext();

  useEffect(() => {
    if (error) setModalState(MODAL_STATUS.ERROR_CONNECTING);
  }, [error, setModalState]);

  if (showOnboarding) {
    setShowHeader(false);
    return <OnboardingFlow />;
  }

  if (selectedAdapter) {
    return <WalletConnectStatus adapter={selectedAdapter.adapter} />;
  }

  const renderWallets = (wallets: any[]) =>
    wallets.map((adapter, idx) => (
      <div
        key={idx}
        className="transform active:scale-105 cursor-pointer pointer-events-auto"
        onClick={(event) => {
          setModalState(MODAL_STATUS.CONNECTING);
          handleConnectClick(event, adapter);
        }}
      >
        <WalletIcon wallet={adapter} />
      </div>
    ));

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, height: '90%' }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: '90%' }}
        transition={{ type: 'spring', duration: 0.5 }}
        style={{
          overflow: 'hidden',
        }}
        className="flex flex-col"
      >
        {/* Modal header */}
        <div className="hidden md:flex justify-between items-center h-[48px] px-[24px]">
          <Text color="primary" className="text-[var(--avatar-label-title)] h6">
            Connect Wallet
          </Text>
          <div onClick={onClose} className="pointer-events-auto">
            <Icon
              name="cross"
              width={20}
              height={20}
              color="var(--modal-header-cancel-icon)"
            />
          </div>
        </div>
        {/* Modal body */}
        <div
          className={`z-0 flex ${
            isSmallDevice && showMore ? 'justify-center' : 'justify-start'
          } items-center py-2`}
          style={{
            flexWrap: isSmallDevice && !showMore ? 'nowrap' : 'wrap',
            maxHeight: '500px',
            overflowY: 'scroll',
          }}
        >
          {renderWallets(list.highlight)}
          {showMore && renderWallets(list.others)}
          {!showMore && (
            <div
              style={{
                width: '102px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}
              className="pointer-events-auto cursor-pointer"
              onClick={() => setShowMore(true)}
            >
              <AvatarGroup
                avatars={list.others
                  .filter((e) => e.readyState !== 'NotDetected')
                  .map((e) => ({ src: e.icon, alt: e.name }))}
                shape="square"
                variant="squared-horizontal"
                size={isSmallDevice ? 'sm' : 'xs'}
                maxCount={3}
              />
              <Text className="b4 md:b4-light" color="primary">
                More
              </Text>
            </div>
          )}
        </div>
        {/* Optional footer */}
        {showMore ? (
          <div className="z-1 flex flex-col gap-6">
            <div
              style={{
                cursor: 'pointer',
                height: '64px',
              }}
              className="flex items-center justify-center"
              onClick={() => setShowMore(false)}
            >
              <Text className="b4 md:b4-light" color="primary">
                Show less
              </Text>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <Divider />
            <CubikWalletModalFooter />
            <div />
          </div>
        )}
      </motion.div>{' '}
    </AnimatePresence>
  );
};

export { CubikWalletModal };
