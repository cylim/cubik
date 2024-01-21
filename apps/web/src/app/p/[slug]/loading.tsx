import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

const Loading = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4"
      ></div>
    );
  },
);

Loading.displayName = 'Loading';
export default Loading;
