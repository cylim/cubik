import React from 'react';

// Define the type of the callback function
type Callback = () => void;

export function useAutosave(
  callback: Callback,
  delay: number = 1000,
  deps: ReadonlyArray<any> = [],
  isActive: boolean = true,
): void {
  const savedCallback = React.useRef<Callback>(); // to save the current "fresh" callback

  // keep callback ref up to date
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // create the interval and run callback on dependency change with a delay
  React.useEffect(() => {
    if (!isActive) {
      console.log('Autosave is not active');
      return; // If the hook is not active, exit early
    }

    // function to call the callback
    function runCallback() {
      savedCallback.current && savedCallback.current();
    }

    // Timeout to delay the execution on dependency change
    const delayTimeout = setTimeout(runCallback, 5000); // 5-second delay

    // Run the interval
    if (typeof delay === 'number') {
      let interval = setInterval(runCallback, delay);
      // clean up on unmount or dependency change
      return () => {
        clearInterval(interval);
        clearTimeout(delayTimeout);
      };
    }

    // Clean up only the timeout on dependency change
    return () => clearTimeout(delayTimeout);
  }, [delay, isActive, ...deps]);
}
