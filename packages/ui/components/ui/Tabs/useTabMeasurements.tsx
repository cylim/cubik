import { useLayoutEffect, useState } from 'react';

type Measurements = {
  left: number;
  width: number;
};

// This hook returns the left offset and the width of the tab element, which is needed for the indicator style
export function useTabMeasurements(
  tabRefs: (HTMLElement | null)[],
  tabListContainerRef: HTMLDivElement | null,
): Measurements[] {
  const [measurements, setMeasurements] = useState<Measurements[]>(
    tabRefs.map(() => ({ left: 0, width: 0 })),
  );

  useLayoutEffect(() => {
    if (!tabListContainerRef) {
      return;
    }

    const updateMeasurements = () => {
      const containerRect = tabListContainerRef.getBoundingClientRect();

      const newMeasurements = tabRefs.map((tabRef) => {
        if (tabRef && tabRef.offsetParent !== null) {
          const tabRect = tabRef.getBoundingClientRect();
          const left = tabRect.left - containerRect.left;
          const { width } = tabRect;
          return { left, width };
        }
        return { left: 0, width: 0 };
      });

      setMeasurements(newMeasurements);
    };

    const observer = new ResizeObserver(updateMeasurements);
    tabRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [tabRefs, tabListContainerRef]);

  return measurements;
}
