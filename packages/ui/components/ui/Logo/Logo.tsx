import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn, handleMediaQuery } from '../../../lib/utils';

const logoVariants = cva('', {
  variants: {
    variant: {
      icon: '',
      full: '',
      text: '',
    },
    size: {
      xs: '',
      sm: 'w-[24px] h-auto',
      md: 'w-[32px] h-auto',
      lg: '',
      xl: '',
      '2xl': '',
      '3xl': '',
    },
  },
  defaultVariants: {
    variant: 'full',
    size: 'md',
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {}

// size: md, variant: icon
export const Logo = ({ size, variant }: LogoProps) => {
  return (
    <span className="flex flex-row gap-2">
      <span
        className={cn(
          `${variant === 'text' && 'hidden'}`,
          handleMediaQuery([
            {
              className: logoVariants({
                size: size,
                variant,
              }),
              type: 'default',
            },
            {
              className: logoVariants({
                size: 'sm',
                variant,
              }),
              type: 'sm',
            },
          ]),
        )}
      >
        <svg viewBox="0 0 43 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6849 0.213702C21.1891 -0.0712339 21.8109 -0.0712339 22.3151 0.213702L42.1891 11.4459C42.691 11.7296 43 12.2526 43 12.8185V21.355C43 21.8997 42.7135 22.4063 42.2412 22.6969L39.3776 24.4583L41.7514 25.8311C42.2454 26.1168 42.5483 26.6355 42.5483 27.1957V35.7322C42.5483 36.2826 42.2559 36.7937 41.7756 37.0825L22.3533 48.764C21.8353 49.0756 21.1822 49.0789 20.6608 48.7724L0.7869 37.091C0.298574 36.8039 0 36.2884 0 35.7322V12.8185C0 12.2526 0.309016 11.7296 0.810945 11.4459L20.6849 0.213702ZM36.2348 22.6408L38.2318 21.4124L21.4785 11.944L11.3824 17.3516V19.9293L20.6756 14.5962C21.1861 14.3032 21.8196 14.3043 22.3292 14.5989L36.2348 22.6408ZM39.7479 18.6027V13.7328L21.5 3.41963L3.2521 13.7328V33.0348L20.7097 23.5629C21.2061 23.2936 21.8106 23.2965 22.3042 23.5706L39.2962 33.0042V28.0995L21.4968 17.8058L10.5807 24.0702C10.078 24.3587 9.45533 24.3624 8.949 24.0799C8.44268 23.7973 8.13025 23.2719 8.13025 22.7028V16.4128C8.13025 15.8339 8.45355 15.3009 8.97375 15.0223L20.7174 8.73225C21.2165 8.46496 21.8225 8.47175 22.3151 8.75017L39.7479 18.6027ZM37.733 35.7868L21.4908 26.7694L4.87034 35.7871L21.4903 45.5559L37.733 35.7868Z"
            fill="var(--color-fg-primary-depth)"
          />
        </svg>
      </span>
      <p
        className={`${
          variant === 'icon' && 'hidden'
        } my-auto text-center text-[var(--color-fg-primary-depth)] text-lg font-bold leading-8 tracking-[0.2em] uppercase`}
      >
        Cubik
      </p>
    </span>
  );
};

export type { LogoProps };
