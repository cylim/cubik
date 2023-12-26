import React from 'react';

import { formatAddress } from '@cubik/common/formatters';
import { AvatarLabelGroup, CopyToClipboard, Text } from '@cubik/ui';

const ProfileHeader = ({
  profilePicture,
  username,
  address,
}: {
  profilePicture: string;
  username: string;
  address: string;
}) => {
  return (
    <div className="w-full bg-[var(--body-surface)] py-[32px] md:py-[64px]">
      <div className="mx-auto max-w-7xl px-[16px]">
        <AvatarLabelGroup avatarSrc={profilePicture} size="2xl" shape="circle">
          <div className="flex flex-col gap-2">
            <Text className="h3" color="primary">
              {username}
            </Text>
            <CopyToClipboard>{formatAddress(address)}</CopyToClipboard>
          </div>
        </AvatarLabelGroup>
      </div>
    </div>
  );
};

export default ProfileHeader;
