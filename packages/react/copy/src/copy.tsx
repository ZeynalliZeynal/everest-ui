import { cn } from "@everest-ui/utils";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

export interface CopyProps extends React.ComponentProps<"div"> {
  copying: boolean;
}

export function Copy(props: CopyProps) {
  const { copying, className } = props;

  return (
    <div className={cn("relative z-10", className)} {...props}>
      <span
        aria-hidden={true}
        className='absolute top-1/2 size-6 translate-y-[-50%] flex items-center justify-center'
      >
        <FiCopy
          className={cn("transition-all absolute", {
            "scale-100": !copying,
            "scale-0": copying,
          })}
        />
      </span>
      <span
        aria-hidden={true}
        className='absolute top-1/2 size-6 translate-y-[-50%] flex items-center justify-center'
      >
        <FaCheck
          className={cn("transition-all absolute", {
            "scale-100": copying,
            "scale-0": !copying,
          })}
        />
      </span>
    </div>
  );
}
