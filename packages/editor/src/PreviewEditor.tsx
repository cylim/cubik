import React from 'react';
import DOMPurify from 'dompurify';

interface Props {
  content: string;
}
export const PreviewEditor = ({ content }: Props) => {
  const safeContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });
  return (
    <div
      style={{
        height: '20rem',
      }}
      className="bg-[var(--form-input-surface-default)] ProseMirror  rounded-lg border border-[var(--form-input-border-default)]"
    >
      <div dangerouslySetInnerHTML={{ __html: safeContent }} />
    </div>
  );
};
