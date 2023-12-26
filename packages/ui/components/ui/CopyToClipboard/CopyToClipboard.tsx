import React from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';

import { Icon } from '../../../icons/icon';

const CopyToClipboard = ({ children }: { children: string }) => {
  const [value, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="flex flex-row gap-4 items-center justify-start color-[var(--color-fg-primary-subdued)]">
      {children}
      {value ? (
        <div className="pointer" onClick={() => copyToClipboard(children)}>
          <Icon
            name={'copy'}
            width={20}
            height={20}
            // stroke="--var(--color-fg-primary-subdued)"
          />
        </div>
      ) : (
        <Icon name={'copied'} width={20} height={20} />
      )}
      {value}
      {/* {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && <p>Copied {state.value}</p>
      )} */}
    </div>
  );
};

export { CopyToClipboard };
