'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import { Adapter } from '@solana/wallet-adapter-base';

import { AvatarGroup, Text } from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

import { useCubikWalletContext } from '../context/CubikContext';
import { OnboardingFlow } from './Onboarding';
import { HIGHLIGHTED_BY } from './useWalletModalLogic';
import { WalletIcon } from './WalletListItem';
import WalletConnectStatus from './walletModalConnecting';

export const ListOfWallets: React.FC<{
  list: {
    highlightedBy: HIGHLIGHTED_BY;
    highlight: Adapter[];
    others: Adapter[];
  };
  onToggle: (nextValue?: any) => void;
  isOpen: boolean;
  // setshowheader takes in boolean
  setShowHeader: (show: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ list, onToggle, isOpen, setShowHeader }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { handleConnectClick, walletlistExplanation } = useCubikWalletContext();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState<null | {
    name: string;
    icon: string;
    status: 'connecting' | 'failed' | 'connected' | null;
  }>(null);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  // remaining wallet list which opens when button is clicked
  const renderWalletList = useMemo(
    () =>
      list.others
        .filter((e) => e.readyState !== 'NotDetected')
        .map((adapter, index) => {
          return (
            <div
              className="cursor-pointer border border-blue-500 pointer-events-auto"
              key={index}
              onClick={(event) => handleConnectClick(event, adapter)}
            >
              {isSmallDevice ? (
                <WalletIcon wallet={adapter} width={48} height={48} />
              ) : (
                <WalletIcon wallet={adapter} />
              )}
            </div>
          );
        }),
    [handleConnectClick, list.others],
  );

  const hasNoWallets = useMemo(() => {
    return list.highlightedBy === 'TopWallet' ? true : false;
  }, [list]);

  useEffect(() => {
    if (hasNoWallets) {
      setShowOnboarding(true);
    }
    list.highlight.forEach((wallet) => {
      if (wallet.connecting) {
        console.log('wallet - ', wallet.connecting);
        setConnectingWallet({
          icon: wallet.icon,
          name: wallet.name,
          status: wallet.connecting
            ? 'connecting'
            : wallet.connected
            ? 'connected'
            : 'failed',
        });
      }
    });
  }, [hasNoWallets, list.highlight]);

  if (showOnboarding) {
    setShowHeader(false);
    return <OnboardingFlow />;
  }
  if (connectingWallet !== null) {
    return (
      <WalletConnectStatus
        name={connectingWallet.name}
        icon={connectingWallet.icon}
        status={connectingWallet?.status}
      />
    );
  }

  return (
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
        {walletlistExplanation && list.others.length === 0 ? (
          <div className="text-xs justify-center items-center w-full font-semibold mt-4 pointer-events-auto -mb-2 text-white/80 underline cursor-pointer">
            <a
              href={walletlistExplanation.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Can&apos;t find your wallet?</span>
            </a>
          </div>
        ) : null}
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
  );
};
