import React from 'react';

import { Button } from '@cubik/ui';

const SubmitButton = () => {
  return (
    <div className="mt-6 w-full pt-6 md:mt-12 md:pt-12">
      <Button size={'xl'} className="w-full" type="submit">
        Proceed to Payment
      </Button>
    </div>
  );
};

export default SubmitButton;
