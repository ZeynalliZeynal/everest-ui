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
    isMounted,
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

  if (typeof document === "undefined") {
    return null;
  }
  if (isOpen && triggerPosition)
    return createPortal(
      <ReactFocusLock
        disabled={!isOpen}
        onDeactivation={() => activeTrigger?.focus()}
      >
        <div
          ref={mergeRefs(ref, forwardRef)}
          id={id}
          tabIndex={-1}
          data-align={align}
          data-side={side}
          data-state={!isMounted ? "open" : "closed"}
          data-popper-content
          aria-orientation='vertical'
          {...etc}
          onKeyDown={chain(handleKeyDown, onKeyDown)}
          data-popper-wrapper=''
          style={{
            position: "fixed",
            pointerEvents: "auto",
            zIndex: 100,
            left: triggerPosition.left,
            ...style,
          }}
        >
          {children}
        </div>
      </ReactFocusLock>,
      document.body
    );
});
PopperContent.displayName = "PopperContent";
