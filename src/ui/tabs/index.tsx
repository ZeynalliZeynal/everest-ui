import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useId } from "react";

const TabsContext = React.createContext<TabsContextProps | null>(null);
function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context)
    throw new Error(
      "useTabsContext cannot be used outside of the TabsProvider"
    );
  return context;
}

export function Tabs({ children, className, ...etc }: TabsProviderProps) {
  const id = useId();
  const activeIndicatorId = `indicated-tab${id}`;
  const activePillId = `active-tab${id}`;

  return (
    <TabsContext.Provider value={{ activeIndicatorId, activePillId }}>
      <div
        role='tablist'
        data-orientation={etc["aria-orientation"]}
        className={clsx(
          "flex",
          etc["aria-orientation"] === "vertical" ? "flex-col" : "items-center",
          className
        )}
        {...etc}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function Tab(props: TabProps) {
  const { activePillId, activeIndicatorId } = useTabsContext();
  const { children, isPillActive, className, isIndicatorActive, ...etc } =
    props;

  const active = isPillActive ? "pill" : isIndicatorActive ? "indicator" : null;

  return (
    <button
      role='tab'
      data-active={active}
      className={clsx(
        "relative flex items-center justify-center transition",
        className
      )}
      {...etc}
    >
      <AnimatePresence>
        {isPillActive && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            layoutId={activePillId}
            data-active-pill=''
            className='absolute inset-0'
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.5,
            }}
          />
        )}
      </AnimatePresence>
      <span className='relative z-[1]'>{children}</span>
      <AnimatePresence>
        {isIndicatorActive && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            layoutId={activeIndicatorId}
            data-active-indicator=''
            className='absolute'
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.5,
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}
