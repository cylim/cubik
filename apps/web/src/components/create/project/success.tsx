import React from 'react';

import { Button, Text } from '@cubik/ui';

export const Success = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Text color={'primary'} className="h3">
            Project Created Successfully
          </Text>
          <Text color={'secondary'} className="b3-light">
            Your Project has been created successfully, now you can participate
            in any grants round.
          </Text>
        </div>
        <div>
          <Button variant={'primary'} rightIconName="chevronRight">
            Apply for Grant
          </Button>
          <Button variant={'outline'}>Open Project</Button>
        </div>
      </div>
    </>
  );
};
