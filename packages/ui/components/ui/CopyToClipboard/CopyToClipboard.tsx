import React from 'react';
import { useCopyToClipboard, useMediaQuery } from 'usehooks-ts';

import { Icon } from '../../../icons/icon';

const CopyToClipboard = ({
  children,
  copyItem,
}: {
  children: string | React.ReactNode;
  copyItem: string;
}) => {
  const [value, copy] = useCopyToClipboard();
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="flex flex-row gap-2 items-center justify-start color-[var(--color-fg-primary-subdued)]">
      {children}
      {value === copyItem ? (
        <Icon
          name={'copied'}
          width={isMobile ? 18 : 20}
          height={isMobile ? 18 : 20}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        />
      ) : (
        <div className="pointer" onClick={() => copy(copyItem)}>
          <Icon
            name={'copy'}
            width={isMobile ? 18 : 20}
            height={isMobile ? 18 : 20}
          />
        </div>
      )}
      {/* {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && <p>Copied {state.value}</p>
      )} */}
    </div>
  );
};

export { CopyToClipboard };
