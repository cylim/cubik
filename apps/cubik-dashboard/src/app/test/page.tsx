'use client';

import React, { useState } from 'react';

import { Button, UserModal } from '@cubik/ui';

const TestPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserModal open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Open</Button>
    </div>
  );
};

export default TestPage;
