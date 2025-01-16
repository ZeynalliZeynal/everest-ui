import React$1 from 'react';

declare const Button: ({ children, className, ...etc }: ButtonProps) => React$1.JSX.Element;

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

export { Button, Tab, type TabProps, Tabs, type TabsContextProps, type TabsProviderProps };
