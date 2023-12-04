import { useState } from 'react';

import { Button, Text } from '@cubik/ui';

export type IOnboardingFlow = 'Onboarding' | 'Get Wallet' | 'Copy Wallet';

export const OnboardingFlow = () => {
  const [state, setState] = useState<IOnboardingFlow>('Onboarding');
  if (state === 'Onboarding') {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div
          className="flex flex-col items-center justify-center gap-4 py-8 md:py-14"
          color="secondary"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="something"
            src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Text className="h4 md:h5" color="primary">
              No Solana Wallet Found?
            </Text>
            <Text
              className="b2-light md:b3-light text-center"
              color="secondary"
            >
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
        <div className="flex w-full flex-col items-center justify-center gap-3 px-4 md:px-12">
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
      </div>
    );
  }
  if (state === 'Get Wallet') {
    return (
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        Get Wallet
      </div>
    );
  }
  if (state === 'Copy Wallet') {
    return (
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div
          className="flex flex-col items-center justify-center gap-4 py-8 md:py-14"
          color="secondary"
        >
          <img
            alt="something"
            src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/4c14abdb-7e20-4c81-fe3c-0d210c0c7a00/public"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Text className="h4 md:h5" color="primary">
              Open any Wallet app
            </Text>
            <Text
              className="b2-light md:b3-light text-center"
              color="secondary"
            >
              Open any wallet app and navigate to the in app browser of the
              wallet. Paste the copied url and you should be good to go.
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 px-4 md:px-12">
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
  return <></>;
};
