import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-[24px] px-[12px] py-[24px] md:gap-[32px] md:px-[24px] md:py-[48px]">
      {children}
    </div>
  );
};

export default PageLayout;
