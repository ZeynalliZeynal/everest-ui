import React, { useState } from "react";
import { PopperProviderProps } from "./popper.types";
import {
  POPPER_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
} from "@everest-ui/react-selectors";
import { debounceWithAnimation } from "@everest-ui/react-utils";
import { PopperSubTrigger } from "./popper-sub-trigger";
import { PopperSubContent } from "./popper-sub-content";

export const PopperSubContext = React.createContext<PopperProviderProps | null>(
  null,
);

export function usePopperSub() {
  const context = React.useContext(PopperSubContext);
  if (!context)
    throw new Error("usePopperSub must be used within a PopperSub context");
  return context;
}

export function PopperSub({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | null>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState<
    number | undefined
  >(undefined);

  const activeTrigger = React.useRef<HTMLElement | null>(null);

  const uiId = React.useId();

  const id = `geist-${uiId}`;

  const openPopper = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = (
        event.currentTarget || event.target
      ).getBoundingClientRect();

      setTriggerPosition(rect);
      setIsMounted(false);
      setIsOpen(true);

      activeTrigger.current = event.currentTarget || event.target;
    },
    [],
  );
  function closePopper() {
    setIsMounted(true);

    const popperContent = document.querySelector(
      POPPER_SUB_CONTENT_SELECTOR,
    ) as HTMLElement;

    if (!popperContent) {
      setIsMounted(false);
      setIsOpen(false);
      return;
    }

    debounceWithAnimation(popperContent, () => {
      setIsMounted(false);
      setIsOpen(false);
    });
  }

  React.useEffect(() => {
    if (isOpen) {
      (
        document
          .querySelector(
            `${POPPER_SUB_CONTENT_SELECTOR}[aria-labelledby='${id}']`,
          )
          ?.querySelector(POPPER_ITEM_SELECTOR) as HTMLElement
      )?.focus();
      setHighlightedIndex(0);
    }
  }, [id, isOpen]);

  return (
    <PopperSubContext.Provider
      value={{
        isOpen,
        isMounted,
        openPopper,
        closePopper,
        triggerPosition,
        id,
        highlightedIndex,
        setHighlightedIndex,
        activeTrigger: activeTrigger.current,
        setTriggerPosition,
      }}
    >
      {children}
    </PopperSubContext.Provider>
  );
}

PopperSub.Trigger = PopperSubTrigger;
PopperSub.Content = PopperSubContent;
