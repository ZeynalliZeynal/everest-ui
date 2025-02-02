import { useLayoutEffect, useRef } from "react";

export interface UseOutsideClickProps {
  selectors?: string[];
  capturePhase?: boolean;
  action(): void;
}

export interface UseRestrictProps {
  tab?: "loop" | "disable";
  disableScroll?: boolean;
  condition?: boolean;
}

export type UseResizeProps = (condition: boolean, callback: () => void) => void;

export function useRestrict(options: UseRestrictProps) {
  const { condition, disableScroll = true, tab } = options;

  useLayoutEffect(() => {
    if (condition) {
      if (disableScroll) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.pointerEvents = "none";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`; // Compensate for scrollbar width
      }
      if (tab === "disable") {
        function handleKeyDown(event: KeyboardEvent) {
          if (event.key === "Tab") {
            event.preventDefault();
          }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }
    } else {
      if (disableScroll) {
        document.body.style.pointerEvents = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    }

    return () => {
      // Clean up on unmount or when condition changes
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [condition]);
}

export function useOutsideClick(options: UseOutsideClickProps) {
  const { selectors, capturePhase, action } = options;
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !selectors?.some((selector) =>
          (event.target as Element).closest(selector)
        )
      ) {
        action();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, capturePhase);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
        capturePhase
      );
    };
  }, [action, capturePhase, ref, selectors]);

  return ref;
}

export const useResize: UseResizeProps = (condition, callback) => {
  useLayoutEffect(() => {
    if (!condition) return;
    callback();

    window.addEventListener("resize", callback);
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("resize", callback);
      window.removeEventListener("scroll", callback);
    };
  }, [callback, condition]);
};
