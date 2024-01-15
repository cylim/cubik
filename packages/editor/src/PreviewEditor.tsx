import React from 'react';
import DOMPurify from 'dompurify';

import { cn } from '@cubik/ui/lib/utils';

interface Props {
  content: string;
  className?: string;
}
export const PreviewEditor = ({ content, className }: Props) => {
  const safeContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });
  return (
    <div
      style={{
        minHeight: '20rem',
        height: '30rem',
      }}
      className={cn('ProseMirror rounded-lg  overflow-scroll', className)}
    >
      <div dangerouslySetInnerHTML={{ __html: safeContent }} />
    </div>
  );
};
