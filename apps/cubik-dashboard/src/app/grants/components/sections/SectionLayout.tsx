import React from 'react';

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-6 py-6 md:gap-14 md:py-14">
      {children}
    </div>
  );
};

export default SectionLayout;
