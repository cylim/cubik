import React from 'react';
import Leaderboard from '@/app/grant/Leaderboard';

import { AvatarLabelGroup, Button, Icon, Text } from '@cubik/ui';

const GrantPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="bg-[var(--body-surface)]">
        <div className="mx-auto flex max-w-7xl items-center">
          <div className="my-16 flex w-full flex-col items-center justify-center gap-9 px-6">
            <div className="h-[200px] w-full bg-blue-400"></div>
            <div className=" flex w-full justify-between gap-4">
              <div className="flex flex-col gap-2">
                <Text className="h2" color={'primary'}>
                  Cubik Grants Round 1
                </Text>
                <Text className="l1" color={'secondary'}>
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
              </div>
              <div className="flex flex-col gap-3">
                <Button size={'md'} variant={'primary'} className="w-full">
                  Submit Project
                </Button>
                <Button size={'md'} variant={'outline'}>
                  <div className="flex gap-2">
                    Become a sponsor
                    <Icon
                      name="externalLink"
                      height={16}
                      width={16}
                      color="var(--button-secondary-text-disabled)"
                    />
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div>
                <Text className="l1" color={'secondary'}>
                  Matching Pool
                </Text>
                <Text className="h4-heavy" color={'primary'}>
                  $300,000
                </Text>
              </div>
              <div>
                <Text className="l1" color={'secondary'}>
                  Projects
                </Text>
                <Text className="h4-heavy" color={'primary'}>
                  30
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto flex max-w-7xl items-center">
          <div className=" flex w-full items-start justify-between gap-[120px] px-6">
            <div className="flex flex-[0.6] flex-col gap-11">
              <div className="flex flex-col gap-6">
                <Text className="h5" color={'primary'}>
                  About Grants Round
                </Text>
                <Text className="l1" color={'secondary'}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit sit amet feugiat lectus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Praesent auctor purus luctus enim
                  egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                  Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus. Curabitur tempor quis
                  eros tempus lacinia.
                </Text>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl bg-[--card-surface-primary] px-4 py-3">
                <div className="flex flex-col gap-2">
                  <Text className="h6" color={'primary'}>
                    Refer Projects to Grants Round
                  </Text>
                  <Text className="l3-light" color={'secondary'}>
                    Share your unique referral code to projects and increase
                    your sybil score hence match more while contributing
                  </Text>
                </div>

                <div className="flex w-full flex-row justify-between gap-2 rounded-lg bg-[var(--color-surface-primary-transparent)] px-3 py-2 align-bottom">
                  <Text
                    className="l2 line-clamp-1  overflow-hidden"
                    color="secondary"
                  >
                    {`https://cubik.so/projects/undefined`}
                  </Text>
                  <Icon
                    name="copy"
                    color="var(--menu-header-fg)"
                    height={18}
                    width={18}
                  />
                </div>
              </div>
              {/* leaderboard */}
              <Leaderboard />
            </div>
            <div className="flex flex-[0.3] flex-col gap-11">
              <div className="flex w-full flex-col gap-6">
                <Text className="h6" color={'primary'}>
                  Voting Starts in
                </Text>
                <div className="flex w-full gap-2">
                  <div className="flex flex-1 flex-col items-center rounded-lg border border-[var(--color-border-primary-subdued)] bg-[var(--body-surface)] p-[10px]">
                    <Text className="b1" color={'primary'}>
                      10
                    </Text>
                    <Text className="l3" color={'primary'}>
                      Days
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center rounded-lg border border-[var(--color-border-primary-subdued)] bg-[var(--body-surface)] p-[10px]">
                    <Text className="b1" color={'primary'}>
                      5
                    </Text>
                    <Text className="l3" color={'primary'}>
                      Hours
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center rounded-lg border border-[var(--color-border-primary-subdued)] bg-[var(--body-surface)] p-[10px]">
                    <Text className="b1" color={'primary'}>
                      20
                    </Text>
                    <Text className="l3" color={'primary'}>
                      Min
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <Text color={'primary'}>Grant Sponsors</Text>
                <div className="flex flex-col gap-4">
                  <AvatarLabelGroup
                    size="sm"
                    title="Solana Foundation"
                    avatarShape="square"
                    avatarSrc={
                      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public'
                    }
                  />
                  <AvatarLabelGroup
                    size="sm"
                    title="Solana Foundation"
                    avatarShape="square"
                    avatarSrc={
                      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public'
                    }
                  />
                  <AvatarLabelGroup
                    size="sm"
                    title="Solana Foundation"
                    avatarShape="square"
                    avatarSrc={
                      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public'
                    }
                  />
                  <AvatarLabelGroup
                    size="sm"
                    title="Solana Foundation"
                    avatarShape="square"
                    avatarSrc={
                      'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/d1513aa9-d2b4-482f-8091-5c21aa68c000/public'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantPage;
