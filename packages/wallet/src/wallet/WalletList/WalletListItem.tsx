'use client';

import React, {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  MouseEventHandler,
  //  useCallback,
  useMemo,
} from 'react';
//import Image from 'next/image';
import { Adapter } from '@solana/wallet-adapter-base';

import { Avatar, Spinner, Text } from '@cubik/ui';
import { useMediaQuery } from '@cubik/ui/hooks';

import UnknownIconSVG from '../../icons/UnknownIconSVG';

export interface WalletIconProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  wallet: Adapter | null;
  width?: number;
  height?: number;
}

export const WalletIcon: FC<WalletIconProps> = ({
  wallet,
  width = 24,
  height = 24,
}) => {
  //const [hasError, setHasError] = React.useState(false);

  // const onError = useCallback(() => setHasError(true), []);

  if (wallet && wallet.icon) {
    // && !hasError
    return (
      <div
        style={{
          width: 'clamp(80px,10vw,102px)',
          height: 'clamp(94px,10vw,100px)',
          minWidth: width,
          minHeight: height,
        }}
        className="flex items-center justify-center gap-2 px-[12px] w-fit flex-col py-[4px] md:px-[16px] md:py-[12px]"
      >
        {wallet.connecting ? (
          <div className="w-12 h-12 flex justify-center items-center">
            <Spinner color="black" />
          </div>
        ) : (
          <Avatar alt={wallet.name} src={wallet.icon} size="md" />
        )}
        <Text className="b4 md:b4-light line-clamp-1" color="primary">
          {wallet.name}
        </Text>
      </div>
    );
  } else {
    return (
      <div style={{ minWidth: width, minHeight: height }}>
        <UnknownIconSVG width={width} height={height} />
      </div>
    );
  }
};

export interface WalletListItemProps {
  handleClick: MouseEventHandler<HTMLLIElement>;
  wallet: Adapter;
}

export const WalletListItem = ({
  handleClick,
  wallet,
}: WalletListItemProps) => {
  const adapterName = useMemo(() => {
    if (!wallet) return '';
    return wallet.name;
  }, [wallet?.name]);

  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <li onClick={handleClick}>
      {isSmallDevice ? (
        <WalletIcon wallet={wallet} width={48} height={48} />
      ) : (
        <WalletIcon wallet={wallet} width={60} height={60} />
      )}
      <span>{adapterName}</span>
    </li>
  );
};
