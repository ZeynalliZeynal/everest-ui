# `react-poppper` component

Implemented to build customizable components. It comes **with no styling** at all which allows you to style it with full freedom.

## Installing

```sh
pnpm add @everest-ui/react-popper
npm install @everest-ui/react-popper
yarn add @everest-ui/react-popper
```

## Usage

```tsx
// import
import {
  Popper,
  PopperContent,
  PopperItem,
  PopperTrigger,
} from "@everest-ui/react-popper";

// use
<Popper>
  <PopperTrigger>popper</PopperTrigger>
  <PopperContent>
    <PopperItem>Profile</PopperItem>
    <PopperItem>Logout</PopperItem>
  </PopperContent>
</Popper>;
```

## Additional components

- `PopperSeparator` - use this component to separate popper items based on their actions.
- `PopperLabel` - use this component to tell users what this popper is about (you can use it to indicate group titles as well).
- `PopperGroup` - use this component to group items for accessability.
