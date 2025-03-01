import React from "react";

/**
 * Creates a context with a provider and a hook to access the context
 * @param componentName The name of the provider component
 * @optional
 * @param defaultContextValue Default values of the context (optional)
 * @optional
 * @param options An object of options. Error message can be changed here by setting the error property
 * @returns A tuple containing the provider component and a hook to access the context
 */
export function createContext<ContextValueProps>(
  componentName: string,
  defaultContextValue?: ContextValueProps,
  options?: {
    error: string;
  },
) {
  const Context = React.createContext<ContextValueProps | undefined>(undefined);

  Context.displayName = componentName + "Provider";

  function Provider(props: ContextValueProps & { children: React.ReactNode }) {
    const { children, ...contextValue } = props;
    const value = React.useMemo(
      () => contextValue,
      Object.values(contextValue),
    ) as ContextValueProps;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContextHook(): ContextValueProps {
    const contextValue = React.useContext(Context);
    if (contextValue) return contextValue;
    if (defaultContextValue !== undefined) return defaultContextValue;

    throw new Error(
      options?.error ||
        `use${componentName} must be used within ${componentName}Provider`,
    );
  }

  return [Provider, useContextHook] as const;
}
