import { AnimatePresence, motion } from "framer-motion";
import React, { HTMLAttributes, useCallback } from "react";
import { createPortal } from "react-dom";
import { usePopperSub } from "./popper-sub-context";
import { PopperSubContentProps } from "./popper.types";
import { usePopper } from "./popper-context";
import { useOutsideClick, useResize } from "@everest-ui/react-hooks";
import { POPPER_ITEM_SELECTOR } from "@everest-ui/react-selectors";
import { chain } from "@everest-ui/utils";
import clsx from "clsx";
import { keyboardArrowNavigation, mergeRefs } from "@everest-ui/react-utils";

export const PopperSubContent = React.forwardRef<
  HTMLDivElement,
  PopperSubContentProps
>((props, forwardRef) => {
  const { children, className, asChild, onKeyDown, ...etc } = props;
  const { highlight, isOpen: isParentOpen } = usePopper();
  const {
    isOpen,
    isMounted,
    triggerPosition,
    closePopper,
    activeTrigger,
    highlightedIndex,
    setHighlightedIndex,
    id,
  } = usePopperSub();
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const ref = useOutsideClick({ action: closePopper });

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!ref.current) return;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const obj = keyboardArrowNavigation({
        event,
        highlightedIndex,
        itemSelector: POPPER_ITEM_SELECTOR,
      });
      setHighlightedIndex(obj?.nextIndex);
      highlight(obj?.menuItems[obj?.nextIndex] as HTMLElement);
    }
  }

  function handleMouseLeave(event: React.MouseEvent) {
    const relatedTarget = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if (relatedTarget && relatedTarget !== activeTrigger) {
      closePopper();
    }
  }

  const handleResize = useCallback(() => {
    if (!ref.current || !triggerPosition) return;

    const canFitRight =
      window.innerWidth - triggerPosition.left - triggerPosition.width >
      ref.current.offsetWidth;

    const newLeft = canFitRight
      ? triggerPosition.left + triggerPosition.width
      : triggerPosition.left - ref.current.offsetWidth;

    setStyle({
      top: triggerPosition.top,
      left: newLeft - 1,
    });
  }, [ref, triggerPosition]);

  useResize(isOpen, handleResize);

  React.useEffect(() => {
    if (!ref.current) return;
    function handleCloseOnKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        highlight(activeTrigger);
        closePopper();
      }
    }
    document.addEventListener("keydown", handleCloseOnKeyDown);

    return () => document.removeEventListener("keydown", handleCloseOnKeyDown);
  }, [activeTrigger, closePopper, ref]);

  const attrs = {
    tabIndex: -1,
    "data-state": isOpen ? "open" : "closed",
    "data-popper-sub-content": "",
    "aria-orientation": "vertical",
    "aria-labelledby": id,
    ref: mergeRefs(ref, forwardRef),
    id,
    className,
    onKeyDown: chain(handleKeyDown, onKeyDown),
    onMouseLeave: handleMouseLeave,
    ...etc,
  } as HTMLAttributes<HTMLDivElement>;

  if (typeof document === "undefined") {
    return null;
  }

  if (isParentOpen && isOpen && triggerPosition)
    return createPortal(
      <div
        {...attrs}
        style={{
          position: "fixed",
          pointerEvents: "auto",
          zIndex: 100,
          ...style,
        }}
      >
        {children}
      </div>,
      document.body.querySelector("[data-popper-wrapper]")?.parentElement ||
        document.body
    );
});
PopperSubContent.displayName = "PopperSubContent";
