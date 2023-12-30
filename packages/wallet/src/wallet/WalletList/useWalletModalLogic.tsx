import { useEffect, useMemo, useState } from 'react';
import {
  Adapter,
  WalletName,
  WalletReadyState,
} from '@solana/wallet-adapter-base';
import { useToggle } from 'react-use';

import { useMediaQuery } from '@cubik/ui/hooks';

import { useCubikWallet, useCubikWalletContext } from '../CubikContext';
import { usePreviouslyConnected } from '../prevConnected';
import { WalletIcon } from '../WalletListItem';

const PRIORITISE: {
  [value in WalletReadyState]: number;
} = {
  [WalletReadyState.Installed]: 1,
  [WalletReadyState.Loadable]: 2,
  [WalletReadyState.NotDetected]: 3,
  [WalletReadyState.Unsupported]: 3,
};

export type HIGHLIGHTED_BY =
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

export const useWalletModalLogic = () => {
  const { wallets } = useCubikWallet();
  const { walletPrecedence } = useCubikWalletContext();
  const { handleConnectClick, walletlistExplanation } = useCubikWalletContext();
  const previouslyConnected = usePreviouslyConnected();
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState<null | {}>(null);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

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
      if (wallet.connecting)
        setConnectingWallet({
          icon: wallet.icon,
          pubKey: wallet.publicKey,
          name: wallet.name,
          state: wallet.readyState,
        });
    });
  }, [hasNoWallets, list.highlight]);

  return {
    list,
    showMore,
    showOnboarding,
    connectingWallet,
    isSmallDevice,
    setShowMore,
    handleConnectClick,
    renderWalletList,
  };
};
