import { useResize } from "@everest-ui/react-hooks";
import { chain, cn } from "@everest-ui/utils";
import React, { HTMLAttributes, useCallback } from "react";
import { usePopper } from "./popper-context";
import { PopperTriggerProps } from "./popper.types";

export function PopperTrigger(props: PopperTriggerProps) {
  const {
    children,
    asChild,
    suffix,
    prefix,
    disabled,
    onMouseDown,
    className,
    onClick,
    ...etc
  } = props;
  const { openPopper, id, setTriggerPosition, isOpen } = usePopper();

  const ref = React.useRef<HTMLButtonElement | null>(null);

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    openPopper(event);
  }

  const handleResize = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTriggerPosition(rect);
  }, [setTriggerPosition]);

  useResize(isOpen, handleResize);

  const attrs = {
    ref,
    role: "button",
    "aria-controls": id,
    "aria-expanded": isOpen,
    "data-disabled": disabled,
    "data-state": isOpen ? "open" : "closed",
    onMouseDown: chain(handleMouseDown, onMouseDown),
    onClick: chain(handleMouseDown, onClick),
    className,
    ...etc,
  };

  return asChild && React.isValidElement(children) ? (
    React.cloneElement(children, {
      ...attrs,
      className: cn(
        className,
        (children.props as React.ComponentProps<"button">).className
      ),
    } as HTMLAttributes<HTMLElement>)
  ) : (
    <button {...attrs}>{children}</button>
  );
}
