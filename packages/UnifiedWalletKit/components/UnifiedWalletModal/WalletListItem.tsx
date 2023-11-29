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

import { Avatar } from '@cubik/ui';

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
      <div className="w-fit-content  flex items-center justify-center gap-2 px-[16px] py-[12px]">
        <div
          className="ˀw-fit flex flex-col items-center justify-center gap-2"
          style={{ minWidth: width, minHeight: height }}
        >
          <Avatar alt={wallet.name} src={wallet.icon} size="lg" />
          {/* <Image
            className={`border border-blue-400 rounded-[8px] min-h-[${height}px]`}
            width={width}
            height={height}
            src={wallet.icon}
            alt={`${wallet.name} icon`}
            onError={onError}
          /> */}
          <p className="text-[var(--color-fg-primary)] line-clamp-1 text-[12px] md:text-[14px]">
            {wallet.name}
          </p>
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
    <li className="border border-red-500" onClick={handleClick}>
      {isSmallDevice ? (
        <WalletIcon wallet={wallet} width={48} height={48} />
      ) : (
        <WalletIcon wallet={wallet} width={60} height={60} />
      )}
      <span>{adapterName}</span>
    </li>
  );
};
