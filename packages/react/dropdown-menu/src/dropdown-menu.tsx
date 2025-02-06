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

import React from "react";

export function DropdownMenu(props: PopperProps) {
  return <Popper {...props} />;
}

export function DropdownMenuTrigger(props: PopperTriggerProps) {
  return <PopperTrigger {...props} />;
}

export function DropdownMenuContent({
  align = "center",
  ...rest
}: PopperContentProps) {
  return <PopperContent align={align} {...rest} />;
}

export function DropdownMenuItem(props: PopperItemProps) {
  return <PopperItem {...props} />;
}

export function DropdownMenuGroup(props: React.ComponentProps<"div">) {
  return <PopperGroup {...props} />;
}

export function DropdownMenuLabel(props: React.ComponentProps<"div">) {
  return <PopperLabel {...props} />;
}

export function DropdownMenuSeparator(props: React.ComponentProps<"div">) {
  return <PopperSeparator {...props} />;
}

export function DropdownMenuSub(props: PopperProps) {
  return <PopperSub {...props} />;
}

export function DropdownMenuSubContent(props: PopperSubContentProps) {
  return <PopperSubContent {...props} />;
}

export function DropdownMenuSubTrigger({ style, ...props }: PopperItemProps) {
  return (
    <PopperSubTrigger
      style={{
        display: "flex",
        alignItems: "center",
        ...style,
      }}
      {...props}
    />
  );
}
DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenuSub.Trigger = DropdownMenuSubTrigger;
DropdownMenuSub.Content = DropdownMenuSubContent;
