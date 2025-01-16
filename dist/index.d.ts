import React$1, { ComponentProps } from 'react';

interface TabProps extends React.ComponentProps<"button"> {
    children?: React.ReactNode;
    isPillActive?: boolean;
    isIndicatorActive?: boolean;
}
interface TabsContextProps {
    activeIndicatorId: string;
    activePillId: string;
}
interface TabsProviderProps extends React.ComponentProps<"div"> {
    children: React.ReactNode;
}
//# sourceMappingURL=tabs.types.d.ts.map

declare function Tabs({ children, className, ...etc }: TabsProviderProps): React$1.JSX.Element;
declare function Tab(props: TabProps): React$1.JSX.Element;

type CollapseState = "open" | "closed";
interface CollapseContextProps {
    collapsed: boolean;
    collapseId: string;
    state: CollapseState;
    collapse(): void;
}
interface CollapseProps extends ComponentProps<"div"> {
    children: React$1.ReactNode;
    className?: string;
}
interface CollapseTriggerProps extends Omit<ComponentProps<"button">, "children"> {
    children: (({ state }: {
        state: CollapseState;
    }) => React$1.ReactNode) | React$1.ReactNode;
    className?: string;
}
interface CollapseContentProps extends ComponentProps<"div"> {
    children: React$1.ReactNode;
    className?: string;
}

declare function Collapse(props: CollapseProps): React$1.JSX.Element;
declare function CollapseTrigger(props: CollapseTriggerProps): React$1.JSX.Element;
declare function CollapseContent(props: CollapseContentProps): React$1.JSX.Element;

export { Collapse, CollapseContent, type CollapseContentProps, type CollapseContextProps, type CollapseProps, CollapseTrigger, type CollapseTriggerProps, Tab, type TabProps, Tabs, type TabsContextProps, type TabsProviderProps };
