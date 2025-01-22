import React, { ComponentProps } from "react";
type CollapseState = "open" | "closed";
export interface CollapseContextProps {
    collapsed: boolean;
    collapseId: string;
    state: CollapseState;
    collapse(): void;
}
export interface CollapseProps extends ComponentProps<"div"> {
    children: React.ReactNode;
    className?: string;
}
export declare function Collapse(props: CollapseProps): import("react/jsx-runtime").JSX.Element;
export interface CollapseTriggerProps extends Omit<ComponentProps<"button">, "children"> {
    children: (({ state }: {
        state: CollapseState;
    }) => React.ReactNode) | React.ReactNode;
    className?: string;
}
export declare function CollapseTrigger(props: CollapseTriggerProps): import("react/jsx-runtime").JSX.Element;
export interface CollapseContentProps extends ComponentProps<"div"> {
    children: React.ReactNode;
    className?: string;
}
export declare function CollapseContent(props: CollapseContentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=collapse.d.ts.map