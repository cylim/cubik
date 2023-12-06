import React, { ReactNode } from 'react';
import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

import { Logo } from '../Logo';

const navbarVariants = cva('', {
  variants: {
    variant: {
      square: 'rounded-lg',
      circle: 'rounded-full',
    },
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-8 h-8 md:w-10 md:h-10',
      lg: 'w-[3.375rem] h-[3.375rem]',
      xl: 'w-16 h-16',
      '2xl': 'w-20 h-20',
      '3xl': 'w-[5.875rem] h-[5.875rem]',
    },
  },
  defaultVariants: {
    variant: 'circle',
    size: 'md',
  },
});

interface NavbarProps extends VariantProps<typeof navbarVariants> {}

export const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-4 md:py-6 bg-[var(--body-surface)] border-b border-[var(--color-border-primary-base)] w-full top-0 bg-">
      <div className="container mx-auto max-w-[1320px] px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo variant="text" />
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};

export type { NavbarProps };
