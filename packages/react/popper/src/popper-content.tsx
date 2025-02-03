import { usePopper } from "./popper-context";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick, useResize } from "@everest-ui/react-hooks";
import React, { HTMLAttributes, useCallback } from "react";
import ReactFocusLock from "react-focus-lock";
import {
  POPPER_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
} from "@everest-ui/react-selectors";
import { chain } from "@everest-ui/utils";
import { PopperContentProps } from "./popper.types";
import {
  keyboardArrowNavigation,
  mergeRefs,
  alignPopper,
} from "@everest-ui/react-utils";
import clsx from "clsx";

export const PopperContent = React.forwardRef<
  HTMLDivElement,
  PopperContentProps
>((props, forwardRef) => {
  const {
    children,
    className,
    align = "center",
    side = "bottom",
    asChild,
    onKeyDown,
    ...etc
  } = props;
  const {
    isOpen,
    triggerPosition,
    closePopper,
    activeTrigger,
    highlightedIndex,
    setHighlightedIndex,
    highlight,
    id,
  } = usePopper();
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const ref = useOutsideClick({
    action: closePopper,
    selectors: [POPPER_SUB_CONTENT_SELECTOR],
  });

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      closePopper();
    }
    if (document.querySelector(POPPER_SUB_CONTENT_SELECTOR)) return;
    if (!ref.current) return;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const obj = keyboardArrowNavigation({
        event,
        highlightedIndex,
        itemSelector: POPPER_ITEM_SELECTOR,
      });
      setHighlightedIndex(obj?.nextIndex);
      highlight(obj?.menuItems[obj?.nextIndex] as HTMLElement);
    }
  }

  const handleResize = useCallback(() => {
    if (!ref.current || !triggerPosition) return;

    const dimensions = alignPopper({
      side,
      align,
      element: ref.current,
      triggerPosition,
    });

    setStyle(dimensions);
  }, [align, ref, side, triggerPosition]);

  useResize(isOpen, handleResize);

  const attrs = {
    "data-align": align,
    "data-side": side,
    tabIndex: -1,
    "data-state": isOpen ? "open" : "closed",
    "data-popper-content": "",
    "aria-orientation": "vertical",
    ref: mergeRefs(ref, forwardRef),
    id,
    className,
    onKeyDown: chain(handleKeyDown, onKeyDown),
    ...etc,
  } as HTMLAttributes<HTMLDivElement>;

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence onExitComplete={() => activeTrigger?.focus()}>
      {isOpen && triggerPosition && (
        <ReactFocusLock
          disabled={!isOpen}
          onDeactivation={() => activeTrigger?.focus()}
        >
          <motion.div
            animate={{
              opacity: 1,
              scale: 1,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            data-popper-wrapper=''
            style={{
              position: "fixed",
              pointerEvents: "auto",
              left: triggerPosition.left,
              ...style,
            }}
          >
            {asChild && React.isValidElement(children) ? (
              React.cloneElement(children, {
                ...attrs,
                className: clsx(
                  className,
                  (children.props as React.ComponentProps<"div">).className
                ),
              } as HTMLAttributes<HTMLElement>)
            ) : (
              <div {...attrs}>{children}</div>
            )}
          </motion.div>
        </ReactFocusLock>
      )}
    </AnimatePresence>,
    document.body
  );
});
PopperContent.displayName = "PopperContent";
