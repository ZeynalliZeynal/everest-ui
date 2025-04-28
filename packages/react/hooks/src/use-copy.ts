import React from "react";

export interface UseCopyProps {
  text: string;
  duration?: number;
}

export function useCopy({ content, duration = 1500 }: UseCopyProps) {
  const [copying, setCopying] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopying(true);
      setTimeout(() => setCopying(false), duration);
    } catch (err) {
      console.log("Could not copy text", err);
    }
  };

  return [copying, copy] as const;
}
