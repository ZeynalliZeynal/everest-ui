import React, { ComponentProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type CollapseState = "open" | "closed";

export interface CollapseContextProps {
  collapsed: boolean;
  collapseId: string;
  state: CollapseState;
  collapse(): void;
}

const CollapseContext = React.createContext<CollapseContextProps | null>(null);

function CollapseContextProvider(props: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const id = React.useId();
  const state = collapsed ? "open" : "closed";

  function collapse() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <CollapseContext.Provider
      value={{ collapsed, state, collapse, collapseId: `collapse${id}` }}
    >
      {props.children}
    </CollapseContext.Provider>
  );
}

function useCollapseContext() {
  const context = React.useContext(CollapseContext);
  if (!context)
    throw new Error(
      "useCollapseContext must be used within the CollapseProvider component."
    );
  return context;
}

export interface CollapseProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

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

export interface CollapseTriggerProps
  extends Omit<ComponentProps<"button">, "children"> {
  children:
    | (({ state }: { state: CollapseState }) => React.ReactNode)
    | React.ReactNode;
  className?: string;
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

export interface CollapseContentProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
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
