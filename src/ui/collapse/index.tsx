"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CollapseContextProvider,
  useCollapseContext,
} from "./collapse-context";
import {
  CollapseProps,
  CollapseTriggerProps,
  CollapseContentProps,
} from "./collapse.types";
import clsx from "clsx";

export function Collapse(props: CollapseProps) {
  const { children, className, ...etc } = props;
  return (
    <CollapseContextProvider>
      <div className={clsx("flex flex-col", className)} {...etc}>
        {children}
      </div>
    </CollapseContextProvider>
  );
}

export function CollapseTrigger(props: CollapseTriggerProps) {
  const { children, className, onClick, ...etc } = props;
  const { collapse, collapseId, collapsed, state } = useCollapseContext();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    collapse();
    onClick?.(event);
  }

  return (
    <button
      aria-controls={collapseId}
      aria-expanded={collapsed}
      data-state={state}
      type='button'
      onClick={handleClick}
      className={clsx("w-full flex items-center", className)}
      {...etc}
    >
      {typeof children === "function" ? children({ state }) : children}
    </button>
  );
}

export function CollapseContent(props: CollapseContentProps) {
  const { children, className, ...etc } = props;
  const { collapsed, collapseId } = useCollapseContext();

  return (
    <AnimatePresence>
      {collapsed && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div
            id={collapseId}
            data-state={collapsed ? "open" : "closed"}
            className={clsx(className)}
            {...etc}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
