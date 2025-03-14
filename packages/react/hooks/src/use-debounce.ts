import React from "react";

/**
 * A hook that debounces a value.
 * @param value The value to debounce
 * @param delay The delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * @template T - The type of the callback function
 * @param {T} callback - The function to debounce
 * @param {number} delay - The delay in milliseconds before the callback is executed
 *
 * @returns {Object} An object containing the debounced callback and control functions
 * @returns {(...args: Parameters<T>) => void} returns.callback - The debounced version of the callback
 * @returns {() => void} returns.cancel - Function to cancel any pending debounced execution
 * @returns {(...args: Parameters<T>) => void} returns.flush - Function to immediately execute the callback
 */

export function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay?: number,
) {
  const callbackRef = React.useRef<T>(callback);
  // @ts-ignore
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = React.useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay || 500);
    },
    [delay],
  );

  const cancel = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const flush = React.useCallback(
    (...args: Parameters<T>) => {
      cancel();
      callbackRef.current(...args);
    },
    [cancel],
  );

  React.useEffect(() => {
    return cancel;
  }, [cancel]);

  return {
    callback: debouncedCallback,
    cancel,
    flush,
  };
}
