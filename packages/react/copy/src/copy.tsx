import { chain } from "@everest-ui/chain";
import { useCopy } from "@everest-ui/react-hooks";
import { cn } from "@everest-ui/utils";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

export interface CopyProps {
  text: string;
  children:
    | (({ isCopying }: { isCopying: boolean }) => React.ReactNode)
    | React.ReactNode;
}

const CopyContext = React.createContext<{ copying: boolean } | null>(null);

function useCopyContext() {
  const context = React.useContext(CopyContext);
  if (!context) {
    throw new Error("useCopyContext must be used within a Copy");
  }
  return context;
}

export function Copy({ children, text }: CopyProps) {
  const [copying, copy] = useCopy({ text });

  <CopyContext.Provider value={{ copying }}>
    {React.isValidElement(children) &&
      React.cloneElement(children, {
        onClick: chain(
          (children.props as React.HTMLAttributes<HTMLElement>).onClick,
          copy
        ),
      } as React.HTMLAttributes<HTMLElement>)}
  </CopyContext.Provider>;
}

export function CopyIndicator({
  className,
  ...rest
}: React.ComponentProps<"div">) {
  const { copying } = useCopyContext();

  return (
    <div className={cn("relative z-10", className)} {...rest}>
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
