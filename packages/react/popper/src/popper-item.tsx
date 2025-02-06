import React, { HTMLAttributes } from "react";
import { PopperItemProps } from "./popper.types";
import { usePopper } from "./popper-context";
import { POPPER_ITEM_SELECTOR } from "@everest-ui/react-selectors";
import { mergeRefs } from "@everest-ui/react-utils";
import { chain } from "@everest-ui/utils";
import clsx from "clsx";

export const PopperItem = React.forwardRef<HTMLDivElement, PopperItemProps>(
  (props, forwardRef) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const {
      children,
      onClick,
      className,
      onMouseEnter,
      onMouseLeave,
      onKeyDown,
      asChild,
      disabled,
      suffix,
      prefix,
      ...etc
    } = props;
    const { closePopper, highlightedItem, highlight } = usePopper();

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
      if (disabled) return;
      event.currentTarget.tabIndex = 0;
      highlight(event.currentTarget);
      onMouseEnter?.(event);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
      event.currentTarget.tabIndex = -1;
      highlight(null);
      onMouseLeave?.(event);
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        ref.current?.click();
      }
    }

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
      const target = event.target as HTMLElement;
      if (target.closest(POPPER_ITEM_SELECTOR)?.hasAttribute("aria-controls"))
        return;
      event.stopPropagation();
      closePopper();
    }

    const attrs = {
      ref: mergeRefs(ref, forwardRef),
      tabIndex: -1,
      "data-popper-item": "",
      role: "menuitem",
      "data-disabled": disabled ? "" : null,
      "data-highlighted": highlightedItem === ref.current ? "" : null,
      className,
      onClick: !disabled ? chain(onClick, handleClick) : undefined,
      onMouseEnter: !disabled ? handleMouseEnter : undefined,
      onMouseLeave: !disabled ? handleMouseLeave : undefined,
      onKeyDown: !disabled ? chain(handleKeyDown, onKeyDown) : undefined,
      ...etc,
    } as HTMLAttributes<HTMLElement>;

    return asChild && React.isValidElement(children) ? (
      React.cloneElement(children, {
        ...attrs,
        className: clsx(
          className,
          (children.props as React.ComponentProps<"div">).className,
        ),
      } as HTMLAttributes<HTMLElement>)
    ) : (
      <div {...attrs}>{children}</div>
    );
  },
);

PopperItem.displayName = "PopperItem";
