import React from "react";
import { cn } from "@everest-ui/utils";

export const PopperLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return <div ref={ref} {...props} />;
});
PopperLabel.displayName = "PopperLabel";
