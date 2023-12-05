'use client';

import ErrorComponent from '@/components/common/error-state/error-state';

import { Button } from '@cubik/ui';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <ErrorComponent
        title={'Not Found!'}
        description={
          'Well, this is awkward, the thing you were looking for could not be found.'
        }
        icon={'cloudError'}
      >
        <Button onClick={() => reset()}>Try again</Button>
      </ErrorComponent>
    </div>
  );
}
