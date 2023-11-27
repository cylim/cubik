'use client';

import { useRouter } from 'next/navigation';
import { SOL, USDC } from '@/app/components/common/tags/TokenTags';
import Username from '@/app/components/common/username';
import { TruncatedAddr } from '@/app/components/common/wallet';
import { formatNumberWithK } from '@/utils/helpers/formatNumberWithK';
import { timeSince } from '@/utils/helpers/timeSince';
import { fullTokenList } from '@/utils/helpers/tokenlist';

import { Avatar, TableCell, TableRow } from '@cubik/ui';

type Props = {
  id: string;
  avatar: string;
  username: string;
  walletAddress: string;
  amount: number;
  timestamp: Date;
  token: string;
  usd: number;
};

export const ContributorRow: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <TableRow
      onClick={() => {
        router.push(`/${props?.username}`);
      }}
    >
      <TableCell>
        <div className="flex items-start gap-2 md:gap-4">
          <Avatar
            src={props.avatar}
            alt="avatar image"
            className="h-[36px] w-[36px] md:h-[44px] md:w-[44px]"
          />

          <div className="flex flex-col items-start justify-center space-y-2">
            <Username isLoading={false} username={props?.username} size="sm" />

            <div className="text-md text-gray-700">
              {TruncatedAddr({
                walletAddress: props.walletAddress,
              })}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            {fullTokenList.find(
              (e) => e.name.includes('Solana') && e.address === props.token,
            ) && <SOL size={'32px'} />}
            {fullTokenList.find(
              (e) => e.name.includes('USDC') && e.address === props.token,
            ) && <USDC size={'32px'} />}
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <div className="flex items-baseline gap-1 text-white">
              <p className="text-xl">{formatNumberWithK(props.amount)}</p>
              <p className="text-xl">
                {fullTokenList.find((e) => e.address === props.token)?.name}
              </p>
            </div>
            <p className="text-md text-gray-800">
              ${formatNumberWithK(props.usd)}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <p className="text-md text-gray-800 md:text-sm">
          {timeSince(new Date(props.timestamp))}
        </p>
      </TableCell>
      <TableCell>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94994 6.70698L7.65694 5.99998L1.99994 0.342983L0.585938 1.75698L4.82794 5.99998L0.585938 10.243L1.99994 11.657L6.94994 6.70698Z"
            fill="white"
          />
        </svg>
      </TableCell>
    </TableRow>
  );
};
