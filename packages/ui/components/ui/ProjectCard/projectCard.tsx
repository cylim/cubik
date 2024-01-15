import React, { ReactNode } from 'react';
import Link from 'next/link';

// import Link from 'next/link';

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
  href: string;
  name?: string;
  description?: string;
  Button?: ReactNode;
  children?: ReactNode;
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
      variant="secondary"
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
      <Link className="w-full" href={props.href}>
        <div
          className={cn(
            props.className,
            'p-[12px] flex animate-in cursor-pointer rounded-xl bg-gradient-to-bl hover:from-[var(--color-surface-primary-base)] hover:to-transparent justify-between items-center',
          )}
          {...props}
        >
          <AvatarLabelGroup
            avatarSrc={props.logo ?? '/logo.svg'} // updated backup image
            size={'xl'}
            avatarShape="square"
          >
            {props.children}
          </AvatarLabelGroup>
        </div>
      </Link>
    </>
  );
};
