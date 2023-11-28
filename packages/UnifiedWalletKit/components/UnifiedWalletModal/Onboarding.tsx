import React, { useState } from 'react';

import { Button } from '@cubik/ui';

import { HARDCODED_WALLET_STANDARDS } from '../../misc/constants';
import ExternalIcon from '../icons/ExternalIcon';

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
      <div className="px-6 flex justify-center items-center flex-col gap-6">
        <img
          alt="something"
          src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public"
        />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[16px] text-[var(--color-fg-primary-depth)]">
            No Solana Wallet Found?
          </h1>
          <p className="text-[var(--color-fg-primary-subdued)] text-[14px]">
            Wallet is an essential utility that lets you explore and participate
            in the fast evolving world of web3. Get a Solana wallet or
            <span
              style={{
                color: 'var(--color-blue-500)',
              }}
              className="px-2 pointer-events-auto cursor-pointer"
              onClick={() => setState('Copy Wallet')}
            >
              Open inside a wallet
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <Button
            onClick={() => setState('Get Wallet')}
            variant={'secondary'}
            size={'full'}
            className="pointer-events-auto"
          >
            <div className="flex justify-center items-center font-normal gap-1">
              <p>Get a Wallet</p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12C7.95386 10.9486 9.2576 9.71803 10.3781 8.34007C10.5406 8.1402 10.5406 7.85977 10.3781 7.6599C9.2576 6.28194 7.95386 5.05132 6.5 3.99998"
                  stroke="currentColor"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Button>
          <Button variant={'link'} size={'full'}>
            Learn More
          </Button>
        </div>
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
      <div className="px-6 flex justify-center items-center flex-col gap-6">
        <img
          alt="something"
          src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4c14abdb-7e20-4c81-fe3c-0d210c0c7a00/public"
        />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[16px] text-[var(--color-fg-primary-depth)]">
            Open any Wallet app
          </h1>
          <p className="text-[var(--color-fg-primary-subdued)] text-[14px]">
            Open any wallet app and navigate to the in app browser of the
            wallet. Paste the copied url and you should be good to go.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <Button variant={'secondary'} size={'full'}>
            <div className="flex justify-center text-white items-center font-normal gap-1">
              <p>Link copied</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2679 11.2679C11.425 11.2446 11.5649 11.213 11.6967 11.1702C12.7115 10.8405 13.5071 10.0449 13.8369 9.03006C14 8.52795 14 7.90752 14 6.66667C14 5.42581 14 4.80539 13.8369 4.30328C13.5071 3.28848 12.7115 2.49287 11.6967 2.16314C11.1946 2 10.5742 2 9.33333 2C8.09248 2 7.47205 2 6.96994 2.16314C5.95515 2.49287 5.15954 3.28848 4.82981 4.30328C4.787 4.43505 4.75542 4.57498 4.73212 4.73212M11.2679 11.2679C11.3333 10.8262 11.3333 10.2485 11.3333 9.33333C11.3333 8.09248 11.3333 7.47205 11.1702 6.96994C10.8405 5.95515 10.0449 5.15954 9.03006 4.82981C8.52795 4.66667 7.90752 4.66667 6.66667 4.66667C5.75147 4.66667 5.17377 4.66667 4.73212 4.73212M11.2679 11.2679C11.2446 11.425 11.213 11.5649 11.1702 11.6967C10.8405 12.7115 10.0449 13.5071 9.03006 13.8369C8.52795 14 7.90752 14 6.66667 14C5.42581 14 4.80539 14 4.30328 13.8369C3.28848 13.5071 2.49287 12.7115 2.16314 11.6967C2 11.1946 2 10.5742 2 9.33333C2 8.09248 2 7.47205 2.16314 6.96994C2.49287 5.95515 3.28848 5.15954 4.30328 4.82981C4.43505 4.787 4.57498 4.75542 4.73212 4.73212M4.66667 9.50578L6.02414 10.8618C6.67703 9.72016 7.58058 8.74164 8.66667 8"
                  stroke="currentColor"
                  strokeWidth={1}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Button>
          <Button variant={'link'} size={'full'}>
            Get a Wallet
          </Button>
        </div>
      </div>
    );
  }
};
