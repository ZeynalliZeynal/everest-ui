import React from "react";
import { debounceWithAnimation, mergeRefs } from "@everest-ui/react-utils";
import clsx from "clsx";

interface AccordionContextProps {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextProps | null>(
  null,
);

interface AccordionItemContextType {
  id: string;
}

const AccordionItemContext =
  React.createContext<AccordionItemContextType | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error("useAccordion hook is outside of the Accordion component");
  return context;
}

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context)
    throw new Error(
      "useAccordionItem hook is outside of the AccordionItem component",
    );
  return context;
}

interface AccordionComponent {
  Item: typeof AccordionItem;
  Content: typeof AccordionContent;
}

// * ------------------------------- Accordion
export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  type?: "single" | "multiple";
  asChild?: React.ReactNode;
}

interface AccordionComponent
  extends React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLElement>
  > {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

export const Accordion = React.forwardRef<HTMLElement, AccordionProps>(
  ({ children, type = "single", className, asChild, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());
    const allowMultiple = type === "multiple";

    const toggleItem = (id: string) => {
      setOpenItems((prevState) => {
        const prev = new Set(prevState);
        if (prev.has(id)) {
          prev.delete(id);
        } else {
          if (!allowMultiple) {
            prev.clear();
          }
          prev.add(id);
        }
        return prev;
      });
    };

    const attrs = {
      ref,
      role: "list",
      className,
      ...props,
    } as React.HTMLAttributes<HTMLElement>;

    return (
      <AccordionContext.Provider
        value={{ openItems, toggleItem, allowMultiple }}
      >
        {React.isValidElement(children) && asChild ? (
          React.cloneElement(children, {
            ...attrs,
            className: clsx(
              className,
              (children.props as React.HTMLAttributes<HTMLElement>).className,
            ),
          } as React.HTMLAttributes<HTMLElement>)
        ) : (
          <div {...attrs}>{children}</div>
        )}
      </AccordionContext.Provider>
    );
  },
) as AccordionComponent;
Accordion.displayName = "Accordion";

// * ------------------------------- AccordionItem
export interface AccordionItemProps extends React.ComponentProps<"div"> {
  value: string;
  asChild?: React.ReactNode;
}

export const AccordionItem = React.forwardRef<HTMLElement, AccordionItemProps>(
  ({ children, className, value, asChild, ...props }, ref) => {
    const id = React.useId();
    const itemId = `${value}-${id}`;

    const attrs = {
      ref,
      className,
      role: "listitem",
      ...props,
    } as React.HTMLAttributes<HTMLElement>;

    return (
      <AccordionItemContext.Provider value={{ id: itemId }}>
        {React.isValidElement(children) && asChild ? (
          React.cloneElement(children, {
            ...attrs,
            className: clsx(
              className,
              (children.props as React.HTMLAttributes<HTMLElement>).className,
            ),
          } as React.HTMLAttributes<HTMLElement>)
        ) : (
          <div {...attrs}>{children}</div>
        )}
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

// * ------------------------------- AccordionTrigger
export interface AccordionTriggerProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

export const AccordionTrigger = React.forwardRef<
  HTMLElement,
  AccordionTriggerProps
>(({ children, className, asChild, ...props }, ref) => {
  const { openItems, toggleItem } = useAccordion();
  const { id } = useAccordionItem();

  const attrs = {
    ref,
    className,
    ...props,
    "aria-expanded": openItems.has(id),
    "data-state": openItems.has(id) ? "open" : "closed",
    onClick: () => toggleItem(id),
  } as React.HTMLAttributes<HTMLElement>;

  return React.isValidElement(children) && asChild ? (
    React.cloneElement(children, {
      ...attrs,
      className: clsx(
        className,
        (children.props as React.HTMLAttributes<HTMLElement>).className,
      ),
    } as React.HTMLAttributes<HTMLElement>)
  ) : (
    <button {...attrs}>{children}</button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// * ------------------------------- AccordionContent
export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLElement> {
  asChild?: React.ReactNode;
}

export const AccordionContent = React.forwardRef<
  HTMLElement,
  AccordionContentProps
>(({ children, className, style, asChild, ...props }, ref) => {
  const { openItems } = useAccordion();
  const { id } = useAccordionItem();
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  const isOpen = openItems.has(id);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    setHeight(content.scrollHeight);
    setWidth(content.scrollWidth);

    if (isOpen) {
      setIsVisible(true);
    } else {
      const { timer } = debounceWithAnimation(content, () => {
        setIsVisible(false);
      });
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const attrs = {
    ref: mergeRefs(contentRef, ref),
    "data-state": isOpen ? "open" : "closed",
    "aria-expanded": isOpen,
    className,
    style: {
      "--accordion-content-height": `${height}px`,
      "--accordion-content-width": `${width}px`,
      ...style,
    } as React.CSSProperties,
    ...props,
    hidden: !isVisible && !isOpen,
  } as React.HTMLAttributes<HTMLElement>;

  return React.isValidElement(children) && asChild ? (
    React.cloneElement(children, {
      ...attrs,
      className: clsx(
        className,
        (children.props as React.HTMLAttributes<HTMLElement>).className,
      ),
    } as React.HTMLAttributes<HTMLElement>)
  ) : (
    <div {...attrs}>{!isVisible && !isOpen ? null : children}</div>
  );
});
AccordionContent.displayName = "AccordionContent";

Accordion.Item = AccordionItem;
Accordion.Content = AccordionContent;
Accordion.Trigger = AccordionTrigger;
