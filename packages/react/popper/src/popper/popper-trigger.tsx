import { Button } from "@/components/ui/button";
import React, { HTMLAttributes, useCallback } from "react";
import { usePopper } from "./popper-context";
import { PopperTriggerProps } from "../popper.types";
import { useResize } from "@everest-ui/react-hooks";
import { chain } from "@everest-ui/chain";
import { cn } from "@everest-ui/utils";

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
      className: cn(className, children.props.className),
    } as HTMLAttributes<HTMLElement>)
  ) : (
    <Button size="md" suffix={suffix} prefix={prefix} {...attrs}>
      {children}
    </Button>
  );
}
