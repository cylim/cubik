import React from 'react';

import { Text } from '@cubik/ui';
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
        'mx-auto my-20 flex max-w-xl flex-col items-center justify-center gap-[56px]',
        className,
      )}
    >
      <div className="flex max-w-xl flex-col items-center justify-center gap-[14px]">
        <Text className="h3" color={'primary'}>
          {title}
        </Text>
        <Text className="b3 text-center" color={'secondary'}>
          {subtitle}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
