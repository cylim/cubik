/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  Adapter,
  WalletName,
  WalletReadyState,
} from '@solana/wallet-adapter-base';
import { useToggle } from 'react-use';

import { AvatarGroup, Icon } from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

import {
  useUnifiedWallet,
  useUnifiedWalletContext,
} from '../../contexts/UnifiedWalletContext';
import HardcodedWalletStandardAdapter from '../../contexts/WalletConnectionProvider/HardcodedWalletStandardAdapter';
import { usePreviouslyConnected } from '../../contexts/WalletConnectionProvider/previouslyConnectedProvider';
import { useMediaQuery } from '../../hooks/helperHooks';
import { HARDCODED_WALLET_STANDARDS } from '../../misc/constants';
import { OnboardingFlow } from './Onboarding';
import { WalletIcon, WalletListItem } from './WalletListItem';

const ListOfWallets: React.FC<{
  list: {
    highlightedBy: HIGHLIGHTED_BY;
    highlight: Adapter[];
    others: Adapter[];
  };
  onToggle: (nextValue?: any) => void;
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ list, onToggle, isOpen }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { handleConnectClick, walletlistExplanation } =
    useUnifiedWalletContext();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  // remaining wallet list which opens when button is clicked
  const renderWalletList = useMemo(
    () =>
      list.others
        .filter((e) => e.readyState !== 'NotDetected')
        .map((adapter, index) => {
          return (
            <div
              className="cursor-pointer pointer-events-auto"
              key={index}
              onClick={(event) => handleConnectClick(event, adapter)}
            >
              {isSmallDevice ? (
                <WalletIcon wallet={adapter} width={48} height={48} />
              ) : (
                <WalletIcon wallet={adapter} width={60} height={30} />
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
  }, [hasNoWallets]);

  if (showOnboarding) {
    return <OnboardingFlow />;
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        }}
      >
        {list.highlight.map((adapter, idx) => {
          return (
            <div
              className="cursor-pointer pointer-events-auto"
              key={idx}
              onClick={(event) => handleConnectClick(event, adapter)}
            >
              {isSmallDevice ? (
                <WalletIcon wallet={adapter} width={48} height={48} />
              ) : (
                <WalletIcon wallet={adapter} width={60} height={30} />
              )}
            </div>
          );
        })}
        {showMore && renderWalletList}

        {walletlistExplanation && list.others.length === 0 ? (
          <div className="text-xs flex justify-center items-center w-full font-semibold mt-4 pointer-events-auto -mb-2 text-white/80 underline cursor-pointer">
            <a
              href={walletlistExplanation.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Can&apos;t find your wallet?</span>
            </a>
          </div>
        ) : null}
        {list.others.length > 0 && (
          <>
            <div
              className={cn(
                showMore
                  ? 'hidden'
                  : 'pointer-events-auto flex justify-center items-center',
              )}
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
                maxCount={3}
              />
            </div>
          </>
        )}
      </div>
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="text-xs flex justify-center items-center w-full font-semibold mt-4 pointer-events-auto -mb-2 text-white underline cursor-pointer"
        >
          <span>Show Less</span>
        </div>
      )}
    </>
  );
};

const PRIORITISE: {
  [value in WalletReadyState]: number;
} = {
  [WalletReadyState.Installed]: 1,
  [WalletReadyState.Loadable]: 2,
  [WalletReadyState.NotDetected]: 3,
  [WalletReadyState.Unsupported]: 3,
};
export interface WalletModalProps {
  className?: string;
  logo?: ReactNode;
  container?: string;
}

type HIGHLIGHTED_BY =
  | 'PreviouslyConnected'
  | 'Installed'
  | 'TopWallet'
  | 'Onboarding';
const TOP_WALLETS: WalletName[] = [
  'Glow' as WalletName<'Glow'>,
  'Phantom' as WalletName<'Phantom'>,
  'Solflare' as WalletName<'Solflare'>,
  'Backpack' as WalletName<'Backpack'>,
  'Coinbase Wallet' as WalletName<'Coinbase Wallet'>,
];

interface IUnifiedWalletModal {
  onClose: () => void;
}

const sortByPrecedence =
  (walletPrecedence: WalletName[]) => (a: Adapter, b: Adapter) => {
    if (!walletPrecedence) return 0;

    const aIndex = walletPrecedence.indexOf(a.name);
    const bIndex = walletPrecedence.indexOf(b.name);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex >= 0) {
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }

    if (bIndex >= 0) {
      if (aIndex === -1) return 1;
      return bIndex - aIndex;
    }
    return 0;
  };

