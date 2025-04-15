"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
  useContext,
  useId,
} from "react";

interface TabsContextProps {
  activeIndicatorId: string;
  activePillId: string;
}

const TabsContext = React.createContext<TabsContextProps | null>(null);

function useTabsContext(): TabsContextProps {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
}

interface TabsProviderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Tabs({ children, ...props }: TabsProviderProps) {
  const id = useId();
  const activeIndicatorId = `indicator-tab-${id}`;
  const activePillId = `pill-tab-${id}`;

  return (
    <TabsContext.Provider value={{ activeIndicatorId, activePillId }}>
      <div
        role="tablist"
        data-orientation={props["aria-orientation"]}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

type AsProp<T extends ElementType> = {
  as?: T;
};

export type TabProps<T extends ElementType> = {
  children?: ReactNode;
  isPillActive?: boolean;
  isIndicatorActive?: boolean;
  pillProps?: HTMLMotionProps<"div">;
  indicatorProps?: HTMLMotionProps<"div">;
} & AsProp<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AsProp<T> | "children">;

type TabComponent = <T extends ElementType = "div">(
  props: TabProps<T> & { ref?: Ref<HTMLElement> },
) => ReactElement | null;

function TabInner<T extends ElementType = "div">(
  {
    children,
    isPillActive,
    isIndicatorActive,
    pillProps,
    indicatorProps,
    as,
    ...restProps
  }: TabProps<T>,
  ref: Ref<HTMLElement>,
) {
  const Component = (as || "div") as ElementType;
  const { activePillId, activeIndicatorId } = useTabsContext();

  return (
    <Component ref={ref} role="tab" {...restProps}>
      <AnimatePresence>
        {isPillActive && (
          <motion.div layoutId={activePillId} data-active-pill {...pillProps} />
        )}
      </AnimatePresence>

      {children}

      <AnimatePresence>
        {isIndicatorActive && (
          <motion.div
            layoutId={activeIndicatorId}
            data-active-indicator
            {...indicatorProps}
          />
        )}
      </AnimatePresence>
    </Component>
  );
}

export const Tab = forwardRef(TabInner) as TabComponent;
