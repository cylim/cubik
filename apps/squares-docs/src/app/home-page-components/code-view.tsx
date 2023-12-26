import React, { useState } from 'react';
import RightIcon from '@geist-ui/icons/chevronRight';
import { toast } from 'sonner';

import { cn } from '@cubik/ui';
import CodeComponent from '@/app/home-page-components/code-component';

export interface CodeViewProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
}
const CodeView = React.forwardRef<HTMLDivElement, CodeViewProps>(
    ({ className, code, ...props }, ref) => {
        const [visible, setVisible] = useState(false);
        const [rotate, setRotate] = useState(false);
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
                        <div className="flex h-9 w-full cursor-pointer items-center justify-between rounded-sm border border-gray-500 p-4">
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
                                <span>Code View</span>
                            </div>
                        </div>
                    </summary>
                    <CodeComponent codeString={code} />
                </details>
            </div>
        );
    },
);

CodeView.displayName = 'CodeView';

export default CodeView;
