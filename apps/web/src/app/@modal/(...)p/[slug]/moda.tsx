'use client';

import React, { useCallback, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}
export const CustomModal = ({ children }: Props) => {
  return (
    <>
      <div className="h-screen w-full bg-black ">{children}</div>
    </>
  );
};
