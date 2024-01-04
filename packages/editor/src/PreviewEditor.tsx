import React from 'react';

interface Props {
  content: string;
}
export const PreviewEditor = ({ content }: Props) => {
  return <div>{content}</div>;
};
