import React from "react";

export interface UseCopyProps {
  text: string;
  duration?: number;
}

export function useCopy({ text, duration = 1500 }: UseCopyProps) {
  const [copying, setCopying] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopying(true);
      setTimeout(() => setCopying(false), duration);
    } catch (err) {
      console.log("Could not copy text", err);
    }
  };

  return [copying, copy] as const;
}
