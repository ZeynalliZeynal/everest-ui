import React from "react";
import styles from "./button.module.css";
import { clsx } from "clsx";

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
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          iconOnly
            ? styles[`iconOnly${size.charAt(0).toUpperCase() + size.slice(1)}`]
            : "",
          hovering && styles[`${variant}[data-hover]`],
          disabled && styles.disabled,
          className,
        )}
        {...etc}
        onMouseEnter={() => !disabled && setHovering(true)}
        onMouseLeave={() => !disabled && setHovering(false)}
      >
        {prefix}
        {children && (
          <span className={clsx(iconOnly ? styles.iconOnly : styles.padding)}>
            {children}
          </span>
        )}
        {suffix}
      </button>
    );
  },
);
