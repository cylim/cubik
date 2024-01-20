'use client';

import React from 'react';

import {
  AvatarLabelGroup,
  Button,
  Checkbox,
  Icon,
  SubHead,
  Tag,
  TagLabel,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@cubik/ui';

interface ITransactionsCard {
  children: React.ReactNode;
}

const TransactionsCard = ({ children }: ITransactionsCard) => {
  return (
    <div className="flex flex-col gap-14 rounded-xl bg-[var(--card-bg-primary)] p-6">
      {children}
    </div>
  );
};

const TransactionsCardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <AvatarLabelGroup
        size="md"
        title="Cubik"
        description="by @dhruv"
        avatarShape="square"
        avatarSrc="https://res.cloudinary.com/demonicirfan/image/upload/v1692786112/OG-Grant_23_tbhrsg.png"
      />
      <div className="flex gap-3">
        <Button
          rightIconName="add"
          rightIconColor="var(--color-fg-primary-inverse)"
          variant={'primary'}
        >
          Add Funds
        </Button>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </div>
    </div>
  );
};

const TransactionsCardBalance = () => {
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-2">
        <Text className="h5-light" color={'primary'}>
          Treasury Balance
        </Text>
        <Text className="h2-light" color={'primary'}>
          $20,000
        </Text>
      </div>
      <div className="flex  gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Promised Sponsorship Amount
            </Text>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  name={'infoCircleFilled'}
                  height={16}
                  width={16}
                  color="var(--color-surface-cool-emphasis)"
                  strokeWidth={1.2}
                  className=" hidden hover:stroke-[var(--color-bg-info)] md:block"
                />
              </TooltipTrigger>
              <TooltipContent>
                <Text className="l3-light">asdfasdfsdf</Text>
              </TooltipContent>
            </Tooltip>
          </div>
          <Text className="b1" color={'positive'}>
            $20,000
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Multisig Threashold
            </Text>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  name={'infoCircleFilled'}
                  height={16}
                  width={16}
                  color="var(--color-surface-cool-emphasis)"
                  strokeWidth={1.2}
                  className=" hidden hover:stroke-[var(--color-bg-info)] md:block"
                />
              </TooltipTrigger>
              <TooltipContent>
                <Text className="l3-light">2/3</Text>
              </TooltipContent>
            </Tooltip>
          </div>
          <Text className="b1" color={'positive'}>
            2/3
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Treasury Assets
            </Text>
          </div>
          <Text className="b1" color={'positive'}>
            $SOL + 2 Other
          </Text>
        </div>
      </div>
    </div>
  );
};

const TransactionSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <SubHead heading={'Transactions'}>
        <Button variant={'secondary'} size="md">
          Batch Transaction
        </Button>
      </SubHead>
      <div>select all</div>
      <div className="flex flex-col gap-3">
        <TransactionInfoCard />
        <TransactionInfoCard />
        <TransactionInfoCard />
      </div>
    </div>
  );
};

const TransactionInfoCard = () => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--color-border-primary-lightonly)] bg-[var(--card-surface-primary)] px-4 py-3">
      <Checkbox
        // checked={false}
        onCheckedChange={(e) => {
          console.log(e);
          // if (e) {
          //   setSelectedProjects([...selectedProjects, project.id]);
          // } else {
          //   setSelectedProjects(
          //     selectedProjects.filter(
          //       (id: number) => id !== project.id,
          //     ),
          //   );
          // }
        }}
      />
      <div className="flex items-center gap-1">
        <div className="rounded-lg bg-[var(--color-surface-info-transparent)] p-2 ">
          <Icon
            name="arrowUp"
            color="var(--color-fg-info-base)"
            height={16}
            width={16}
          />
        </div>
        Send
      </div>
      <div>
        <div className="flex flex-col">
          <Text className="l1" color={'primary'}>
            3 Tokens
          </Text>
          <Text className="l3-light" color={'secondary'}>
            $68
          </Text>
        </div>
      </div>
      <div className="flex flex-col">
        <Text className="l3" color={'secondary'}>
          To
        </Text>
        <Text className="l2-light" color={'primary'}>
          Tinydancer
        </Text>
      </div>
      <Tag color="orange" variant="subtle">
        <TagLabel>Waiting for Sign</TagLabel>
      </Tag>
      <div className="flex gap-3">
        <Button variant={'secondary'}>Confirm</Button>
        <Button leftIconName="threeDots" variant={'outline'} size="md" />
      </div>
    </div>
  );
};

export {
  TransactionsCard,
  TransactionsCardHeader,
  TransactionsCardBalance,
  TransactionSection,
};
