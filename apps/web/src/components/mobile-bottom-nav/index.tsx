'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Icon } from '@cubik/ui';

const BottomNav = (props: { name: any }) => {
  const [activeTabs, setActiveTabs] = useState(props.name);
  const router = useRouter();
  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        //router.push('/')
        break;
      case 'search':
        //router.push('/search')
        break;
      case 'saved':
        //router.push('/saved')
        break;
      case 'dhruvsol':
        //router.push('/account')
        break;
      default:
        //router.push('/')
        break;
    }
  }, [activeTabs]);

  return (
    <div className="fixed bottom-0 h-[80px] w-[100%] border-t border-[var(--color-border-primary-base)] bg-[var(--body-surface)]">
      <div
        className={
          'mx-auto flex w-full max-w-[348px] translate-y-[1px] flex-row items-center justify-between px-[16px]'
        }
      >
        <div className={`border-t-[2px] border-white p-3`}>
          <Icon
            name={'home'}
            stroke="var(--color-fg-primary-depth)"
            width={28}
            height={28}
            fill={
              activeTabs === 'home'
                ? 'var(--color-fg-primary-depth)'
                : 'var(--body-surface)'
            }
          />
        </div>
        <div className={'p-3'}>
          <Icon
            name={'search'}
            width={28}
            stroke="var(--color-fg-primary-depth)"
            height={28}
            fill={
              activeTabs === 'search'
                ? 'var(--color-fg-primary-depth)'
                : 'var(--body-surface)'
            }
          />
        </div>
        <div className={'p-3'}>
          <Icon
            name={'bell'}
            width={28}
            stroke="var(--color-fg-primary-depth)"
            height={28}
            fill={
              activeTabs === 'saved'
                ? 'var(--color-fg-primary-depth)'
                : 'var(--body-surface)'
            }
          />
        </div>
        <div className={'p-3'} onClick={() => router.push('/dhruvsol')}>
          <Icon
            name={'bell'}
            width={28}
            stroke="var(--color-fg-primary-depth)"
            height={28}
            fill={
              activeTabs === 'dhruvsol'
                ? 'var(--color-fg-primary-depth)'
                : 'var(--body-surface)'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
