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
      left: newLeft,
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
  }, [activeTrigger, closePopper, highlight, ref]);

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

  return createPortal(
    <AnimatePresence>
      {isParentOpen && isOpen && triggerPosition && (
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 16,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
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
      )}
    </AnimatePresence>,
    document.body.querySelector("[data-popper-wrapper]")?.parentElement ||
      document.body
  );
});
PopperSubContent.displayName = "PopperSubContent";
