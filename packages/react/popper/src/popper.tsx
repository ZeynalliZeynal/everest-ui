import React, { useState } from "react";
import { PopperContextProps } from "./popper.types";
import { useRestrict } from "@everest-ui/react-hooks";

export const POPPER_CONTENT_SELECTOR = '[data-popper-content]';
export const POPPER_SUB_CONTENT_SELECTOR = '[data-popper-sub-content]';
export const POPPER_ITEM_SELECTOR = '[data-popper-item]:not([data-disabled])';

const PopperContext = React.createContext<PopperContextProps | null>(null);

export function usePopper() {
  const context = React.useContext(PopperContext);
  if (!context)
    throw new Error("usePopper must be used within a Popper context");
  return context;
}

export function PopperProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | null>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState<
    number | undefined
  >(undefined);
  const [highlightedItem, setHighlightedItem] =
    React.useState<HTMLElement | null>(null);

  const activeTrigger = React.useRef<HTMLElement | null>(null);

  const uiId = React.useId();

  const id = `geist-${uiId}`;

  function highlight(element: HTMLElement | null) {
    if (element) {
      const rootElement =
        element.closest(POPPER_CONTENT_SELECTOR) ||
        (element.closest(POPPER_SUB_CONTENT_SELECTOR) as HTMLElement);
      const items = Array.from(
        rootElement.querySelectorAll(POPPER_ITEM_SELECTOR)
      );
      setHighlightedItem(element);
      element?.focus();
      setHighlightedIndex(items.indexOf(element));
    } else {
      setHighlightedItem(null);
      (
        (document.querySelector(POPPER_SUB_CONTENT_SELECTOR) ||
          document.querySelector(POPPER_CONTENT_SELECTOR)) as HTMLElement
      ).focus();
    }
  }

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTriggerPosition(rect);

    setIsOpen((prevState) => !prevState);

    activeTrigger.current = event.currentTarget;
    (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement)?.focus();
  }

  function closePopper() {
    activeTrigger.current?.focus();
    setIsOpen(false);
    setHighlightedItem(null);
    setHighlightedIndex(undefined);
  }

  useRestrict({ condition: isOpen });
  return (
    <PopperContext.Provider
      value={{
        isOpen,
        openPopper,
        closePopper,
        triggerPosition,
        id,
        highlightedItem,
        highlightedIndex,
        highlight,
        setHighlightedIndex,
        activeTrigger: activeTrigger.current,
        setTriggerPosition,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
}

export interface PopperItemProps extends Omit<React.ComponentProps<'div'>, 'prefix'> {
    disabled?: boolean;
    asChild?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    inset?: boolean;
}

export const PopperItem = React.forwardRef<HTMLDivElement, PopperItemProps>(
    (props, forwardRef) => {
        const ref = React.useRef<HTMLDivElement | null>(null);
        const {
            children,
            onClick,
            className,
            onMouseEnter,
            onMouseLeave,
            onKeyDown,
            asChild,
            disabled,
            suffix,
            prefix,
            inset,
            ...etc
        } = props;
        const { closePopper, highlightedItem, highlight } = usePopper();

        function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
            if (disabled) return;
            event.currentTarget.tabIndex = 0;
            highlight(event.currentTarget);
            onMouseEnter?.(event);
        }

        function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
            event.currentTarget.tabIndex = -1;
            highlight(null);
            onMouseLeave?.(event);
        }

        function handleKeyDown(event: React.KeyboardEvent) {
            if (event.key === 'Enter' || event.key === ' ') {
                ref.current?.click();
            }
        }

        function handleClick(event: React.MouseEvent<HTMLElement>) {
            const target = event.target as HTMLElement;
            if (target.closest(POPPER_ITEM_SELECTOR)?.hasAttribute('aria-controls'))
                return;
            closePopper();
        }

        const attrs = {
            ref: mergeRefs(ref, forwardRef),
            tabIndex: -1,
            'data-popper-item': '',
            role: 'menuitem',
            'data-disabled': disabled ? '' : null,
            'data-highlighted': highlightedItem === ref.current ? '' : null,
            className,
            onClick: !disabled ? chain(onClick, handleClick) : undefined,
            onMouseEnter: !disabled ? handleMouseEnter : undefined,
            onMouseLeave: !disabled ? handleMouseLeave : undefined,
            onKeyDown: !disabled ? chain(handleKeyDown, onKeyDown) : undefined,
            ...etc,
        } as HTMLAttributes<HTMLElement>;

        return asChild && React.isValidElement(children) ? (
            React.cloneElement(children, {
                ...attrs,
                className: cn(className, children.props.className),
            } as HTMLAttributes<HTMLElement>)
        ) : (
            <div
                {...attrs}
                className={cn(
                    'flex items-center justify-between px-2 rounded-md cursor-pointer h-10 align-middle transition focus:bg-gray-alpha-100 outline-none data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
                    attrs.className,
                )}
            >
        <span
            className={cn('flex items-center gap-2', inset && !prefix && 'pl-3')}
        >
          {prefix}
            {children}
        </span>
                {suffix}
            </div>
        );
    },
);

PopperItem.displayName = 'PopperItem';


export function PopperTrigger(props: PopperTriggerProps) {
    const {
        children,
        asChild,
        suffix,
        prefix,
        disabled,
        onMouseDown,
        className,
        onClick,
        ...etc
    } = props;
    const { openPopper, id, setTriggerPosition, isOpen } = usePopper();

    const ref = React.useRef<HTMLButtonElement | null>(null);

    function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
        openPopper(event);
    }

    const handleResize = useCallback(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setTriggerPosition(rect);
    }, [setTriggerPosition]);

    useResize(isOpen, handleResize);

    const attrs = {
        ref,
        role: 'button',
        'aria-controls': id,
        'aria-expanded': isOpen,
        'data-disabled': disabled,
        'data-state': isOpen ? 'open' : 'closed',
        onMouseDown: chain(handleMouseDown, onMouseDown),
        onClick: chain(handleMouseDown, onClick),
        className,
        ...etc,
    };

    return asChild && React.isValidElement(children) ? (
        React.cloneElement(children, {
            ...attrs,
            className: cn(className, children.props.className),
        } as HTMLAttributes<HTMLElement>)
    ) : (
        <Button size="md" suffix={suffix} prefix={prefix} {...attrs}>
            {children}
        </Button>
    );
}
