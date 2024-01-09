'use client';

import React, { ReactNode } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

import { Icon } from '../../../icons/icon';
import { iconLibrary } from '../../../icons/iconLibrary';
import { cn } from '../../../lib/utils';

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

type TabListProps = {
  children: ReactNode;
  className?: string;
};

type TabProps = {
  children: ReactNode;
  value: string;
  className?: string;
  leftIconName?: keyof typeof iconLibrary;
};

type TabPanelsProps = {
  children: ReactNode;
  className?: string;
};

type TabPanelProps = {
  children: ReactNode;
  value: string;
  className?: string;
};

const VerticalTabs = ({ children, defaultValue, className }: TabsProps) => (
  <RadixTabs.Root
    defaultValue={defaultValue}
    orientation="vertical"
    className={cn('flex h-full w-full pointer-events-auto', className)}
  >
    {children}
  </RadixTabs.Root>
);

const VerticalTabList: React.FC<TabListProps> = ({ children, className }) => (
  <RadixTabs.List
    className={cn('shrink-0 flex flex-col gap-2 px-6 w-[265px]', className)}
  >
    {children}
  </RadixTabs.List>
);

const VerticalTab = ({
  children,
  value,
  className,
  leftIconName,
}: TabProps) => {
  return (
    <RadixTabs.Trigger
      value={value}
      className={cn(
        'bg-white flex items-center justify-start leading-none select-none rounded-lg p-2 bg-[var(--menu-list-item-surface-default)] text-[var(--menu-list-item-fg-default)] data-[state=active]:bg-[var(--menu-list-item-surface-hovered)] data-[state=active]:text-[var(--menu-list-item-fg-hovered)] stroke-[var(--menu-list-item-icon)] data-[state=active]:stroke-[var(--menu-list-item-fg-hovered)] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-pointer',
        className,
      )}
    >
      <div className="flex gap-[10px] items-center ">
        {leftIconName && <Icon name={leftIconName} height={20} width={20} />}
        {children}
      </div>
    </RadixTabs.Trigger>
  );
};

const VerticalTabPanels = ({ children, className }: TabPanelsProps) => (
  <div className={cn('w-full h-full', className)}>{children}</div>
);

const VerticalTabPanel = ({ children, value, className }: TabPanelProps) => (
  <RadixTabs.Content
    value={value}
    className={cn(
      'grow p-5 bg-[var(--modal-body-surface)] outline-none w-full h-full',
      className,
    )}
  >
    {children}
  </RadixTabs.Content>
);

VerticalTab.displayName = 'VerticalTab';

export {
  VerticalTabs,
  VerticalTab,
  VerticalTabList,
  VerticalTabPanels,
  VerticalTabPanel,
};
