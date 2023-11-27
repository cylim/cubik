'use client';

import type { MouseEventHandler } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@/utils/chakra';

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}
export const CustomModal = ({ children }: Props) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      <div className="bg-[rgba(0, 0, 0.10)] min-h-screen">sss</div>
    </>
  );
};
