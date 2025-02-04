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
  PopperSub,
  PopperSubContent,
  PopperSubContentProps,
  PopperSubTrigger,
  PopperTrigger,
  PopperTriggerProps,
} from "@everest-ui/react-popper";

import styles from "./dropdown-menu.module.css";
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

export function DropdownMenuSub(props: PopperProps) {
  return <PopperSub {...props} />;
}

export function DropdownMenuSubContent({
  className,
  ...rest
}: PopperSubContentProps) {
  return (
    <PopperSubContent
      className={clsx(styles.subContent, className)}
      {...rest}
    />
  );
}

export function DropdownMenuSubTrigger({
  className,
  ...rest
}: PopperItemProps) {
  return (
    <PopperSubTrigger className={clsx(styles.item, className)} {...rest} />
  );
}
