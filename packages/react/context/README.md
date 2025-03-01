# `react-context`

## A very useful function to create a React context inspired by [Radix UI](https://www.radix-ui.com/)

## Why is it so useful?

I'm always seeking a way to reduce redundancy. When I use React's context API, there are always certain steps that I
follow.

- Create a context
- Pass its props
- Create a reusable hook for type safety
- Use the context's provider

My context hooks are always the same. I get the context value from the `useContext` hook, check whether it is undefined
or not. If it is undefined, throw an error, otherwise return the context. This method helps so much.

So, I created a function that returns both provider and the hook. Therefore, I get the "barebones" from one place.

## Anatomy

- `createContext`
  - Returns a tuple: [Provider, hook]
  - Accepts a string value, an object for default values, and an object for options to change the error message.

## How to use?

```tsx
import { createContext } from "@everest-ui/react-context";

const CONTEXT_NAME = 'CustomContext';
const [CustomContextProvider, useCustomContext] = createContext<CustomContextProps>(CONTEXT_NAME);

// use provider
<CustomContextProvider
    value={...values}
>
    {children}
</CustomContextProvider>

// use hook
const context = useCustomContext();
```
