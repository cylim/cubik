import React from 'react';

import { Background, Text } from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
};

const FormContainer = ({ title, subtitle, className, children }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto px-5 min-h-[120vh] md:px-8 my-8 md:my-20 flex max-w-xl flex-col items-center justify-start gap-8 md:gap-14',
        className,
      )}
    >
      <div className="absolute top-0 w-full">
        <Background />
      </div>
      <div className="flex max-w-xl flex-col  items-center justify-center gap-1 md:gap-2">
        <Text className="h3" color={'primary'}>
          {title}
        </Text>
        <Text className="b3 text-center mx-2" color={'secondary'}>
          {subtitle}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
