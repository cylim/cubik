'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';

import { cn } from '../../../lib/utils';
import { Text } from '../text/text';
import { useTabMeasurements } from './useTabMeasurements';

export type TabContextType = {
  size: 'sm' | 'md' | 'lg';
  className?: string;
};

export const TabContext = createContext<TabContextType>({
  size: 'md',
  className: '',
});

const tabVariants = cva('', {
  variants: {
    size: {
      sm: 'pb-[4px]',
      md: 'pb-[8px]',
      lg: 'pb-[8px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const tabTextVariants = cva('', {
  variants: {
    size: {
      sm: 'b2 md:b3',
      md: 'b2',
      lg: 'b1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const tabTextContainerVariants = cva('', {
  variants: {
    size: {
      sm: 'p-[8px] md:p-[12px]',
      md: 'p-[8px] md:p-[12px]',
      lg: 'p-[12px] md:p-[16px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const tabListVariants = cva('', {
  variants: {
    size: {
      sm: 'flex flex-row pb-[4px] gap-[12px] md:gap-[16px]',
      md: 'flex flex-row pb-[8px] gap-[16px] md:gap-[20px]',
      lg: 'flex flex-row pb-[8px] gap-[20px] md:gap-[32px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface TabsProps {
  children: ReactNode;
  defaultValue?: number;
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

type TabListProps = {
  children: ReactNode;
  className?: string;
};

type TabProps = {
  children: ReactNode;
  value: number;
  className?: string;
};

type TabPanelsProps = {
  children: ReactNode;
  className?: string;
};

type TabPanelProps = {
  children: ReactNode;
  value: number;
};

export type SelectedTabContextType = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const SelectedTabContext = createContext<SelectedTabContextType | undefined>(
  undefined,
);

const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  size,
  className,
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(defaultValue ?? 0);

  return (
    <SelectedTabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <TabContext.Provider value={{ size, className }}>
        <RadixTabs.Root
          defaultValue={selectedTab.toString()}
          onValueChange={(value) => setSelectedTab(Number(value))}
          className={cn(
            tabVariants({ size }),
            className,
            'md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll',
          )}
        >
          {children}
        </RadixTabs.Root>
      </TabContext.Provider>
    </SelectedTabContext.Provider>
  );
};

const TabList: React.FC<TabListProps> = ({ children, className }) => {
  const { size } = useContext(TabContext);
  const tabListContainerRef = useRef<HTMLDivElement>(null);
  const context = useContext(SelectedTabContext);
  if (!context) {
    throw new Error(
      'TabList must be used within a SelectedTabContext.Provider',
    );
  }
  const { selectedTab } = context;
  console.log('selected tab', selectedTab);
  const tabListStyles = cn(tabListVariants({ size }));
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [, setForceUpdate] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // This will run after the component mounts and measurements are set
    if (!initialized) {
      setForceUpdate(true);
      setInitialized(true);
    }
  }, [initialized]);

  // Use the measurements from the useTabMeasurements hook
  const measurements = useTabMeasurements(
    tabsRef.current,
    tabListContainerRef.current,
  );

  const indicatorStyle: React.CSSProperties = measurements[selectedTab]
    ? {
        left: `${measurements[selectedTab]?.left}px`,
        width: `${measurements[selectedTab]?.width}px`,
        opacity: initialized ? 1 : 0,
        position: 'absolute',
        bottom: 0,
        borderRadius: '4px',
        WebkitTransform: `translateY(1px) translate3d(0, 0, 0)`, // For Safari
        transform: 'translateY(1px) translate3d(0, 0, 0)',
        WebkitTransition: `-webkit-transform 400ms cubic-bezier(0, 0, 0.2, 1), 
                           width 400ms cubic-bezier(0, 0, 0.2, 1),
                           opacity 400ms ease-in-out`, // For Safari
        transition: `transform 400ms cubic-bezier(0, 0, 0.2, 1), 
                     width 400ms cubic-bezier(0, 0, 0.2, 1),
                     opacity 400ms ease-in-out`,
      }
    : {
        opacity: 0,
        WebkitTransform: 'translate3d(0, 0, 0)', // For Safari
        transform: 'translate3d(0, 0, 0)',
      };

  return (
    <RadixTabs.List
      className={cn(tabListStyles, className)}
      style={{
        position: 'relative',
      }}
      ref={tabListContainerRef}
    >
      <>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as any, {
            ref: (el: HTMLElement | null) => (tabsRef.current[index] = el),
          });
        })}
      </>
      <div
        className={`bg-[var(--tab-fg-active)] h-[2px]`}
        style={indicatorStyle}
      />
    </RadixTabs.List>
  );
};

const Tab: React.FC<TabProps> = React.forwardRef<HTMLDivElement, TabProps>(
  ({ children, value, className }, ref: any) => {
    const { size } = useContext(TabContext);
    const context = useContext(SelectedTabContext);
    const selectedTab = context?.selectedTab;

    const tabStyles = cn(tabTextContainerVariants({ size }));

    return (
      <RadixTabs.Trigger
        value={value.toString()}
        className={`${tabStyles} ${className}`}
        ref={ref}
      >
        <Text
          className={cn(tabTextVariants({ size }))}
          color={selectedTab === value ? 'primary' : 'tertiary'}
        >
          {children}
        </Text>
      </RadixTabs.Trigger>
    );
  },
);

const TabPanels: React.FC<TabPanelsProps> = ({ children, className }) => (
  <div className={cn('w-full', className)}>{children}</div>
);

const TabPanel: React.FC<TabPanelProps> = ({ children, value }) => (
  <RadixTabs.Content value={value.toString()} className="w-full">
    {children}
  </RadixTabs.Content>
);

Tab.displayName = 'Tab';

export { Tabs, Tab, TabList, TabPanels, TabPanel };
