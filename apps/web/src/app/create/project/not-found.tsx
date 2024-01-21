import React from 'react';
import Link from 'next/link';

import { Button, EmptyState } from '@cubik/ui';

const NotFound = () => {
  return (
    <div className="w-full py-8">
      <EmptyState
        title={'404, Not Found!'}
        description={
          "Lost in Space? This page is off the map. Let's navigate back to familiar territory"
        }
        icon={'dangerSkullDuoSolid'}
      >
        <Link href={'/'}>
          <Button
            variant="outline"
            size="md"
            rightIconName="chevronRight"
            className="!px-6"
          >
            Go to Home
          </Button>
        </Link>
      </EmptyState>
    </div>
  );
};

export default NotFound;
