import {
  Popper,
  PopperContent,
  PopperContentProps,
  PopperGroup,
  PopperItem,
  PopperItemProps,
  PopperLabel,
  PopperProps,
  PopperSeparator,
  PopperTrigger,
  PopperTriggerProps,
} from "@everest-ui/react-popper";

import styles from "./dropwon-menu.module.css";
import clsx from "clsx";
import React from "react";

export function DropdownMenu(props: PopperProps) {
  return <Popper {...props} />;
}

export function DropdownMenuTrigger({
  className,
  ...rest
}: PopperTriggerProps) {
  return (
    <PopperTrigger className={clsx(styles.trigger, className)} {...rest} />
  );
}

export function DropdownMenuContent({
  className,
  align = "center",
  ...rest
}: PopperContentProps) {
  return (
    <PopperContent
      align={align}
      className={clsx(styles.content, className)}
      {...rest}
    />
  );
}

export function DropdownMenuItem({ className, ...rest }: PopperItemProps) {
  return <PopperItem className={clsx(styles.item, className)} {...rest} />;
}

export function DropdownMenuGroup({
  className,
  ...rest
}: React.ComponentProps<"div">) {
  return <PopperGroup className={clsx(className)} {...rest} />;
}

export function DropdownMenuLabel({
  className,
  ...rest
}: React.ComponentProps<"div">) {
  return <PopperLabel className={clsx(styles.label, className)} {...rest} />;
}

export function DropdownMenuSeparator({
  className,
  ...rest
}: React.ComponentProps<"div">) {
  return (
    <PopperSeparator className={clsx(styles.separator, className)} {...rest} />
  );
}
