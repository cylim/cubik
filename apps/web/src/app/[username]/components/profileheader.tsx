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
          <div className="flex flex-col gap-1 md:gap-2">
            <Text className="h3 md:h4 lowercase" color="primary">
              @{username}
            </Text>
            <CopyToClipboard copyItem={address}>
              <Text className="b3 md:b3" color={'tertiary'}>
                {formatAddress(address)}
              </Text>
            </CopyToClipboard>
          </div>
        </AvatarLabelGroup>
      </div>
    </div>
  );
};

export default ProfileHeader;
