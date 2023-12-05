import React from 'react';

import { AvatarLabelGroup } from '../../ui/Avatar/AvatarLabelGroup';

interface Props {
  title: string;
  description: string;
  avatar: string;
}
export const ProfileCard = ({ avatar, description, title }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      <AvatarLabelGroup
        avatarSrc={avatar}
        title={title}
        size="2xl"
        shape="circle"
        description={description}
      />
    </div>
  );
};
