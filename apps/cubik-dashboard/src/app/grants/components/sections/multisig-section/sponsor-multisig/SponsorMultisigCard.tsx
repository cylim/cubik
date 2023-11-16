import React from 'react';
import { MultisigCard } from '@/app/grants/components/cards/MultisigCard';
import { MultisigInfo } from '@/app/grants/components/sections/multisig-section/cubik-multisig/MultisigInfo';

import { AvatarLabelGroup, Button, Icon, SubHead } from '@cubik/ui';

export const SponsorMultisigCard = () => {
  return (
    <MultisigCard>
      <MultisigInfo
        subhead={
          <AvatarLabelGroup
            title="Squads Labs"
            shape="circle"
            size="md"
            avatarShape="circle"
            avatarSrc={
              'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg'
            }
            longDescription="bg @stephan"
          />
        }
      />
      <div className="flex h-[5rem] w-full items-center justify-center">
        <Button size={'md'} variant={'tertiary'}>
          <div className="flex items-center justify-center gap-2">
            <p>View Details</p>
            <div className="flex items-center justify-center">
              <Icon name="chevronDown" fill="none" width={20} height={20} />
            </div>
          </div>
        </Button>
      </div>
    </MultisigCard>
  );
};
