import React, { useState } from 'react';

import { Button, Text } from '@cubik/ui';

import ExternalIcon from '../icons/ExternalIcon';
// import ExternalIcon from '../icons/ExternalIcon';
import { HARDCODED_WALLET_STANDARDS } from './HardCodedWallet';

export const OnboardingIntro: React.FC<{
  flow: IOnboardingFlow;
  setFlow: (flow: IOnboardingFlow) => void;
  onClose: () => void;
  showBack: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ flow, setFlow, onClose, showBack }) => {
  return (
    <div>
      <img
        src={'https://unified.jup.ag/new_user_onboarding.png'}
        width={160}
        height={160}
      />

      <div>
        <span> New here? </span>
        <span>Welcome to DeFi! Create a crypto wallet to get started!</span>
      </div>

      <div>
        <button type="button" onClick={() => setFlow('Get Wallet')}>
          Get Started
        </button>
      </div>
      {showBack && (
        <button type="button" onClick={() => onClose()}>
          ← Go back
        </button>
      )}
    </div>
  );
};

export const OnboardingGetWallets: React.FC<{
  flow: IOnboardingFlow;
  setFlow: (flow: IOnboardingFlow) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ flow, setFlow }) => {
  return (
    <div>
      <span>Popular wallets to get started</span>
      <div>
        {HARDCODED_WALLET_STANDARDS.map((item, idx) => {
          return (
            <a href={item.url} key={idx} target="_blank">
              <img src={item.icon} width={20} height={20} alt={item.name} />
              <span>{item.name}</span>
            </a>
          );
        })}

        <a href={'https://sdfsdf'} target="_blank">
          <div>
            <ExternalIcon width={16} height={16} />
          </div>
          <span>More wallets</span>
        </a>
      </div>

      <span>Once installed, refresh this page</span>
      <button type="button" onClick={() => setFlow('Onboarding')}>
        ← Go back
      </button>
    </div>
  );
};

export type IOnboardingFlow = 'Onboarding' | 'Get Wallet' | 'Copy Wallet';
export const OnboardingFlow = () => {
  const [state, setState] = useState<IOnboardingFlow>('Onboarding');
  if (state === 'Onboarding') {
    return (
      <div className="flex justify-center gap-8 md:gap-14 items-center flex-col px-4 md:px-8">
        <div
          className="flex flex-col justify-center items-center gap-4"
          color="secondary"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Solana Ledger"
            style={{ height: 'clamp(110px, 20vw, 150px)', width: 'full' }}
            src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public"
          />
          <div className="flex justify-center items-center text-center flex-col gap-2">
            <Text className="h4 md:h5" color="primary">
              No Solana Wallet Found?
            </Text>
            <Text className="b2-light md:b3-light text-center" color="tertiary">
              Wallet is an essential utility that lets you explore and
              participate in the fast evolving world of web3. Get a Solana
              wallet or{' '}
              <a
                className="text-[var(--color-fg-info-base)]"
                onClick={() => setState('Copy Wallet')}
              >
                Open inside a wallet
              </a>
            </Text>
          </div>
        </div>
        <div className="flex justify-center gap-2 items-center flex-col w-full">
          <Button
            onClick={() => setState('Get Wallet')}
            variant={'secondary'}
            size="lg"
            className="pointer-events-auto w-full"
          >
            Get a Wallet
          </Button>
          <Button variant={'link'} size={'lg'}>
            Learn More
          </Button>
        </div>
        <div />
      </div>
    );
  }
  if (state === 'Get Wallet') {
    return (
      <div className="px-6 flex justify-center items-center flex-col gap-6">
        Get Wallet
      </div>
    );
  }
  if (state === 'Copy Wallet') {
    return (
      <div className="flex justify-center gap-8 md:gap-14 items-center flex-col px-4 md:px-8">
        <div
          className="flex flex-col justify-center items-center gap-4"
          color="secondary"
        >
          <img
            alt="Solana Mobile - Saga"
            style={{ height: 'clamp(100px, 20vw, 130px)', width: 'full' }}
            src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4c14abdb-7e20-4c81-fe3c-0d210c0c7a00/public"
          />
          <div className="flex justify-center items-center text-center flex-col gap-2">
            <Text className="h4 md:h5" color="primary">
              Open any Wallet app
            </Text>
            <Text className="b2-light md:b3-light text-center" color="tertiary">
              Open any wallet app and navigate to the in app browser of the
              wallet. Paste the copied url and you should be good to go.
            </Text>
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center flex-col w-full">
          <Button variant={'secondary'} size={'lg'} className="w-full">
            Link copied
          </Button>
          <Button variant={'link'} size={'lg'} className="w-full">
            Get a Wallet
          </Button>
        </div>
      </div>
    );
  }
};
