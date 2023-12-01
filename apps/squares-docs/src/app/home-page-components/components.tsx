import React from 'react';

const Background = () => {
  return (
    <div className="relative z-[1]">
      <div className="absolute right-[-10px] top-[-40px] z-0 h-[446px] w-[462px] rounded-full bg-[var(--gradient-yellow)]  blur-[120px] md:right-[-50px] md:top-[-340px]"></div>
      <div className="absolute right-[-100px] top-[-136px] z-0 h-[306px] w-[382px] rounded-full bg-[var(--gradient-blue)] blur-[120px] md:right-[250px] md:top-[-480px]"></div>
      <div className="absolute right-[-150px] top-[-120px] z-0 h-[446px] w-[462px] rounded-full bg-[var(--gradient-red)] blur-[120px] md:right-[500px] md:top-[-460px]"></div>
      <div className="absolute right-[-10px] top-[-100px] z-0 h-[600px] w-[600px] rounded-full bg-[var(--gradient-green)] blur-[180px] md:left-[-50px] md:top-[-580px]"></div>
    </div>
  );
};

export default Background;
