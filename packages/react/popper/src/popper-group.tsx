import React from "react";
import { cn } from "@everest-ui/utils";

export const PopperGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      role='group'
      aria-orientation='horizontal'
      className={cn(props.className)}
      {...props}
    />
  );
});
PopperGroup.displayName = "PopperGroup";
