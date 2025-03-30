# `animated-popper`

This component is built with `framer-motion` for the animations. It comes with no styling and no animations which gives
you the control over animations and styling.

## What is it?
This is a package that gives you all you need to build something like this: [app-store](https://examples.motion.dev/react/app-store). It made it very easy and controllable for you to be able to use it as much as you want.

## Components
- `AnimatedPopper` - This is the provider. This component should wrap the other components. It accepts two props to
  control the open state:
    - `open` - a boolean type
    - `onOpenChange` - accepts `(open)=>void` function to control the actions.
- `AnimatedPopperTrigger` - This is used to trigger the popper. It is a focusable `motion.div`. If you want to use your
  own element, use the `asChild` prop and make sure children can accept motion props. If you use html tags, add `motion`
  as a prefix, if you use custom components, create a variable and wrap them in `motion()` function.
- `AnimatedPopperContent` - This is the component you are going to put your popper content in. It is also a motion html
  element, so it accepts all motion props
- `AnimatedPopperClose` - This is a basic html button to close the popper
- `AnimatedPopperOverlay` - This component can be used optionally. If you want to add an overlay, add this component
  beneath `AnimatedPopperContent` component.

## How to use it?

```tsx
<AnimatedPopper
    open={open}
    onOpenChange={(open) => {
        setOpen(open);
        // action state change
    }}
>
    <AnimatedPopperTrigger
        initial={{
            opacity: 0,
        }}
        exit={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        className="rounded-md relative"
    >
      Expandable Card
    </AnimatedPopperTrigger>
    <AnimatedPopperContent
        initial={{
            opacity: 0,
        }}
        exit={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        className="rounded-xl fixed z-50 min-w-80 bg-background-200 p-3 border left-[calc(50%-(var(--content-width)/2))] top-[calc(50%-(var(--content-height)/2))]"
    >
        <AnimatedPopperOverlay className="fixed z-50 backdrop-blur-sm bg-black/50"/>
      Expandable card content
    </AnimatedPopperContent>
</AnimatedPopper>
```

## Note
This package may contain bugs. If you encounter one, please report, so I can improve myself and the package.