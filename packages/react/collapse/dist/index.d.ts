import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ComponentProps } from 'react';

type CollapseState = "open" | "closed";
interface CollapseProps extends ComponentProps<"div"> {
    children: React.ReactNode;
    className?: string;
}
declare function Collapse(props: CollapseProps): react_jsx_runtime.JSX.Element;
interface CollapseTriggerProps extends Omit<ComponentProps<"button">, "children"> {
    children: (({ state }: {
        state: CollapseState;
    }) => React.ReactNode) | React.ReactNode;
    className?: string;
}
declare function CollapseTrigger(props: CollapseTriggerProps): react_jsx_runtime.JSX.Element;
interface CollapseContentProps extends ComponentProps<"div"> {
    children: React.ReactNode;
    className?: string;
}
declare function CollapseContent(props: CollapseContentProps): react_jsx_runtime.JSX.Element;

export { Collapse, CollapseContent, type CollapseContentProps, type CollapseProps, CollapseTrigger, type CollapseTriggerProps };
