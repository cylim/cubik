'use client';

import React, { CSSProperties } from 'react';
import { Fira_Code } from 'next/font/google';
import SyntaxHighlighter from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
  dark,
  githubGist,
  lightfair,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast } from 'sonner';

import { Button, Icon, useTheme } from '@cubik/ui';

interface Props {
  codeString?: string;
}

const firacode = Fira_Code({
  subsets: ['latin', 'cyrillic-ext'],
  weight: '300',
});

const CodeComponent = ({ codeString }: { codeString: string }) => {
  const { theme, toggleTheme } = useTheme();
  // const codeString = `import { React } from 'react';`;

  const customStyle: CSSProperties = {
    fontSize: '16px',
    padding: '16px',
    lineHeight: '1.5',
    ...firacode.style,
  };

  const CopyButton = () => (
    <Button
      size="sm"
      onClick={() => {
        navigator.clipboard.writeText(codeString);
        toast.success('Copied to clipboard!');
      }}
      variant="outline"
    >
      <Icon
        name="copy"
        strokeWidth={2}
        width={20}
        height={20}
        stroke="var(--color-fg-primary)"
        fill="transparent"
      />
    </Button>
  );

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute right-[10px] top-[10px]">
          <CopyButton />
        </div>
        <SyntaxHighlighter
          language={jsx}
          style={{
            ...githubGist,
            ...(theme === 'dark' ? dark : {}),
          }}
          customStyle={customStyle}
        >
          {codeString.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeComponent;
