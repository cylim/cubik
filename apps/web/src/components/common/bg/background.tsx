import React from 'react';

const Background = () => {
  return (
    <div className="absolute z-[-1]">
      <div className="top-0 z-[1] h-screen w-screen overflow-hidden">
        <div className="relative top-0 z-[1] mx-auto h-screen w-screen max-w-[1000px]">
          <div className="absolute left-[0px] z-0 h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[var(--gradient-green)] blur-[200px] md:blur-[120px]" />
          <div className="absolute left-[33%] z-0 h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[var(--gradient-yellow)] blur-[200px] md:blur-[120px]" />
          <div className="absolute right-[33%] z-0 h-[200px] w-[200px] translate-x-[50%] translate-y-[-50%] rounded-full bg-[var(--gradient-blue)] blur-[200px] md:blur-[120px]" />
          <div className="absolute right-[0px] z-0 h-[200px] w-[200px] translate-x-[50%] translate-y-[-50%] rounded-full bg-[var(--gradient-red)] blur-[200px] md:blur-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default Background;
