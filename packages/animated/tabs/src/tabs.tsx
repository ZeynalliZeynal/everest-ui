"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React, { ComponentProps, useId } from "react";

interface TabProps<T extends React.ElementType = "div">
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  isPillActive?: boolean;
  isIndicatorActive?: boolean;
  as?: T;
}

export type TabPropsWithAs<T extends React.ElementType> = TabProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TabProps<T>>;

interface TabsContextProps {
  activeIndicatorId: string;
  activePillId: string;
}

export interface TabsProviderProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

const TabsContext = React.createContext<TabsContextProps | null>(null);

export function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context)
    throw new Error(
      "useTabsContext cannot be used outside of the TabsProvider"
    );
  return context;
}

export function Tabs({ children, ...props }: TabsProviderProps) {
  const id = useId();
  const activeIndicatorId = `indicated-tab${id}`;
  const activePillId = `active-tab${id}`;

  return (
    <TabsContext.Provider value={{ activeIndicatorId, activePillId }}>
      <div
        role='tablist'
        data-orientation={props["aria-orientation"]}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}
export function Tab<T extends React.ElementType = "div">({
  children,
  isPillActive,
  isIndicatorActive,
  as,
  pillProps,
  indicatorProps,
  ...props
}: TabPropsWithAs<T>) {
  const Component = as || "div";
  const { activePillId, activeIndicatorId } = useTabsContext();

  const active = isPillActive ? "pill" : isIndicatorActive ? "indicator" : null;

  return (
    <Component role='tab' data-active={active} {...props}>
      <AnimatePresence presenceAffectsLayout={true}>
        {isPillActive && (
          <motion.div
            {...(pillProps as HTMLMotionProps<"div">)}
            layoutId={activePillId}
            data-active-pill=''
          />
        )}
      </AnimatePresence>
      {children}
      <AnimatePresence>
        {isIndicatorActive && (
          <motion.div
            {...(indicatorProps as HTMLMotionProps<"div">)}
            layoutId={activeIndicatorId}
            data-active-indicator=''
          />
        )}
      </AnimatePresence>
    </Component>
  );
}
