# `geist-dropdown-menu` component

A dropdown component built on top of `@everest-ui/react-popper`, and `@everest-ui/geist-colors` for styling.

## ⚠ Note: You might want to install `@everest-ui/geist-colors` for the styling if you haven't yet

## Installing

```sh
pnpm add @everest-ui/geist-dropdown-menu
npm install @everest-ui/geist-dropdown-menu
yarn add @everest-ui/geist-dropdown-menu
```

## Usage

```tsx
// import
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@everest-ui/geist-dropdown-menu";

// use
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Label</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Favorite</DropdownMenuItem>
      <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>;
```

## Official documentation

For full usage visit [official documentation](https://todoist-liard-alpha.vercel.app/geist/dropdown-menu)
