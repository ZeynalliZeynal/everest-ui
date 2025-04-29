import React from "react";

/**
 * Configuration options for the useCopy hook
 */
export interface UseCopyProps {
  /**
   * The text content to be copied to clipboard
   * @example
   * "Hello world!"
   */
  content: string;
  /**
   * Duration in milliseconds to show the "copied" state
   * @default 1500
   * @example
   * 3000 // 3 seconds
   */
  duration?: number;
}

/**
 * A React hook for copying text to clipboard with visual feedback
 *
 * @param {UseCopyProps} config - Configuration object
 * @returns {[boolean, () => Promise<void>]} A tuple containing:
 *   - `copying`: boolean state indicating if content was recently copied
 *   - `copy`: function to trigger the copy operation
 *
 * @example
 * // Basic usage
 * const [copying, copy] = useCopy({ content: "Text to copy" });
 *
 * @example
 * // With custom duration
 * const [copying, copy] = useCopy({
 *   content: "Text to copy",
 *   duration: 2000
 * });
 *
 * @remarks
 * This hook uses the modern Clipboard API. For older browsers, you might need a polyfill.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API | MDN Clipboard API}
 */
export function useCopy({ content, duration = 1500 }: UseCopyProps) {
  const [copying, setCopying] = React.useState(false);

  /**
   * Copies the content to clipboard and manages the copying state
   * @async
   */
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopying(true);
      setTimeout(() => setCopying(false), duration);
    } catch (err) {
      console.error("Could not copy text", err);
    }
  };

  return [copying, copy] as const;
}
