'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { AvatarGroup, Divider, Text } from '@cubik/ui';

import { OnboardingFlow } from '../Onboarding';
import { WalletIcon } from '../WalletListItem';
import { useWalletModalLogic } from './useWalletModalLogic';
import WalletConnectStatus from './walletModalConnecting';
import { CubikWalletModalFooter } from './walletModalFooter';

interface ICubikWalletModal {
  onClose: () => void;
  setShowHeader: (show: boolean) => void;
}

const CubikWalletModal: React.FC<ICubikWalletModal> = ({ setShowHeader }) => {
  const {
    list,
    showMore,
    showOnboarding,
    connectingWallet,
    isSmallDevice,
    setShowMore,
    handleConnectClick,
    renderWalletList,
  } = useWalletModalLogic();

  if (showOnboarding) {
    setShowHeader(false);
    return <OnboardingFlow />;
  }
  if (connectingWallet) {
    return (
      <WalletConnectStatus
        icon={connectingWallet.icon}
        name={connectingWallet.name}
        status={'connecting'}
      />
    );
  }

  return (
    <div className="flex flex-col">
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: isSmallDevice ? (showMore ? 'wrap' : 'nowrap') : 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'scroll',
          }}
        >
          {list.highlight.map((adapter, idx) => {
            return (
              <div
                className=" cursor-pointer pointer-events-auto"
                key={idx}
                onClick={(event) => handleConnectClick(event, adapter)}
              >
                {isSmallDevice ? (
                  <WalletIcon wallet={adapter} />
                ) : (
                  <WalletIcon wallet={adapter} />
                )}
              </div>
            );
          })}
          {showMore && renderWalletList}
          {list.others.length > 0 && !showMore && (
            <>
              <div
                style={{
                  minWidth: 'clamp(84px,10vw,123px)',
                  minHeight: 'clamp(108px,10vw,120px)',
                  display: showMore ? 'hidden' : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                className="pointer-events-auto cursor-pointer border border-red-500"
                onClick={() => setShowMore(true)}
              >
                <AvatarGroup
                  avatars={list.others
                    .filter((e) => e.readyState !== 'NotDetected')
                    .map((e) => {
                      return {
                        src: e.icon,
                        alt: e.name,
                      };
                    })}
                  shape="square"
                  variant="squared-horizontal"
                  size="xs"
                  maxCount={3}
                />
                <Text className="b4 md:b4-light" color="primary">
                  More
                </Text>
              </div>
            </>
          )}
        </div>
        {showMore && (
          <div
            onClick={() => setShowMore(false)}
            className="flex justify-center items-center w-full my-4 pointer-events-auto cursor-pointer"
          >
            <Text className="b3 mb-2" color="primary">
              View Less
            </Text>
          </div>
        )}
      </>
      {list.highlightedBy !== 'TopWallet' && (
        <div className="flex flex-col gap-6">
          <Divider />
          <CubikWalletModalFooter />
          <div className="h-48px" />
        </div>
      )}
    </div>
  );
};

export { CubikWalletModal };
