import React from 'react';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { Text } from '../text/text';

interface Props {
  iconName: keyof typeof iconLibrary;
  title: string;
  value: string;
  iconColor: string;
  iconBg: string;
}

const StatsCard = ({ iconName, title, value, iconColor, iconBg }: Props) => {
  return (
    <div className="flex gap-4 bg-[var(--color-surface-primary-depth)] p-4 rounded-lg">
      <div className={`bg-[${iconBg}] rounded-[4px] p-[14px]`}>
        <Icon name={iconName} width={24} height={24} color={iconColor} />
      </div>

      <div className="flex flex-col">
        <Text className="l3-light" color={'secondary'}>
          {title}
        </Text>
        <Text className="h5" color={'primary'}>
          {`$ ${value}`}
        </Text>
      </div>
    </div>
  );
};

export { StatsCard };
