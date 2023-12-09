import React from 'react';
import { useRouter } from 'next/navigation';

import { Button, ButtonProps } from '../Button';

interface Props extends ButtonProps {}
export const PreviousButton = (props: Props) => {
  return (
    <Button
      {...props}
      leftIconName="chevronLeft"
      size={'md'}
      type="button"
      variant={'outline'}
    >
      Previous
    </Button>
  );
};
export const NextButton = (props: Props) => {
  return (
    <Button
      {...props}
      rightIconName="chevronRight"
      size={'md'}
      type="button"
      variant={'outline'}
    >
      Next
    </Button>
  );
};

export const PaginationCounterButton = (props: Props) => {
  return (
    <Button {...props} size={'md'} type="button">
      {props.children}
    </Button>
  );
};

interface PaginationProps {
  page: number;
  maxPage: number;
}
export const PaginationButton = ({ page, maxPage }: PaginationProps) => {
  const router = useRouter();
  const pages = Array.from(Array(maxPage));

  return (
    <div className="flex h-14 w-full items-center justify-between px-1">
      <PreviousButton
        onClick={() => {
          router.push(`/grants?section=projects&page=${page - 1}`, {
            scroll: false,
          });
        }}
        disabled={page === 1 ? true : false}
      />
      {pages.length > 6 ? (
        <div className="flex gap-2">
          <div className="flex gap-2">
            {pages.slice(0, 3).map((e, index) => {
              return (
                <PaginationCounterButton
                  key={index}
                  onClick={() => {
                    router.push(`/grants?section=projects&page=${index + 1}`, {
                      scroll: false,
                    });
                  }}
                  variant={page === index + 1 ? 'secondary' : 'outline'}
                  size={'md'}
                >
                  {index + 1}
                </PaginationCounterButton>
              );
            })}
          </div>
          <PaginationCounterButton variant={'outline'} size={'md'}>
            ...
          </PaginationCounterButton>
          <div className="flex gap-2">
            {pages.slice(-3).map((e, index) => {
              return (
                <PaginationCounterButton
                  key={index}
                  variant={
                    page === pages.length - (3 - index - 1)
                      ? 'secondary'
                      : 'outline'
                  }
                  size={'md'}
                  onClick={() => {
                    router.push(
                      `/grants?section=projects&page=${
                        pages.length - (3 - index - 1)
                      }`,
                      {
                        scroll: false,
                      },
                    );
                  }}
                >
                  {pages.length - (3 - index - 1)}
                </PaginationCounterButton>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          {pages.map((e, index) => {
            return (
              <PaginationCounterButton
                key={index}
                variant={page === index + 1 ? 'secondary' : 'outline'}
                size={'md'}
                onClick={() => {
                  router.push(`/grants?section=projects&page=${index + 1}`, {
                    scroll: false,
                  });
                }}
              >
                {index + 1}
              </PaginationCounterButton>
            );
          })}
        </div>
      )}

      <NextButton
        disabled={maxPage < page + 1 ? true : false}
        onClick={() => {
          router.push(`/grants?section=projects&page=${page + 1}`, {
            scroll: false,
          });
        }}
      />
    </div>
  );
};
