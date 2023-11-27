import React, { ReactNode } from 'react';
import Link from 'next/link';

import { Icon } from '../../../icons/icon';
import { cn } from '../../../lib/utils';
import { AvatarLabelGroup } from '../Avatar/AvatarLabelGroup';
import { Button } from '../Button';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  logo: string;
  name: string;
  description: string;
  Button: ReactNode;
  href: string;
}
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export const SaveButton = (props: ButtonProps) => {
  return (
    <Button
      style={{
        border: '2px solid rgba(138, 138, 138, 0.25)',
      }}
      variant="tertiary"
      size={'md'}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon
          name="bookmark"
          width={16}
          height={16}
          className="fill-none stroke-white"
        />
        <span className={cn('text-xs', 'lg:text-sm')}>Save</span>
      </div>
    </Button>
  );
};
export const ProjectCard = (props: Props) => {
  return (
    <>
      <Link href={props.href}>
        <div
          className={cn(
            props.className,
            'flex justify-between items-center px-6 py-5',
            'hover:bg-[#212121] rounded-lg',
          )}
          {...props}
        >
          <AvatarLabelGroup
            avatarSrc={props.logo ?? '/logo.svg'} // updated backup image
            size={'lg'}
            title={props.name}
            avatarShape="square"
            description={props.description}
          />
          {props.Button}
        </div>
      </Link>
    </>
  );
};
