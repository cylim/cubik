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

import { Avatar, Text } from '@cubik/ui';

import { useMediaQuery } from '../../hooks/helperHooks';
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
          width: 'clamp(84px,10vw,102px)',
          height: 'clamp(108px,10vw,100px)',
        }}
        className="flex items-center justify-center gap-2 px-[16px] py-[12px]"
      >
        <div
          className="w-fit flex flex-col items-center justify-center gap-2"
          style={{ minWidth: width, minHeight: height }}
        >
          <Avatar alt={wallet.name} src={wallet.icon} size="md" />
          {/* <Image
            className={`border border-blue-400 rounded-[8px] min-h-[${height}px]`}
            width={width}
            height={height}
            src={wallet.icon}
            alt={`${wallet.name} icon`}
            onError={onError}
          /> */}
          <Text className="b4 md:b4-light" color="primary">
            {wallet.name}
          </Text>
        </div>
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