const UnifiedWalletModalFooter: React.FC = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4">
      <div className="flex gap-2 item-start space-x-3">
        <div className="min-w-[20px]">
          <Icon
            name="eyeClose"
            strokeWidth={1.5}
            className="min-w-[18px]"
            stroke="var(--color-fg-primary-subdued)"
            fill="none"
            width={20}
            height={20}
          />
        </div>
        <span className="text-[14px] md:text-[16px] font-light  text-[var(--color-fg-primary-subdued)]">
          View only permissions. We will never do anything without your
          approval.
        </span>
      </div>
      <div className="flex gap-2 item-start space-x-3">
        <div className="min-w-[20px]">
          <Icon
            name="shieldCheck"
            strokeWidth={1.5}
            stroke="var(--color-fg-primary-subdued)"
            fill="none"
            width={20}
            height={20}
          />
        </div>
        <span className="text-[14px] md:text-[16px] font-light text-[var(--color-fg-primary-subdued)]">
          Open Source and Audited Smart Contracts
        </span>
      </div>
      <div className="flex gap-2 item-start space-x-3">
        <div className="min-w-[20px]">
          <Icon
            name="userSecurity"
            strokeWidth={1.5}
            stroke="var(--color-fg-primary-subdued)"
            fill="none"
            width={20}
            height={20}
          />
        </div>
        <span className="text-[14px] md:text-[16px] font-light  text-[var(--color-fg-primary-subdued)]">
          Trusted by 1,568 Users
        </span>
      </div>
    </div>
  );
};
const UnifiedWalletModal: React.FC<IUnifiedWalletModal> = () => {
  const { wallets } = useUnifiedWallet();
  const { walletPrecedence } = useUnifiedWalletContext();
  const [isOpen, onToggle] = useToggle(false);
  const previouslyConnected = usePreviouslyConnected();

  const list: {
    highlightedBy: HIGHLIGHTED_BY;
    highlight: Adapter[];
    others: Adapter[];
  } = useMemo(() => {
    // Then, Installed, Top 3, Loadable, NotDetected
    const filteredAdapters = wallets.reduce<{
      previouslyConnected: Adapter[];
      installed: Adapter[];
      top3: Adapter[];
      loadable: Adapter[];
      notDetected: Adapter[];
    }>(
      (acc, wallet) => {
        const adapterName = wallet.adapter.name;

        // Previously connected takes highest
        const previouslyConnectedIndex =
          previouslyConnected.indexOf(adapterName);
        if (previouslyConnectedIndex >= 0) {
          acc.previouslyConnected[previouslyConnectedIndex] = wallet.adapter;
          return acc;
        }
        // Then Installed
        if (wallet.readyState === WalletReadyState.Installed) {
          acc.installed.push(wallet.adapter);
          return acc;
        }
        // Top 3
        const topWalletsIndex = TOP_WALLETS.indexOf(adapterName);
        if (topWalletsIndex >= 0) {
          acc.top3[topWalletsIndex] = wallet.adapter;
          return acc;
        }
        // Loadable
        if (wallet.readyState === WalletReadyState.Loadable) {
          acc.loadable.push(wallet.adapter);
          return acc;
        }
        // NotDetected
        if (wallet.readyState === WalletReadyState.NotDetected) {
          acc.loadable.push(wallet.adapter);
          return acc;
        }
        return acc;
      },
      {
        previouslyConnected: [],
        installed: [],
        top3: [],
        loadable: [],
        notDetected: [],
      },
    );

    if (filteredAdapters.previouslyConnected.length > 0) {
      const { previouslyConnected, installed, ...rest } = filteredAdapters;

      const highlight = [
        ...filteredAdapters.installed,
        ...filteredAdapters.previouslyConnected.slice(0, 3),
      ];
      const others = Object.values(rest)
        .flat()
        .sort((a, b) => PRIORITISE[a.readyState] - PRIORITISE[b.readyState])
        .sort(sortByPrecedence(walletPrecedence || []));

      others.unshift(
        ...filteredAdapters.previouslyConnected.slice(
          3,
          filteredAdapters.previouslyConnected.length,
        ),
      );
      // others = others.filter(Boolean);
      return {
        highlightedBy: 'PreviouslyConnected',
        highlight,
        others,
      };
    }

    if (filteredAdapters.installed.length > 0) {
      const { installed, ...rest } = filteredAdapters;
      const highlight = filteredAdapters.installed;
      const others = Object.values(rest)
        .flat()
        .sort((a, b) => PRIORITISE[a.readyState] - PRIORITISE[b.readyState])
        .sort(sortByPrecedence(walletPrecedence || []));
      others.unshift(...filteredAdapters.installed);

      return { highlightedBy: 'Installed', highlight, others };
    }

    // console.log(filteredAdapters.loadable[1].readyState);
    if (filteredAdapters.loadable.length === 0) {
      return { highlightedBy: 'Onboarding', highlight: [], others: [] };
    }

    const { top3, ...rest } = filteredAdapters;
    const others = Object.values(rest)
      .flat()
      .sort((a, b) => PRIORITISE[a.readyState] - PRIORITISE[b.readyState])
      .sort(sortByPrecedence(walletPrecedence || []));
    return { highlightedBy: 'TopWallet', highlight: top3, others };
  }, [wallets, previouslyConnected]);
  console.log('----', list);
  return (
    <div className="flex flex-col gap-6">
      <ListOfWallets list={list} onToggle={onToggle} isOpen={isOpen} />
      <div className="w-full h-[1px] bg-[var(--color-border-primary-base)]" />
      {list.highlightedBy !== 'TopWallet' && <UnifiedWalletModalFooter />}
    </div>
  );
};

export default UnifiedWalletModal;
