'use client';

import React from 'react';

import { Project_Backup } from '@cubik/common';
import { getValidToken } from '@cubik/common/tokens/getValidTokenList';
import {
  AvatarGroup,
  AvatarLabelGroup,
  Button,
  Checkbox,
  Icon,
  InputLabel,
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

interface TransactionsCardHeaderProps {
  name: string;
  logo: string;
  username: string;
}

const TransactionsCardHeader = ({
  logo,
  name,
  username,
}: TransactionsCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <AvatarLabelGroup
        size="md"
        title={name}
        description={`by @${username}`}
        avatarShape="square"
        avatarSrc={logo || Project_Backup}
      />
      <div className="flex gap-3">
        <Button rightIconName="plus" variant={'primary'}>
          Add Funds
        </Button>
        <Button leftIconName="threeDots" variant={'secondary'} size="md" />
      </div>
    </div>
  );
};

interface TreasuriesAssets {
  token: string;
  amount: number;
}
interface TransactionsCardBalanceProps {
  totalCommitted: number;
  assets: TreasuriesAssets[];
}

const TransactionsCardBalance = ({
  totalCommitted,
  assets,
}: TransactionsCardBalanceProps) => {
  const validTokens = getValidToken();
  const assetList = assets.map((asset) => {
    const token = validTokens.find((token) => token.address === asset.token);
    return {
      alt: token?.symbol || '',
      src: token?.logoURI || Project_Backup,
    };
  });
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
        {/* Promised Amount  */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Promised Sponsorship Amount
            </Text>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  name={'infoCircleDuoSolid'}
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
            ${totalCommitted}
          </Text>
        </div>
        {/* Multisig Threshold  */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Multisig Threshold
            </Text>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  name={'infoCircleDuoSolid'}
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

        {/* Treasury assets  */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text className="l2-light" color={'secondary'}>
              Treasury Assets
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <AvatarGroup
              avatars={assetList || []}
              shape="circle"
              variant="circular"
              size="sm"
            />
            <Text className="l1" color={'primary'}>
              {assetList[0].alt + ' ' + `${assetList.length - 1} Other`}
            </Text>
          </div>
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
      <div className="flex items-center gap-2">
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
        <InputLabel>Select All</InputLabel>
      </div>
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
