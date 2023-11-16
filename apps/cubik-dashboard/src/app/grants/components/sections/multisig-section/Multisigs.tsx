import React from 'react';

import {
  Segment,
  SegmentContainer,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
  SubHead,
} from '@cubik/ui';

import { CubikMultisig } from './cubik-multisig';
import { SponsorMultisig } from './sponsor-multisig';
import TreasuryCard from './TreasuryCard';

export const MultisigSection = () => {
  return (
    <div className="my-5 flex items-center justify-between px-3 md:px-0 ">
      <div className="w-full">
        <SubHead heading="Overview" size="md" />
        <div className="my-6 grid w-full grid-cols-3 space-x-6">
          <TreasuryCard
            iconName="USDC"
            title="Matching Amount"
            amount="50,000"
            symbol="$"
            classname="bg-yellow-500"
          />
          <TreasuryCard
            iconName="bank"
            title="All Treasuries Balance"
            amount="38,000"
            symbol="$"
            classname="bg-green-500"
          />
          <TreasuryCard
            iconName="piggyBank"
            title="Total Treasuries"
            amount="3"
            symbol=""
            classname="bg-purple-500"
          />
        </div>
        <SegmentContainer size="sm">
          <Segment defaultValue="cubik">
            <div className="flex justify-between">
              <SubHead heading="Multisig" size="md" />
              <SegmentList className="max-w-[20rem]" position="end">
                <SegmentTrigger value="cubik">Cubik Multisig</SegmentTrigger>
                <SegmentTrigger value="sponsor">
                  Sponsor Multisig
                </SegmentTrigger>
              </SegmentList>
            </div>
            <SegmentContent value={'cubik'}>
              <CubikMultisig />
            </SegmentContent>
            <SegmentContent value="sponsor">
              <SponsorMultisig />
            </SegmentContent>
          </Segment>
        </SegmentContainer>
      </div>
    </div>
  );
};
