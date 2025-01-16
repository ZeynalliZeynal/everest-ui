import React from 'react';

declare const Button: ({ children, className, ...etc }: ButtonProps) => React.JSX.Element;

declare function Tabs({ children, className, ...etc }: TabsProviderProps): React.JSX.Element;
declare function Tab(props: TabProps): React.JSX.Element;

export { Button, Tab, Tabs };
