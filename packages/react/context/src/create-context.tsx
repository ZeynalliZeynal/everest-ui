import { createContext, ReactNode, useContext } from "react";

/**
 * Creates a context with a provider and a hook to access the context
 * @param name The name of the context for debugging purposes
 * @returns A tuple containing the provider component and a hook to access the context
 */
export function createReactContext<Props>(name: string) {
  const Context = createContext<Props | undefined>(undefined);

  Context.displayName = name;

  function Provider({
    children,
    value,
  }: {
    children: ReactNode;
    value: Props;
  }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContextHook(): Props {
    const contextValue = useContext(Context);

    if (contextValue === undefined) {
      throw new Error(`use${name} must be used within a ${name}Provider`);
    }

    return contextValue;
  }

  return [Provider, useContextHook] as const;
}
