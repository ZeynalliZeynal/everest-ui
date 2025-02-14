import React from "react";

interface AccordionContextProps {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextProps | null>(
  null,
);

type AccordionItemContextType = {
  id: string;
};

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

export interface AccordionProps extends React.ComponentProps<"div"> {
  type?: "single" | "multiple";
}

export function Accordion({
  children,
  type = "single",
  className,
  ...props
}: AccordionProps) {
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

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={className} role="list" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends React.ComponentProps<"div"> {
  value: string;
}

export function AccordionItem({
  children,
  className,
  value,
  ...props
}: AccordionItemProps) {
  const id = React.useId();
  const itemId = `${value}-${id}`;

  return (
    <AccordionItemContext.Provider value={{ id: itemId }}>
      <div
        data-accordion-item=""
        role="listitem"
        className={className}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { openItems, toggleItem } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <button
      data-accordion-trigger=""
      className={className}
      {...props}
      aria-expanded={openItems.has(id)}
      data-state={openItems.has(id) ? "open" : "closed"}
      onClick={() => toggleItem(id)}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { openItems } = useAccordion()!;
  const { id } = useAccordionItem();
  const isOpen = openItems.has(id);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const resizeObserver = new ResizeObserver(() => {
      if (isOpen) {
        setHeight(content.scrollHeight);
      } else {
        setHeight(0);
      }
    });

    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  return (
    <div
      aria-hidden={!isOpen}
      data-state={isOpen ? "open" : "closed"}
      aria-expanded={isOpen}
      data-accordion-content=""
      className={className}
      style={{ overflow: "hidden", height: `${height}px` }}
      {...props}
    >
      <div ref={contentRef} data-accordion-content-inner="">
        {children}
      </div>
    </div>
  );
}
