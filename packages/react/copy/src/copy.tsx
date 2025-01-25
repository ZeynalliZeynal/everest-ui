import { cn } from "@everest-ui/utils";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

type CopyProps<C extends React.ElementType = "div"> =
  React.ComponentPropsWithoutRef<C> & {
    text: string;
    children:
      | (({ isCopying }: { isCopying: boolean }) => React.ReactNode)
      | React.ReactNode;
  };

export function Copy(props: CopyProps) {
  const [isCopying, setIsCopying] = React.useState(false);

  const { text, children, className } = props;

  return (
    <div className={cn("relative z-10", className)} {...props}>
      <span
        aria-hidden={true}
        className='absolute top-1/2 size-full translate-y-[-50%] flex items-center justify-center'
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
        className='absolute top-1/2 size-full translate-y-[-50%] flex items-center justify-center'
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
