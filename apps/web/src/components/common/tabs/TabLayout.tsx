import React from 'react';

const TabLayout = ({
  children,
  previousTabValue,
  currentTabValue,
}: {
  children: React.ReactNode;
  previousTabValue?: number;
  currentTabValue?: number;
}) => {
  return (
    <div
      //  transition={{ duration: 5 }}
      className="size-full  overflow-y-scroll py-[24px] md:py-[32px]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-[24px] px-[16px] md:gap-[32px] md:px-[32px]">
        {children}
      </div>
    </div>
  );
};

export default TabLayout;
