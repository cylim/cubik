import React, { CSSProperties, useState } from 'react';
import RightIcon from '@geist-ui/icons/chevronRight';
import { toast } from 'sonner';

import { Icon, cn, useTheme, Text } from '@cubik/ui';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
    dark,
    githubGist,
    lightfair,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Fira_Code } from 'next/font/google';

const firacode = Fira_Code({
    subsets: ['latin', 'cyrillic-ext'],
    weight: '300',
});

const customStyle: CSSProperties = {
    fontSize: '16px',
    padding: '16px',
    lineHeight: '1.5',
    ...firacode.style,
};

export interface CodeViewProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
}
const CodeView = React.forwardRef<HTMLDivElement, CodeViewProps>(
    ({ className, code, ...props }, ref) => {
        const [visible, setVisible] = useState(false);
        const [rotate, setRotate] = useState(false);
        const { theme } = useTheme();
        const clickHandler = (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            setVisible(!visible);
            setRotate(!rotate);
        };

        const copyHandler = (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            navigator.clipboard.writeText(code);
            toast.success('Copied to clipboard!');
        };

        return (
            <div className={cn(className, 'editor')} ref={ref} {...props}>
                <details
                    style={{
                        transition: 'all 0.2s ease',
                    }}
                    className="overflow-hidden"
                    open={visible}
                >
                    <summary
                        className="box-border w-full select-none"
                        style={{
                            listStyle: 'none',
                            outline: 'none',
                        }}
                        onClick={clickHandler}
                    >
                        <div className="flex h-9 w-full cursor-pointer items-center justify-between p-4">
                            <div className="flex w-auto items-center text-xs">
                                <span
                                    style={{
                                        transition: 'all 0.2s ease',
                                        transform: rotate ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate the icon based on rotate state
                                    }}
                                    className="mr-2 inline-flex h-4 w-4 items-center"
                                >
                                    <RightIcon size={16} />
                                </span>
                                <Text color="primary">{visible ? 'Hide Code' : 'View Code'}</Text>
                            </div>
                            <div className="flex w-auto items-center text-xs">
                                {visible && (
                                    <span
                                        style={{
                                            transition: 'color 0.2s ease',
                                        }}
                                        className="inline-flex items-center"
                                        onClick={copyHandler}
                                        title='Copy Code'>
                                        <Icon
                                            name="copy"
                                            strokeWidth={2}
                                            width={18}
                                            height={18}
                                            stroke="var(--color-fg-primary)"
                                            fill="transparent"
                                        />
                                    </span>
                                )}
                            </div>
                        </div>
                    </summary>
                    <div className="relative box-border overflow-hidden whitespace-pre px-6">
                        <SyntaxHighlighter
                            language={jsx}
                            style={{
                                ...githubGist,
                                ...(theme === 'dark' ? dark : {}),
                            }}
                            customStyle={customStyle}
                        >
                            {code.trim()}
                        </SyntaxHighlighter>
                    </div>
                </details>
            </div>
        );
    },
);

CodeView.displayName = 'CodeView';

export default CodeView;
