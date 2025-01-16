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
