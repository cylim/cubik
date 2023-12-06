import React from 'react';

import { AvatarLabelGroup } from '../../ui/Avatar/AvatarLabelGroup';

interface Props {
  title: string;
  description: string;
  avatar: string;
}
export const ProfileCard = ({ avatar, description, title }: Props) => {
  return (
    <div className="w-full py-[32px] md:py-[64px] bg-[var(--body-surface)]">
      <div className="max-w-7xl mx-auto px-[16px]">
        <AvatarLabelGroup
          avatarSrc={avatar}
          title={title}
          size="2xl"
          shape="circle"
          description={description}
        />
      </div>
    </div>
  );
};
