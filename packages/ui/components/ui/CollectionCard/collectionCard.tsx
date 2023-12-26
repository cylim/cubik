import React, { ReactNode } from 'react';

// import Link from 'next/link';

import { cn } from '../../../lib/utils';
import { AvatarGroup } from '../Avatar/AvatarGroup';
import { Text } from '../text/text';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  logo: string;
  name: string;
  description: string;
  Button?: ReactNode;
  href: string;
}

export const CollectionCard = (props: Props) => {
  return (
    <>
      {/* <Link href={props.href}> */}
      <div
        className={cn(
          props.className,
          'p-[4px] flex justify-between items-center',
        )}
        {...props}
      >
        <div className="flex items-center flex-row gap-4">
          <AvatarGroup
            variant={'squared-horizontal'}
            shape="square"
            avatars={[
              { src: props.logo, alt: props.name },
              { src: props.logo, alt: props.name },
              { src: props.logo, alt: props.name },
              { src: props.logo, alt: props.name },
              { src: props.logo, alt: props.name },
            ]}
            size={'md'}
          />
          <div className="flex flex-1 flex-col w-full gap-1">
            <Text className="h4 md:h5" color="primary">
              Solana Social
            </Text>
            <Text className="l1-light md:l2-light" color="secondary">
              Web3 Social apps that are built on Solana blockchain
            </Text>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
