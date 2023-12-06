import React from 'react'

const TabLayout = ({ children }: { children: React.ReactNode }) => {
    return (
     <div className='w-full py-[24px] md:py-[32px]'>
        <div className='mx-auto flex max-w-7xl flex-col gap-[24px] px-[16px] md:gap-[32px]'>
                {children}
        </div>
     </div>
  )
}

export default TabLayout
