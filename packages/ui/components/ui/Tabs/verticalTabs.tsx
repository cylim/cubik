// import React from 'react';
// import * as RadixTabs from '@radix-ui/react-tabs';

// import { Icon } from '../../../icons/icon';
// import { Text } from '../text/text';

// const TabsDemo = () => (
//   <RadixTabs.Root
//     className="flex h-[400px]"
//     defaultValue="tab1"
//     orientation="vertical"
//   >
//     <RadixTabs.List
//       className="shrink-0 flex flex-col gap-2 px-6 w-[265px]"
//       aria-label="Manage your account"
//     >
//       <RadixTabs.Trigger
//         className="bg-white flex items-center justify-start leading-none select-none rounded-lg p-2 bg-[var(--menu-list-item-surface-default)] text-[var(--menu-list-item-fg-default)] data-[state=active]:bg-[var(--menu-list-item-surface-hovered)] data-[state=active]:text-[var(--menu-list-item-fg-hovered)] stroke-[var(--menu-list-item-icon)] data-[state=active]:stroke-[var(--menu-list-item-fg-hovered)] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-pointer"
//         value="tab1"
//       >
//         <div className="flex gap-[10px] items-center ">
//           <Icon name={'userSecurity'} stroke="inherit" height={20} width={20} />
//           <Text className="l2">Account</Text>
//         </div>
//       </RadixTabs.Trigger>
//       <RadixTabs.Trigger
//         className="bg-white flex items-center justify-start leading-none select-none rounded-lg p-2 bg-[var(--menu-list-item-surface-default)] text-[var(--menu-list-item-fg-default)] data-[state=active]:bg-[var(--menu-list-item-surface-hovered)] data-[state=active]:text-[var(--menu-list-item-fg-hovered)] stroke-[var(--menu-list-item-icon)] data-[state=active]:stroke-[var(--menu-list-item-fg-hovered)] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-pointer"
//         value="tab2"
//       >
//         <div className="flex gap-[10px] items-center ">
//           <Icon name={'userSecurity'} stroke="inherit" height={20} width={20} />

//           <Text className="l2 ">Account</Text>
//         </div>
//       </RadixTabs.Trigger>
//     </RadixTabs.List>
//     <RadixTabs.Content
//       className="grow p-5 bg-[var(--form-input-surface-default)] outline-none "
//       value="tab1"
//     >
//       <Text className="l2" color={'primary'}>
//         Make changes to your account here. Click save when you're done.
//       </Text>
//     </RadixTabs.Content>
//     <RadixTabs.Content
//       className="grow p-5 bg-[var(--form-input-surface-default)] outline-none "
//       value="tab2"
//     >
//       <Text className="l2" color={'primary'}>
//         Change your password here. After saving, you'll be logged out.
//       </Text>
//     </RadixTabs.Content>
//   </RadixTabs.Root>
// );

// export { TabsDemo };

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
};

const VerticalTabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  className,
}) => (
  <RadixTabs.Root
    defaultValue={defaultValue}
    orientation="vertical"
    className={cn('flex h-[400px] w-full', className)}
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

const VerticalTab: React.FC<TabProps> = ({
  children,
  value,
  className,
  leftIconName,
}) => {
  return (
    <RadixTabs.Trigger
      value={value}
      className={cn(
        'bg-white flex items-center justify-start leading-none select-none rounded-lg p-2 bg-[var(--menu-list-item-surface-default)] text-[var(--menu-list-item-fg-default)] data-[state=active]:bg-[var(--menu-list-item-surface-hovered)] data-[state=active]:text-[var(--menu-list-item-fg-hovered)] stroke-[var(--menu-list-item-icon)] data-[state=active]:stroke-[var(--menu-list-item-fg-hovered)] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-pointer',
        className,
      )}
    >
      <div className="flex gap-[10px] items-center ">
        {leftIconName && (
          <Icon name={leftIconName} stroke="inherit" height={20} width={20} />
        )}
        {children}
      </div>
    </RadixTabs.Trigger>
  );
};

const VerticalTabPanels: React.FC<TabPanelsProps> = ({
  children,
  className,
}) => <div className={cn('w-full h-full', className)}>{children}</div>;

const VerticalTabPanel: React.FC<TabPanelProps> = ({ children, value }) => (
  <RadixTabs.Content
    value={value}
    className="grow p-5 bg-[#E0E0E0] outline-none w-full h-full"
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
