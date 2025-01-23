import React from "react";
import { cn } from "@everest-ui/utils";

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "prefix"> {
  children?: React.ReactNode;
  href?: string;
  size?: "lg" | "md" | "sm" | "xs";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  iconOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "sm",
      variant = "primary",
      disabled,
      type = "button",
      className,
      suffix,
      prefix,
      iconOnly,
      ...etc
    },
    ref,
  ) => {
    const [hovering, setHovering] = React.useState(false);

    return (
      <button
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        data-hover={hovering ? "" : null}
        // data-variant={variant}
        className={cn(
          `flex items-center justify-center transition duration-200 font-medium border select-none rounded-lg`,
          {
            "text-foreground border bg-background-200": variant === "primary",
            "text-background-200 border-gray-200 bg-gray-1000":
              variant === "secondary",
            "text-foreground border-transparent data-[hover]:bg-gray-alpha-200":
              variant === "tertiary",
            "px-2.5 h-10 text-sm": size === "md" && !iconOnly,
            "px-3.5 h-12 text-base": size === "lg" && !iconOnly,
            "text-sm h-8 px-1.5": size === "sm" && !iconOnly,
            "size-12 text-lg": size === "lg" && iconOnly,
            "size-10 text-sm": size === "md" && iconOnly,
            "size-8 text-sm": size === "sm" && iconOnly,
            "size-6 text-xs": size === "xs" && iconOnly,
            "data-[hover]:text-foreground data-[hover]:bg-gray-alpha-200 data-[hover]:border-gray-alpha-200":
              variant === "primary" && hovering,
            "disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400":
              variant === "primary" || (variant === "secondary" && disabled),
            "data-[hover]:text-background-200 data-[hover]:bg-button-invert-hover":
              variant === "secondary" && hovering,
            // disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400
            "text-gray-900 data-[hover]:text-foreground border-none":
              variant === "ghost",
          },
          className,
        )}
        {...etc}
        onMouseEnter={() => !disabled && setHovering(true)}
        onMouseLeave={() => !disabled && setHovering(false)}
      >
        {prefix}
        {children && (
          <span
            className={cn(
              iconOnly ? "inline-flex items-center justify-center" : "px-1.5",
            )}
          >
            {children}
          </span>
        )}
        {suffix}
      </button>
    );
  },
);
