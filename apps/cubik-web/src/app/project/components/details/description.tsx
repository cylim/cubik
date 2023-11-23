'use client';

import React, { useState } from 'react';
// import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { Button, Icon, Popover } from '@cubik/ui';

interface Props {
  longDescription: string;
}
export const Description = ({ longDescription }: Props) => {
  // const newTheme = {
  //   a: (props: LinkProps) => {
  //     const { children } = props;
  //     return (
  //       <Link color="#A8F0E6" href={props.href} textDecor="none" isExternal>
  //         {children}
  //       </Link>
  //     );
  //   },
  //   p: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <p className="text-xs font-normal leading-5 text-[#D7E0DF] md:text-sm md:leading-6">
  //         {children}
  //       </p>
  //     );
  //   },
  //   h1: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Box as="p" textStyle={'title2'} color="#FFFFFF">
  //         {children}
  //       </Box>
  //     );
  //   },
  //   h2: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Box as="p" textStyle={'title2'} color="#FFFFFF">
  //         {children}
  //       </Box>
  //     );
  //   },
  //   h3: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Box as="p" textStyle={'title2'} color="#FFFFFF">
  //         {children}
  //       </Box>
  //     );
  //   },
  //   h4: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Box as="p" textStyle={'title2'} color="#FFFFFF">
  //         {children}
  //       </Box>
  //     );
  //   },
  //   h5: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Box as="p" textStyle={'title2'} color="#FFFFFF">
  //         {children}
  //       </Box>
  //     );
  //   },
  //   li: (props: any) => {
  //     const { children } = props;
  //     return (
  //       <Text
  //         as="li"
  //         ml="1rem"
  //         fontSize={{ base: '14px', md: '16px' }}
  //         lineHeight={{ base: '24px', md: '24px' }}
  //         fontWeight="400"
  //         letterSpacing="normal"
  //         color="#D7E0DF"
  //       >
  //         {children}
  //       </Text>
  //     );
  //   },
  // };
  const isShortDescription = longDescription.length < 800;
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-40 flex w-full flex-col gap-2 self-start">
        <div className="relative w-full max-w-[20rem] items-start space-y-2 overflow-hidden md:max-w-full">
          <ReactMarkdown
            // components={ChakraUIRenderer(newTheme)}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {readMore ? longDescription : longDescription.slice(0, 800)}
          </ReactMarkdown>

          <div className="pt-5">
            {/* Need to update the icon */}
            <Button
              variant={'link'}
              onClick={() => setReadMore(!readMore)}
              className={`${
                isShortDescription ? 'hidden' : 'flex'
              } min-h-10 z-999 h-full w-full p-0 text-white`}
            >
              <div className="flex items-center justify-center gap-2">
                <p> Read {readMore ? 'Less' : 'More'}</p>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5C2.46033 3.32735 4.17223 4.9641 6.09042 6.36775C6.33138 6.54408 6.66862 6.54408 6.90958 6.36775C8.82777 4.9641 10.5397 3.32735 12 1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
